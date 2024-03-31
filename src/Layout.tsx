import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className=''>
        <Outlet />
      </main>
      <div className='w-full h-[30vh] bg-white flex items-center justify-center'>
        <h1>Testimonials</h1>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
