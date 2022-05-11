import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const FAQ = () => {
  return (
    <div className="py-12">
      <div className="container">
        <div className="grid gap-8 grid-cols-2 max-w-[800px]">
          <div className="col-span-2 md:col-span-1 flex-1">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p>Can't find the answer you're looking for?</p>
            <p>
              Reach out to our{" "}
              <span className="text-aptive cursor-pointer">
                {" "}
                Customer Support{" "}
              </span>
              team.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="my-4">
              <h1 className="font-semibold">How do you make holy water?</h1>
              <p className="text-gray-500 ml-2 flex items-center gap-2">
                <BsArrowReturnRight />
                <span> boil the hell out of it. Lorem, ipsum dolor.</span>
              </p>
            </div>
            <div className="my-4">
              <h1 className="font-semibold">How do you make holy water?</h1>
              <p className="text-gray-500 ml-2 flex items-center gap-2">
                <BsArrowReturnRight />
                <span> boil the hell out of it. Lorem, ipsum dolor.</span>
              </p>
            </div>
            <div className="my-4">
              <h1 className="font-semibold">How do you make holy water?</h1>
              <p className="text-gray-500 ml-2 flex items-center gap-2">
                <BsArrowReturnRight />
                <span> boil the hell out of it. Lorem, ipsum dolor.</span>
              </p>
            </div>
            <div className="my-4">
              <h1 className="font-semibold">How do you make holy water?</h1>
              <p className="text-gray-500 ml-2 flex items-center gap-2">
                <BsArrowReturnRight />
                <span> boil the hell out of it. Lorem, ipsum dolor.</span>
              </p>
            </div>
            <div className="my-4">
              <h1 className="font-semibold">How do you make holy water?</h1>
              <p className="text-gray-500 ml-2 flex items-center gap-2">
                <BsArrowReturnRight />
                <span> boil the hell out of it. Lorem, ipsum dolor.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
