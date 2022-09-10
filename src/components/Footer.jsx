import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/crown.png";
import { GoMail } from "react-icons/Go";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="py-10 bg-gray-700 text-white" id="footer">
      <div className="contianer px-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-around gap-4">
          <div className="text-center">
            <Link to="/Trading-King">
              <img src={logo} alt="logo" className="w-[50px] mx-auto" />
              <h1 className="text-xl font-bold uppercase mb-4 text-gradient">
                Trading king
              </h1>
            </Link>
            <p className="max-w-[250px]">
              Keep Track of your important Stocks at one place.
            </p>
          </div>
          <div className="text-sm text-center" id="contact">
            <h1 className="text-xl font-bold mb-4 text-gradient  ">
              For Business drop <br /> us a message.
            </h1>
            <a
              href="mailto:xv.neer.business@gmail.com"
              className="text-gray-300 hover:text-white hover:pl-2 transition-all "
            >
              <GoMail className="text-[25px] inline mr-1" />: xv.neer.business
            </a>
            <p
              className="text-gray-300 hover:text-white hover:pl-2 transition-all mt-2 cursor-pointer"
              onClick={() => {
                window.navigator.clipboard.writeText("+972598654780");
              }}
            >
              <FaWhatsapp className="text-[25px] inline mr-1" />: +972598654780
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
