import React from "react";
import { useNavigate } from "react-router-dom";

const brands = [
  {
    name: "HP",
    logo: "/hp-bg.png",
    color: "#0071C5",
    shadow: "shadow-blue-200"
  },
  {
    name: "Brother",
    logo: "/brother-bg.png",
    color: "#1A1A1A",
    shadow: "shadow-gray-200"
  },
  {
    name: "EPSON",
    logo: "/epson-bg.png",
    color: "#1A1A1A",
    shadow: "shadow-blue-100"
  },
  {
    name: "Canon",
    logo: "/canon-bg.png",
    color: "#C00",
    shadow: "shadow-red-200"
  }
];

const HomeHero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-black min-h-[400px] md:min-h-0 md:h-screen flex flex-col items-center justify-center text-white pb-16">
      <div className="absolute inset-0 bg-black/70 z-0" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.7)'}}></div>
      <div className="relative z-10 flex flex-col items-center pt-10 pb-6 xs:pt-16 xs:pb-8">
        <span className="uppercase tracking-widest text-xs xs:text-sm text-gray-300 mb-2">Printer Setup</span>
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 xs:mb-4 text-center">Download Your Printer Drivers</h1>
        <p className="text-base xs:text-lg sm:text-xl text-center mb-4 xs:mb-6">Select Your Printer Model</p>
      </div>
      <div className="relative z-10 w-full flex flex-wrap justify-center gap-4 md:gap-8">
        {/* Responsive grid for mobile: 2 cards per row, desktop unchanged */}
        <div className="w-full grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center md:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`bg-gradient-to-br from-white via-gray-50 to-gray-200 border border-gray-200 hover:border-blue-400 transition-all duration-200 rounded-2xl ${brand.shadow} flex flex-col items-center p-3 xs:p-4 sm:p-6 w-full min-h-[180px] xs:min-h-[220px] sm:min-h-[260px] group hover:scale-105 md:w-72`}
              style={{ boxShadow: '0 6px 32px 0 rgba(0,0,0,0.08)' }}
            >
              <div className="mb-2 xs:mb-4 flex items-center justify-center w-full h-14 xs:h-20 sm:h-24">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 xs:h-14 sm:h-20 object-contain"
                  style={{ width: 'auto', maxWidth: '100%', filter: 'none' }}
                />
              </div>
              <span className="inline-block mb-2 xs:mb-4 px-2 xs:px-3 py-1 rounded-lg bg-blue-100 text-blue-800 font-semibold text-xs xs:text-sm tracking-wide shadow-sm border border-blue-200">Printer Setup</span>
              <button
                className="flex items-center gap-2 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:from-blue-800 hover:to-blue-800 text-white font-bold py-2 xs:py-2 px-3 xs:px-6 rounded-xl shadow-lg transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-1 text-xs xs:text-base tracking-wide uppercase whitespace-nowrap"
                onClick={() => navigate(`/model-search/${brand.name}`)}
              >
                <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                Start Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;