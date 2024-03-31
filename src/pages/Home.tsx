import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import ITSolution from '../assets/images/it-solutions.png';
import DigitalMarketing from '../assets/images/digital_marketing.svg';
import HRSolutions from '../assets/images/HR-Consultancy.svg';
import Internships from '../assets/images/internships.jpg';
import Marquee from 'react-fast-marquee';
import { appTechList, webTechList } from '../utils';

const Home = () => {
  return (
    <>
      <section className='w-full h-[65vh] md:h-[70vh] lg:h-[80vh] bg-hero-img bg-grad flex items-center justify-center'>
        <div className='w-full h-full container mx-auto p-5 flex items-center'>
          <div className='w-full flex flex-col items-start lg:gap-y-2'>
            <p className='text-xs md:text-md lg:text-[18px] mb-2 bg-grainBrown p-1 rounded-3xl px-3 lg:p-2'>
              Hi There, Welcome To AmjTeam
            </p>

            <p className='text-2xl md:text-4xl lg:text-5xl lg:w-[60%] font-medium mb-1'>
              <span className='font-bold'>Empowering</span> your Business with
            </p>
            <p className='text-2xl md:text-4xl lg:text-5xl lg:w-[60%] font-medium mb-1'>
              Innovative <span className='font-bold'>IT Solutions</span>
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

          <div className='py-8 md:py-10 lg:py-20'>
            {/* ---Service-1--- */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center mb-16'>
              {/* Image */}
              <div className='w-full aspect-video mx-auto max-w-sm'>
                <img
                  src={ITSolution}
                  alt='it-solution'
                  className='block object-center object-cover w-full aspect-video'
                />
              </div>

              <div className='flex flex-col items-start p-4'>
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold'>
                  IT Solutions
                </h1>
                <p className='text-md md:text-xl lg:text-lg font-montserrat text-gray mt-5'>
                  Our highly skilled development teams specialized in Java, PHP,
                  React, Angular and AWS help you accelarate your business via
                  modern custom software solutions.
                </p>
              </div>
            </div>

            {/* ---Service-2--- */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center mb-24'>
              <div className='flex flex-col items-start p-4'>
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold'>
                  Digital Marketing
                </h1>
                <p className='text-md md:text-xl lg:text-lg font-montserrat text-gray mt-5'>
                  Here in AmjTeam, we offer the best digital marketing tools and
                  strategies that can help your business to stand out from the
                  competition. Our SEO and PPC services ensure versatile and
                  affordable marketing solutions for any enterprise in any
                  industry. Opt for the best digital marketing solutions to
                  engage and grow your audience.
                </p>
              </div>

              {/* Image */}
              <div className='w-full aspect-video mx-auto max-w-sm'>
                <img
                  src={DigitalMarketing}
                  alt='DigitalMarketing'
                  className='block object-center object-cover w-full aspect-video'
                />
              </div>
            </div>

            {/* ---Service-3--- */}
            <div className='w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center mb-16'>
              {/* Image */}
              <div className='w-full h-auto mx-auto max-w-sm'>
                <img
                  src={HRSolutions}
                  alt='HRSolutions'
                  className='block w-full object-center object-cover'
                />
              </div>

              <div className='flex flex-col items-start p-4'>
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold'>
                  HR Solutions
                </h1>
                <p className='text-md md:text-xl lg:text-lg font-montserrat text-gray mt-5'>
                  In this age of complex Human Resource operations, a Cost
                  Effective Managed HR Service from HR Solutions allows you to
                  focus on your business, not your corporate HR Function. Our
                  Managed HR Solutions bring reduced operating cost to your
                  Human Resources Department, while ensuring the latest
                  regulation and best practices, safeguarding state and federal
                  compliance!
                </p>
              </div>
            </div>

            {/* ---Service-4--- */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center mb-24'>
              <div className='flex flex-col items-start p-4'>
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold'>
                  Internships
                </h1>
                <p className='text-md md:text-xl lg:text-lg font-montserrat text-gray mt-5'>
                  Here in AmjTeam, we offer the best digital marketing tools and
                  strategies that can help your business to stand out from the
                  competition. Our SEO and PPC services ensure versatile and
                  affordable marketing solutions for any enterprise in any
                  industry. Opt for the best digital marketing solutions to
                  engage and grow your audience.
                </p>
              </div>

              {/* Image */}
              <div className='w-full aspect-video mx-auto max-w-sm'>
                <img
                  src={Internships}
                  alt='Internships'
                  className='block object-center object-cover w-full aspect-video'
                />
              </div>
            </div>
          </div>

          <div className='w-full flex items-center justify-center'>
            <Link to={'/services'}>
              <Button variant='primary'>More Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ------TechStack-Section------ */}
      <section className='py-6 md:py-[60px] lg:py-[70px] bg-black text-white'>
        <div className='container mx-auto p-4'>
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
