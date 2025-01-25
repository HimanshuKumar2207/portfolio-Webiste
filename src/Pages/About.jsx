import React from "react";
import Habout from "../Components/Home/Habout";
import Banner from "../Components/Home/Banner";
import banImg from "../Assets/about_banner.png";
import MyAcademics from "../Components/About/MyAcademics";

const About = () => {
  return (
    <>
      <Banner
        bannerHead="<> About Me </>"
        bannerDesc="Hi, I’m friend , a code enthusiast who turns complex problems into clean solutions. From crafting dynamic websites to building robust applications, I live for the thrill of tackling challenges. Let’s innovate, experiment, and build something extraordinary together. Ready to turn your ideas into reality? Let’s chat!"
        bannerImg={banImg}
        bannerBtn1="My Academics"
        bannerBtn2="My Skills"
      />
      <MyAcademics />
      <Habout />
    </>
  );
};

export default About;
