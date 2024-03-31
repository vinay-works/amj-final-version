import {
  ArrowUp,
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling behavior
    });
  };
  return (
    <footer className='w-full h-auto bg-black text-white'>
      <div className='container mx-auto my-16 py-16 font-montserrat grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center lg:items-start gap-7'>
        {/* ---Company--- */}
        <div className='flex flex-col'>
          <Link
            to={'/'}
            className='text-2xl font-modernGallery font-bold inline-flex gap-x-1 justify-center lg:justify-start'
          >
            AmjTeam
            <p className='text-3xl font-montserrat font-bold text-goldenRod'>
              .
            </p>
          </Link>

          <p className='text-sm text-gray font-montserrat font-medium mt-3'>
            Helping brands build their <br />
            online presence.
          </p>
        </div>

        {/* ---Menu--- */}
        <div>
          <p className='text-sm text-lightGray font-montserrat mb-3 text-center lg:text-start'>
            Menu
          </p>

          <div className='flex flex-col gap-y-3 items-center lg:items-start'>
            <Link to={'/'} className='text-lg hover:text-gray hover:underline'>
              Home
            </Link>
            <Link
              to={'/about'}
              className='text-lg hover:text-gray hover:underline'
            >
              About
            </Link>
            <Link
              to={'/contact'}
              className='text-lg hover:text-gray hover:underline'
            >
              Contact
            </Link>
            <Link
              to={'/blogs'}
              className='text-lg hover:text-gray hover:underline'
            >
              Blogs
            </Link>
          </div>
        </div>

        {/* ---Services--- */}
        <div>
          <p className='text-sm text-lightGray font-montserrat mb-3 text-center lg:text-start'>
            Services
          </p>

          <div className='flex flex-col gap-y-3 items-center lg:items-start'>
            <Link
              to={'/services/it-solutions'}
              className='text-lg hover:text-gray hover:underline'
            >
              IT Solutions
            </Link>
            <Link
              to={'/services/internships'}
              className='text-lg hover:text-gray hover:underline'
            >
              Internships
            </Link>
          </div>
        </div>

        {/* ---Socials--- */}
        <div>
          <p className='text-sm text-lightGray font-montserrat mb-3 text-center lg:text-start'>
            Socials
          </p>

          <div className='flex flex-col gap-y-3 items-center lg:items-start'>
            <a
              href='#'
              className='inline-flex items-center gap-x-2 text-lg hover:text-gray hover:underline'
            >
              <Linkedin className='w-5 h-5' /> LinkedIn
            </a>
            <a
              href='#'
              className='inline-flex items-center gap-x-2 text-lg hover:text-gray hover:underline'
            >
              <Twitter className='w-5 h-5' /> Twitter
            </a>
            <a
              href='#'
              className='inline-flex items-center gap-x-2 text-lg hover:text-gray hover:underline'
            >
              <Instagram /> Instagram
            </a>
            <a
              href='#'
              className='inline-flex items-center gap-x-2 text-lg hover:text-gray hover:underline'
            >
              <Facebook /> Facebook
            </a>
          </div>
        </div>
      </div>
      <div className='w-full h-auto container mx-auto'>
        {/* ---Copyright--- */}
        <div className='border-t border-lightGray py-5 flex items-center justify-center lg:justify-between flex-wrap gap-5'>
          <p className='text-sm text-gray inline-flex items-center gap-x-1'>
            <Copyright className='w-4 h-4' /> Copyright by YugAmjTeam. All
            rights reserved.
          </p>

          <div className='flex items-center justify-center gap-x-3'>
            <a href='#' className='text-sm text-gray hover:underline'>
              Terms of use
            </a>

            <button
              className='w-8 h-8 bg-matteBlack border border-lightGray p-2 flex items-center justify-center rounded-full'
              onClick={scrollToTop}
            >
              <ArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
