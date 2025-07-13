"use client";

import { useEffect, useState } from "react";

const MaintenancePage = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Ganti waktu ini sesuai waktu selesai maintenance
    const targetDate = new Date("2025-05-01T00:00:00");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Maintenance in Progress</h1>
      <p className="text-lg text-gray-600 mb-6">This page is currently undergoing scheduled maintenance.</p>
      <div className="flex space-x-4 text-2xl font-mono text-gray-700">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-sm">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-sm">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-sm">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
    </main>
  );
};

export default MaintenancePage;