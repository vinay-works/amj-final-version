import { SparklesCore } from './sparkles';

const SparklesPreview = () => {
  return (
    <div className='h-[50rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md'>
      <div className='py-12 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl flex justify-center item-center  font-bold text-white'>
            👋About Us
          </h1>
          <p className='mt-2 text-lg text-white'>
            Crafting premium experiences for our clients.
          </p>
        </div>
      </div>
      <h1 className='md:text-7xl text-3xl lg:text-9xl font-modernGallery font-bold text-center text-white relative z-15'>
        YugAmj Team {/* Changed the text here */}
      </h1>
      <div className='w-[40rem] h-40 relative'>
        {/* Gradients */}
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

        {/* Core component */}
        <SparklesCore
          background='transparent'
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className='w-full h-full'
          particleColor='#FFFFFF'
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className='absolute inset-0 w-full h-full bg-black'
          style={{
            maskImage:
              'radial-gradient(350px 200px at top, transparent 20%, white)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default SparklesPreview;
