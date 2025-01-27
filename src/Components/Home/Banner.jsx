import React from "react";
import { Link } from "react-router-dom";
// import AOS from 'aos'
// import 'aos/dist/aos.css'

const Banner = ({
  bannerHead,
  bannerDesc,
  bannerImg,
  // bannerBtn1,
  // bannerBtn2,
}) => {
  return (
    <div className="md:w-full bg-orange-500 h-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center py-10 px-6 sm:px-10 lg:px-20 md:flex md:justify-evenly mt-[120px] md:mt-0 md:h-[430px]">
      <div className="flex flex-col items-center sm:items-start ">
        <h1 className="mt-3 sm:mt-20 mb-5 text-4xl sm:text-6xl lg:text-7xl text-white font-bold text-center sm:text-left ">
          {bannerHead}
        </h1>
        <p className="mb-6 sm:mb-10 text-base sm:text-lg text-white w-full sm:w-[700px] lg:w-[800px] text-left sm:text-left md:text-l">
          {bannerDesc}
        </p>

        {/* <div className="flex flex- sm:flex-row gap-4 sm:gap-6 justify-center sm:flex">
          <Link to="">
            <button className="text-white border-2 border-white py-2 px-4 text-base sm:text-lg rounded-3xl hover:text-orange-500 hover:bg-white transition-all duration-300">
              {bannerBtn1}
            </button>
          </Link>
          <Link to="">
            <button className="text-white border-2 border-white py-2 px-4 text-base sm:text-lg rounded-3xl hover:text-orange-500 hover:bg-white transition-all duration-300">
              {bannerBtn2}
            </button>
          </Link>
        </div> */}
      </div>

      <div className="mt-6 sm:mt-0 hidden sm:block ">
        <img
          src={bannerImg}
          className="h-[200px] md:h-[350px] w-[200px] md:w-[300px] object-contain md:mt-20"
          alt="Banner Image"
        />
      </div>
    </div>
  );
};

export default Banner;
