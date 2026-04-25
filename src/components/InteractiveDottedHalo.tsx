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
  const offsetRef = useRef({ x: 0, y: 0 });
  const sizeRef = useRef({ width: 0, height: 0, centerX: 0, centerY: 0, dpr: 1, maxRadius: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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
      const rings = 16;
      const points: DotPoint[] = [];

      for (let ring = 0; ring < rings; ring += 1) {
        const progress = ring / (rings - 1);
        const radius = lerp(2.6, 8.2, 1 - progress);
        const alpha = lerp(0.18, 0.92, 1 - progress);
        const ringRadius = lerp(maxRadius * 0.18, maxRadius, progress);
        const count = Math.round(18 + progress * 24 + ring * 0.8);

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

    const handlePointerMove = (event: MouseEvent | TouchEvent) => {
      const point = 'touches' in event ? event.touches[0] : event;
      updatePointer(point.clientX, point.clientY);
    };

    const drawBackground = () => {
      const { width, height, centerX, centerY, maxRadius } = sizeRef.current;
      const baseGradient = ctx.createLinearGradient(0, 0, width, height);
      baseGradient.addColorStop(0, '#041229');
      baseGradient.addColorStop(0.5, '#081d44');
      baseGradient.addColorStop(1, '#030814');
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      const halo = ctx.createRadialGradient(centerX, centerY, maxRadius * 0.08, centerX, centerY, maxRadius * 1.1);
      halo.addColorStop(0, 'rgba(56, 189, 248, 0.18)');
      halo.addColorStop(0.6, 'rgba(34, 211, 238, 0.06)');
      halo.addColorStop(1, 'rgba(10, 16, 40, 0)');
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);
    };

    const draw = () => {
      const { width, height, centerX, centerY } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);
      drawBackground();

      const cursorX = centerX + pointerRef.current.x;
      const cursorY = centerY + pointerRef.current.y;
      const motionX = lerp(offsetRef.current.x, pointerRef.current.x * 0.12, 0.1);
      const motionY = lerp(offsetRef.current.y, pointerRef.current.y * 0.08, 0.1);
      offsetRef.current.x = motionX;
      offsetRef.current.y = motionY;

      ctx.save();
      ctx.translate(motionX, motionY);

      ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.beginPath();
      ctx.arc(cursorX - motionX, cursorY - motionY, 68 + pointerRef.current.strength * 12, 0, Math.PI * 2);
      ctx.fill();

      dotsRef.current.forEach((dot) => {
        const dx = dot.x - cursorX;
        const dy = dot.y - cursorY;
        const distance = Math.hypot(dx, dy);
        const influence = clamp(1 - distance / 170, 0, 1);
        const repel = influence * pointerRef.current.strength * 12;
        const angle = Math.atan2(dy, dx);
        const repelledX = dot.x + Math.cos(angle) * repel;
        const repelledY = dot.y + Math.sin(angle) * repel;
        const size = dot.radius * (1 + influence * 0.16);

        ctx.globalAlpha = dot.alpha * (0.75 + influence * 0.18);
        ctx.fillStyle = 'rgba(89, 177, 255, 1)';
        ctx.beginPath();
        ctx.arc(repelledX, repelledY, size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
      ctx.globalAlpha = 1;
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
    window.addEventListener('mousemove', handlePointerMove);
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
      className="absolute inset-0 -z-20 w-full h-full pointer-events-none"
    />
  );
};

export default InteractiveDottedHalo;
