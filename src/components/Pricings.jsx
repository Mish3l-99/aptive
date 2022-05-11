import React from "react";

const Pricings = () => {
  return (
    <div>
      <div className="container py-12">
        <div className="flex flex-col gap-y-6 md:flex-row md:justify-between items-center">
          <div className="flex-1">
            <h1 className="text-black font-bold text-3xl md:text-5xl mb-5">
              Everything you need for{" "}
              <span className="text-aptive">$99 a month</span>
            </h1>
            <p>
              Includes every feature we offer plus unlimited projects and
              unlimited users.
            </p>
          </div>
          <button className="bg-aptive text-white rounded-md">
            Get Started Today
          </button>
        </div>

        {/* divider */}
        <div className="divider" />

        {/* under section */}
        <div className="p-3 grid grid-cols-3 gap-4 md:gap-7">
          <div className="col-span-3 md:col-span-1">
            <h1 className="text-aptive uppercase my-3">Everything you need</h1>
            <h2 className="ml-4 text-3xl font-bold my-2">
              All-in-one Platform
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              magnam, nesciunt explicabo obcaecati ea ducimus rerum corporis
              inventore eligendi? Maxime, voluptatibus consectetur!
            </p>
          </div>
          <div className="col-span-3 md:col-span-1 pricingg">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="col-span-3 md:col-span-1 pricingg">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricings;
