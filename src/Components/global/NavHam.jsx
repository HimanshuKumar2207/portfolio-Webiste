import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

const CustomMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative flex justify-center mt-[75px] z-30  ">
      {/* Menu container */}
      <div className=" w-full h-[80px]  bg-slate-700 flex justify-center items-center px-5 fixed ">
        <div className="flex justify-end  items-center gap-3 px-5 w-[140px] h-10 bg-black ml-[70%] border-2 cursor-pointer rounded-sm py-5">
          {/* Title */}
          <h3 className="text-white text-xl font-semibold">Menu</h3>

          {/* Hamburger Icon */}
          <RxHamburgerMenu
            onClick={toggleMenu}
            className="text-white text-2xl font-semibold mt-1"
          />
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="absolute bg-black bg-opacity-50 z-10"
        ></div>
      )}

      {/* Mobile Menu (appear when the hamburger icon is clicked) */}
      {isMenuOpen && (
        <div className="absolute top-[80px] w-full bg-black text-white text-lg flex flex-col items-start px-5 py-4 z-20 ">
          <Link
            to="/Home"
            className="py-2 hover:bg-slate-700 w-[100%] px-3 rounded-lg"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/About"
            className="py-2 w-[100%] px-3 hover:bg-slate-700 rounded-lg"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/Work"
            className="py-2 w-[100%] px-3 hover:bg-slate-700 rounded-lg"
            onClick={closeMenu}
          >
            Work
          </Link>
          <Link
            to="/Services"
            className="py-2 w-[100%] px-3 hover:bg-slate-700 rounded-lg"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/Contact"
            className="py-2 w-[100%] px-3 hover:bg-slate-700 rounded-lg"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default CustomMenu;
