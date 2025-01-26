import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const CustomMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !overlayRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Menu container */}
      <div className="w-full h-[60px] bg-slate-700 flex justify-between items-center px-5 sm:px-10 fixed top-16 left-0 z-30">
        {/* Logo or Title */}
        <h3 className="text-white text-xl font-semibold">Menu</h3>

        {/* Hamburger Icon */}
        <div className="flex items-center gap-3 cursor-pointer">
          <RxHamburgerMenu
            onClick={toggleMenu}
            className="text-white text-3xl sm:hidden" // Show on small screens
          />
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={overlayRef}
          onClick={closeMenu}
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"
        ></div>
      )}

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-[123px] w-full bg-black text-white text-l flex flex-col items-start px-5 py-4 z-30"
        >
          <Link
            to="/Home"
            className="py-2 hover:bg-slate-700 w-full px-3 rounded-lg"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/About"
            className="py-2 w-full px-3 hover:bg-slate-700 rounded-lg"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/Work"
            className="py-2 w-full px-3 hover:bg-slate-700 rounded-lg"
            onClick={closeMenu}
          >
            Work
          </Link>
          <Link
            to="/Services"
            className="py-2 w-full px-3 hover:bg-slate-700 rounded-lg"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/Contact"
            className="py-2 w-full px-3 hover:bg-slate-700 rounded-lg"
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
