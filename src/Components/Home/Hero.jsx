import React, { useState, useEffect } from "react";
import Profile from "../../Assets/profile Pic.png";
import { Link } from "react-router-dom";
import skill from "../Home/Habout";
const Hero = () => {
  const careers = [
    "Software Developer",
    "Frontend Developer",
    "Java Developer",
    "Freelancer",
    "UI/UX Developer",
  ];

  const [careerIndex, setCareerIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (characterIndex < careers[careerIndex].length) {
        setTypedText(
          (prevText) => prevText + careers[careerIndex][characterIndex]
        );
        setCharacterIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCareerIndex(
            (prevCareerIndex) => (prevCareerIndex + 1) % careers.length
          );
          setCharacterIndex(0);
          setTypedText("");
        }, 1000);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [careerIndex, characterIndex, careers]);

  return (
    <div className="w-full h-auto bg-orange-500 flex flex-col md:flex-row justify-center items-center py-10 px-4 lg:px-20 md:h-[670px]">
      {/* Profile Image Section */}
      <div className="flex justify-center mb-6 md:mb-0 md:justify-around w-full md:w-1/2">
        <img
          src={Profile}
          alt="Profile-pic"
          className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[470px] w-[250px] sm:w-[350px] md:w-[320px] lg:w-[450px] rounded-full transform transition-transform duration-300 ease-in-out hover:scale-105 mt-10 md:mt-[60px]"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start justify-center mt-6 md:mt-0 w-full md:w-1/2">
        <div className="mb-8 text-center md:text-left font-serif">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 leading-tight">
            Hey, I am <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl text-white">
              Himanshu Keshri
            </span>
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl mt-2">
            I am{" "}
            <span className="text-white text-2xl sm:text-3xl lg:text-4xl">
              {typedText}
            </span>
          </h3>
        </div>

        {/* Button Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-2 justify-center md:justify-start w-full">
          <Link to={skill}>
            <button className="mb-4 sm:mb-0 border-2 border-white px-6 py-2 text-lg rounded-full text-white hover:bg-white hover:text-orange-500 transition-all duration-400">
              Skills
            </button>
          </Link>
          <Link to="">
            <button className="mb-4 sm:mb-0 border-2 border-white px-6 py-2 text-lg rounded-full text-white hover:bg-white hover:text-orange-500 transition-all duration-400">
              Skills
            </button>
          </Link>
          <Link to="">
            <button className="mb-4 sm:mb-0 border-2 border-white px-6 py-2 text-lg rounded-full text-white hover:bg-white hover:text-orange-500 transition-all duration-400">
              Skills
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
