import React from 'react';
import heroImg from '/home-banner-t.jpg';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-black">
      {/* High-quality background with deep overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[20s] scale-110 animate-subtle-zoom"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${heroImg})`,
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          <h3 className="text-lg md:text-[60px] font-bold text-white leading-[1.05] animate-fade-up">
            Print Smarter with Shops<br className="hidden md:block" />
            Printers
          </h3>
          
          <p className="text-sm md:text-lg text-white/90 leading-relaxed max-w-xl mx-auto font-semibold animate-fade-up delay-100">
            Your trusted online destination for reliable printers, ink, toner, and 
            essential printing accessories. Whether you're setting up a home 
            office, supporting school projects, or managing day-to-day business 
            printing, we make it easy to find the right products with confidence.
          </p>
          
          <div className="flex justify-center items-center pt-6 animate-fade-up delay-200">
            <button className="bg-[#ff2d46] hover:bg-[#e6253d] text-white py-5 px-16 rounded-full font-semibold text-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,45,70,0.4)] active:scale-95">
              EXPLORE PRINTERS
            </button>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-white/30 text-[10px] uppercase tracking-[4px] font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
