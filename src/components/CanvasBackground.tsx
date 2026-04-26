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
  const parallaxRef = useRef({ x: 0, y: 0 });
  const sizeRef = useRef({ width: 0, height: 0, centerX: 0, centerY: 0, dpr: 1, maxRadius: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
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

    const updatePointer = (clientX: number, clientY: number) => {
      const { centerX, centerY, width, height } = sizeRef.current;
      const lastX = pointerRef.current.lastX;
      const lastY = pointerRef.current.lastY;

      const x = clamp(clientX - centerX, -width * 0.6, width * 0.6);
      const y = clamp(clientY - centerY, -height * 0.6, height * 0.6);
      const dx = x - lastX;
      const dy = y - lastY;
      const velocity = Math.hypot(dx, dy);
      const strength = clamp(velocity / 48, 0, 1);

      pointerRef.current = {
        x,
        y,
        vx: dx,
        vy: dy,
        strength: lerp(pointerRef.current.strength, strength, 0.18),
        lastX: x,
        lastY: y,
      };
    };

    const updateParallax = (mouseX: number, mouseY: number) => {
      const x = mouseX / window.innerWidth;
      const y = mouseY / window.innerHeight;
      parallaxRef.current.x = lerp(parallaxRef.current.x, x, 0.2);
      parallaxRef.current.y = lerp(parallaxRef.current.y, y, 0.2);
    };

    const handlePointerMove = (event: MouseEvent | TouchEvent) => {
      const point = 'touches' in event ? event.touches[0] : event;
      updatePointer(point.clientX, point.clientY);
      updateParallax(point.clientX, point.clientY);
    };

    const drawBackground = () => {
      // Only clear, backgrounds are handled by CSS
      ctx.clearRect(0, 0, sizeRef.current.width, sizeRef.current.height);
    };

    const draw = () => {
      const { centerX, centerY } = sizeRef.current;
      drawBackground();

      const cursorX = centerX + pointerRef.current.x;
      const cursorY = centerY + pointerRef.current.y;

      // Global pattern offset based on mouse
      const patternOffsetX = parallaxRef.current.x * 30; // 30px range
      const patternOffsetY = parallaxRef.current.y * 30;

      // Draw dots with interaction
      ctx.save();
      ctx.translate(patternOffsetX, patternOffsetY); // Apply global offset
      if (!isMobile) {
        ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
        ctx.shadowBlur = 8;
      }

      const pulse = isMobile ? 1 : 1 + Math.sin(performance.now() * 0.002) * 0.08;

      dotsRef.current.forEach((dot) => {
        const dx = dot.baseX - cursorX;
        const dy = dot.baseY - cursorY;
        const distance = Math.hypot(dx, dy);
        const influence = clamp(1 - distance / 200, 0, 1); // Increased radius
        const repel = influence * pointerRef.current.strength * 25; // Increased repel
        const angle = Math.atan2(dy, dx);
        const repelledX = dot.baseX + Math.cos(angle) * repel;
        const repelledY = dot.baseY + Math.sin(angle) * repel;
        const size = dot.radius * (1 + influence * 0.6) * pulse; // Increased influence

        ctx.globalAlpha = dot.alpha * (1.2 + influence * 0.5); // Increased base alpha
        ctx.fillStyle = `rgba(166, 221, 255, ${0.9 + influence * 0.3})`; // Brighter base
        ctx.beginPath();
        ctx.arc(repelledX, repelledY, size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      draw();
      animationFrame.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resetCanvas();
    };

    resetCanvas();
    animate();
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
};

export default CanvasBackground;