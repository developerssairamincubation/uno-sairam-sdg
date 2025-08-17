import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 relative">
      <nav className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex w-20 h-10 justify-center items-center relative">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2bb304b5e91d34324f9c0adcb10cdd39240adb81?width=130"
            alt="Conference Logo"
            className="absolute"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e677ce3f1506d13a9258ca15aba3265fab538e02?width=124"
            alt="Institution Logo"
            className="absolute"
          />
        </div>
        
        <div className="flex justify-center items-center gap-8">
          <div className="hidden md:flex gap-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="flex justify-center items-center gap-1 text-black hover:text-gray-600 transition-colors"
            >
              <span>Home Page</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="flex justify-center items-center gap-1 text-black hover:text-gray-600 transition-colors"
            >
              <span>About Us</span>
            </button>
            <button 
              onClick={() => scrollToSection('event')} 
              className="flex justify-center items-center gap-1 text-black hover:text-gray-600 transition-colors"
            >
              <span>Event</span>
            </button>
          </div>
          
          <div className="flex justify-center items-center gap-4 max-sm:gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex md:hidden justify-center items-center gap-2 border cursor-pointer text-black text-base font-normal leading-6 px-5 py-2 border-solid border-black max-sm:text-sm max-sm:px-4 max-sm:py-1.5 hover:bg-gray-50 transition-colors"
            >
              <span className="text-black text-base font-normal leading-6 max-sm:text-sm">
                Menu
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('register')}
              className="flex justify-center items-center gap-2 border cursor-pointer text-white text-base font-normal leading-6 bg-black px-5 py-2 border-solid border-black max-sm:text-sm max-sm:px-4 max-sm:py-1.5 hover:bg-gray-800 transition-colors"
            >
              <span className="text-white text-base font-normal leading-6 max-sm:text-sm">
                Register
              </span>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg z-50 md:hidden">
          <div className="flex flex-col p-4 gap-4">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-left text-black hover:text-gray-600 transition-colors py-2"
            >
              Home Page
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left text-black hover:text-gray-600 transition-colors py-2"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('event')} 
              className="text-left text-black hover:text-gray-600 transition-colors py-2"
            >
              Event
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
