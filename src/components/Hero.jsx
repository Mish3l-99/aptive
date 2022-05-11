import React from "react";

import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="md:h-screen bg-[#22262a] pt-28 lg:pt-40 pb-4 text-gray-200 ">
      <div className="container">
        <div className="grid grid-cols-3 gap-y-12">
          {/* first col */}
          <div className="col-span-3 md:col-span-2 p-2">
            <h1 className="my-3 text-white text-3xl md:text-5xl font-bold">
              Data to enrich your
            </h1>
            <h1 className="mb-8 mt-2">
              <span className="text-aptive font-bold text-2xl md:text-4xl">
                {" "}
                Online Bussiness
              </span>
            </h1>
            <p className="text-gray-400 text-md md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              natus quaerat blanditiis inventore ex accusamus odio a officia
              neque praesentium, aperiam eveniet!
            </p>
            <div className="mt-16">
              <p className="mb-4">USED BY</p>
              <div className="flex space-x-6 items-center used-by">
                <i>
                  <FaDatabase />
                  Staxx
                </i>
                <i>
                  <FaAsterisk />
                  Star AI
                </i>
                <i>
                  <FaAccusoft />
                  Accusoft
                </i>
              </div>
            </div>
          </div>

          {/* col 2 */}
          <div className="col-span-3 md:col-span-1 p-2">
            <div className="bg-gray-100 text-black rounded-md">
              {/* upper part */}
              <div className="p-4">
                <p className="text-xl mb-3">Sign In with:</p>
                {/* social logins */}
                <div className="flex">
                  <i className="flex-1 items-center justify-center flex border hover:text-aptive duration-400 transition-all rounded-md py-1">
                    <FaFacebook size={20} />
                  </i>
                  <i className="flex-1 items-center justify-center flex border hover:text-aptive duration-400 transition-all rounded-md py-1">
                    <FaTwitter size={20} />
                  </i>
                  <i className="flex-1 items-center justify-center flex border hover:text-aptive duration-400 transition-all rounded-md py-1">
                    <FaGithub size={20} />
                  </i>
                </div>
                <div className="divider" />
                <form action="" className="heroform">
                  <input type="text" placeholder="Name.." />
                  <input type="email" placeholder="Email.." />
                  <input type="password" placeholder="Password.." />
                  <button className="bg-aptive my-4 rounded-md text-white">
                    Create your account
                  </button>
                </form>
              </div>

              {/* bottom part */}
              <div className="bg-gray-300 p-4 rounded-b-md">
                <div>
                  By signing up, you agree to our:
                  <span className="cursor-pointer hover:text-indigo-700 text-aptive">
                    {" "}
                    Terms, Data Policy
                  </span>{" "}
                  and
                  <span className="cursor-pointer hover:text-indigo-700 text-aptive">
                    {" "}
                    Cookies Policy
                  </span>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
