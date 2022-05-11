import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [MobNav, setMobNav] = useState(false);
  const handleNav = () => setMobNav(!MobNav);
  return (
    <div id="navbar" className="w-full z-20 fixed bg-[#22262a]">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img className="h-8 md:h-10 object-cover" src={Logo} alt="/" />
          </Link>
        </div>
        <ul className="hidden md:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricings">Pricing</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger&cross */}
        <div
          className="md:hidden text-white flex items-center"
          onClick={handleNav}
        >
          {MobNav ? <FiX className="w-5" /> : <FiMenu className="w-5" />}
        </div>
      </div>

      {/* MobNav */}
      <div className={MobNav ? "mobnav duration-1000" : "mobnav ml-[-100%]"}>
        <ul>
          <li onClick={handleNav}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleNav}>
            <Link to="/pricings">Pricing</Link>
          </li>
          <li onClick={handleNav}>
            <Link to="/faq">FAQ</Link>
          </li>
          <li onClick={handleNav}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* <div className="flex flex-col">
          <button className="">Use DeFi</button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
