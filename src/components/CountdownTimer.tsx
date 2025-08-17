import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Event date: November 4, 2025 11:30 AM
    const eventDate = new Date('2025-11-04T11:30:00').getTime();

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
    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
      <p className="text-white text-lg font-medium mb-4 text-center">Event Starts In:</p>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-sm text-white/80">Days</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
          <div className="text-sm text-white/80">Hours</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
          <div className="text-sm text-white/80">Minutes</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
          <div className="text-sm text-white/80">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;