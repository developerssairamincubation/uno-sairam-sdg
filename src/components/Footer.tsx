import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = [
    'About Us',
    'Contact Info', 
    'Event Schedule',
    'Speaker Info',
    'Sponsor Details'
  ];

  const legalLinks = [
    'Privacy Notice',
    'User Agreement',
    'Cookie Policy'
  ];

  return (
    <footer className="w-full bg-gray-50 py-16">
      <div className="flex max-w-screen-xl mx-auto px-4 flex-col items-start">
        <div className="flex justify-between items-start w-full max-md:flex-col max-md:gap-10 mb-16">
          <div className="flex flex-col items-start gap-6 flex-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/856fcb07989c5ea7a6dec97a13b33dcfedf1ee97?width=258"
              alt="Conference Logo"
              className="h-12"
            />
            <nav className="flex max-w-[480px] items-start content-start gap-8 flex-wrap max-sm:gap-4">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-black text-sm font-bold leading-[21px] hover:text-gray-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex w-[400px] flex-col items-start gap-4 max-md:w-full">
            <h3 className="text-black text-base font-bold leading-6">
              Subscribe
            </h3>
            <div className="flex flex-col items-start gap-3 w-full">
              <form onSubmit={handleSubscribe} className="flex items-start gap-4 w-full max-sm:flex-col max-sm:gap-3">
                <div className="flex items-center gap-2 flex-1 border p-3 border-solid border-black max-sm:w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 text-black text-base font-normal leading-6 bg-transparent outline-none placeholder:text-gray-600"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex justify-center items-center gap-2 border cursor-pointer text-black text-base font-normal leading-6 px-6 py-3 border-solid border-black max-sm:w-full hover:bg-gray-100 transition-colors"
                >
                  <span className="text-black text-base font-normal leading-6">
                    {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                  </span>
                </button>
              </form>
              <div className="flex justify-between items-start w-full gap-1 max-md:flex-col max-md:gap-2 text-sm text-gray-600">
                <span>By subscribing you agree to with our</span>
                <a href="#privacy" className="text-black hover:text-gray-600 transition-colors underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="w-full h-px bg-black" />
          <div className="flex justify-between items-start w-full max-sm:flex-col max-sm:gap-4 max-sm:text-center">
            <nav className="flex gap-6 text-black text-sm font-normal leading-[21px]">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="underline hover:text-gray-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
            <p className="text-black text-sm font-normal leading-[21px]">
              © 2025 Our Conference. All rights reserved by spark invotech.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
