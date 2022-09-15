import { useContext } from "react";
import { NavBarContext } from "../App";
import logo from "../assets/crown.png";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [opened, setOpened] = useContext(NavBarContext);
  return (
    <nav className=" bg-[rgba(255,255,255,.7)] backdrop-blur-md z-50 sticky top-0 w-full">
      <div className="container  py-4">
        <div className="flex justify-between items-center relative">
          <Link to="/Trading-King" className="flex flex-row items-center gap-4">
            <img src={logo} alt="trading king logo" className="h-[50px]" />
            <span className="font-bold text-[#203446] text-xl capitalize">
              trading king
            </span>
          </Link>
          {/*  */}
          <div className=" hidden lg:flex gap-3">
            <ul className="flex items-center mr-10 font-semibold text-gray-600 gap-1  ">
              <li>
                <Link className="mobile-list-item" to="/Trading-King">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="mobile-list-item"
                  to="/Trading-King/Flutter-App"
                >
                  Flutter App
                </Link>
              </li>
              <li>
                <Link className="mobile-list-item" to="/Trading-King/About-US">
                  About Us
                </Link>
              </li>
              <li>
                <a className="mobile-list-item" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <a
              target="_blank"
              href="https://github.com/X-Vneer/Trading-King"
              className="flex items-center"
            >
              <img
                src={github}
                alt="github"
                className="w-[25px]  cursor-pointer"
              />
            </a>
          </div>
          <button
            id="menu-btn"
            onClick={(e) => {
              e.stopPropagation();
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
                <Link className="mobile-list-item" to="/Trading-King">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Trading-King/Flutter-App"
                  className="mobile-list-item"
                >
                  Flutter App
                </Link>
              </li>
              <li>
                <Link className="mobile-list-item" to="/Trading-King/About-US">
                  About Us
                </Link>
              </li>
              <li>
                <a className="mobile-list-item" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex  justify-center pb-5">
              <a target="_blank" href="https://github.com/X-Vneer/Trading-King">
                <img
                  src={github}
                  alt="github"
                  className="w-[25px]  cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
