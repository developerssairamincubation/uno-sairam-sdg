import React, { useState } from 'react';

const EventFeatures = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M7.25831 42.4977C6.33831 42.4977 5.54064 42.1599 4.86531 41.4842C4.18964 40.8089 3.85181 40.0112 3.85181 39.0912V15.4497C3.85181 14.5264 4.18964 13.7259 4.86531 13.0482C5.54064 12.3702 6.33831 12.0312 7.25831 12.0312H15.8758V7.03123C15.8758 6.11956 16.2136 5.32389 16.8893 4.64422C17.5646 3.96456 18.3623 3.62473 19.2823 3.62473H29.0193C29.9393 3.62473 30.737 3.96456 31.4123 4.64422C32.088 5.32389 32.4258 6.11956 32.4258 7.03123V12.0312H41.0433C41.9666 12.0312 42.7671 12.3702 43.4448 13.0482C44.1228 13.7259 44.4618 14.5264 44.4618 15.4497V39.0912C44.4618 40.0112 44.1228 40.8089 43.4448 41.4842C42.7671 42.1599 41.9666 42.4977 41.0433 42.4977H7.25831ZM7.25831 39.0912H41.0433V15.4497H7.25831V39.0912ZM19.2823 12.0312H29.0193V7.03123H19.2823V12.0312Z" fill="currentColor"/>
        </svg>
      ),
      title: "Inclusive Employment for All",
      description: "This session explores innovative solutions that bridge employment gaps for women, youth, persons with disabilities, and rural communities through technology, skills training, and community-driven models."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M12.25 37.5C11.5 37.5 10.8542 37.2396 10.3125 36.7188C9.77083 36.1979 9.5 35.5625 9.5 34.8125V14.1875C9.5 13.4375 9.77083 12.8021 10.3125 12.2812C10.8542 11.7604 11.5 11.5 12.25 11.5H16.625V9.4375C16.625 8.6875 16.8958 8.05208 17.4375 7.53125C17.9792 7.01042 18.625 6.75 19.375 6.75H29.625C30.375 6.75 31.0208 7.01042 31.5625 7.53125C32.1042 8.05208 32.375 8.6875 32.375 9.4375V11.5H36.75C37.5 11.5 38.1458 11.7604 38.6875 12.2812C39.2292 12.8021 39.5 13.4375 39.5 14.1875V34.8125C39.5 35.5625 39.2292 36.1979 38.6875 36.7188C38.1458 37.2396 37.5 37.5 36.75 37.5H12.25ZM19.375 11.5H29.625V9.4375H19.375V11.5ZM24.5 32.75C25.25 32.75 25.8958 32.4896 26.4375 31.9688C26.9792 31.4479 27.25 30.8125 27.25 30.0625C27.25 29.3125 26.9792 28.6771 26.4375 28.1562C25.8958 27.6354 25.25 27.375 24.5 27.375C23.75 27.375 23.1042 27.6354 22.5625 28.1562C22.0208 28.6771 21.75 29.3125 21.75 30.0625C21.75 30.8125 22.0208 31.4479 22.5625 31.9688C23.1042 32.4896 23.75 32.75 24.5 32.75ZM18.125 25.3125C18.875 25.3125 19.5208 25.0521 20.0625 24.5312C20.6042 24.0104 20.875 23.375 20.875 22.625C20.875 21.875 20.6042 21.2396 20.0625 20.7188C19.5208 20.1979 18.875 19.9375 18.125 19.9375C17.375 19.9375 16.7292 20.1979 16.1875 20.7188C15.6458 21.2396 15.375 21.875 15.375 22.625C15.375 23.375 15.6458 24.0104 16.1875 24.5312C16.7292 25.0521 17.375 25.3125 18.125 25.3125ZM30.875 25.3125C31.625 25.3125 32.2708 25.0521 32.8125 24.5312C33.3542 24.0104 33.625 23.375 33.625 22.625C33.625 21.875 33.3542 21.2396 32.8125 20.7188C32.2708 20.1979 31.625 19.9375 30.875 19.9375C30.125 19.9375 29.4792 20.1979 28.9375 20.7188C28.3958 21.2396 28.125 21.875 28.125 22.625C28.125 23.375 28.3958 24.0104 28.9375 24.5312C29.4792 25.0521 30.125 25.3125 30.875 25.3125Z" fill="currentColor"/>
        </svg>
      ),
      title: "Partnerships Driving Change",
      description: "Policymakers, entrepreneurs, NGOs, and academia unite to discuss public–private partnerships, share best practices, and co-create strategies for scaling impactful inclusive employment initiatives globally and locally."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M24.4841 44.4977C23.5681 44.4977 22.7506 44.2831 22.0316 43.8537C21.3123 43.4244 20.8446 42.8184 20.6286 42.0357H19.9286C19.0729 41.9957 18.3351 41.6509 17.7151 41.0012C17.0951 40.3516 16.7851 39.6007 16.7851 38.7487V31.7542C14.5771 30.2862 12.8418 28.4257 11.5791 26.1727C10.3164 23.9201 9.68509 21.4287 9.68509 18.6987C9.68509 14.5884 11.1234 11.0924 14.0001 8.21072C16.8764 5.32872 20.3701 3.88773 24.4811 3.88773C28.5924 3.88773 32.0893 5.32872 34.9716 8.21072C37.8539 11.0924 39.2951 14.5884 39.2951 18.6987C39.2951 21.4307 38.6618 23.9232 37.3951 26.1762C36.1284 28.4296 34.3951 30.2889 32.1951 31.7542V38.7487C32.1951 39.6007 31.8831 40.3516 31.2591 41.0012C30.6351 41.6509 29.8993 41.9957 29.0516 42.0357H28.3516C28.1276 42.8184 27.6539 43.4244 26.9306 43.8537C26.2076 44.2831 25.3921 44.4977 24.4841 44.4977Z" fill="currentColor"/>
        </svg>
      ),
      title: "Shaping a Sustainable Future",
      description: "Through keynotes, panels, and case studies, discover actionable strategies to integrate inclusive policies, strengthen networks, and promote equal digital participation for a more equitable and sustainable tomorrow."
    }
  ];

  return (
    <section className="w-full py-20 bg-accent/50">
      <div className="flex max-w-screen-xl mx-auto px-4 flex-col items-center gap-20">
        <div className="text-center">
          <h2 className="text-foreground text-center text-4xl md:text-5xl font-bold leading-tight max-sm:text-3xl">
            Explore Our Event Features
          </h2>
        </div>
        
        <div className="flex flex-col items-start gap-16 w-full">
          <div className="flex items-start gap-12 w-full max-md:flex-col max-md:gap-8">
            {features.map((feature, index) => (
              <article key={index} className="flex flex-col items-center gap-6 flex-1 text-center">
                <div className="flex items-center justify-center w-16 h-16">
                  {feature.icon}
                </div>
                <div className="flex flex-col items-center gap-6 w-full">
                  <h3 className="text-foreground text-center text-2xl md:text-3xl font-bold leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-center text-base font-normal leading-6">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-6 w-full">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex justify-center items-center gap-2 border cursor-pointer text-black text-base font-normal leading-6 px-6 py-3 border-solid border-black hover:bg-gray-50 transition-colors"
          >
            <span className="text-black text-base font-normal leading-6">
              {isExpanded ? 'Show Less' : 'Learn More'}
            </span>
          </button>
          
          {isExpanded && (
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">Event Schedule & Speakers</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-black">Day 1: Foundation</h4>
                  <ul className="space-y-2 text-sm text-black">
                    <li>• Opening Keynote by UN Representatives</li>
                    <li>• Policy Framework Discussions</li>
                    <li>• Regional Case Studies</li>
                    <li>• Networking Session</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-black">Day 2: Innovation</h4>
                  <ul className="space-y-2 text-sm text-black">
                    <li>• Technology Solutions Showcase</li>
                    <li>• Startup Pitch Sessions</li>
                    <li>• Partnership Building Workshops</li>
                    <li>• Panel Discussions</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-black">Day 3: Action</h4>
                  <ul className="space-y-2 text-sm text-black">
                    <li>• Implementation Strategies</li>
                    <li>• Resource Mobilization</li>
                    <li>• Commitment Declarations</li>
                    <li>• Closing Ceremony</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventFeatures;
