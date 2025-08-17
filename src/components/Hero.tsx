import React from 'react';
import unoBg from '/unoCon.png';

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20" src="unoBg">
      <div className="flex max-w-screen-xl mx-auto px-4 flex-col items-center gap-20">
        <div className="flex max-w-screen-md flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Sairam Institute Joins the United Nations Academic Impact
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Solutions Sessions – Side Events at the Second World Summit For Social Development
            </p>
          </div>
          
          <div className="flex items-start gap-4 max-sm:flex-col max-sm:w-full">
            <button className="flex justify-center items-center gap-2 border cursor-pointer text-black text-base font-normal leading-6 bg-white px-6 py-3 border-solid border-white max-sm:w-full hover:bg-gray-50 transition-colors">
              <span className="text-black text-base font-normal leading-6">
                join
              </span>
            </button>
            <button className="flex justify-center items-center gap-2 border cursor-pointer text-white text-base font-normal leading-6 px-6 py-3 border-solid border-white max-sm:w-full bg-black hover:bg-gray-800 transition-colors">
              <span className="text-white text-base font-normal leading-6">
                Register
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
