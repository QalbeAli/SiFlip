import Countdown from "@/components/Countdown";
import HeroSection from "@/components/HeroSection";
import React from "react";

const HomePage = () => {
  return (
    <div className=" bg-black bg-gradient-to-br from-black via-red-900 to-black">
      <HeroSection />
      <Countdown />
      <div className=" bg-gradient-to-r from-red-600 to-black opacity-20 animate-pulse"></div>
    </div>
  );
};

export default HomePage;
