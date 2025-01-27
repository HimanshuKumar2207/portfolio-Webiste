import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FixedBottom = () => {
  const [activeTab, setActiveTab] = useState("call");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCallClick = () => {
    window.location.href = "tel:917479867857";
  };

  const handleWhatsAppClick = () => {
    const phone = "917479867857";
    const message = `Let's Connect with me`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
    );
  };

  return (
    <div className="w-full sticky bottom-0 left-0 right-0 bg-orange-500 z-10">
      <div className="flex sm:flex-row gap-5 justify-evenly items-center py-3">
        {/* Call Button */}
        <button
          className={`flex items-center text-blue-600 gap-2 p-3 rounded-lg transition-all duration-200 ${
            activeTab === "call" ? "ring-2 ring-orange-500" : ""
          }`}
          onClick={() => {
            handleTabClick("call");
            handleCallClick();
          }}
        >
          <FaPhoneAlt className="text-2xl sm:text-2xl md:text-4xl" />
          <span className="text-xl lg:text-xl sm:text-base font-medium">Call</span>
        </button>

        {/* WhatsApp Button */}
        <button
          className={`flex items-center gap-2 p-3 rounded-lg text-green-600 transition-all duration-200 ${
            activeTab === "whatsapp" ? "ring-2 ring-green-500" : ""
          }`}
          onClick={() => {
            handleTabClick("whatsapp");
            handleWhatsAppClick();
          }}
        >
          <FaWhatsapp className="text-2xl sm:text-2xl md:text-4xl" />
          <span className="text-xl sm:text-base font-medium lg:text-xl">WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default FixedBottom;
