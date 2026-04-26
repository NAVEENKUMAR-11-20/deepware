import { useEffect, useRef } from 'react';

type DotPoint = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  baseX: number;
  baseY: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrame = useRef<number | null>(null);
  const dotsRef = useRef<DotPoint[]>([]);
  const pointerRef = useRef({ x: 0, y: 0, vx: 0, vy: 0, strength: 0, lastX: 0, lastY: 0 });
  // Separate raw target from the smoothed (rendered) position
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const parallaxRef = useRef({ x: 0, y: 0 });
  const parallaxTargetRef = useRef({ x: 0, y: 0 });
  // Smoothed CSS translate offset (applied via translate3d for GPU compositing)
  const translateRef = useRef({ x: 0, y: 0 });
  const sizeRef = useRef({ width: 0, height: 0, centerX: 0, centerY: 0, dpr: 1, maxRadius: 0 });
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window);
    
    // Skip heavy animations on mobile
    if (isMobile) {
      return;
    }

    const resetCanvas = () => {
      const parent = canvas.parentElement ?? canvas;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      const dpr = window.devicePixelRatio || 1;

      sizeRef.current = {
        width,
        height,
        centerX: width / 2,
        centerY: height / 2,
        dpr,
        maxRadius: Math.min(width, height) * 0.42,
      };

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      generateDots();
    };

    const generateDots = () => {
      const { centerX, centerY, maxRadius } = sizeRef.current;
      const rings = 16; // Desktop: more rings
      const points: DotPoint[] = [];

      for (let ring = 0; ring < rings; ring += 1) {
        const progress = ring / (rings - 1);
        const radius = lerp(2.6, 8.2, 1 - progress);
        const alpha = lerp(0.18, 0.92, 1 - progress);
        const ringRadius = lerp(maxRadius * 0.18, maxRadius, progress);
        const count = Math.round(18 + progress * 24 + ring * 0.8);

        for (let i = 0; i < count; i += 1) {
          const angle = (Math.PI * 2 * i) / count + (ring % 2 === 0 ? 0 : 0.12);
          const x = centerX + Math.cos(angle) * ringRadius;
          const y = centerY + Math.sin(angle) * ringRadius;
          points.push({
            x,
            y,
            baseX: x,
            baseY: y,
            radius,
            alpha,
          });
        }
      }

      dotsRef.current = points;
    };

    // Lightweight mousemove handler — only stores the raw target coordinates.
    // All heavy math (lerp, velocity, strength) is deferred to the rAF loop.
    const handlePointerMove = (event: MouseEvent | TouchEvent) => {
      const point = 'touches' in event ? event.touches[0] : event;
      const { centerX, centerY, width, height } = sizeRef.current;

      // Store raw target — no lerp, no heavy math here
      pointerTargetRef.current.x = clamp(point.clientX - centerX, -width * 0.6, width * 0.6);
      pointerTargetRef.current.y = clamp(point.clientY - centerY, -height * 0.6, height * 0.6);

      // Store raw parallax target (normalized -1 to 1 from center of viewport)
      parallaxTargetRef.current.x = (point.clientX / window.innerWidth - 0.5) * 2;
      parallaxTargetRef.current.y = (point.clientY / window.innerHeight - 0.5) * 2;
    };

    const drawBackground = () => {
      // Only clear, backgrounds are handled by CSS
      ctx.clearRect(0, 0, sizeRef.current.width, sizeRef.current.height);
    };

    const draw = () => {
      const { centerX, centerY } = sizeRef.current;

      // ── Smooth interpolation of pointer position (done once per frame) ──
      const prevX = pointerRef.current.x;
      const prevY = pointerRef.current.y;
      const targetX = pointerTargetRef.current.x;
      const targetY = pointerTargetRef.current.y;

      // Fast lerp factor (0.35) for responsive yet smooth tracking
      const smoothX = lerp(prevX, targetX, 0.35);
      const smoothY = lerp(prevY, targetY, 0.35);

      const dx = smoothX - prevX;
      const dy = smoothY - prevY;
      const velocity = Math.sqrt(dx * dx + dy * dy); // faster than Math.hypot
      const strength = clamp(velocity / 48, 0, 1);

      pointerRef.current.x = smoothX;
      pointerRef.current.y = smoothY;
      pointerRef.current.vx = dx;
      pointerRef.current.vy = dy;
      pointerRef.current.strength = lerp(pointerRef.current.strength, strength, 0.45);
      pointerRef.current.lastX = smoothX;
      pointerRef.current.lastY = smoothY;

      // ── Smooth parallax interpolation (fast tracking) ──
      parallaxRef.current.x = lerp(parallaxRef.current.x, parallaxTargetRef.current.x, 0.28);
      parallaxRef.current.y = lerp(parallaxRef.current.y, parallaxTargetRef.current.y, 0.28);

      // ── GPU-accelerated full-range canvas translation (translate3d) ──
      // Map cursor position to full container range so dots chase cursor to all edges/corners
      const { width: cw, height: ch } = sizeRef.current;
      const rangeX = cw * 0.4;  // horizontal travel = 40% of container width
      const rangeY = ch * 0.4;  // vertical travel = 40% of container height
      const amplify = 1.3;      // amplify for more noticeable motion

      const targetTranslateX = parallaxRef.current.x * rangeX * amplify;
      const targetTranslateY = parallaxRef.current.y * rangeY * amplify;

      // Elastic-feel lerp: fast enough to feel responsive, smooth enough to avoid jitter
      translateRef.current.x = lerp(translateRef.current.x, targetTranslateX, 0.12);
      translateRef.current.y = lerp(translateRef.current.y, targetTranslateY, 0.12);

      // Apply via CSS translate3d — composited on GPU, zero canvas redraw cost
      if (canvas) {
        canvas.style.transform = `translate3d(${translateRef.current.x}px, ${translateRef.current.y}px, 0)`;
      }

      drawBackground();

      const cursorX = centerX + smoothX;
      const cursorY = centerY + smoothY;

      // Draw dots with interaction
      ctx.save();
      ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
      ctx.shadowBlur = 8;

      const pulse = 1 + Math.sin(performance.now() * 0.002) * 0.08;
      const pStrength = pointerRef.current.strength;
      const dots = dotsRef.current;
      const dotCount = dots.length;

      // Pre-compute inverse for influence radius
      const influenceRadiusInv = 1 / 200;

      for (let i = 0; i < dotCount; i++) {
        const dot = dots[i];
        const ddx = dot.baseX - cursorX;
        const ddy = dot.baseY - cursorY;
        const distance = Math.sqrt(ddx * ddx + ddy * ddy); // faster than Math.hypot
        const influence = clamp(1 - distance * influenceRadiusInv, 0, 1);
        const repel = influence * pStrength * 25;
        const angle = Math.atan2(ddy, ddx);
        const repelledX = dot.baseX + Math.cos(angle) * repel;
        const repelledY = dot.baseY + Math.sin(angle) * repel;
        const size = dot.radius * (1 + influence * 0.6) * pulse;

        ctx.globalAlpha = dot.alpha * (1.2 + influence * 0.5);
        ctx.fillStyle = `rgba(166, 221, 255, ${0.9 + influence * 0.3})`;
        ctx.beginPath();
        ctx.arc(repelledX, repelledY, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      draw();
      animationFrame.current = requestAnimationFrame(animate);
    };

    // Debounced resize to avoid layout thrashing
    const handleResize = () => {
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      resizeTimerRef.current = setTimeout(resetCanvas, 150);
    };

    resetCanvas();
    animate();
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        zIndex: 1,
        willChange: 'transform',
      }}
    />
  );
};

export default CanvasBackground;