import { Link, NavLink } from "react-router-dom";
import MainLogo from "../../Assets/Logo_2.png";
import React from "react";
import "../../App.css";
import NavHam from "..//global/NavHam";

const Pages = [
  {
    name: "Home",
    pathName: "/Home",
  },
  {
    name: "About",
    pathName: "/About",
  },
  {
    name: "Work",
    pathName: "/Work",
  },
  {
    name: "Services",
    pathName: "/Services",
  },
  {
    name: "Contact",
    pathName: "/Contact",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed bg-orange-500 top-0 flex items-center md:justify-around justify-center p-1 cursor-pointer shadow-xl z-10 ">
        <Link
          to="/Home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={MainLogo} alt="Logo" className="h-16 " />
        </Link>

        <div className="hidden md:flex space-x-10 text-[17px] items-center ">
          {Pages.map((page, index) => (
            <NavLink
              key={index}
              to={page.pathName}
              className="text-white font-semibold relative group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {page.name}
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-700 ease-out group-hover:w-full top-8 " />
            </NavLink>
          ))}
        </div>

        <Link
          to="/Contact"
          className="hidden md:block"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <button className="border-2 text-white border-white px-4 py-1 text-l rounded-full hover:bg-white hover:text-orange-500 transition-all duration-400 lg:block ">
            Let's Talk
          </button>
        </Link>
      </nav>
      <div className="md:hidden lg:hidden ">
        <NavHam />
      </div>
    </>
  );
};

export default Navbar;
