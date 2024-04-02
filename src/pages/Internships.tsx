import React from "react";
import { appTechList } from "../utils";
import Marquee from "react-fast-marquee";
import { Twitter } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    // Hero section
    <>
      <section className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="Company Image" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              Internships
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              Become job ready{" "}
              <span className="text-indigo-600">Professionals with Us</span>
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose Amj */}

      <div className="bg-black">
        <section
          id="features"
          className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="text-white my-3 flex items-center justify-center font-medium tracking-wider">
              Why choose us
            </span>
            <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Get placed in your dream company
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>

          {/* Grid container with three columns */}
          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-3 gap-10 pt-14">
            {/* Card 1 */}
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                {/* SVG content */}
              </div>
              <h3 className="mt-6 text-white">Career Guidance</h3>{" "}
              {/* Changed to text-white */}
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, commodi
              </p>{" "}
              {/* Changed to text-white */}
            </div>

            {/* Card 2 */}
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                {/* SVG content */}
              </div>
              <h3 className="mt-6 text-white">Project-Based Learning</h3>{" "}
              {/* Changed to text-white */}
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, commodi
              </p>{" "}
              {/* Changed to text-white */}
            </div>

            {/* Card 3 */}
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                {/* SVG content */}
              </div>
              <h3 className="mt-6 text-white">Growth</h3>{" "}
              {/* Changed to text-white */}
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
                ELorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, commodi
              </p>{" "}
              {/* Changed to text-white */}
            </div>

            {/* Card 4 */}
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                {/* SVG content */}
              </div>
              <h3 className="mt-6 text-white">Experience</h3>{" "}
              {/* Changed to text-white */}
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, commodi
              </p>{" "}
              {/* Changed to text-white */}
            </div>

            {/* Card 5 */}
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                {/* SVG content */}
              </div>
              <h3 className="mt-6 text-white">Real-World Application</h3>{" "}
              {/* Changed to text-white */}
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, commodi
              </p>{" "}
              {/* Changed to text-white */}
            </div>
          </div>

          {/* Additional styling for the bottom of the section */}
          <div
            className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
            style={{
              backgroundImage:
                "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
              borderColor: "rgba(92, 79, 240, 0.2)",
            }}
          ></div>
          <div
            className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
            style={{
              backgroundImage:
                "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
              borderColor: "rgba(92, 79, 240, 0.2)",
            }}
          ></div>
        </section>

        {/* Get trained by IT professionals section*/}
        <div className="bg-cyan-100 min-h-screen pt-20 px-5">
          <h1 className="text-2xl font-bold ml-5 mt-5">
            Get trained by IT professionals
          </h1>
          <h2 className="text-xl font-semibold ml-5 mt-5">
            Connect with top professionals
          </h2>
          <div className="grid grid-cols-3 gap-4 mt-5">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="max-w-xs mx-auto bg-white rounded-lg shadow-md p-4 transition-all duration-200 ease-in-out hover:bg-blue-200 hover:scale-105"
              >
                <div className="flex items-center mb-5">
                  <img
                    className="w-20 h-20 rounded-full mr-5"
                    src="https://picsum.photos/200"
                    alt="Profile picture"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold">Peter Parker</h3>
                    <p className="text-gray-600">Software Engineer</p>
                  </div>
                </div>
                <div className="flex justify-center mt-5">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 mx-3"
                  >
                    <button
                      className=" text-black w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <Twitter />
                    </button>
                    {/* <svg
                      className="w-6 h-6 fill-current text-black border border-black rounded-full hover:text-blue-500 hover:border-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 2.02-2.31-.88.49-1.85.8-2.9 1.1-.88-.49-1.56-1.03-2.02-2.31.9-.75 1.6-1.5 2.02-2.31-.48-.88-.88-1.6-1.3-2.31 1.12-.49 2.02-.88 2.75-1.31-.78.49-1.52-1.1-2.02-2.31-.48-.88-.88-1.6-1.3-2.31 1_1z" />
                    </svg> */}
                  </a>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 mx-3"
                  >
                    <svg
                      className="w-6 h-6 fill-current text-black border border-black rounded-full hover:text-blue-500 hover:border-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1_75 1_764-.783 1_764-1.75 1_764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c0 2.369 4 1.75 4 1.75s4-2.631 4-1.75v-5.604h3v11.396c0 3.369-4 3.113-4 0v-5.604c0-2.368 4-1.75 4-1.75s-4 2.632-4 1.75v5.604z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 mx-3"
                  >
                    <svg
                      className="w-6 h-6 fill-current text-black border border-black rounded-full hover:text-blue-500 hover:border-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2a10 10 0 0 0-9.95 10c.26 0 .5.03.75.07a10 10 0 0 0 9.95-10c-.26 0-.5-.03-.75-.07zm10 10h-9.95v-9.95h9.95v9.95zm-10 0h-9.95v-9.95h9.95v9.95zm-10 0h-9.95v-9.95h9.95v9.95z" />
                    </svg>
                  </a>
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-semibold">About me</h3>
                  <p className="text-gray-600 mt-2">
                    I am a software Engineer having an experience of 5 years in
                    the industry. Connect with me to know more!{" "}
                  </p>
                </div>
                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-4 rounded mt-4">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Companies collaboated section*/}
        <section className="py-6 md:py-[60px] lg:py-[60px] bg-white text-black">
          <div className="container mx-auto p-4">
            <div>
              <h1 className="text-2xl font-bold ml-5 mt-5">
                We are connected with
              </h1>
              <h2 className="text-xl font-semibold ml-5 mt-5">
                We will help you get into the best! (Replace below images with
                company logos)
              </h2>
            </div>

            {/* ------Marquee_Effects------ */}
            <div className="w-full h-full mt-8">
              <Marquee speed={40} style={{ margin: 0 }}>
                <div className="w-full h-auto flex items-center justify-center gap-x-[100px]">
                  <span className="text-lg text-black font-semibold font-montserrat bg-canaryYellow py-1 px-4 rounded-3xl">
                    MOBILE
                  </span>
                  {appTechList.map((tech) => {
                    return (
                      <div className="flex items-center" key={tech.id}>
                        <span className="w-[60px] block overflow-hidden">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="block w-full object-center object-cover"
                          />
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full h-auto flex items-center justify-center gap-x-[80px] my-8 mr-[100px]">
                  <span className="text-lg text-black font-semibold font-montserrat bg-canaryYellow py-1 px-4 rounded-3xl">
                    MOBILE
                  </span>
                  {appTechList.map((tech) => {
                    return (
                      <div className="flex items-center" key={tech.id}>
                        <span className="w-[60px] block overflow-hidden">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="block w-full object-center object-cover"
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
      </div>
      {/* Testimonial section */}
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            {/* Testimonial 1 */}
            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold">Maria Smantha</h5>
              <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                Web Developer
              </h6>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  className="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>
              <ul className="mb-0 flex justify-center">
                {/* Repeat the list items for each testimonial */}
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                {/* Add more list items as needed */}
              </ul>
            </div>
            {/* Testimonial 2 */}
            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold">Lisa Cudrow</h5>
              <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                Graphic Designer
              </h6>
              <p className="mb-4">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  className="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>
              <ul className="mb-0 flex justify-center">
                {/* Repeat the list items for each testimonial */}
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                {/* Add more list items as needed */}
              </ul>
            </div>
            {/* Testimonial 3 */}
            <div className="mb-12 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold">John Smith</h5>
              <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                Marketing Specialist
              </h6>
              <p className="mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  className="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>
              <ul className="mb-0 flex justify-center">
                {/* Repeat the list items for each testimonial */}
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    />
                  </svg>
                </li>
                {/* Add more list items as needed */}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturesSection;
