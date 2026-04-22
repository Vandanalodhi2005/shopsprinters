import React from 'react';
import heroImg from '/home-banner-t.jpg';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-black">
      {/* High-quality background with deep overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[20s] animate-subtle-zoom"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${heroImg})`,
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
        <div className="max-w-5xl mx-auto space-y-5">
          <h5 className="text-[40px] md:text-[80px] font-bold text-white leading-[1.05]">
            Print Smarter with Shops<br className="hidden md:block" />
            Printers
          </h5>
          
          <p className="text-md md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-medium">
            Your trusted destination for reliable printers, ink, toner, and 
            printing accessories. Whether you're setting up a home 
            office or managing a business, we find your right product.
          </p>
          
          <div className="flex justify-center items-center pt-6 animate-fade-up delay-200">
            <button className="bg-[#ff2d46] hover:bg-[#e6253d] text-white py-5 px-14 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,45,70,0.4)] active:scale-95">
              EXPLORE COLLECTION
            </button>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-white/30 text-[10px] uppercase tracking-[4px] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
