import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import sairamLogo from '/Sairam.png';
import unoLogo from '/UNO.png';

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
    <header className="w-full bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border/30">
            <img
              src={unoLogo}
              alt="UNO Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
            <div className="w-px h-8 bg-border/40"></div>
            <img
              src={sairamLogo}
              alt="Sairam Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-8">
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('event')} 
              className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 group"
            >
              <span className="relative z-10">Event</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-background/80 border border-border/30 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg z-40 md:hidden animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('event')} 
                className="text-left px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-300"
              >
                Event
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
