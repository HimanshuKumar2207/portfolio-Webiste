import React from "react";
import { Link } from "react-router-dom";
import Html from "../../Assets/html logo.png";
import css from "../../Assets/css logo.png";
import tailwind from "../../Assets/tailwind.jpg";
import javascript from "../../Assets/javascript.png";
import Rec from "../../Assets/physics.png";
import Java from "../../Assets/java logo.png";
import C from "../../Assets/C++ logo.png";
import Figma from "../../Assets/figma logo.png";
import bootstrap from "../../Assets/bootstrap logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imagesData = [
  { id: 1, src: Html, alt: "Image 1", path: "../../Assets/html logo.png" },
  { id: 2, src: css, alt: "Image 2", path: "../../Assets/css logo.png" },
  { id: 3, src: tailwind, alt: "Image 2", path: "../../Assets/tailwind.jpg" },
  {
    id: 4,
    src: javascript,
    alt: "Image 2",
    path: "../../Assets/javascript.png",
  },
  { id: 5, src: Rec, alt: "Image 2", path: "../../Assets/React logo.png" },
  { id: 6, src: Java, alt: "Image 2", path: "../../Assets/java logo.png" },
  { id: 7, src: C, alt: "Image 2", path: "../../Assets/C++ logo.png" },
  { id: 8, src: Figma, alt: "Image 2", path: "../../Assets/figma logo.png" },
  {
    id: 9,
    src: bootstrap,
    alt: "Image 2",
    path: "../../Assets/figma logo.png",
  },
];

const Habout = () => {
  const moveable = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6, // Default for large screens
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1023, // for medium devices (tablets, small laptops)
        settings: {
          slidesToShow: 4, // Show 4 slides on medium screens
        },
      },
      {
        breakpoint: 768, // for smaller devices (tablets)
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 2500,
          // Show 2 slides on tablets
        },
      },
      {
        breakpoint: 480, // for very small devices (phones)
        settings: {
          slidesToShow: 2, // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
    <>
      <div className="mb-20 sm:w-[100%]">
        <div className="h-auto bg-white flex flex-col w-full gap-10 justify-around items-center px-4 md:px-5 lg:w-[90%] lg:gap-[100px] lg:ml-16 md:flex md:flex-row ">
          {/* Right Section */}
          <div className="w-full mb-8 md:mb-0 md:mr-10 ">
            <h2 className="text-4xl text-center sm:text-5xl md:text-5xl font-bold mb-6 mt-10 md:text-left ">
              My Skills
            </h2>
            <div className="">
              <p className="mb-8 text-sm sm:text-base md:text-lg">
                Hi, I’m Himanshu, a front-end developer focused on building
                responsive and user-friendly web applications. Proficient in
                JavaScript, React, HTML, CSS, and Tailwind CSS, I create dynamic
                interfaces that enhance user experiences. I enjoy collaborating
                with teams to solve complex problems and deliver high-quality
                solutions. Let’s create something amazing together!
              </p>
              <h4 className="text-sm sm:text-base md:text-lg text-orange-500">
                I have frontend expertise and proficiency in programming
                languages like Python, Java, C++, and SQL. This diverse skill
                set allows me to approach development from a full-stack
                perspective, tackling web applications, APIs, and data
                processing tasks effectively.
              </h4>
            </div>
          </div>

          {/* Left Section */}
          <div className="w-[90%] mr-10 space-y-6">
            <div className="skill-bar">
              <label
                htmlFor="frontend-skill"
                className="block text-orange-500 font-bold text-sm sm:text-base"
              >
                Frontend
              </label>
              <div className="relative">
                {/* Range Input */}
                <input
                  id="frontend-skill"
                  type="range"
                  min="0"
                  max="100"
                  value="80" // Static value
                  className="w-full h-1 bg-transparent appearance-none"
                  step="1"
                />
                {/* Black Track */}
                <div className="absolute top-3 left-0 w-full h-1 bg-slate-700 rounded-full"></div>
                {/* Orange Progress */}
                <div
                  className="absolute top-3 left-0 h-1 bg-orange-500 rounded-full"
                  style={{ width: "80%" }} // Static width based on the value
                ></div>
                {/* Percentage Display */}
                <div className="absolute top-5 left-0 text-slate-700 text-sm sm:text-base font-semibold">
                  80%
                </div>
              </div>
            </div>

            <div className="skill-bar">
              <label
                htmlFor="ui-ux-skill"
                className="block text-orange-500 font-bold text-sm sm:text-base"
              >
                UI & Ux
              </label>
              <div className="relative">
                {/* Range Input */}
                <input
                  id="ui-ux skill"
                  type="range"
                  min="0"
                  max="100"
                  value="70" // Static value
                  className="w-full h-1 bg-transparent appearance-none"
                  step="1"
                />
                {/* Black Track */}
                <div className="absolute top-3 left-0 w-full h-1 bg-slate-700 rounded-full"></div>
                {/* Orange Progress */}
                <div
                  className="absolute top-3 left-0 h-1 bg-orange-500 rounded-full"
                  style={{ width: "70%" }} // Static width based on the value
                ></div>
                {/* Percentage Display */}
                <div className="absolute top-5 left-0 text-slate-700 text-sm sm:text-base font-semibold">
                  70%
                </div>
              </div>
            </div>

            <div className="skill-bar">
              <label
                htmlFor="Java"
                className="block text-orange-500 font-bold text-sm sm:text-base"
              >
                Java
              </label>
              <div className="relative">
                {/* Range Input */}
                <input
                  id="java"
                  type="range"
                  min="0"
                  max="100"
                  value="70" // Static value
                  className="w-full h-1 bg-transparent appearance-none"
                  step="1"
                />
                {/* Black Track */}
                <div className="absolute top-3 left-0 w-full h-1 bg-slate-700 rounded-full"></div>
                {/* Orange Progress */}
                <div
                  className="absolute top-3 left-0 h-1 bg-orange-500 rounded-full"
                  style={{ width: "70%" }} // Static width based on the value
                ></div>
                {/* Percentage Display */}
                <div className="absolute top-5 left-0 text-slate-700 text-sm sm:text-base font-semibold">
                  70%
                </div>
              </div>
            </div>

            <div className="skill-bar">
              <label
                htmlFor="Communication"
                className="block text-orange-500 font-bold text-sm sm:text-base"
              >
                Communication
              </label>
              <div className="relative">
                {/* Range Input */}
                <input
                  id="Communication"
                  type="range"
                  min="0"
                  max="100"
                  value="90" // Static value
                  className="w-full h-1 bg-transparent appearance-none"
                  step="1"
                />
                {/* Black Track */}
                <div className="absolute top-3 left-0 w-full h-1 bg-slate-700 rounded-full"></div>
                {/* Orange Progress */}
                <div
                  className="absolute top-3 left-0 h-1 bg-orange-500 rounded-full"
                  style={{ width: "90%" }} // Static width based on the value
                ></div>
                {/* Percentage Display */}
                <div className="absolute top-5 left-0 text-slate-700 text-sm sm:text-base font-semibold">
                  90%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Section Moveable Slider */}
        <div className=" hidden md:block lg:block slider-container mt-10 w-full mx-auto rounded-xl lg:w-[80%] md:w-[70%] lg:mr-24">
          <Slider {...moveable}>
            {imagesData.map((image) => (
              <div key={image.id}>
                <Link to="">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] md:h-[160px] md:w-[160px] lg:h-[150px] lg:w-[150px] rounded-3xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-white md:mt-10"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Habout;
