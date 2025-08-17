import React from 'react';

const Hero = () => {
  return (
    <section 
      className="w-full py-20 relative bg-gradient-to-b from-primary/20 to-background/90"
      style={{
        backgroundImage: `url('/lovable-uploads/bb1107d1-525b-4e06-a92e-a340db3d4f30.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-background/95"></div>
      <div className="flex max-w-screen-xl mx-auto px-4 flex-col items-center gap-20 relative z-10">
        <div className="flex max-w-screen-md flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Sairam Institute Joins the United Nations Academic Impact
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Solutions Sessions – Side Events at the Second World Summit For Social Development
            </p>
          </div>
          
          <div className="flex items-start gap-4 max-sm:flex-col max-sm:w-full">
            <button className="flex justify-center items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors max-sm:w-full">
              <span>Join Event</span>
            </button>
            <button className="flex justify-center items-center gap-2 border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-colors max-sm:w-full">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
