import React from "react";
import logo from "../assets/crown.png";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-[rgba(255,255,255,.7)] backdrop-blur-md z-50 sticky top-0 w-full">
      <div className="container  py-4">
        <div className="flex justify-between">
          <NavLink to="/" className="flex flex-row items-center gap-4">
            <img src={logo} alt="trading king logo" className="h-[50px]" />
            <span className="font-bold text-[#203446] text-xl capitalize">
              trading king
            </span>
          </NavLink>
          {/*  */}
          <div className="flex gap-3">
            <ul className="flex items-center mr-10 font-semibold text-gray-600   ">
              <li>
                <NavLink className="px-6 py-4 block " to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <a className="px-3 py-2 block " href="#">
                  Flutter App
                </a>
              </li>
              <li>
                <a className="px-6 py-4 block " href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="px-6 py-4 block " href="#contact">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
