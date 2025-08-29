import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-accent/30 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col gap-8">
          {/* Logo on left, Contact info on right, center empty */}
          <div className="flex items-center justify-between gap-8 max-md:flex-col max-md:items-center max-md:text-center max-md:gap-6">
            {/* Logo */}
            <img
              src="/leo_muthu.png"
              alt="Leo Muthu Logo"
              className="h-20"
            />
            
            {/* Empty center space */}
            <div className="flex-1"></div>
            
            {/* Contact Info - Right aligned, stacked vertically */}
            <div className="flex flex-col gap-4 text-right max-md:text-center">
              {/* Phone */}
              <div>
                <h3 className="text-black text-base font-bold mb-2">Phone:</h3>
                <p className="text-black text-sm leading-relaxed">
                  +91-44-22512111 / 2251 2333/+91-044-22512222<br />
                  +91-44-22512444 / +91 86670 59309
                </p>
              </div>
              
              {/* Mail */}
              <div>
                <h3 className="text-black text-base font-bold mb-2">Mail:</h3>
                <p className="text-black text-sm">
                  un.sairam@sairam.edu.in
                </p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="w-full h-px bg-black" />
          <p className="text-black text-sm font-normal text-center">
            © 2025 Our Conference. All rights reserved by Sairam Institutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
