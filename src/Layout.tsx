import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className=''>
        <Outlet />
      </main>
      <div className='w-full h-[30vh] bg-matteBlack text-white flex items-center justify-center'>
        <h1>Footer</h1>
      </div>
    </>
  );
};

export default Layout;
