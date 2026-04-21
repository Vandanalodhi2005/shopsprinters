import React from 'react';

const StandOut = () => {
  const points = [
    {
      id: 1,
      title: "Genuine Products",
      text: "We offer printers, ink, toner, and accessories sourced from trusted suppliers, ensuring reliable performance and long-lasting quality for home, office, and business needs.",
      icon: (
        <svg  viewBox="0 0 24 24" className="w-16 h-16" fill="none" stroke="#ff2d46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Wide Selection",
      text: "From inkjet and laser printers to cartridges and essential printing supplies, our collection gives you versatile options for every printing task—simple, fast, and convenient.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor" style={{color: '#ff2d46'}}>
          <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 15H5V8h14v10zM12 10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Expert Guidance",
      text: "Our team provides helpful support for printer setup, Wi-Fi connectivity, driver installation, and basic troubleshooting to ensure smooth printing from day one.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor" style={{color: '#ff2d46'}}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "For Home & Business",
      text: "Whether you’re printing school projects, office documents, or everyday tasks, we deliver solutions designed to fit different users, budgets, and environments.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor" style={{color: '#ff2d46'}}>
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 3.24 5 6s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-[54px] font-[900] text-dark leading-tight mb-6">
            What Makes Shops Printers Stand Out
          </h2>
          <p className="text-[#888] font-medium text-[15px] tracking-wide uppercase">
            Quality, Reliability & Service – Here’s Why Customers Trust Us
          </p>
        </div>

        {/* Zig-Zag Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 lg:gap-6 items-start">
          {points.map((point, index) => (
            <div 
              key={point.id} 
              className={`bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl animate-fade-up ${index % 2 !== 0 ? 'md:mt-24' : 'md:mt-0'}`}
            >
              {/* Icon */}
              <div className="mb-10 min-h-[64px] flex items-center justify-center">
                {point.icon}
              </div>

              {/* Content */}
              <h3 className="text-[19px] font-black text-dark mb-4">{point.title}</h3>
              <p className="text-gray-500 leading-[1.7] text-[15px] font-medium">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandOut;
