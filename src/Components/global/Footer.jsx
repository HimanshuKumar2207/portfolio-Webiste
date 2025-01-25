import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../Assets/Logo_2.png";
import myresume from "../../Assets/My Resume.pdf";
import { SiFacebook } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";

import { ImGithub } from "react-icons/im";
import { RxLinkedinLogo } from "react-icons/rx";

import "../../App.css";

const Footer = () => {
  return (
    <>
      <div className="bg-black w-full h-auto flex flex-col md:flex-row justify-between px-4 py-10 mt-10">
        {/* Left footer section */}
        <div className="text-white flex flex-col items-center md:items-start md:w-1/2">
          <Link to="/Home" className="mb-4">
            <img
              src={MainLogo}
              alt="Logo"
              className="h-[80px] mb-4 md:ml-[85px] mt-10"
            />
          </Link>
          <p className="text-l text-center md:text-left md:whitespace-nowrap mb-4 md:ml-[110px]">
            Built with passion and code. Let’s innovate together! Feel free to
            reach out <br /> — I'm always open to new ideas.
          </p>

          <div className="social_link flex justify-center md:justify-start gap-6 text-sm mb-4 lg:ml-[110px] lg:mt-3 md:ml-[110px] md:mb-0 md:mt-1">
            <Link to="https://www.facebook.com/login/" className="group">
              <SiFacebook className="icon text-4xl text-orange-500 group-hover:text-blue-800 transform transition-all duration-900 hover:scale-110 hover:rotate-[360deg] hover:shadow-lg" />
            </Link>
            <Link
              to="https://www.instagram.com/accounts/login/?hl=en"
              className="group"
            >
              <FaSquareInstagram
                className="icon text-4xl text-orange-500
               group-hover:text-pink-700 transform transition-all duration-900 hover:scale-110 hover:rotate-[360deg] hover:shadow-lg"
              />
            </Link>
            <Link to="https://github.com/HimanshuKumar2207" className="group">
              <ImGithub className="icon text-4xl text-orange-500  group-hover:text-white transform transition-all duration-900 hover:scale-110 hover:rotate-[360deg] hover:shadow-lgl" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/himanshu-kumar-40663122b/"
              className="group"
            >
              <RxLinkedinLogo className="icon text-4xl text-orange-500 group-hover:text-blue-800 transform transition-all duration-900 hover:scale-110 hover:rotate-[360deg] hover:shadow-lg" />
            </Link>
          </div>

          <p className="copyright text-center md:text-left md:ml-[110px] text-md mt-10 mb-10">
            Copyright @2025 All rights reserved | This template is made with ❤️
            by <span className="text-orange-500"> Himanshu Keshri</span>
          </p>
        </div>

        {/* Right footer section */}
        <div className="flex flex-col justify-center items-center md:items-start gap-4 mt-10 md:mt-[300px] md:flex-row sm:flex-row md:mr-20">
          {/* Download CV Button */}
          <div className="mb-4 md:mb-0">
            <input
              type="button"
              value="Download CV"
              onClick={() => {
                const link = document.createElement("a");
                link.href = myresume; // Link to the resume file
                link.download = "My_CV.pdf"; // Name the file to be downloaded
                link.click();
              }}
              className="border-2 border-orange-500 px-3 py-2 text-lg rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-400 cursor-pointer"
            />
          </div>

          {/* Let's Talk Button */}
          <div className="flex">
            <Link to="/contact ">
              <button className="  border-2 border-orange-500 px-3 py-2 text-lg rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-400 ">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
