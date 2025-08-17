import React, { useState } from 'react';

const EventFeatures = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.25831 42.4977C6.33831 42.4977 5.54064 42.1599 4.86531 41.4842C4.18964 40.8089 3.85181 40.0112 3.85181 39.0912V15.4497C3.85181 14.5264 4.18964 13.7259 4.86531 13.0482C5.54064 12.3702 6.33831 12.0312 7.25831 12.0312H15.8758V7.03123C15.8758 6.11956 16.2136 5.32389 16.8893 4.64422C17.5646 3.96456 18.3623 3.62473 19.2823 3.62473H29.0193C29.9393 3.62473 30.737 3.96456 31.4123 4.64422C32.088 5.32389 32.4258 6.11956 32.4258 7.03123V12.0312H41.0433C41.9666 12.0312 42.7671 12.3702 43.4448 13.0482C44.1228 13.7259 44.4618 14.5264 44.4618 15.4497V39.0912C44.4618 40.0112 44.1228 40.8089 43.4448 41.4842C42.7671 42.1599 41.9666 42.4977 41.0433 42.4977H7.25831ZM7.25831 39.0912H41.0433V15.4497H7.25831V39.0912ZM19.2823 12.0312H29.0193V7.03123H19.2823V12.0312Z" fill="black"/>
        </svg>
      ),
      title: "Inclusive Employment for All",
      description: "This session explores innovative solutions that bridge employment gaps for women, youth, persons with disabilities, and rural communities through technology, skills training, and community-driven models."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.5474 41.1987C24.7114 41.1987 24.9017 41.1591 25.1184 41.0797C25.3351 41.0004 25.5141 40.8901 25.6554 40.7487L42.4574 23.8967C42.9064 23.4474 43.2474 22.9326 43.4804 22.3522C43.7131 21.7722 43.8294 21.1759 43.8294 20.5632C43.8294 19.9562 43.7131 19.3521 43.4804 18.7507C43.2474 18.1494 42.9064 17.6204 42.4574 17.1637L33.7924 8.49872C33.3511 8.06539 32.8409 7.74039 32.2619 7.52372C31.6832 7.30706 31.1039 7.19872 30.5239 7.19872C29.9446 7.19872 29.3746 7.30506 28.8139 7.51772C28.2532 7.73039 27.7602 8.04539 27.3349 8.46273L26.5184 9.29122L30.4969 13.3072C30.9539 13.8059 31.3591 14.3816 31.7124 15.0342C32.0657 15.6866 32.2424 16.4036 32.2424 17.1852C32.2424 18.5152 31.7226 19.6914 30.6829 20.7137C29.6429 21.7364 28.4531 22.2477 27.1134 22.2477C26.2351 22.2477 25.5049 22.1147 24.9229 21.8487C24.3409 21.5827 23.8007 21.2006 23.3024 20.7022L19.6759 17.0757L10.8414 25.9107C10.6747 26.0711 10.5581 26.2439 10.4914 26.4292C10.4247 26.6146 10.3914 26.8084 10.3914 27.0107C10.3914 27.4441 10.5321 27.8004 10.8134 28.0797C11.0947 28.3591 11.4507 28.4987 11.8814 28.4987C12.0801 28.4987 12.2726 28.4487 12.4589 28.3487C12.6456 28.2487 12.8064 28.1321 12.9414 27.9987L18.6684 22.2727C18.9707 21.9697 19.3219 21.8182 19.7219 21.8182C20.1219 21.8182 20.4719 21.9702 20.7719 22.2742C21.0719 22.5782 21.2219 22.9287 21.2219 23.3257C21.2219 23.7227 21.0719 24.0702 20.7719 24.3682L15.0924 30.0472C14.9251 30.2149 14.8081 30.4014 14.7414 30.6067C14.6747 30.8124 14.6414 31.0137 14.6414 31.2107C14.6414 31.6137 14.7874 31.9626 15.0794 32.2572C15.3714 32.5516 15.7174 32.6987 16.1174 32.6987C16.3174 32.6987 16.5116 32.6567 16.6999 32.5727C16.8882 32.4891 17.0532 32.3802 17.1949 32.2462L22.8939 26.5347C23.1966 26.2317 23.5479 26.0822 23.9479 26.0862C24.3479 26.0902 24.6979 26.2382 24.9979 26.5302C25.2979 26.8302 25.4479 27.1802 25.4479 27.5802C25.4479 27.9802 25.2979 28.3302 24.9979 28.6302L19.3069 34.3097C19.1806 34.4437 19.0737 34.6191 18.9864 34.8357C18.8991 35.0524 18.8554 35.2607 18.8554 35.4607C18.8554 35.8607 19.0054 36.2107 19.3054 36.5107C19.6054 36.8107 19.9554 36.9607 20.3554 36.9607C20.5554 36.9607 20.7401 36.9254 20.9094 36.8547C21.0791 36.7841 21.2444 36.6694 21.4054 36.5107L27.1359 30.7682C27.4339 30.4682 27.7834 30.3202 28.1844 30.3242C28.5854 30.3282 28.9359 30.4762 29.2359 30.7682C29.5359 31.0762 29.6859 31.4287 29.6859 31.8257C29.6859 32.2227 29.5359 32.5702 29.2359 32.8682L23.5054 38.5987C23.3467 38.7654 23.2321 38.9514 23.1614 39.1567C23.0907 39.3624 23.0554 39.5471 23.0554 39.7107C23.0554 40.1804 23.1887 40.5459 23.4554 40.8072C23.7221 41.0682 24.0861 41.1987 24.5474 41.1987Z" fill="black"/>
        </svg>
      ),
      title: "Partnerships Driving Change",
      description: "Policymakers, entrepreneurs, NGOs, and academia unite to discuss public–private partnerships, share best practices, and co-create strategies for scaling impactful inclusive employment initiatives globally and locally."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.4841 44.4977C23.5681 44.4977 22.7506 44.2831 22.0316 43.8537C21.3123 43.4244 20.8446 42.8184 20.6286 42.0357H19.9286C19.0729 41.9957 18.3351 41.6509 17.7151 41.0012C17.0951 40.3516 16.7851 39.6007 16.7851 38.7487V31.7542C14.5771 30.2862 12.8418 28.4257 11.5791 26.1727C10.3164 23.9201 9.68509 21.4287 9.68509 18.6987C9.68509 14.5884 11.1234 11.0924 14.0001 8.21072C16.8764 5.32872 20.3701 3.88773 24.4811 3.88773C28.5924 3.88773 32.0893 5.32872 34.9716 8.21072C37.8539 11.0924 39.2951 14.5884 39.2951 18.6987C39.2951 21.4307 38.6618 23.9232 37.3951 26.1762C36.1284 28.4296 34.3951 30.2889 32.1951 31.7542V38.7487C32.1951 39.6007 31.8831 40.3516 31.2591 41.0012C30.6351 41.6509 29.8993 41.9957 29.0516 42.0357H28.3516C28.1276 42.8184 27.6539 43.4244 26.9306 43.8537C26.2076 44.2831 25.3921 44.4977 24.4841 44.4977Z" fill="black"/>
        </svg>
      ),
      title: "Shaping a Sustainable Future",
      description: "Through keynotes, panels, and case studies, discover actionable strategies to integrate inclusive policies, strengthen networks, and promote equal digital participation for a more equitable and sustainable tomorrow."
    }
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="flex max-w-screen-xl mx-auto px-4 flex-col items-center gap-20">
        <div className="text-center">
          <h2 className="text-black text-center text-4xl md:text-5xl font-bold leading-tight max-sm:text-3xl">
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
                  <h3 className="text-black text-center text-2xl md:text-3xl font-bold leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-black text-center text-base font-normal leading-6">
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
