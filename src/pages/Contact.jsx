import React, { useState } from 'react';

const Contact = ({ setPage }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-[#fdf2f2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[30px] md:text-[54px] font-medium mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-[#666] text-[17px] font-medium max-w-xl mx-auto leading-relaxed opacity-80">
            We’re here to help with any questions about our products, orders, or
            printing support. Whether you need assistance choosing the right
            printer, tracking an order, or resolving a technical issue, our team is
            ready to assist.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Left Column: Form */}
            <div className="bg-[#fdf2f2] p-8 md:p-12 rounded-[40px] shadow-sm">
              <h2 className="text-2xl font-medium text-dark mb-8">Send Us Message</h2>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name *" 
                    className="w-full bg-[#eeebeb] border-none rounded-lg px-6 py-4 text-sm text-gray-700 font-medium focus:ring-1 focus:ring-[#ff2d46] outline-none"
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email *" 
                    className="w-full bg-[#eeebeb] border-none rounded-lg px-6 py-4 text-sm text-gray-700 font-medium focus:ring-1 focus:ring-[#ff2d46] outline-none"
                    required 
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Comment *" 
                    rows="5"
                    className="w-full bg-[#eeebeb] border-none rounded-lg px-6 py-4 text-sm text-gray-700 font-medium focus:ring-1 focus:ring-[#ff2d46] outline-none resize-none"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start gap-3 px-1">
                  <input 
                    type="checkbox" 
                    id="contact-agreed" 
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1.5 w-4 h-4 accent-[#ff2d46] cursor-pointer" 
                    required
                  />
                  <label htmlFor="contact-agreed" className="text-[11px] font-medium text-[#666] cursor-pointer leading-relaxed">
                    By submitting this form, you agree to our 
                    <button type="button" onClick={() => setPage('privacy')} className="text-[#ff2d46] mx-1 hover:underline">Privacy Policy</button>, 
                    <button type="button" onClick={() => setPage('terms')} className="text-[#ff2d46] mx-1 hover:underline">Terms & Conditions</button>, 
                    <button type="button" onClick={() => setPage('refund-policy')} className="text-[#ff2d46] mx-1 hover:underline">Refund & Return Policy</button> 
                    and consent to us using your information to respond to your request.
                  </label>
                </div>

                <button 
                  disabled={!agreed}
                  className={`px-12 py-4 rounded-full uppercase text-sm tracking-widest transition-all transform flex items-center justify-center gap-2 font-medium ${agreed ? 'bg-dark text-white hover:bg-[#ff2d46] hover:-translate-y-1 shadow-lg shadow-black/10' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}
                >
                  SEND
                </button>
              </form>
            </div>

            {/* Right Column: Info */}
            <div className="bg-[#fdf2f2] p-8 md:p-12 rounded-[40px] shadow-sm space-y-10">
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#ff2d46] shadow-sm flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-dark mb-1">Address</h3>
                  <p className="text-gray-600 font-medium leading-relaxed opacity-80">
                    17807 Lakecrest View Drive,, Cypress, TX 77433
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#ff2d46] shadow-sm flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-dark mb-1">Email</h3>
                  <p className="text-gray-600 font-medium leading-relaxed opacity-80">
                    support@shopsprinters.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#ff2d46] shadow-sm flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 014 0 1.499 1.499 0 01.174.683 5.007 5.007 0 01-1.088 5.176A2.99 2.99 0 0110 15a2 2 0 01-2-2v-1.172a1.498 1.498 0 01-1.171-1.427C6.829 10.404 6.829 10.404 6 9c-.317-.317-.317-.683 0-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-dark mb-1">Website</h3>
                  <p className="text-gray-600 font-medium leading-relaxed opacity-80">
                    www.shopsprinters.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#ff2d46] shadow-sm flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-red-500 mb-1">Follow Us</h3>
                  <div className="flex gap-5 mt-3">
                    {/* Instagram */}
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 hover:text-[#ffffff] hover:bg-[#ff2d46] shadow-sm transition-all transform hover:-translate-y-1">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    {/* Facebook */}
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 hover:text-[#ffffff] hover:bg-[#ff2d46] shadow-sm transition-all transform hover:-translate-y-1">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 hover:text-[#ffffff] hover:bg-[#ff2d46] shadow-sm transition-all transform hover:-translate-y-1">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
