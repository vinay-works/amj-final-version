import { Link } from 'react-router-dom';

const RouteError = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-center text-secondary text-3xl font-semibold my-5'>
          The Page your looking is doesn't exists...!
        </h1>
        <Link to={'/'} className='underline'>
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default RouteError;
