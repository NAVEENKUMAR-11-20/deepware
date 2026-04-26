import { useEffect, useRef } from 'react';

type DotPoint = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

const InteractiveDottedHalo = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrame = useRef<number | null>(null);
  const dotsRef = useRef<DotPoint[]>([]);
  const pointerRef = useRef({ x: 0, y: 0, vx: 0, vy: 0, strength: 0, lastX: 0, lastY: 0 });
  // Separate raw target from the smoothed (rendered) position
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const offsetRef = useRef({ x: 0, y: 0 });
  const sizeRef = useRef({ width: 0, height: 0, centerX: 0, centerY: 0, dpr: 1, maxRadius: 0 });
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window);
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
      const rings = isMobile ? 8 : 16;
      const points: DotPoint[] = [];

      for (let ring = 0; ring < rings; ring += 1) {
        const progress = ring / (rings - 1);
        const radius = lerp(isMobile ? 1.6 : 2.6, isMobile ? 5.2 : 8.2, 1 - progress);
        const alpha = lerp(isMobile ? 0.16 : 0.18, isMobile ? 0.75 : 0.92, 1 - progress);
        const ringRadius = lerp(maxRadius * (isMobile ? 0.22 : 0.18), maxRadius, progress);
        const count = Math.round((isMobile ? 10 : 18) + progress * (isMobile ? 12 : 24) + ring * (isMobile ? 0.4 : 0.8));

        for (let i = 0; i < count; i += 1) {
          const angle = (Math.PI * 2 * i) / count + (ring % 2 === 0 ? 0 : 0.12);
          points.push({
            x: centerX + Math.cos(angle) * ringRadius,
            y: centerY + Math.sin(angle) * ringRadius,
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
    };

    const drawBackground = () => {
      const { width, height, centerX, centerY, maxRadius } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(centerX, centerY, maxRadius * 0.1, centerX, centerY, maxRadius * 0.92);
      glow.addColorStop(0, 'rgba(56, 189, 248, 0.16)');
      glow.addColorStop(0.4, 'rgba(56, 189, 248, 0.05)');
      glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const draw = () => {
      const { centerX, centerY } = sizeRef.current;

      // ── Smooth interpolation of pointer position (done once per frame) ──
      const prevX = pointerRef.current.x;
      const prevY = pointerRef.current.y;
      const targetX = pointerTargetRef.current.x;
      const targetY = pointerTargetRef.current.y;

      // Fast lerp factor for responsive yet smooth tracking
      const lerpFactor = isMobile ? 0.25 : 0.35;
      const smoothX = lerp(prevX, targetX, lerpFactor);
      const smoothY = lerp(prevY, targetY, lerpFactor);

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

      drawBackground();

      const cursorX = centerX + smoothX;
      const cursorY = centerY + smoothY;
      const motionLerp = isMobile ? 0.08 : 0.12;
      const motionMultX = isMobile ? 0.14 : 0.28;
      const motionMultY = isMobile ? 0.1 : 0.22;
      const motionX = lerp(offsetRef.current.x, smoothX * motionMultX, motionLerp);
      const motionY = lerp(offsetRef.current.y, smoothY * motionMultY, motionLerp);
      offsetRef.current.x = motionX;
      offsetRef.current.y = motionY;

      ctx.save();
      ctx.translate(motionX, motionY);
      if (!isMobile) {
        ctx.shadowColor = 'rgba(96, 165, 250, 0.35)';
        ctx.shadowBlur = 14;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      }

      const pulse = isMobile ? 1 : 1 + Math.sin(performance.now() * 0.002) * 0.08;
      const cursorRadius = isMobile ? 48 : 70 + pointerRef.current.strength * 16;
      const pStrength = pointerRef.current.strength;

      ctx.fillStyle = `rgba(56, 189, 248, ${isMobile ? 0.05 : 0.08})`;
      ctx.beginPath();
      ctx.arc(cursorX - motionX, cursorY - motionY, cursorRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalCompositeOperation = 'lighter';

      const dots = dotsRef.current;
      const dotCount = dots.length;
      const influenceRadiusInv = 1 / 170;

      for (let i = 0; i < dotCount; i++) {
        const dot = dots[i];
        const ddx = dot.x - cursorX;
        const ddy = dot.y - cursorY;
        const distance = Math.sqrt(ddx * ddx + ddy * ddy); // faster than Math.hypot
        const influence = clamp(1 - distance * influenceRadiusInv, 0, 1);
        const repel = influence * pStrength * 18;
        const angle = Math.atan2(ddy, ddx);
        const repelledX = dot.x + Math.cos(angle) * repel;
        const repelledY = dot.y + Math.sin(angle) * repel;
        const size = dot.radius * (1 + influence * 0.48) * pulse;

        ctx.globalAlpha = dot.alpha * (0.85 + influence * 0.4);
        ctx.fillStyle = `rgba(166, 221, 255, ${0.75 + influence * 0.25})`;
        ctx.beginPath();
        ctx.arc(repelledX, repelledY, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
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
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 w-full h-full pointer-events-none"
      style={{
        willChange: 'transform',
      }}
    />
  );
};

export default InteractiveDottedHalo;
