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
    const handleScroll = () => {
      const scrollY = window.scrollY;
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return state;
};

export const useScrollSpotlight = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty('--spotlight-x', `${x}%`);
      document.documentElement.style.setProperty('--spotlight-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
};
