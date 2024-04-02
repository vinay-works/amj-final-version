import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';



export default function Landing() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh"
          }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
            }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-xl">IT-Solutions</h1>
                  <h1 className="text-white font-semibold text-5xl">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium asperiores itaque doloribus minima recusandae ratione, cumque facilis vero at eveniet. Consequatur doloribus voluptatem quaerat deserunt quod animi dicta amet?
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Card Heading 1</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia corrupti quasi veritatis totam culpa maiores ratione necessitatibus maxime officiis, rem excepturi ad, voluptas magni? Quo officia commodi repellat exercitationem ducimus.                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Card Heading 2
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit necessitatibus ipsam dolorum minima earum illum eius ea exercitationem eveniet. Fugiat explicabo vero dignissimos soluta ipsam illum sint corrupti a!                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Card Heading 3
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae consequuntur, sunt quibusdam molestiae cupiditate mollitia vel dolorem temporibus autem ipsum deserunt beatae officiis magni quos quam eaque? Numquam, id ipsam?                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-grainBrown">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  "Cultivating Seamless Synergy: Engage with Our IT Solutions"
                </h3>

                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  we're dedicated to delivering top-notch services powered by innovative IT solutions. Our website is equipped with state-of-the-art technology to elevate your experience. Using AI-driven personalization, we customize our services to meet your unique needs, ensuring maximum satisfaction. With blockchain authentication, your data and transactions are securely encrypted, guaranteeing transparency and trust.
                </p>

              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl  font-bold text-Black">
                      Heading
                    </h4>
                    <p className="text-md font-light mt-2 text-black">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dolorum error fuga? Sit inventore libero velit. Quisquam, consequatur voluptatibus sed obcaecati, explicabo animi nam nobis architecto delectus atque perspiciatis distinctio.
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-goldenRod">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    Heading
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, voluptates minus! Labore hic facilis quia fuga voluptatem error, ab illum ratione laudantium necessitatibus recusandae debitis aperiam laborum? Facilis, quod repudiandae.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-goldenRod mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            point 1
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-goldenRod mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">point 2</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-goldenRod mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">point 3</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-20 pb-48 flex flex-wrap justify-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Here are our heroes
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  "Meet the champions of innovation, shaping the future with their expertise and dedication. Our heroes, tirelessly crafting solutions to empower your success."
                </p>
              </div>
            </div>


            <div className="flex flex-wrap justify-center">
              <div className="w-full  shadow-2xl md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://w7.pngwing.com/pngs/630/217/png-transparent-tim-cook-industrial-engineer-and-ceo-of-apple-united-states-tim-cook-industrial-engineer-and-ceo-of-apple-chief-executive-tim-cook-head-united-states-business-thumbnail.png"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Ryan Tompson
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      IT-Expert
                    </p>
                    <p>Discription</p>
                    <div className='mt-8'><hr /></div>

                    <div className="mt-6 flex justify-center">
                      <button
                        className=" text-black w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <Twitter />
                      </button>
                      <button
                        className="text-black w-8 h-8  outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <Facebook />
                      </button>
                      <button
                        className=" text-black w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <Linkedin />
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="w-full  shadow-2xl md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://w7.pngwing.com/pngs/630/217/png-transparent-tim-cook-industrial-engineer-and-ceo-of-apple-united-states-tim-cook-industrial-engineer-and-ceo-of-apple-chief-executive-tim-cook-head-united-states-business-thumbnail.png"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Ryan Tompson
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      IT-Expert
                    </p>
                    <p>Discription</p>
                    <div className='mt-8'><hr /></div>

                    <div className="mt-6 flex justify-center">
                      <button
                        className=" text-black w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <Twitter />
                      </button>
                      <button
                        className="text-black w-8 h-8  outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <Facebook />
                      </button>
                      <button
                        className=" text-black w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <Linkedin />
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="w-full  shadow-2xl md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://w7.pngwing.com/pngs/630/217/png-transparent-tim-cook-industrial-engineer-and-ceo-of-apple-united-states-tim-cook-industrial-engineer-and-ceo-of-apple-chief-executive-tim-cook-head-united-states-business-thumbnail.png"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Ryan Tompson
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      IT-Expert
                    </p>
                    <p>Discription</p>
                    <div className='mt-8'><hr /></div>

                    <div className="mt-6 flex justify-center">
                      <button
                        className=" text-black w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <Twitter />
                      </button>
                      <button
                        className="text-black w-8 h-8  outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <Facebook />
                      </button>
                      <button
                        className=" text-black w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <Linkedin />
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="w-full  shadow-2xl md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 ">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://w7.pngwing.com/pngs/630/217/png-transparent-tim-cook-industrial-engineer-and-ceo-of-apple-united-states-tim-cook-industrial-engineer-and-ceo-of-apple-chief-executive-tim-cook-head-united-states-business-thumbnail.png"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Ryan Tompson
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      IT-Expert
                    </p>
                    <p>Discription</p>
                    <div className='mt-8'><hr /></div>

                    <div className="mt-6 flex justify-center">
                      <button
                        className=" text-black w-8 h-8 rounded-full outline-none focus:outline-none mr-2 mb-8"
                        type="button"
                      >
                        <Twitter />
                      </button>
                      <button
                        className="text-black w-8 h-8  outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <Facebook />
                      </button>
                      <button
                        className=" text-black w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <Linkedin />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex pb-20 relative block bg-gray-900 ">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              {/* design */}
              <polygon
                className="text-links fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>


          {/* Achievements */}

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 mt-8">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-black">
                  🏆 Achievements
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident adipisci nulla quos tenetur cupiditate? Animi id vero.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap  mt-12 justify-center">
              <div className="w-full rounded-2xl shadow-slate-700	 shadow-2xl lg:w-3/12 px-4 text-center mt-12">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <img
                    alt="..."
                    src="https://w7.pngwing.com/pngs/630/217/png-transparent-tim-cook-industrial-engineer-and-ceo-of-apple-united-states-tim-cook-industrial-engineer-and-ceo-of-apple-chief-executive-tim-cook-head-united-states-business-thumbnail.png"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-black">
                  Achievement 1
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsum ut voluptatibus saepe. Nobis debitis incidunt.
                </p>
              </div>

              <div className="w-full  rounded-2xl shadow-slate-700	shadow-2xl lg:w-3/12 px-4 text-center mt-12">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <img
                    alt="..."
                    src="https://w7.pngwing.com/pngs/630/217/png-transparent-tim-cook-industrial-engineer-and-ceo-of-apple-united-states-tim-cook-industrial-engineer-and-ceo-of-apple-chief-executive-tim-cook-head-united-states-business-thumbnail.png"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-black">
                  Achievement 2
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit molestias esse reiciendis quo nesciunt laboriosam quam est aut.
                </p>
              </div>


              <div className="w-full rounded-2xl shadow-slate-700 shadow-2xl lg:w-3/12 px-4 text-center mt-12">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <img
                    alt="..."
                    src="https://w7.pngwing.com/pngs/630/217/png-transparent-tim-cook-industrial-engineer-and-ceo-of-apple-united-states-tim-cook-industrial-engineer-and-ceo-of-apple-chief-executive-tim-cook-head-united-states-business-thumbnail.png"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-Black">
                  Achievement 3
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>



        <section className="relative block py-24 lg:pt-0 bg-gray-900 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        // rows="4"
                        // cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-black text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}