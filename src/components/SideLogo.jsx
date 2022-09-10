import React from "react";
import logo from "../assets/crown.png";

const SideLogo = () => {
  return (
    <div>
      <img src={logo} alt="logo" className="max-w-[180px] mx-auto" />
      <h1 className="text-[45px] font-bold uppercase text-center  text-gradient">
        Trading king
      </h1>
    </div>
  );
};

export default SideLogo;
