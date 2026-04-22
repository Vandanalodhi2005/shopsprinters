import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Browse & Choose",
      text: "Explore our collection of printers, ink, toner, and accessories to find the perfect option for your home or office needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Order Securely",
      text: "Enjoy a smooth checkout experience with safe payment options and clear, transparent order details.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Fast Delivery",
      text: "Relax while we process and ship your order quickly, delivering your products directly to your doorstep.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#f9eded]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-[44px] md:text-[52px] font-[900] text-dark leading-tight mb-4 tracking-tighter">How It Works</h2>
          <p className="text-gray-500 font-bold tracking-wide">A Simple Way to Shop for Printers & Supplies</p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-xl shadow-red-900/5 animate-fade-up border border-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:px-8 lg:px-12 ${
                  index !== steps.length - 1 ? 'md:border-r border-gray-100' : ''
                }`}
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-[#ff2d46] flex items-center justify-center text-[#ff2d46] hover:bg-[#ff2d46] hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex-grow">
                  <h3 className="text-[20px] font-bold text-dark mb-4 leading-none tracking-tight">{step.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed font-bold">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
