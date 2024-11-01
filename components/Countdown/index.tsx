"use client";
import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate: any = new Date("2024-11-08T00:00:00");

    const calculateTimeLeft = () => {
      const now: any = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center items-center space-x-4 md:space-x-8 py-10">
      {timeBlocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="bg-black bg-opacity-50 rounded-lg p-4 backdrop-blur-sm border border-red-800">
            <div className="text-4xl md:text-6xl font-bold text-white">
              {String(block.value).padStart(2, "0")}
            </div>
          </div>
          <div className="text-red-500 text-sm md:text-base mt-2 font-bold">
            {block.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
