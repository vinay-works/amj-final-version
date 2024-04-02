import Reqruitement from '../assets/images/recruitment.svg';
import HRConsultancy from '../assets/images/hr.svg';
import HeadHunting from '../assets/images/actively-recruiting.svg';
import CorporateTraining from '../assets/images/training.svg';
import ProjectReqruite from '../assets/images/search-folder.svg';
import DatabaseSearch from '../assets/images/cloud-search.svg';
import Accordion from '../components/Accordion';
import { HRSolutionsFAQ } from '../utils';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function DigitalMarketing() {
  return (
    <>
      <section className='w-full h-[50vh] md:h-[60vh] lg:h-[70vh] hr-bg flex items-center justify-center'>
        <div className='w-full h-full container mx-auto p-5 flex items-center'>
          <div className='w-full h-full flex flex-col items-center justify-center gap-y-4 lg:gap-y-6'>
            <h1 className='text-white text-2xl md:text-3xl lg:text-5xl font-semibold font-montserrat'>
              Our Solution to You
            </h1>
            <p className='text-gray text-md md:text-xl md:w-[70%] lg:w-[50%] text-center'>
              AmjTeam wants you to show you how much more productive and
              profitable your company can be.
            </p>
          </div>
        </div>
      </section>
      <section className='w-full h-auto bg-white'>
        <div className='w-full h-full container mx-auto p-5 md:p-10 lg:p-16 flex flex-col justify-center gap-y-5 md:gap-y-8'>
          <h1 className='text-xl md:text-2xl lg:text-4xl md:w-[70%] lg:w-[65%] font-semibold'>
            AmjTeam is a all inclusive HR Service that provides you with the
            freedom to operate your business effectively.
          </h1>

          <div className='flex flex-col justify-center gap-y-3'>
            <p className='text-md md:text-lg lg:text-2xl font-medium italic md:w-[70%] lg:w-[65%]'>
              As your business grows you need the ability to maintain and manage
              your business and do what you are good at...running your business.
            </p>
            <p className='md:text-md font-montserrat lg:w-[80%]'>
              AmjTeam will plan, direct, and coordinate the administrative
              functions of your organization. We oversee the recruiting,
              interviewing, and hiring of new staff; consult with top executives
              on strategic planning; and serve as a link between your
              organization’s management and your employees. See below for a
              comprehensive list of what we offer.
            </p>
          </div>
        </div>
      </section>

      <section className='w-full h-auto bg-seaShell'>
        <div className='w-full h-full container mx-auto p-5 md:p-10 lg:p-20'>
          <p className='text-lg md:text-xl lg:text-2xl font-semibold my-5 md:my-7 lg:my-11 text-center'>
            SERVICE WE OFFER
          </p>
          <div className='w-full h-full xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5'>
            {/* ---Servoce-1--- */}
            <div className='w-full h-full bg-white rounded-lg p-5 md:p-4 lg:p-8 border border-transparent hover:border-lightGray hover:shadow-xl transition-all duration-200 ease-in-out'>
              <div className='w-[20%] md:w-[25%]'>
                <img
                  src={Reqruitement}
                  alt='Reqruitement'
                  className='w-full h-auto block object-center object-cover'
                />
              </div>

              <div className='mt-4'>
                <h2 className='text-md md:text-lg lg:text-[24px] font-semibold mb-4'>
                  Recruitment
                </h2>
                <p className='text-gray text-sm md:text-md lg:text-[16px] leading-[24px]'>
                  Recruitments the process of finding and acquiring skilled
                  human labour for organizational needs and to meet any labour
                  requirement..
                </p>
              </div>
            </div>
            {/* ---Servoce-2--- */}
            <div className='w-full h-full bg-white rounded-lg p-5 md:p-4 lg:p-8 border border-transparent hover:border-lightGray hover:shadow-xl transition-all duration-200 ease-in-out'>
              <div className='w-[20%] md:w-[25%]'>
                <img
                  src={HRConsultancy}
                  alt='HRConsultancy'
                  className='w-full h-auto block object-center object-cover'
                />
              </div>

              <div className='mt-4'>
                <h2 className='text-md md:text-lg lg:text-[24px] font-semibold mb-4'>
                  HR Consulting
                </h2>
                <p className='text-gray text-sm md:text-md lg:text-[16px] leading-[24px]'>
                  Our Human Resources consultants have extensive experience in
                  helping companies innovate; creating significant positive
                  impact on their operating margins
                </p>
              </div>
            </div>
            {/* ---Servoce-3--- */}
            <div className='w-full h-full bg-white rounded-lg p-5 md:p-4 lg:p-8 border border-transparent hover:border-lightGray hover:shadow-xl transition-all duration-200 ease-in-out'>
              <div className='w-[20%] md:w-[25%]'>
                <img
                  src={HeadHunting}
                  alt='HeadHunting'
                  className='w-full h-auto block object-center object-cover'
                />
              </div>

              <div className='mt-4'>
                <h2 className='text-md md:text-lg lg:text-[24px] font-semibold mb-4'>
                  Head Hunting
                </h2>
                <p className='text-gray text-sm md:text-md lg:text-[16px] leading-[24px]'>
                  Through Headhunting process we work closely with an employer,
                  understanding the strategic hiring and growth needs, defining
                  the perimeters.
                </p>
              </div>
            </div>
            {/* ---Servoce-4--- */}
            <div className='w-full h-full bg-white rounded-lg p-5 md:p-4 lg:p-8 border border-transparent hover:border-lightGray hover:shadow-xl transition-all duration-200 ease-in-out'>
              <div className='w-[20%] md:w-[25%]'>
                <img
                  src={CorporateTraining}
                  alt='CorporateTraining'
                  className='w-full h-auto block object-center object-cover'
                />
              </div>

              <div className='mt-4'>
                <h2 className='text-md md:text-lg lg:text-[24px] font-semibold mb-4'>
                  Corporate Training
                </h2>
                <p className='text-gray text-sm md:text-md lg:text-[16px] leading-[24px]'>
                  We have the right caring, experience and dedicated
                  professional for you.
                </p>
              </div>
            </div>
            {/* ---Servoce-5--- */}
            <div className='w-full h-full bg-white rounded-lg p-5 md:p-4 lg:p-8 border border-transparent hover:border-lightGray hover:shadow-xl transition-all duration-200 ease-in-out'>
              <div className='w-[20%] md:w-[25%]'>
                <img
                  src={ProjectReqruite}
                  alt='ProjectReqruite'
                  className='w-full h-auto block object-center object-cover'
                />
              </div>

              <div className='mt-4'>
                <h2 className='text-md md:text-lg lg:text-[24px] font-semibold mb-4'>
                  Projects Recruitment
                </h2>
                <p className='text-gray text-sm md:text-md lg:text-[16px] leading-[24px]'>
                  Built on 10 years of expertise, Oracle HR helps business
                  houses to hire the best professionals. With an unwavering
                  commitment to service excellence.
                </p>
              </div>
            </div>
            {/* ---Servoce-6--- */}
            <div className='w-full h-full bg-white rounded-lg p-5 md:p-4 lg:p-8 border border-transparent hover:border-lightGray hover:shadow-xl transition-all duration-200 ease-in-out'>
              <div className='w-[20%] md:w-[25%]'>
                <img
                  src={DatabaseSearch}
                  alt='DatabaseSearch'
                  className='w-full h-auto block object-center object-cover'
                />
              </div>

              <div className='mt-4'>
                <h2 className='text-md md:text-lg lg:text-[24px] font-semibold mb-4'>
                  Database Selection
                </h2>
                <p className='text-gray text-sm md:text-md lg:text-[16px] leading-[24px]'>
                  After drawing up a matching profile, we search through a
                  number of selective databases. The first touchstone is our own
                  candidate database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------FAQ's------ */}
      <section className='w-full h-auto bg-bananaMania'>
        <div className='w-full h-full container mx-auto p-6 md:p-10 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center'>
          <p className='text-2xl md:text-3xl lg:text-4xl font-medium font-montserrat'>
            What would you <br />
            like to know?
          </p>

          <Accordion questions={HRSolutionsFAQ} />
        </div>
      </section>

      {/* ------Contact------ */}
      <section className='w-full h-auto bg-white'>
        <div className='w-full h-full container mx-auto p-6 py-12 md:p-10 lg:p-28 flex flex-col gap-y-7 items-center justify-center'>
          <p className='text-center text-2xl lg:text-4xl font-medium font-montserrat'>
            Want to learn exactly how your <br className='hidden lg:block' />
            business can benefit?
          </p>

          <Link to={'/contact'}>
            <Button variant='primary'>Contact us</Button>
          </Link>
        </div>
      </section>
    </>
  );
}

