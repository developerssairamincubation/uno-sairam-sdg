import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-accent/30 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-row items-center gap-8">
          {/* Logo */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/856fcb07989c5ea7a6dec97a13b33dcfedf1ee97?width=258"
            alt="Conference Logo"
            className="h-12"
          />
          
          {/* Contact Information */}
          <div className="text-center space-y-4">
            <div>
              <h3 className="text-black text-base font-bold mb-2">Phone:</h3>
              <p className="text-black text-sm leading-relaxed">
                +91-44-22512111 / 2251 2333/+91-044-22512222<br />
                +91-44-22512444
              </p>
            </div>
            
            <div>
              <h3 className="text-black text-base font-bold mb-2">Mail:</h3>
              <p className="text-black text-sm">
                sairam@sairam.edu.in
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="w-full h-px bg-black" />
          <p className="text-black text-sm font-normal text-center">
            © 2025 Our Conference. All rights reserved by spark invotech.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
