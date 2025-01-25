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
    const message = `Lets Connect with me`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
    );
  };

  return (
    <div className="w-full sticky bottom-0 left-0 right-0 bg-orange-500 z-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center sm:space-x-16 sm:space-y-0 space-y-4">
          {/* Call Button */}
          <button
            className={`flex items-center p-3 space-x-2 transition-colors duration-200 ${
              activeTab === "call"
                ? "text-blue-900"
                : "text-gray-600 hover:text-blue-900"
            }`}
            onClick={() => {
              handleTabClick("call");
              handleCallClick();
            }}
          >
            <FaPhoneAlt className="text-2xl sm:text-3xl" />
            <div>
              <span className="text-sm sm:text-base font-medium sm:mr-[75px]">
                Call
              </span>
              <p className="text-sm sm:text-lg font-bold">+91 7479867857</p>
            </div>
          </button>

          {/* WhatsApp Button */}
          <button
            className={`flex items-center p-3 space-x-2 transition-colors duration-200 ${
              activeTab === "whatsapp"
                ? "text-green-600"
                : "text-green-600 hover:text-green-600"
            }`}
            onClick={() => {
              handleTabClick("whatsapp");
              handleWhatsAppClick();
            }}
          >
            <FaWhatsapp className="text-2xl sm:text-3xl" />
            <div>
              <h3 className="text-[13px] sm:text-sm font-medium">
                WhatsApp Chat with
              </h3>
              <p className="text-xl sm:text-2xl font-medium">Representative</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedBottom;
