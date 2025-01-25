import React from "react";
import rec from "../../Assets/physics.png";
import java from "../../Assets/java.png";
import js from "../../Assets/js-file.png";
import uiux from "../../Assets/ui-ux (1).png";

const Expertise = () => {
  return (
    <>
      <div className="w-full mt-[100px] mb-20">
        <h1 className="text-5xl sm:text-5xl md:text-5xl mb-14 sm:mb-6 md:mb-10 ml-5 md:font-bold md:ml-[130px]">
          My Expertises
        </h1>

        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-10 w-full place-items-center lg:w-[80%] lg:ml-[200px] lg:gap-8">
          {/* Card 1 */}
          <div className="w-[90%] sm:w-[500px] h-auto bg-white hover:shadow-2xl hover:bg-orange-500 py-14 px-14 rounded-3xl transition-all duration-500 ease-in-out">
            <img
              src={rec}
              alt="React-icon"
              className="h-[100px] w-[100px] mb-5"
            />
            <h2 className="text-2xl font-bold mb-3">Experience & Direction</h2>
            <p className="text-md">
              I have extensive hands-on experience with React, building dynamic,
              high-performance user interfaces. I am proficient in using React
              hooks, state management, component lifecycle, and integrating with
              APIs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[90%] sm:w-[500px] h-auto bg-white hover:shadow-2xl hover:bg-orange-500 py-14 px-14 rounded-3xl transition-all duration-500 ease-in-out">
            <img src={js} alt="js-icon" className="h-[100px] w-[100px] mb-5" />
            <h2 className="text-2xl font-bold mb-3">Experience & Direction</h2>
            <p className="text-md">
              I have extensive hands-on experience with JavaScript, and I excel
              at developing interactive web applications. I am proficient in
              modern JavaScript concepts, including asynchronous programming and
              event handling.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-[90%] sm:w-[500px] h-auto bg-white hover:shadow-2xl hover:bg-orange-500 py-14 px-14 rounded-3xl transition-all duration-500 ease-in-out">
            <img
              src={uiux}
              alt="uiux-icon"
              className="h-[100px] w-[100px] mb-5"
            />
            <h2 className="text-2xl font-bold mb-3">Experience & Direction</h2>
            <p className="text-md">
              I have practical experience in UI/UX design, focusing on crafting
              intuitive and visually engaging interfaces. I specialize in using
              Figma for designing prototypes, wireframes, and conducting user
              research.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-[90%] sm:w-[500px] h-auto bg-white hover:shadow-2xl hover:bg-orange-500 py-14 px-14 rounded-3xl transition-all duration-500 ease-in-out">
            <img
              src={java}
              alt="java-icon"
              className="h-[100px] w-[100px] mb-5"
            />
            <h2 className="text-2xl font-bold mb-3">Experience & Direction</h2>
            <p className="text-md">
              I have solid hands-on experience in Java, focusing on
              object-oriented programming (OOP) principles. I'm skilled in
              designing with OOP concepts, handling concurrency, and leveraging
              frameworks like Spring.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
