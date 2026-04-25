import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import About from './pages/about';
import Contact from './pages/Contact';
import RegistrationPage from './pages/RegistrationPage';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
      </Route>
    </Routes>
  );
}

export default App;