import React from 'react';

const FeatureSection = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="flex max-w-screen-xl mx-auto px-4 flex-col items-start gap-20">
        <div className="flex items-center gap-20 w-full max-md:flex-col max-md:gap-10">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="text-foreground text-lg font-normal leading-[27px]">
                <div className="text-foreground text-lg font-normal leading-[27px] mb-4">
                  <span className="text-primary font-semibold">Empower</span>
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <h2 className="text-foreground text-3xl md:text-4xl font-bold leading-tight">
                    Unlock Your Potential at Our Conference
                  </h2>
                  <p className="text-muted-foreground text-lg font-normal leading-[27px]">
                    Join us for a dynamic Solutions Session on advancing inclusive employment as a driver of sustainable development. Explore how technology, innovation, and partnerships can bridge gaps and create equitable opportunities for all.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex items-start gap-6 w-full px-0 py-2 max-sm:flex-col max-sm:gap-4">
                  <article className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Networking Opportunities
                    </h3>
                    <p className="text-muted-foreground text-base font-normal leading-6">
                      Expand your professional network and forge valuable connections with like-minded individuals.
                    </p>
                  </article>
                  <article className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Expert Insights
                    </h3>
                    <p className="text-muted-foreground text-base font-normal leading-6">
                      Learn from top industry leaders and gain insights that will drive your success.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <img
              src="/sdg_sairam.jpeg"
              alt="SDG Sairam sustainable development goals"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
