export default function () {
  return (
    <>
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
            React, Angular and AWS help you accelarate your business via modern
            custom software solutions.
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
            affordable marketing solutions for any enterprise in any industry.
            Opt for the best digital marketing solutions to engage and grow your
            audience.
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
            In this age of complex Human Resource operations, a Cost Effective
            Managed HR Service from HR Solutions allows you to focus on your
            business, not your corporate HR Function. Our Managed HR Solutions
            bring reduced operating cost to your Human Resources Department,
            while ensuring the latest regulation and best practices,
            safeguarding state and federal compliance!
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
            affordable marketing solutions for any enterprise in any industry.
            Opt for the best digital marketing solutions to engage and grow your
            audience.
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
    </>
  );
}
