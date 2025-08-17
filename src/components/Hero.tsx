import React from 'react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <section 
      className="w-full py-20 relative bg-gradient-to-b from-primary/20 to-background/90"
      style={{
        backgroundImage: `url('/lovable-uploads/bb1107d1-525b-4e06-a92e-a340db3d4f30.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-background/95"></div>
      <div className="flex max-w-screen-xl mx-auto px-4 flex-col items-center gap-20 relative z-10">
        <div className="flex max-w-screen-md flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Join Policymakers, Industry Leaders, and Social Innovators
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              For a crucial discussion on creating equitable employment opportunities for all. This session will explore practical, technology-driven solutions and strategic partnerships to bridge employment gaps for women, youth, persons with disabilities, and rural populations.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
              <p className="text-white font-semibold text-lg">
                4 November 2025 | 11:30 AM - 12:45 PM
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
