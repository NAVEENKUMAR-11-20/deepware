import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import { useScrollBlur, useScrollSpotlight } from '../hooks/useScrollEffects';

const Layout = () => {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/terms-and-conditions';
  const scrollState = useScrollBlur();
  useScrollSpotlight();

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Animated background layer */}
      <AnimatedBackground />

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

      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {!hideNavbarAndFooter && <Navbar />}
        <main className="flex-grow">
          <Outlet />
        </main>
        {!hideNavbarAndFooter && <Footer />}
      </div>
    </div>
  );
};

export default Layout;