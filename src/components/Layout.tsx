import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollSpotlight } from '../hooks/useScrollEffects';

const Layout = () => {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/terms-and-conditions' || location.pathname === '/privacy-policy';
  const overlayRef = useRef<HTMLDivElement>(null);
  useScrollSpotlight();

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    const updateScrollEffects = () => {
      const scrollY = lastScrollY;
      const maxScroll = 500;
      
      const isMobile = window.innerWidth < 768;
      
      // On mobile, keep it clean and disable the heavy backdrop-filter blur overlay
      const blurVal = isMobile ? 0 : Math.min((scrollY / maxScroll) * 12, 12);
      const opacityVal = isMobile ? 1 : Math.max(1 - blurVal / 12, 0.95);

      if (overlayRef.current) {
        overlayRef.current.style.setProperty('--blur-amount', `${blurVal}px`);
        overlayRef.current.style.setProperty('--blur-opacity', opacityVal.toString());
      }
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial values
    updateScrollEffects();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* Root wrapper must NOT have overflow:hidden — it breaks position:fixed on the navbar */
    <div className="relative min-h-screen bg-slate-950">
      {/* Scroll effect overlay */}
      <div
        className="fixed inset-0 z-5 pointer-events-none scroll-blur-overlay"
        ref={overlayRef}
      />

      {/* Navbar — rendered outside any overflow or z-index stacking context */}
      {!hideNavbarAndFooter && <Navbar />}

      {/* Content layer — overflow-x-hidden here only, below the fixed navbar */}
      <div className="relative z-10 flex flex-col min-h-screen overflow-x-hidden">
        <main className="flex-grow">
          <Outlet />
        </main>
        {!hideNavbarAndFooter && <Footer />}
      </div>
    </div>
  );
};

export default Layout;