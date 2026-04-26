import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    // Only scroll to top if there's no hash (meaning we're navigating to a new page, not a section)
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;