import React from "react";
import Banner from "../Components/Home/Banner";
import ContactMe from "../Components/Contact/ContactMe";
import contBan from "../Assets/contact-banner.png";
const Contact = () => {
  return (
    <>
      <Banner
        bannerHead="<> Contact Me </>"
        bannerDesc="Got an idea brewing in your mind? Or maybe a problem that needs a creative solution? Whether you’re looking to build your next big project, need a bug squashed, or just want to talk tech, I’m here and ready to collaborate."
        bannerImg={contBan}
        bannerBtn1="Get in touch"
        bannerBtn2="Address"
      />
      <ContactMe />
    </>
  );
};

export default Contact;
