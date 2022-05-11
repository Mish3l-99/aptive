import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <h1 className="text-2xl md:text-4xl font-bold my-3">
              Get In Touch
            </h1>
            <p className="my-3 p-2 bg-white rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              voluptates assumenda non tempore labore dignissimos minima iste.
            </p>
            <address className="text-aptive mt-4 mb-8">
              742 Evergreen Terrance{" "}
              <span className="block">Springfield, OR 12345.</span>
            </address>
            <div className="my-3">
              <div className="flex items-center gap-2">
                <FaPhone size={20} />
                <span>+1 (555)123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <IoMdMail size={20} />
                <span>support@example.com</span>
              </div>
            </div>

            <p className="mt-8">
              Looking for careers?{" "}
              <span className="cursor-pointer text-aptive">
                View all job openings
              </span>
              .
            </p>
          </div>

          {/* form */}
          <div className="col-span-2 md:col-span-1 p-3">
            <form className="contact-form" action="">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="phone" placeholder="Phone" />
              <textarea placeholder="Message" rows="6" />
              <div className="flex gap-2  my-3">
                <input type="checkbox" className="mt-[6px]" />
                <span className="flex-1">
                  By checking this box, you agree to the{" "}
                  <span className="text-aptive cursor pointer">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="text-aptive cursor pointer">
                    Cookie Policy
                  </span>
                  .
                </span>
              </div>
              <button className="bg-aptive rounded text-white hover:bg-transparent hover:text-black hover:bg-white border-2 transition-all duration-500">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
