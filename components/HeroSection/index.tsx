"use client";
import React, { useRef, useState } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsButtonVisible(false); // Hide the play button after starting the video
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>

      <div className="w-full max-w-6xl mx-auto aspect-video mt-10 px-2 md:px-0 relative">
        <video
          ref={videoRef}
          controls
          className="w-full h-full z-10 relative border border-red-500"
        >
          <source src="/trailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay */}
        {isButtonVisible && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative w-0 h-0 border-l-[50px] border-r-[50px] border-b-[86.6px] border-l-transparent border-r-transparent border-b-red-500">
              <span
                onClick={handlePlayClick}
                className="cursor-pointer absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl"
              >
                3<sup className="text-white">4</sup>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center mt-5 text-center px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-[8rem] lg:text-[12rem] font-bold text-white mb-4 drop-shadow-2xl">
            3<sup className="text-red-500">4</sup>
          </h1>
        </div>

        <div className="p-4 md:p-6 rounded-lg backdrop-blur-sm bg-black/70 mx-auto mb-16">
          <div className="text-red-500 font-bold text-3xl md:text-5xl lg:text-7xl mb-4 drop-shadow-2xl">
            #Faux Doxx Reveal and Remember - November 5, 2024#
          </div>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-red-500 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
