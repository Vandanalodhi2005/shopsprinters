import React from 'react';

const QualitySection = ({ setPage }) => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-gray-50 uppercase">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/home-banner-m1.jpg" 
          alt="Professional Workspace" 
          className="w-full h-full object-cover object-left md:object-center"
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex justify-center md:justify-end">
        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-xl animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-6 leading-tight normal-case">
            Quality Products for Every <br className="hidden md:block" /> Printing Need
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 normal-case font-medium">
            At Shops Printers, we offer a curated selection of printers and supplies 
            sourced from reputable distributors and trusted partners. From inkjet 
            and laser models to ink and toner cartridges, our product range supports 
            home users, students, small businesses, and office environments.
          </p>

          <button 
            onClick={() => setPage('shop')}
            className="inline-flex items-center gap-3 bg-[#ff2d46] text-white py-4 px-10 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:bg-dark group shadow-xl shadow-[#ff2d46]/20"
          >
            Shop Now
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
