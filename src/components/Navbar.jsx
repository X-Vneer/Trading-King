import React, { useState } from "react";
import logo from "../assets/crown.png";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <nav className=" bg-[rgba(255,255,255,.7)] backdrop-blur-md z-50 sticky top-0 w-full">
      <div className="container  py-4">
        <div className="flex justify-between items-center relative">
          <NavLink to="/" className="flex flex-row items-center gap-4">
            <img src={logo} alt="trading king logo" className="h-[50px]" />
            <span className="font-bold text-[#203446] text-xl capitalize">
              trading king
            </span>
          </NavLink>
          {/*  */}
          <div className=" hidden lg:flex gap-3">
            <ul className="flex items-center mr-10 font-semibold text-gray-600 gap-1  ">
              <li>
                <NavLink
                  className="before:w-0 hover:before:w-[80%] before:transition-all before:duration-300 before:h-[4px] before:bg-gradient-to-tr before:from-[#5d56d8] before:to-[#c544fc] before:absolute before:left-[10%]  before:bottom-0  relative px-6 py-4 block "
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a
                  className="before:w-0 hover:before:w-[80%] before:transition-all before:duration-300 before:h-[4px] before:bg-gradient-to-tr before:from-[#5d56d8] before:to-[#c544fc] before:absolute before:left-[10%]  before:bottom-0  relative px-3 py-4 block "
                  href="#"
                >
                  Flutter App
                </a>
              </li>
              <li>
                <a
                  className="before:w-0 hover:before:w-[80%] before:transition-all before:duration-300 before:h-[4px] before:bg-gradient-to-tr before:from-[#5d56d8] before:to-[#c544fc] before:absolute before:left-[10%]  before:bottom-0 relative px-6 py-4 block "
                  href="#about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="before:w-0 hover:before:w-[80%] before:transition-all before:duration-300 before:h-[4px] before:bg-gradient-to-tr before:from-[#5d56d8] before:to-[#c544fc] before:absolute before:left-[10%]  before:bottom-0 relative px-6 py-4 block "
                  href="#contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <img
              src={twitter}
              alt="twitter"
              className="w-[25px] cursor-pointer"
            />
            <img
              src={github}
              alt="github"
              className="w-[25px]  cursor-pointer"
            />
          </div>
          <button
            id="menu-btn"
            onClick={() => {
              setOpened((pre) => !pre);
            }}
            className={`block hamburger lg:hidden focus:outline-none ${
              opened ? "open" : ""
            } `}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
          <div className={`mobile-list ${opened ? "h-[290px]" : "h-0"}`}>
            <ul className="flex flex-col items-center font-semibold text-gray-600 gap-1  ">
              <li>
                <NavLink className="mobile-list-item" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <a className="mobile-list-item" href="#">
                  Flutter App
                </a>
              </li>
              <li>
                <a className="mobile-list-item" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="mobile-list-item" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex flex-row gap-3 justify-center pb-5">
              <img
                src={twitter}
                alt="twitter"
                className="w-[25px] cursor-pointer"
              />
              <img
                src={github}
                alt="github"
                className="w-[25px]  cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
