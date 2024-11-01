"use client";
import React, { useState } from "react";

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        playsInline
        muted={isMuted}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="mb-8 animate-fade-in">
          {/* Responsive Title */}
          <h1 className="text-6xl md:text-[8rem] lg:text-[12rem] font-bold text-white mb-4 drop-shadow-2xl">
            3<sup className="text-red-500">4</sup>
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="p-4 md:p-6 rounded-lg backdrop-blur-sm bg-black/70 mx-auto">
          <div className="text-white font-bold text-3xl md:text-5xl lg:text-7xl mb-4 drop-shadow-2xl">
            //More details coming on November 5//
          </div>
        </div>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 p-2 text-sm md:text-base bg-white text-black font-semibold rounded-lg z-30 shadow-lg"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>

        {/* Optional: Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-red-500 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
