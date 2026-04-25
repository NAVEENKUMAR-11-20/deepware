import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/terms-and-conditions';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {!hideNavbarAndFooter && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
};

export default Layout;