import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Event date: November 6, 2025 15:45 PM
    const eventDate = new Date('2025-11-06T15:45:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/30 backdrop-blur-md rounded-xl p-8 border border-white/40 shadow-2xl">
      <p className="text-white text-xl font-semibold mb-6 text-center drop-shadow-lg">Event Starts In:</p>
      <div className="grid grid-cols-4 gap-6 text-center">
        <div className="bg-white/20 rounded-xl p-4 border border-white/20 shadow-lg">
          <div className="text-3xl font-bold text-white drop-shadow-lg">{timeLeft.days}</div>
          <div className="text-sm font-medium text-white/90 drop-shadow-sm">Days</div>
        </div>
        <div className="bg-white/20 rounded-xl p-4 border border-white/20 shadow-lg">
          <div className="text-3xl font-bold text-white drop-shadow-lg">{timeLeft.hours}</div>
          <div className="text-sm font-medium text-white/90 drop-shadow-sm">Hours</div>
        </div>
        <div className="bg-white/20 rounded-xl p-4 border border-white/20 shadow-lg">
          <div className="text-3xl font-bold text-white drop-shadow-lg">{timeLeft.minutes}</div>
          <div className="text-sm font-medium text-white/90 drop-shadow-sm">Minutes</div>
        </div>
        <div className="bg-white/20 rounded-xl p-4 border border-white/20 shadow-lg">
          <div className="text-3xl font-bold text-white drop-shadow-lg">{timeLeft.seconds}</div>
          <div className="text-sm font-medium text-white/90 drop-shadow-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;