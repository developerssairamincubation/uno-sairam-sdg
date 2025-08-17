import React, { useState } from 'react';

const FeatureSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full py-20 bg-white">
      <div className="flex max-w-screen-xl mx-auto px-4 flex-col items-start gap-20">
        <div className="flex items-center gap-20 w-full max-md:flex-col max-md:gap-10">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="text-black text-lg font-normal leading-[27px]">
                <div className="text-black text-lg font-normal leading-[27px] mb-4">
                  <span className="text-blue-600 font-semibold">Empower</span>
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <h2 className="text-black text-3xl md:text-4xl font-bold leading-tight">
                    Unlock Your Potential at Our Conference
                  </h2>
                  <p className="text-black text-lg font-normal leading-[27px]">
                    Join us for a dynamic Solutions Session on advancing inclusive employment as a driver of sustainable development. Explore how technology, innovation, and partnerships can bridge gaps and create equitable opportunities for all.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex items-start gap-6 w-full px-0 py-2 max-sm:flex-col max-sm:gap-4">
                  <article className="flex-1">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Networking Opportunities
                    </h3>
                    <p className="text-black text-base font-normal leading-6">
                      Expand your professional network and forge valuable connections with like-minded individuals.
                    </p>
                  </article>
                  <article className="flex-1">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Expert Insights
                    </h3>
                    <p className="text-black text-base font-normal leading-6">
                      Learn from top industry leaders and gain insights that will drive your success.
                    </p>
                  </article>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 w-full">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex justify-center items-center gap-2 border cursor-pointer text-black text-base font-normal leading-6 px-6 py-3 border-solid border-black hover:bg-gray-50 transition-colors w-fit"
              >
                <span className="text-black text-base font-normal leading-6">
                  {isExpanded ? 'Show Less' : 'Learn More'}
                </span>
              </button>
              
              {isExpanded && (
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-black mb-4">Conference Details</h3>
                  <div className="space-y-4 text-black">
                    <p><strong>Date:</strong> March 15-17, 2025</p>
                    <p><strong>Location:</strong> Sairam Institute Campus, Chennai</p>
                    <p><strong>Duration:</strong> 3 Days of intensive sessions</p>
                    <p><strong>Format:</strong> Hybrid (In-person and Virtual participation)</p>
                    <p><strong>Languages:</strong> English with real-time translation available</p>
                    <p><strong>Target Audience:</strong> Policy makers, entrepreneurs, NGO leaders, academics, and development practitioners</p>
                    <div>
                      <p><strong>Key Sessions Include:</strong></p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Technology Innovation for Employment</li>
                        <li>Public-Private Partnership Models</li>
                        <li>Skills Training and Capacity Building</li>
                        <li>Digital Inclusion Strategies</li>
                        <li>Policy Framework Development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a8af5a2cf34a9a4694b8745ad936db006a64b408?width=1200"
              alt="Conference participants collaborating"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
