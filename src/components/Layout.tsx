import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollBlur, useScrollSpotlight } from '../hooks/useScrollEffects';

const Layout = () => {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/terms-and-conditions' || location.pathname === '/privacy-policy';
  const scrollState = useScrollBlur();
  useScrollSpotlight();

  return (
    /* Root wrapper must NOT have overflow:hidden — it breaks position:fixed on the navbar */
    <div className="relative min-h-screen bg-slate-950">
      {/* Scroll effect overlay */}
      <div
        className="fixed inset-0 z-5 pointer-events-none scroll-blur-overlay"
        ref={(el) => {
          if (el) {
            el.style.setProperty('--blur-amount', `${scrollState.blurAmount}px`);
            el.style.setProperty('--blur-opacity', Math.max(1 - scrollState.blurAmount / 12, 0.95).toString());
          }
        }}
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