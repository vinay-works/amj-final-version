import SEOIcon from '../assets/images/seo.png'; 
import PaidMediaIcon from '../assets/images/media.png';
import SocialMediaIcon from '../assets/images/social-media (1).png';
import ContentMarketingIcon from '../assets/images/digital-marketing.png';
import EmailMarketingIcon from '../assets/images/email-marketing.png';
import CROIcon from '../assets/images/chart.png';
import Accordion from '../components/Accordion';
import { HRSolutionsFAQ } from '../utils';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';



const services = [
    {
      title: 'SEO (Search Engine Optimization)',
      description: 'Improve your website\'s visibility and rankings on search engines like Google through strategic SEO techniques such as keyword optimization, content creation, and technical optimizations.',
      icon: SEOIcon,
    },
    {
      title: 'Paid Media (PPC, Paid Social, Programmatic)',
      description: 'Drive targeted traffic to your website through paid advertising channels including PPC (Pay-Per-Click), Paid Social Media Advertising (e.g., Facebook Ads, Instagram Ads), and Programmatic Advertising, ensuring maximum ROI for your ad spend.',
      icon: PaidMediaIcon,
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage with your audience and build brand awareness through social media platforms such as Facebook, Instagram, Twitter, and LinkedIn. Create compelling content, run targeted ad campaigns, and foster community engagement to grow your brand presence online.',
      icon: SocialMediaIcon,
    },
    {
      title: 'Content Marketing',
      description: 'Create valuable and relevant content that resonates with your target audience to attract, engage, and retain customers. Content marketing includes blog posts, articles, videos, infographics, and more, aimed at educating, entertaining, and inspiring your audience.',
      icon: ContentMarketingIcon,
    },
    {
      title: 'Email Marketing',
      description: 'Nurture leads and maintain customer relationships through targeted email campaigns. From personalized newsletters to automated drip campaigns, email marketing is a powerful tool for driving conversions and increasing customer retention.',
      icon: EmailMarketingIcon,
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Optimize your website\'s user experience and conversion funnel to maximize the percentage of visitors who take desired actions, such as making a purchase or filling out a form. CRO techniques include A/B testing, usability testing, and data-driven optimizations.',
      icon: CROIcon,
    },
  ];

  const DigitalMarketing = () => {
    return (
    <>
      <section className='w-full h-[50vh] md:h-[60vh] lg:h-[70vh] dm-bg flex items-center justify-center'>
        <div className='w-full h-full container mx-auto p-5 flex items-center'>
          <div className='w-full h-full flex flex-col items-center justify-center gap-y-4 lg:gap-y-6'>
            <h1 className='text-white text-2xl md:text-3xl lg:text-5xl font-semibold font-montserrat'>
            YugamJTeam: Solving Your Digital Marketing Challenges
            </h1>
            <p className='text-gray text-md md:text-xl md:w-[70%] lg:w-[50%] text-center'>
            YugamJTeam wants to show you how much more productive and profitable your digital marketing efforts can be.

            </p>
          </div>
        </div>
      </section>

<section className='w-full h-auto bg-white flex flex-col md:flex-row'>
  <div className="w-full md:w-1/2 p-10">
    <div className="image object-center text-center">
      <img src="https://i.imgur.com/WbQnbas.png" alt="Company Image" />
    </div>
  </div>
  <div className='w-full md:w-1/2 container mx-auto p-5 md:p-10 lg:p-16 flex flex-col justify-center gap-y-5 md:gap-y-8'>
    <h1 className='text-xl md:text-2xl lg:text-4xl md:w-[70%] lg:w-[65%] font-semibold'>
      YugamJTeam offers comprehensive digital marketing services that empower you to operate your online presence effectively.
    </h1>

    <div className='flex flex-col justify-center gap-y-3'>
      <p className='text-md md:text-lg lg:text-2xl font-medium italic md:w-[70%] lg:w-[65%]'>
        As your digital presence grows, you need the ability to maintain and manage your online operations efficiently, allowing you to focus on what you excel at: driving your digital marketing strategies and growing your business.
      </p>
      {/* <p className='md:text-md font-montserrat lg:w-[80%]'>
        YugamJTeam will strategize, direct, and coordinate the administrative functions of your digital marketing campaigns. We oversee the recruitment, interviewing, and onboarding of new digital marketing talent; collaborate with top executives on strategic planning for your online presence; and act as a vital link between your management team and digital marketing personnel. Below, you'll find a comprehensive list of our digital marketing offerings.
      </p> */}
    </div>
  </div>
</section>


      <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Digital Marketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
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

export default  DigitalMarketing;