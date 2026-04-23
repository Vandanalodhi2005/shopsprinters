import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "What is Shops Printers?",
      a: "Shops Printers is an independent online retailer offering printers, ink, toner, and printing accessories for home, office, and small business users. We also provide guidance for printer setup, connectivity, and basic troubleshooting."
    },
    {
      q: "Are you affiliated with any printer brands?",
      a: "No. Shops Printers operates independently and is not affiliated with, endorsed by, or authorized by any printer manufacturers unless clearly stated. The same products may also be available on the official websites of the respective brands."
    },
    {
      q: "What products do you sell?",
      a: "We offer a range of printing products including: Inkjet and laser printers, Ink and toner cartridges, Printer accessories, and Basic printing supplies."
    },
    {
      q: "Where do you ship?",
      a: "We ship to customers across the United States and Canada using trusted delivery partners."
    },
    {
      q: "How long does shipping take?",
      a: "Shipping times vary by location and product availability. Most orders are processed quickly, and tracking information is sent via email once the order ships."
    },
    {
      q: "How can I track my order?",
      a: "You will receive an order confirmation and a tracking link by email once your order has been shipped. You can check shipping updates at any time."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept secure online payments via major credit/debit cards and other available checkout options shown at the time of purchase."
    },
    {
      q: "Do you offer returns or refunds?",
      a: "Yes. If your product meets our return policy requirements, we can assist you with a return or replacement. Please refer to our Refund & Return Policy page for full details."
    },
    {
      q: "Can you help me set up my printer?",
      a: "Yes. We offer remote assistance for: Printer setup, Wi-Fi and network connections, Driver installation, and Basic troubleshooting. Contact our support team for guidance."
    },
    {
      q: "How do I contact customer support?",
      a: "You can reach us through: Email: support@shopsprinters.com or our Website Contact Form. We strive to respond quickly during business hours."
    },
    {
      q: "Are my payments secure?",
      a: "Yes. We use trusted payment gateways and secure checkout processes to protect customer information."
    },
    {
      q: "Where can I find your policies?",
      a: "All policies—including Privacy Policy, Terms & Conditions, Shipping Policy, and Refund Policy—are available on our website footer."
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-12 md:pt-20 pb-20 bg-[#fdf2f2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[42px] md:text-[54px] font-medium text-dark mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-[#666] text-[17px] font-medium max-w-2xl mx-auto leading-relaxed opacity-80 text-center">
            Find answers to common questions about our products, orders, and support services. 
            If you need further help, feel free to contact us anytime.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <div className="space-y-0 border-t border-gray-100">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-100">
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-7 flex items-center justify-between text-left group transition-all"
                >
                  <span className={`text-[17px] font-medium transition-colors ${activeIndex === index ? 'text-[#ff2d46]' : 'text-dark'}`}>
                    {index + 1}. {item.q}
                  </span>
                  <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={activeIndex === index ? 'text-[#ff2d46]' : 'text-gray-300'}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-[300px] pb-8' : 'max-h-0'}`}
                >
                  <p className="text-[#666] text-[16px] leading-relaxed font-medium pr-10 opacity-80">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-[#fdf2f2]/30 p-12 rounded-[40px] border border-gray-50">
             <h3 className="text-2xl font-medium text-dark mb-4 text-center">Still have questions?</h3>
             <p className="text-[#666] mb-8 font-medium opacity-80 text-center">We're here to help you get the most out of your printing experience.</p>
             <Link 
                to="/contact"
                className="bg-dark text-white font-medium px-10 py-4 rounded-full uppercase text-sm tracking-widest hover:bg-[#ff2d46] transition-all transform hover:-translate-y-1 shadow-lg shadow-black/10 inline-block"
             >
                Contact Support
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQs;
