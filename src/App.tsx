import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import About from './pages/about';
import Contact from './pages/Contact';
import RegistrationPage from './pages/RegistrationPage';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DenveXIntro from './components/DenveXIntro';

function App() {
  /**
   * showIntro: true only on the very first visit.
   * Uses localStorage so the intro never plays again on the same browser.
   * Set to false initially so there's no flash; useEffect checks storage.
   */
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [introChecked, setIntroChecked] = useState<boolean>(false);
  const [introFading, setIntroFading] = useState<boolean>(false);

  useEffect(() => {
    // Always show intro on every page load
    document.body.style.overflow = 'hidden';
    setIntroChecked(true);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroFading(false);
    document.body.style.overflow = '';
  };

  const handleStartTransition = () => {
    setIntroFading(true);
  };

  // Don't render anything until we've checked localStorage
  // (avoids a brief flash of the homepage before intro)
  if (!introChecked) return null;

  return (
    <>
      {/* ── Cinematic intro — fixed overlay, z-index 99999 ─────────────────
          Plays first on every new device / first visit.
          Auto-dismisses after 10 s or when Skip is clicked.
          The homepage mounts underneath immediately but is hidden
          by the intro overlay. Once the intro fades out, it reveals. */}
      {showIntro && (
        <DenveXIntro
          onComplete={handleIntroComplete}
          onStartTransition={handleStartTransition}
        />
      )}

      {/* ── Homepage container with premium Vercel-style unblur transition ── */}
      {/*
        IMPORTANT: CSS filter (even blur(0px)) creates a new containing block for
        position:fixed children, which breaks the fixed navbar. We use filter:none
        when the intro is not active so the navbar correctly anchors to the viewport.
      */}
      <div
        style={{
          filter: showIntro && !introFading ? 'blur(20px)' : 'none',
          opacity: showIntro && !introFading ? 0 : 1,
          transition: 'filter 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          width: '100%',
          height: '100%',
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;