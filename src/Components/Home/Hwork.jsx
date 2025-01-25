import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import food from "../../Assets/Food.png";
import Estate from "../../Assets/Estate.png";
import Education from "../../Assets/Education.png";
import Gym from "../../Assets/Gym.png";
import "../../index.css";
import health from "../../Assets/health.png";
import imdb from "../../Assets/imdb.png";
import medicare from "../../Assets/medicare.png";
import portfolio from "../../Assets/Portfolio.png";

const images = [
  {
    id: 1,
    src: "https://edu-loan-eta.vercel.app/", // Website link
    codeSrc: "https://github.com/HimanshuKumar2207/Edu-loan", // Source code link
    imgSrc: Education,
    alt: "Education Website",
  },
  {
    id: 2,
    src: "https://food-ordering-website-zeta-two.vercel.app/",
    codeSrc: "https://github.com/HimanshuKumar2207/Food-ordering-website", // Source code link
    imgSrc: portfolio,
    alt: "Portfolio Website",
  },
  {
    id: 3,
    src: "https://food-ordering-website-zeta-two.vercel.app/",
    codeSrc: "https://github.com/HimanshuKumar2207/Food-ordering-website", // Source code link
    imgSrc: food,
    alt: "Food Ordering Website",
  },
  {
    id: 4,
    src: "https://gym-website-pi-ten.vercel.app/",
    codeSrc: "https://github.com/HimanshuKumar2207/gym-website", // Source code link
    imgSrc: Gym,
    alt: "Gym Website",
  },
  {
    id: 5,
    src: "https://real-estae.vercel.app/",
    codeSrc: "https://github.com/HimanshuKumar2207/Real-Estate", // Source code link
    imgSrc: Estate,
    alt: "Estate Website",
  },
  {
    id: 6,
    src: "https://health-fitness-mqh4.vercel.app/",
    codeSrc: "https://github.com/HimanshuKumar2207/Health-Fitness", // Source code link
    imgSrc: health,
    alt: "Health Fitness Website",
  },
  {
    id: 7,
    src: "https://imdb-clone-vert-alpha.vercel.app/",
    codeSrc: "https://github.com/HimanshuKumar2207/Imdb-clone", // Source code link
    imgSrc: imdb,
    alt: "Imdb Clone Website",
  },
  {
    id: 8,
    src: "https://medicare-jet-kappa.vercel.app/",
    codeSrc: "https://github.com/HimanshuKumar2207/Medicare", // Source code link
    imgSrc: medicare,
    alt: "Medicare Website",
  },
];

const Hwork = () => {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 4)); // Start with 4 images visible
  const [showMore, setShowMore] = useState(true);

  const handleViewMore = () => {
    const newVisibleImages = images.slice(0, visibleImages.length + 4);
    setVisibleImages(newVisibleImages);

    if (newVisibleImages.length >= images.length) {
      setShowMore(false);
    }
  };

  return (
    <div className="w-full md:w-full mt-20 ">
      <h2 className="text-5xl sm:text-5xl sm:font-bold sm:ml-[90px] md:text-5xl md:font-bold mb-14 text-left md:ml-[130px]">
        My Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 sm:w-[70%] sm:ml-20 lg:w-[80%] md:grid-cols-1 md:w-[75%]  lg:grid-cols-2 md:gap-10 lg:ml-[80px] sm:gap-10 ">
        {visibleImages.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full hover:shadow-2xl relative group lg:ml-24 "
          >
            <div className="relative">
              {/* Image with hover effect */}
              <img
                src={image.imgSrc}
                alt={image.alt}
                className="h-[280px] w-full object-cover transition-all duration-300 ease-in-out"
              />
              {/* Overlay that slides in from the top */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-[-100%] transition-all duration-500 ease-in-out">
                <div className="text-white text-center p-4 flex flex-col justify-center items-center h-full">
                  <h3 className="text-2xl font-semibold">{image.alt}</h3>
                </div>
              </div>
            </div>
            {/* Image description and buttons */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-3">{image.alt}</h3>
              <div className="flex justify-between space-x-4">
                <Link
                  to={image.codeSrc}
                  target="_blank"
                  className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                >
                  Source Code
                </Link>
                <Link
                  to={image.src}
                  target="_blank"
                  className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showMore && (
        <button
          className="mt-20 border-2 border-orange-500 px-5 py-2 text-l rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-400 mx-auto block"
          onClick={handleViewMore}
        >
          View More
        </button>
      )}
    </div>
  );
};

export default Hwork;
