import React from "react";
import Expertise from "../Components/Home/Expertise";
import Banner from "../Components/Home/Banner";
import servBan from "../Assets/service-banner.png";

const Services = () => {
  return (
    <>
      <Banner
        bannerHead="<> My services </>"
        bannerDesc="I specialize in turning ideas into interactive, high-performance web and mobile apps. From full-stack development and custom designs to API integration, optimization, and bug fixing, I offer end-to-end solutions. If you need seamless functionality and a smooth user experience, let’s work together and build something extraordinary!"
        bannerImg={servBan}
        bannerBtn1="My Services"
        bannerBtn2="My Academics"
      />
      <Expertise />
    </>
  );
};

export default Services;
