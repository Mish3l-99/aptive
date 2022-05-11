import React from "react";
import Testi from "../assets/testi.jpg";
import { FaDatabase } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="py-12">
      <div className="container">
        <div>
          <div className="relative rounded-md overflow-hidden">
            <img
              className="h-[400px] md:max-h-[380px] w-full object-cover"
              src={Testi}
              alt="/"
            />
            {/* layer */}
            <div className="top-0 left-0 absolute w-full h-full bg-gradient-to-r from-black/90 to-aptive/60  flex flex-col justify-center">
              <div className="p-6 text-white max-w-[450px] ">
                <i className="flex gap-2 items-center">
                  <FaDatabase />
                  Staxx
                </i>
                <p className="my-3 p-2 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  illo similique voluptatem, sequi incidunt odit quisquam
                  reprehenderit accusamus illum ipsum.
                </p>
                <h1 className="font-bold my-2">- Marie Chilvers</h1>
                <h2>CEO, Staxx</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
