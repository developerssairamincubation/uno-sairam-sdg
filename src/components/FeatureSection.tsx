import React from 'react';

const FeatureSection = () => {
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
            
            <div className="flex items-center gap-6 max-sm:flex-col max-sm:w-full">
              <button className="flex justify-center items-center gap-2 border cursor-pointer text-black text-base font-normal leading-6 px-6 py-3 border-solid border-black max-sm:w-full hover:bg-gray-50 transition-colors">
                <span className="text-black text-base font-normal leading-6">
                  Learn More
                </span>
              </button>
              <button className="flex justify-center items-center gap-2 cursor-pointer text-black text-base font-normal leading-6 border-none hover:text-gray-600 transition-colors">
                <span className="text-black text-base font-normal leading-6">
                  Sign Up
                </span>
                <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="chevron-icon">
                  <path d="M10.2045 6.87158C10.3053 6.87158 10.3823 6.90199 10.4603 6.97998L15.4047 11.9243C15.4586 11.9782 15.4837 12.0202 15.4955 12.0483V12.0493C15.5103 12.0849 15.5189 12.1246 15.5189 12.1733C15.5189 12.222 15.5103 12.2618 15.4955 12.2974V12.2983C15.4837 12.3265 15.4585 12.3684 15.4047 12.4224L10.4359 17.3911C10.3581 17.4689 10.291 17.4907 10.2103 17.4878C10.1163 17.4843 10.0354 17.4524 9.94958 17.3667C9.87146 17.2886 9.84021 17.2117 9.84021 17.1108C9.84021 17.0099 9.87146 16.9331 9.94958 16.855L14.6312 12.1733L9.92419 7.46631C9.84653 7.38861 9.82459 7.3223 9.82751 7.2417C9.83096 7.14743 9.86353 7.06604 9.94958 6.97998C10.0275 6.90217 10.1039 6.87166 10.2045 6.87158Z" fill="black" stroke="black"/>
                </svg>
              </button>
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
