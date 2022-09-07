import React from "react";
import logo from "../assets/crown.png";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-slate-300 to-[#f9f9f9]">
      <div className="container  py-4">
        <div className="flex justify-between">
          <div className="flex flex-row items-center gap-4">
            <img src={logo} alt="trading king logo" className="h-[50px]" />
            <span className="font-bold text-[#203446] text-xl capitalize">
              trading king
            </span>
          </div>
          {/*  */}
          <div className="flex gap-3">
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
