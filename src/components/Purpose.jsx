import React from 'react';

const Purpose = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-[54px] font-[900] text-dark leading-tight mb-6">
            Our Purpose, Your Printing Needs
          </h2>
          <p className="text-gray-500 font-medium text-[17px] max-w-2xl mx-auto leading-relaxed">
            Your printing needs come first. Shops Printers provides genuine products, 
            easy solutions, and support you can rely on.
          </p>
        </div>

        {/* Mission & Vision Grid (Zig-Zag) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Mission Card */}
          <div className="bg-white p-10 md:p-14 lg:p-16 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-[#ff2d46] flex items-center justify-center text-white mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-6">Our Mission</h3>
            <p className="text-gray-500 leading-relaxed text-[17px]">
              At Shops Printers, our mission is to make printing simple, reliable, and accessible for everyone. 
              We provide genuine printers, ink, toner, and essential printing supplies at fair prices—supported by 
              helpful guidance, transparent policies, and a customer-first approach. Our goal is to deliver a smooth 
              shopping experience from browsing to delivery, backed by dependable support whenever you need it.
            </p>
          </div>

          {/* Vision Card (Shifted Down for Zig-Zag) */}
          <div className="md:mt-24 bg-white p-10 md:p-14 lg:p-16 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 rounded-full bg-[#ff2d46] flex items-center justify-center text-white mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-6">Our Vision</h3>
            <p className="text-gray-500 leading-relaxed text-[17px]">
              Our vision is to become a trusted destination for high-quality printing products and support across the 
              United States and Canada. We aim to create a place where customers can shop confidently, receive honest 
              product information, and enjoy reliable service every step of the way. At Shops Printers, we believe 
              printing should be effortless, and we are committed to continuously improving our offerings to meet 
              evolving customer needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Purpose;
