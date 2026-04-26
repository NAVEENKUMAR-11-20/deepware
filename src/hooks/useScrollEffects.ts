import { useEffect, useState } from 'react';

interface ScrollBlurState {
  blurAmount: number;
  brightness: number;
  translateY: number;
}

export const useScrollBlur = () => {
  const [state, setState] = useState<ScrollBlurState>({
    blurAmount: 0,
    brightness: 1,
    translateY: 0,
  });

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    const updateScrollState = () => {
      const scrollY = lastScrollY;
      const maxScroll = 500;

      // Calculate blur amount (max 12px blur after 500px scroll)
      const blurAmount = Math.min((scrollY / maxScroll) * 12, 12);

      // Calculate brightness reduction (min 0.85 brightness)
      const brightness = Math.max(1 - (scrollY / maxScroll) * 0.15, 0.85);

      // Calculate parallax offset (moves slower than scroll)
      const translateY = scrollY * 0.5;

      setState({
        blurAmount,
        brightness,
        translateY,
      });
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return state;
};

export const useScrollSpotlight = () => {
  useEffect(() => {
    let ticking = false;
    let lastX = 0;
    let lastY = 0;

    const updateSpotlight = () => {
      document.documentElement.style.setProperty('--spotlight-x', `${lastX}%`);
      document.documentElement.style.setProperty('--spotlight-y', `${lastY}%`);
      ticking = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastX = (e.clientX / window.innerWidth) * 100;
      lastY = (e.clientY / window.innerHeight) * 100;

      if (!ticking) {
        requestAnimationFrame(updateSpotlight);
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
};
