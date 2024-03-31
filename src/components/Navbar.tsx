import { Link, NavLink } from 'react-router-dom';
import Button from './ui/Button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isServicesExpand, setIsServicesExpand] = useState<boolean>(false);

  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //Handles the opening and closing of our Services for mobile menu
  const expandServices = () => {
    setIsServicesExpand(!isServicesExpand);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsServicesExpand(false);
    }
  }, [isOpen]);

  const isActivePage = {
    active:
      'relative hover:text-gray py-1 after:content-[""] after:w-full after:h-[2px] after:absolute after:left-0 after:bottom-0 after:bg-links after:rounded-full after:scale-[30%] after:origin-left after:transition-all after:duration-300 hover:after:scale-[100%]',
    inActive:
      'relative hover:text-gray py-1 after:content-[""] after:w-full after:h-[2px] after:absolute after:left-0 after:bottom-0 after:bg-links after:rounded-full after:scale-0 after:origin-left hover:after:scale-[100%] after:transition-all after:duration-300',
  };

  const navLinksStyles = {
    active:
      'relative text-3xl sm:text-4xl font-light hover:text-gray py-1 after:content-[""] after:w-full after:h-[2px] after:absolute after:left-0 after:bottom-0 after:bg-links after:rounded-full after:scale-[30%] after:origin-left after:transition-all after:duration-300 hover:after:scale-[100%]',
    inActive:
      'relative text-3xl sm:text-4xl font-light hover:text-gray py-1 after:content-[""] after:w-full after:h-[2px] after:absolute after:left-0 after:bottom-0 after:bg-links after:rounded-full after:scale-0 after:origin-left hover:after:scale-[100%] after:transition-all after:duration-300',
  };

  return (
    <header
      className={`w-full h-14 bg-white lg:h-16 z-10 fixed top-0 border-shadow flex items-center justify-center p-3 xl:p-0`}
    >
      <nav className='w-full h-full container mx-auto grid grid-cols-2 lg:grid-cols-3 lg:place-items-center'>
        <div className='hidden lg:flex items-center gap-x-6 place-self-start self-center'>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? isActivePage.active : isActivePage.inActive
            }
          >
            Home
          </NavLink>
          <NavLink
            to={'/about'}
            className={({ isActive }) =>
              isActive ? isActivePage.active : isActivePage.inActive
            }
          >
            About
          </NavLink>

          {/* ------Services Links DropDown------ */}
          <div className='relative group'>
            <span className='h-full inline-flex items-center gap-x-1'>
              <NavLink
                to={'/services'}
                className={({ isActive }) =>
                  isActive ? isActivePage.active : isActivePage.inActive
                }
              >
                Services
              </NavLink>
              <ChevronDown className='w-4 group-hover:rotate-180 transition-all duration-200 ease-in' />
            </span>
            <div className='absolute w-max bg-white shadow-lg p-4 rounded-md border border-lightBorder -left-2 top-8 hidden group-hover:flex flex-col justify-center gap-y-2'>
              <NavLink
                to={'/services/it-solutions'}
                className={({ isActive }) =>
                  isActive ? isActivePage.active : isActivePage.inActive
                }
              >
                IT Solutions
              </NavLink>
              <NavLink
                to={'/services/internships'}
                className={({ isActive }) =>
                  isActive ? isActivePage.active : isActivePage.inActive
                }
              >
                Internships
              </NavLink>
            </div>
          </div>
          <NavLink
            to={'/contact'}
            className={({ isActive }) =>
              isActive ? isActivePage.active : isActivePage.inActive
            }
          >
            Contact
          </NavLink>
          <NavLink
            to={'/blogs'}
            className={({ isActive }) =>
              isActive ? isActivePage.active : isActivePage.inActive
            }
          >
            Blogs
          </NavLink>
        </div>

        <Link
          to={'/'}
          className='text-2xl font-modernGallery font-bold inline-flex gap-x-1 self-center'
        >
          AmjTeam
          <p className='text-3xl font-montserrat font-bold text-goldenRod'>.</p>
        </Link>

        <div className='self-center place-self-end'>
          {/* ------Buttons-On-Lg-Device------ */}
          <div className='hidden lg:block '>
            <Button variant='primary'>Book a Call</Button>
          </div>

          {/* ------Mobile-Menu-Overlay------ */}
          <div
            className={`w-full h-[100vh] lg:hidden ${
              isOpen ? 'opacity-100 block' : 'opacity-0 hidden'
            } overlay absolute top-0 left-0 right-0 bottom-0 transition-all duration-500 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]`}
            onClick={handleClick}
          ></div>

          {/* ------Mobile-Menu------ */}
          <div
            className={`w-[90%] sm:w-[65%] p-10 sm:p-20 h-[100vh] lg:hidden bg-white shadow-2xl absolute right-0 top-0 z-20 transition-all duration-500 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='w-full h-full flex flex-col items-start justify-between'>
              {/* ---Links--- */}
              <div className='w-full flex flex-col items-start gap-y-4'>
                <p className='text-light font-montserrat'>Menu</p>

                <div className='w-full h-full flex flex-col gap-y-3'>
                  <NavLink
                    to={'/'}
                    className={({ isActive }) =>
                      isActive ? navLinksStyles.active : navLinksStyles.inActive
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={'/about'}
                    className={({ isActive }) =>
                      isActive ? navLinksStyles.active : navLinksStyles.inActive
                    }
                  >
                    About
                  </NavLink>
                  <div className='w-full h-auto overflow-hidden'>
                    <div className='w-full flex justify-between items-center'>
                      <NavLink
                        to={'/services'}
                        className={({ isActive }) =>
                          isActive
                            ? navLinksStyles.active
                            : navLinksStyles.inActive
                        }
                      >
                        Services
                      </NavLink>

                      <button
                        className=' p-2 border rounded-full border-lightBorder'
                        onClick={expandServices}
                      >
                        <ChevronDown className='text-gray' />
                      </button>
                    </div>

                    {/* ---More-Services--- */}
                    <div
                      className={`flex flex-col gap-y-2 ml-3 transition-all duration-200 ease-in-out ${
                        isServicesExpand ? 'h-auto mt-2' : 'h-0'
                      }`}
                    >
                      <NavLink
                        to={'/services/it-solutions'}
                        className='text-md'
                      >
                        IT Solutions
                      </NavLink>
                      <NavLink to={'/services/internships'}>
                        Internships
                      </NavLink>
                    </div>
                  </div>
                  <NavLink
                    to={'/contact'}
                    className={({ isActive }) =>
                      isActive ? navLinksStyles.active : navLinksStyles.inActive
                    }
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    to={'/blogs'}
                    className={({ isActive }) =>
                      isActive ? navLinksStyles.active : navLinksStyles.inActive
                    }
                  >
                    Blogs
                  </NavLink>
                </div>
              </div>

              {/* ---Email--- */}
              <div className='flex flex-col items-start gap-y-2'>
                <p className='text-light font-normal text-md'>Get in touch</p>

                <p className='border-b border-lightBorder py-1 hover:border-black'>
                  abcd@xyz.com
                </p>
              </div>
            </div>
          </div>

          {/* ------Mobile-Menu-Toggle-Btn------ */}
          <button
            onClick={handleClick}
            className='flex flex-col justify-center items-center lg:hidden fixed top-4 right-6 z-30 p-3 rounded-full hover:text-white group'
          >
            <span
              className={`
            bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm group-hover:opacity-50 ${
                      isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'
                    }
            `}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm group-hover:opacity-50 ${
                      isOpen
                        ? '-rotate-45 translate-y-0.5'
                        : 'translate-y-0.5 translate-x-1'
                    }`}
            ></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
