import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
// import ITSolution from '../assets/images/it-solutions.png';
// import DigitalMarketing from '../assets/images/digital_marketing.svg';
// import HRSolutions from '../assets/images/HR-Consultancy.svg';
import Internships from '../assets/images/internships.jpg';
import Marquee from 'react-fast-marquee';
import { appTechList, webTechList } from '../utils';

const Home = () => {
  return (
    <>
      <section className='w-full h-[65vh] md:h-[70vh] lg:h-[80vh] bg-hero-img bg-grad flex items-center justify-center'>
        <div className='w-full h-full container mx-auto p-5 flex items-center'>
          <div className='w-full flex flex-col items-start lg:gap-y-2'>
            <p className='font-plus-jaskart text-xs md:text-md lg:text-[18px] mb-2 bg-grainBrown p-1 rounded-3xl px-3 lg:p-2'>
              Hi There, Welcome To AmjTeam
            </p>

            <p className='text-2xl md:text-4xl lg:text-6xl lg:w-[60%] font-medium mb-1'>
              We <span className='font-bold'>Create</span>
            </p>
            <p className='text-2xl md:text-4xl lg:text-6xl lg:w-[60%] font-medium mb-1'>
              <span className='font-bold'>Digital</span> Solutions
            </p>

            <p className='text-black text-sm md:text-lg mb-3'>
              Unleashing Growth, Efficiency, and Success
            </p>

            <Link to={'/contact'}>
              <Button className='primary'>Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ------About-Us-Section------ */}
      <section className='w-full bg-black borber border-t'>
        <div className='w-full container mx-auto p-8 md:py-10 lg:py-24'>
          <p className='text-xl lg:text-2xl text-gray mb-8 font-semibold font-montserrat text-center'>
            Who are we
          </p>

          <p className='text-center text-white text-xl md:text-2xl lg:text-3xl mb-8 md:w-[60%] mx-auto'>
            A team of experts in tech helping brands make there online presence
            and grow there bussiness 2 times.
          </p>

          <div className='w-full flex items-center justify-center'>
            <Link to={'/about'}>
              <Button variant='secondary'>Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ------Services-Section------ */}
      <section className='bg-white text-black w-full h-auto'>
        <div className='w-full container mx-auto p-8 md:py-10 lg:py-24'>
          <p className='text-lg lg:text-xl mb-8 font-medium flex items-center gap-x-2'>
            <span className='block w-2 h-2 bg-goldenRod rounded-full'></span>
            What we provide
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-between'>
            <p className='text-xl md:text-2xl lg:text-4xl'>
              Elevate Your Brand <br />
              with Our Digital Solutions
            </p>

            <p className='text-md md:text-lg text-gray lg:place-self-end'>
              Unlock the potential of your brand with
              <br />
              our comprehensive services.
            </p>
          </div>

          {/* ------Service-Cards------ */}

          <div className='py-8 md:py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='group h-[350px] w-full [perspective:1000px]'>
              <div className='relative w-full h-full rounded-xl shadow-xl border border-lightGray transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                <div className='absolute inset-0'>
                  <img
                    src={Internships}
                    alt='internships'
                    className='h-full w-full rounded-xl object-cover shadow-xl'
                  />
                </div>
                <div className='absolute inset-0 h-full w-full rounded-xl bg-white px-12 text-center text-slate-200'></div>
              </div>
            </div>
          </div>

          <div className='w-full flex items-center justify-center'>
            <Link to={'/services/it-solutions'}>
              <Button variant='primary'>More Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ------TechStack-Section------ */}
      <section className='py-6 md:py-[60px] lg:py-[70px] bg-black text-white'>
        <div className='container mx-auto p-4 border-b'>
          <div>
            <p className='text-xl md:text-3xl lg:text-4xl text-center font-semibold mb-5'>
              A Wide Tech Stack Selection
            </p>
            <p className='text-xl text-gray text-center'>
              Discover multiple leading-edge technologies <br />
              to help you succeed and innovate.
            </p>
          </div>

          {/* ------Marquee_Effects------ */}
          <div className='w-full h-full mt-8'>
            <Marquee speed={80} style={{ margin: 0 }}>
              <div className='w-full h-auto flex items-center justify-center gap-x-[100px]'>
                <span className='text-lg text-black font-semibold font-montserrat bg-canaryYellow py-1 px-4 rounded-3xl'>
                  MOBILE
                </span>
                {appTechList.map((tech) => {
                  return (
                    <div className='flex items-center' key={tech.id}>
                      <span className='w-[60px] block overflow-hidden'>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='block w-full object-center object-cover'
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className='w-full h-auto flex items-center justify-center gap-x-[80px] my-8 mr-[100px]'>
                <span className='text-lg text-black font-semibold font-montserrat bg-canaryYellow py-1 px-4 rounded-3xl'>
                  MOBILE
                </span>
                {appTechList.map((tech) => {
                  return (
                    <div className='flex items-center' key={tech.id}>
                      <span className='w-[60px] block overflow-hidden'>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='block w-full object-center object-cover'
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            </Marquee>

            <Marquee speed={80} style={{ margin: 0 }} direction='right'>
              <div className='w-full h-auto flex items-center justify-center gap-x-[100px] my-2'>
                <span className='text-lg text-black font-semibold font-montserrat bg-canaryYellow py-1 px-4 rounded-3xl'>
                  WEB
                </span>
                {webTechList.map((tech) => {
                  return (
                    <div className='flex items-center' key={tech.id}>
                      <span className='w-[60px] block overflow-hidden'>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='block w-full object-center object-cover'
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className='w-full h-auto flex items-center justify-center gap-x-[80px] my-20 mr-[100px]'>
                <span className='text-lg text-black font-semibold font-montserrat bg-canaryYellow py-1 px-4 rounded-3xl'>
                  WEB
                </span>
                {webTechList.map((tech) => {
                  return (
                    <div className='flex items-center' key={tech.id}>
                      <span className='w-[60px] block overflow-hidden'>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='block w-full object-center object-cover'
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
