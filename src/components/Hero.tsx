import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  const images = [
    '/lovable-uploads/uno_sairam_01.jpg',
    '/lovable-uploads/uno_sairam_02.jpg',
    '/lovable-uploads/uno_sairam_03.jpg',
    '/lovable-uploads/uno_sairam_04.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section 
      className="w-full py-12 relative bg-gradient-to-b from-primary/20 to-background/90 transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('${images[currentImageIndex]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-background/60"></div>
      <div className="flex max-w-screen-xl mx-auto px-4 flex-col items-center gap-12 relative z-10">
        <div className="flex max-w-screen-md flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Sairam Institute Joins the United Nations Academic Impact
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Solutions Sessions – Side Events at the Second World Summit For Social Development
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
              <p className="text-white font-semibold text-lg">
                6 November 2025 | 1.15 pm - 2.30 pm (AST)
              </p>
            </div>
            </div>
          
          <CountdownTimer />
          
          <div className="flex items-start gap-4 max-sm:flex-col max-sm:w-full">
            <button className="flex justify-center items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-medium transition-colors max-sm:w-full">
              <span>Join Event</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
