import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/crown.png";
import { AnimatePresence } from "framer-motion";

const Alert = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [closed, setClosed] = useState(false);

  const myVariant = {
    hidden: {
      scale: 0,
    },
    visible: {
      rotate: [1, -1, 1, -1, 1, 0],
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
    exit: {
      scale: 0.4,
      y: "70vh",
      transition: {
        duration: 0.5,
      },
    },
  };
  const logoVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <AnimatePresence mode="wait">
      {!closed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
          }}
          className=" fixed flex items-center  z-[120] top-0 left-0 bottom-0 right-0 bg-[#ffffff43] backdrop-blur-md"
        >
          <div className="container">
            {!closed && (
              <motion.div
                variants={myVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className=" shadow-md rounded-lg p-5 bg-white max-w-sm text-center mx-auto"
              >
                <h1 className="text-gradient text-[26px] font-bold  mb-4">
                  <motion.img
                    variants={logoVariant}
                    src={logo}
                    alt="logo"
                    className="w-[50px] mx-auto -mb-2"
                  />
                  Trading King
                </h1>
                <h2 className=" font-semibold text-gray-600 mb-4 text-[18px]">
                  Please, rotate your Phone for a better data visualization.
                </h2>
                <p className="text-sm">
                  This page contains a candlestick Chart for representing Stocks
                  prices, it's recommended to rotate your phone.
                </p>
                <div className="py-2 text-left text-sm flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                    id="never"
                  />
                  <label htmlFor="never">Don't show this message again!</label>
                </div>
                <button
                  onClick={() => {
                    setClosed(true);
                    if (isChecked) {
                      localStorage.setItem("neverShow", true);
                    }
                  }}
                  className="bg-red-500 text-white font-semibold text-[18px] px-5 mt-5 hover:bg-red-700 transition-all  leading-none py-2 rounded-lg "
                >
                  close
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
