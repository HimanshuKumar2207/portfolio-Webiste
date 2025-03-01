import React from "react";

const MyAcademics = () => {
  return (
    <>
      <div className="px-5 sm:px-10 md:px-16 lg:px-24">
        {/* Heading */}
        <h1 className="text-4xl text-center sm:text-4xl md:text-5xl lg:text-5xl font-bold mt-12 md:text-left">
          My Academics
        </h1>

        <div className="flex md:flex-row gap-5 md:gap-16 mt-10 mb-5 md:mr-[40%]">
          {/* Timeline */}
          <div className="relative h-[634px] w-[2px] bg-black md:block sm:flex-row mt-2">
            <div className="absolute top-[0%] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-[49%] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-[74%] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>

          {/* Academics Details */}
          <div className="flex flex-col gap-8">
            {/* 10th */}
            <div className="10th">
              <h3 className="text-xl sm:text-2xl font-semibold">Vishashvi Public School</h3>
              <h5>Matriculation</h5>
              <h5>CBSE</h5>
              <h5>Session: 2018</h5>
              <h5>Marks: 62%</h5>
            </div>

            {/* 12th */}
            <div className="12th">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Bradford International school
              </h3>
              <h5>Intermediate in Science</h5>
              <h5>CBSE</h5>
              <h5>Session: 2020</h5>
              <h5>Marks: 64%</h5>
            </div>

            {/* UG */}
            <div className="ug">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Indian Institute of Business Management
              </h3>
              <h5>Course: Bachelor's of Computer Application</h5>
              <h5>Graduation</h5>
              <h5>Session: 2020-2023</h5>
              <h5>Marks: 83%</h5>
            </div>

            {/* PG */}
            <div className="pg">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Swami Vivekananda University
              </h3>
              <h5>Course: Master's of Computer Application</h5>
              <h5>Post Graduation</h5>
              <h5>Session: 2024-2026</h5>
              <h5>Marks: Pursuing</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAcademics;
