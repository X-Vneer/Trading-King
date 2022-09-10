import React from "react";
import SideLogo from "./SideLogo";
const TextArea = ({ children }) => {
  return (
    <div className=" relative basis-[570px] ">
      <div className="absolute top-0 left-0 bottom-0 right-0">
        <div className="flex items-center justify-center h-full w-full ">
          <SideLogo />
        </div>
      </div>
      <div className="about-us-text min-h-[350px]">{children}</div>
    </div>
  );
};

export default TextArea;
