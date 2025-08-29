import React from 'react';

const CTASection = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="flex max-w-screen-xl mx-auto px-4 flex-col items-start gap-20">
        <div className="flex items-center gap-20 w-full max-md:flex-col max-md:gap-10">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 w-full">
              <h2 className="text-foreground text-4xl md:text-5xl font-bold leading-tight max-sm:text-3xl">
                Innovative Pathways to Inclusive Employment
              </h2>
              <p className="text-muted-foreground text-lg font-normal leading-[27px]">
                Join us for a dynamic Solutions Session on advancing inclusive employment as a driver of sustainable development. Explore how technology, innovation, and partnerships can bridge gaps and create equitable opportunities for all.
              </p>
            </div>
            
            <div className="flex items-start gap-4 max-sm:flex-col max-sm:w-full">
              {/* <button className="flex justify-center items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors max-sm:w-full">
                <span>Learn More</span>
              </button> */}
            </div>
          </div>
          
          <div className="flex-1">
            <img
              src="/innovation_ecosystem.jpg"
              alt="Innovation ecosystem collaboration"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
