import React from "react";

import { FaInstagram, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-12 pb-4 bg-[#22262a] text-gray-100">
      <div className="container">
        <div className="grid grid-cols-4 lg:grid-cols-7">
          {/* four stffs */}
          <div className="col-span-2 lg:col-span-1">
            <h1 className="text-gray-400 font-bold hover:text-white transition-all ease-in cursor-pointer duration-600">
              Solution
            </h1>
            <ul className="p-2 mb-4 footer-ul">
              <li>Marketing</li>
              <li>Analysis</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h1 className="text-gray-400 font-bold hover:text-white transition-all ease-in cursor-pointer duration-600">
              Support
            </h1>
            <ul className="p-2 mb-4 footer-ul">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h1 className="text-gray-400 font-bold hover:text-white transition-all ease-in cursor-pointer duration-600">
              Company
            </h1>
            <ul className="p-2 mb-4 footer-ul">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h1 className="text-gray-400 font-bold hover:text-white transition-all ease-in cursor-pointer duration-600">
              Legal
            </h1>
            <ul className="p-2 mb-4 footer-ul">
              <li>Claim</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Terms</li>
            </ul>
          </div>

          {/* subscribe */}
          <div className="col-span-4 lg:col-span-3 p-2">
            <h1 className="my-2 font-bold text-white text-xl">
              Subscribe to our Newsletter
            </h1>
            <p className="p-2 my-2 text-aptive">
              The latest news, articels and resources sent to your inbox weekly.
            </p>
            <form className="flex gap-x-1 mt-3 text-sm md:text-lg" action="">
              <input
                type="email"
                placeholder="Enter your Email.."
                className="flex-1 py-1 px-2 rounded-md text-black"
              />
              <button className="rounded-md bg-aptive">Submit</button>
            </form>
          </div>
        </div>

        {/* lower sectio */}
        <div className="border border-gray-700 border-aptive my-2" />
        <div className="flex flex-col gap-2 md:flex-row md:justify-between items-center py-2">
          <p className="flex-1">
            &copy; <span>Workflow, Inc. All Rights Reserved.</span>
          </p>
          <div className="footer-social">
            <i>
              <FaFacebook size={23} />
            </i>
            <i>
              <FaTwitter size={23} />
            </i>
            <i>
              <FaInstagram size={23} />
            </i>
            <i>
              <FaGithub size={23} />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
