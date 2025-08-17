import React from 'react';

const EventFeatures = () => {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M24.5 41C30.5751 41 36.3634 38.5804 40.6777 34.2661C44.992 29.9518 47.4116 24.1635 47.4116 18.0884C47.4116 12.0133 44.992 6.22501 40.6777 1.91071C36.3634 -2.40359 30.5751 -4.82324 24.5 -4.82324C18.4249 -4.82324 12.6366 -2.40359 8.32229 1.91071C4.00799 6.22501 1.58834 12.0133 1.58834 18.0884C1.58834 24.1635 4.00799 29.9518 8.32229 34.2661C12.6366 38.5804 18.4249 41 24.5 41Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M24.5 8.5C25.8261 8.5 27.0979 9.02678 28.0356 9.96447C28.9733 10.9022 29.5 12.174 29.5 13.5C29.5 14.826 28.9733 16.0978 28.0356 17.0355C27.0979 17.9732 25.8261 18.5 24.5 18.5C23.1739 18.5 21.9021 17.9732 20.9644 17.0355C20.0267 16.0978 19.5 14.826 19.5 13.5C19.5 12.174 20.0267 10.9022 20.9644 9.96447C21.9021 9.02678 23.1739 8.5 24.5 8.5Z" fill="currentColor"/>
          <path d="M14.5 28.5C14.5 26.3783 15.3429 24.3434 16.8431 22.8431C18.3434 21.3429 20.3783 20.5 22.5 20.5H26.5C28.6217 20.5 30.6566 21.3429 32.1569 22.8431C33.6571 24.3434 34.5 26.3783 34.5 28.5V31.5H14.5V28.5Z" fill="currentColor"/>
          <circle cx="16" cy="15" r="3" fill="currentColor" opacity="0.7"/>
          <circle cx="33" cy="15" r="3" fill="currentColor" opacity="0.7"/>
          <path d="M12 25C12 23.8954 12.8954 23 14 23H16C17.1046 23 18 23.8954 18 25V28H12V25Z" fill="currentColor" opacity="0.7"/>
          <path d="M31 25C31 23.8954 31.8954 23 33 23H35C36.1046 23 37 23.8954 37 25V28H31V25Z" fill="currentColor" opacity="0.7"/>
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
          <path d="M24.5 41C34.717 41 43 32.717 43 22.5C43 12.283 34.717 4 24.5 4C14.283 4 6 12.283 6 22.5C6 32.717 14.283 41 24.5 41Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M24.5 13C25.8807 13 27 14.1193 27 15.5C27 16.8807 25.8807 18 24.5 18C23.1193 18 22 16.8807 22 15.5C22 14.1193 23.1193 13 24.5 13Z" fill="currentColor"/>
          <path d="M19 27C19 24.7909 20.7909 23 23 23H26C28.2091 23 30 24.7909 30 27V32H19V27Z" fill="currentColor"/>
          <path d="M12 35L24.5 25L37 35" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M15 31C15 29.8954 15.8954 29 17 29C18.1046 29 19 29.8954 19 31V35H15V31Z" fill="currentColor"/>
          <path d="M30 31C30 29.8954 30.8954 29 32 29C33.1046 29 34 29.8954 34 31V35H30V31Z" fill="currentColor"/>
          <circle cx="17" cy="21" r="2" fill="currentColor"/>
          <circle cx="32" cy="21" r="2" fill="currentColor"/>
          <path d="M10 22L39 22" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M24.5 7L24.5 18" stroke="currentColor" strokeWidth="1.5"/>
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
      </div>
    </section>
  );
};

export default EventFeatures;
