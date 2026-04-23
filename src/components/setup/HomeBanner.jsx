import React from "react";

const HomeBanner = () => {
  return (
    <section
      className="relative min-h-[540px] md:min-h-[650px] flex items-center justify-start overflow-hidden w-full"
      style={{
        backgroundImage: "url('/printer-setup.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-200/10 to-blue-100/60 z-0" />
      <div className="relative z-10 flex flex-col justify-center ml-4 xs:ml-8 md:ml-64 pl-2 xs:pl-4 md:pl-20 py-10 xs:py-14 md:py-16 max-w-full md:max-w-2xl w-full">
        <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 xs:mb-4 text-blue-800 flex flex-wrap gap-x-1">
          <span className="text-blue-700">Print</span>
          <span className="text-blue-500">| Scan</span>
          <span className="text-blue-700">| Copy</span>
          <span className="text-blue-500">| Fax</span>
        </h2>
        <h3 className="text-lg xs:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow mb-1 xs:mb-2">Your World Renowned Printer Assistant</h3>
        <h4 className="text-base xs:text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow mb-3 xs:mb-6">Printers for Home & Office Needs</h4>
        <ul className="text-sm xs:text-base md:text-lg text-white font-medium space-y-1 mb-2 xs:mb-4">
          <li>* Connect Wireless Printer</li>
          <li>* Printer Driver Download</li>
          <li>* Setup your Printer Quickly</li>
        </ul>
      </div>
    </section>
  );
};

export default HomeBanner;
