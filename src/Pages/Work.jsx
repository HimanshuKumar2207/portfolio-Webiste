import React from "react";
import Hwork from "../Components/Home/Hwork";
import Banner from "../Components/Home/Banner";
import workImg from "../Assets/work-banner.png";

const Work = () => {
  return (
    <>
      <Banner 
        bannerHead="<> My works </>"
        bannerDesc="I craft high-performance websites, web apps, and backend systems. Whether it’s building from scratch or optimizing existing code, I focus on clean, efficient solutions. From front-end design to back-end architecture, I ensure every project delivers a seamless user experience. Let’s collaborate and bring your ideas to life!"
        bannerImg={workImg} 
        bannerBtn1="My Works"
        bannerBtn2="My Academics"
      />
      <Hwork />
    </>
  );
};

export default Work;
