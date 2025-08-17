import React from 'react';

const CTASection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="flex max-w-screen-xl mx-auto px-4 flex-col items-start gap-20">
        <div className="flex items-center gap-20 w-full max-md:flex-col max-md:gap-10">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 w-full">
              <h2 className="text-black text-4xl md:text-5xl font-bold leading-tight max-sm:text-3xl">
                Innovative Pathways to Inclusive Employment
              </h2>
              <p className="text-black text-lg font-normal leading-[27px]">
                Join us for a dynamic Solutions Session on advancing inclusive employment as a driver of sustainable development. Explore how technology, innovation, and partnerships can bridge gaps and create equitable opportunities for all.
              </p>
            </div>
            
            <div className="flex items-start gap-4 max-sm:flex-col max-sm:w-full">
              <button className="flex justify-center items-center gap-2 border cursor-pointer text-white text-base font-normal leading-6 bg-black px-6 py-3 border-solid border-black max-sm:w-full hover:bg-gray-800 transition-colors">
                <span className="text-white text-base font-normal leading-6">
                  Register
                </span>
              </button>
              <button className="flex justify-center items-center gap-2 border cursor-pointer text-black text-base font-normal leading-6 px-6 py-3 border-solid border-black max-sm:w-full hover:bg-gray-50 transition-colors">
                <span className="text-black text-base font-normal leading-6">
                  Learn More
                </span>
              </button>
            </div>
          </div>
          
          <div className="flex-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2fd2e39e7b33f2f94766c4fec22b875594ec4220?width=1200"
              alt="Conference collaboration and innovation"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
