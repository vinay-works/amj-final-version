import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SparklesPreview from "../components/SparklesPreview";

interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Review {
  name: string;
  role: string;
  image: string;
  comment: string;
}

const FounderCard: React.FC<Founder> = ({ name, role, bio, image }) => (
  <div className="items-center bg-gray-50 rounded-lg shadow-md sm:flex dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={image} alt={name} />
    </a>
    <div className="p-5">
      <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{name}</a>
      </h3>
      <span className="text-gray-500 dark:text-gray-400">{role}</span>
      <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{bio}</p>
      <ul className="flex space-x-4 sm:mt-0">
        {[1, 2, 3].map((_, index) => (
          <li key={index}>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ReviewCard: React.FC<Review> = ({ name, role, image, comment }) => (
  <div className="relative group">
    <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
    <div className="cursor-pointer block">
      <div className="relative p-6 leading-none rounded-lg bg-slate-100 ring-1 ring-gray-900/5">
        <div className="flex items-center space-x-4">
          <img src={image} className="w-12 h-12 bg-center bg-cover border rounded-full" alt={name} />
          <div>
            <h3 className="text-lg font-semibold text-black">{name}</h3>
            <p className="text-gray-500 text-md">{role}</p>
          </div>
        </div>
        <p className="leading-normal text-gray-300 text-md mt-2">{comment}</p>
      </div>
    </div>
  </div>
);

interface VerticalTimelineEvent {
  year: string;
  month: string;
  description: string;
}

const AboutUs: React.FC = () => {
  // Define the founder data
  const founders: Founder[] = [
    {
      name: 'John Doe',
      role: 'CEO & Co-Founder',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://cdn-icons-png.freepik.com/512/6833/6833588.png',
    },
    {
      name: 'Jane Smith',
      role: 'CTO & Co-Founder',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://cdn-icons-png.freepik.com/512/6833/6833588.png',
    },
  ];

  // Define the review data
  const reviews: Review[] = [
    {
      name: 'Kanye West',
      role: 'Rapper & Entrepreneur',
      image: 'https://cdn-icons-png.freepik.com/512/6833/6833588.png',
      comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Kanye West',
      role: 'Rapper & Entrepreneur',
      image: 'https://cdn-icons-png.freepik.com/512/6833/6833588.png',
      comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Kanye West',
      role: 'Rapper & Entrepreneur',
      image: 'https://cdn-icons-png.freepik.com/512/6833/6833588.png',
      comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
  ];

  const events: VerticalTimelineEvent[] = [
    { year: '2022', month: 'January', description: 'Started a new projectabcjsd vjkasd vjkv vkjsdfabd jv jsdjlbcjsdb vjksbdjkvbsd vknsdjbsdjkbvkjsdvjkbwdkjvkjsda vjk' },
    { year: '2022', month: 'May', description: 'Launched version 1.0' },
    { year: '2023', month: 'February', description: 'Reached 10,000 users' },
    // Add more events as needed
  ];

  return (
    <div className="bg-gray-100 mt-8">
      {/* SparklesPreview component in the hero section */}
      <SparklesPreview />
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 mt-8">
        <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden mx-2">
          <div className="px-4 py-4">
            <h2 className="text-xl font-bold  flex justify-center items-center text-gray-800">Vision</h2>
            <p className="mt-2 text-gray-600">
              We envision a world where technology empowers individuals and businesses alike.
            </p>
          </div>
        </div>

        <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden mx-2">
          <div className="px-4 py-4">
            <h2 className="text-xl font-bold   flex justify-center items-center text-gray-800">Mission</h2>
            <p className="mt-2 text-gray-600">
              Our mission is to provide premium solutions that transform ideas into reality.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black ">Our Team</h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
          </div>

          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
            {founders.map((founder, index) => (
              <FounderCard key={index} {...founder} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="text-3xl font-extrabold flex justify-center item-center">
          <h2>Milestone</h2>
        </div>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={`${event.month}, ${event.year}`}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">{event.description}</h3>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      </section>
      

      <section id="Reviews" className="py-20 bg-white-900">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
              <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                Words from Others
              </div>
              <h1 className="mb-5 text-3xl font-semibold text-black md:text-center md:text-5xl">It's not just us.</h1>
              <p className="text-xl text-gray-100 md:text-center md:text-2xl">Here's what others have to say about us.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
