import React from "react";

const SmallAlert = ({ text }) => {
  return (
    <div>
      <div
        className={` border-b-4 border-[#ffecb5] bg-[#fff3cd]  p-2 max-w-md`}
      >
        <h4 className="text-gray-700 font-semibold text-center sm:text-left">
          {text}
        </h4>
      </div>
    </div>
  );
};

export default SmallAlert;
