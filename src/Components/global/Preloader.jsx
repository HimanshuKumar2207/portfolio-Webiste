import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ logoText = "YourLogo",  logoImage = null }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoaded) return null; 
  return (
    <div className="fixed hidden inset-0 bg-orange-500 sm:flex flex-col items-center justify-center z-50">
      {logoImage && (
        <img
          src={logoImage}
          alt="Logo"
          className="w-[40%] h-auto mb-20"
        />
      )}
      <motion.div
        className="text-white text-4xl font-bold flex items-center justify-center mb-10 mt-[-100px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.2, 1], opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
      >
        {logoText}
      </motion.div>
    </div>
  );
};

export default Preloader;
