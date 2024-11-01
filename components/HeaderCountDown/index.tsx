"use client";
import { useEffect, useState } from "react";

const HeaderCountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate: Date = new Date("2024-11-08T00:00:00");

    const calculateTimeLeft = () => {
      const now: Date = new Date();
      const difference: number = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HRS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center space-x-2  text-sm font-medium">
      {timeBlocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="bg-black bg-opacity-50 rounded-md p-1 backdrop-blur-sm border border-red-800">
            <div className="text-white text-2xl">
              {String(block.value).padStart(2, "0")}
            </div>
          </div>
          <div className="text-red-500 text-xs mt-1">{block.label}</div>
        </div>
      ))}
    </div>
  );
};

export default HeaderCountDown;
