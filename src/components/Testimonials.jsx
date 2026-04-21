import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ava R., Phoenix",
      text: "“Great quality products and trustworthy service. I found exactly what I needed for my small business, and the prices were better than other retailers. The print quality from the cartridges is excellent.”",
      delay: "0s"
    },
    {
      id: 2,
      name: "Emily R., Toronto",
      text: "“I ordered a new printer and some ink refills, and I’m really impressed. Everything was securely packaged, shipped fast, and worked right out of the box. Their customer support walked me through the setup step-by-step. I’ll definitely be coming back for supplies.”",
      delay: "0.2s",
      stagger: true
    },
    {
      id: 3,
      name: "Brandon S., Houston",
      text: "“I needed a dependable printer for work, and this site delivered. The product descriptions were clear, checkout was smooth, and the toner I ordered prints crisp, clean pages every time. I appreciate how simple the whole experience was.”",
      delay: "0.4s"
    }
  ];

  return (
    <section className="pt-20 pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-[44px] md:text-[54px] font-[900] text-dark leading-tight mb-3">
            What Our <br /> Shoppers Say
          </h2>
          <p className="text-gray-500 font-medium text-[15px] tracking-wide">
            Store that nails fashion and comfort.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-start">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              style={{ animationDelay: item.delay }}
              className={`bg-[#f8eded] p-10 md:p-12 rounded-[2.5rem] flex flex-col items-start transition-all duration-500 hover:shadow-xl animate-fade-up ${item.stagger ? 'md:mt-16' : 'md:mt-0'}`}
            >
              {/* Refined Quote Icon */}
              <div className="mb-6">
                <svg width="40" height="30" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8 0C19.8 0 21.6 5.4 21.6 10.8C21.6 19.8 14.4 34.2 0 34.2C1.8 23.4 5.4 16.2 7.2 10.8C3.6 10.8 0 9 0 5.4C0 1.8 5.4 0 12.8 0ZM36.2 0C43.2 0 45 5.4 45 10.8C45 19.8 37.8 34.2 23.4 34.2C25.2 23.4 28.8 16.2 30.6 10.8C27 10.8 23.4 9 23.4 5.4C23.4 1.8 28.8 0 36.2 0Z" stroke="#ff2d46" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>

              {/* Text */}
              <p className="text-[#444] text-[15px] md:text-[16px] leading-relaxed mb-8 font-medium">
                {item.text}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#ff2d46] flex items-center justify-center p-1 border-[3px] border-[#ff2d46]/20">
                  <div className="w-full h-full rounded-full bg-[#ff2d46] flex items-center justify-center text-white overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <span className="font-bold text-dark text-[15px]">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
