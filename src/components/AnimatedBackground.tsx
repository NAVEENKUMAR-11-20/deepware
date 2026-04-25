import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate floating shapes on mouse move for subtle parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;

      // Move background elements slightly based on mouse position
      const elements = container.querySelectorAll('[data-parallax]');
      elements.forEach((el) => {
        const speed = (el as HTMLElement).dataset.speed || '5';
        const moveX = x * parseInt(speed);
        const moveY = y * parseInt(speed);
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden bg-black"
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-950/20 to-violet-950/20 animate-gradient-shift" />

      {/* Primary glow blob (top right) */}
      <div
        data-parallax
        data-speed="8"
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-500/20 blur-3xl animate-float-slow will-change-transform"
      />

      {/* Secondary glow blob (bottom left) */}
      <div
        data-parallax
        data-speed="6"
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-violet-600/30 to-indigo-500/20 blur-3xl animate-float-slow-delay-2 will-change-transform"
      />

      {/* Tertiary glow blob (center-right) */}
      <div
        data-parallax
        data-speed="4"
        className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-gradient-to-bl from-teal-500/20 to-blue-600/30 blur-3xl animate-float-slow-delay-4 will-change-transform"
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay bg-noise-texture"
      />

      {/* Radial spotlight effect (hidden by default, shown on sections) */}
      <div
        className="pointer-events-none absolute inset-0 bg-radial-spotlight"
      />
    </div>
  );
};

export default AnimatedBackground;
