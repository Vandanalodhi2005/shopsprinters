import React from 'react';

const Footer = ({ setPage }) => {
  const handleNavClick = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Shop', id: 'shop' },
    { name: 'My account', id: 'account' },
    { name: 'Blog', id: 'blog' },
    { name: "FAQ's", id: 'faqs' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const importantLinks = [
    { name: 'Privacy Policy', id: 'privacy' },
    { name: 'Terms and Conditions', id: 'terms' },
    { name: 'Refund and Return Policy', id: 'refund-policy' },
    { name: 'Shipping & Delivery Policy', id: 'shipping' },
    { name: 'Accessibility Statement', id: 'accessibility' },
    { name: 'Cookie Policy', id: 'cookie-policy' },
    { name: 'Disclaimer', id: 'disclaimer' },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <button onClick={() => handleNavClick('home')} className="flex items-center group">
            <img 
              src="/Shops-Printers-White-Logo.png" 
              alt="ShopsPrinters Logo" 
              className="h-10 w-auto object-contain" 
            />
          </button>
          <p className="text-gray-100 text-sm leading-relaxed max-w-xs font-medium">
            Your trusted online source for printers, ink, toner, and printing supplies—delivering genuine products, fast shipping, and reliable services.
          </p>
          <div className="flex gap-4">
             <button className="text-white hover:text-[#ff2d46] transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
             </button>
             <button className="text-white hover:text-[#ff2d46] transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
             </button>
             <button className="text-white hover:text-[#ff2d46] transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
             </button>
             <button className="text-white hover:text-[#ff2d46] transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
             </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[17px] font-bold mb-8 tracking-wide">Quick Links</h4>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => handleNavClick(link.id)} 
                  className={`text-sm tracking-wide font-bold transition-colors duration-300 ${link.id === 'contact' ? 'text-[#ff2d46]' : 'text-gray-100 hover:text-[#ff2d46]'}`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="text-[17px] font-bold mb-8 tracking-wide">Important Links</h4>
          <ul className="space-y-4">
            {importantLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => handleNavClick(link.id)} 
                  className="text-sm text-gray-100 font-bold hover:text-[#ff2d46] tracking-wide transition-colors duration-300"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Contact */}
        <div>
          <h4 className="text-[17px] font-bold mb-8 tracking-wide">Quick Contact</h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-4 group">
              <svg className="text-[#ff2d46] shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-[13px] font-bold text-white/90 leading-tight group-hover:text-[#ff2d46] transition-colors duration-300">17807 Lakecrest View Dr #1205,<br />Cypress, TX 77433</span>
            </li>
            <li className="flex items-center gap-4 group">
              <svg className="text-[#3b82f6] shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span className="text-[13px] font-bold text-white/90 group-hover:text-[#ff2d46] transition-colors duration-300">support@shopsprinters.com</span>
            </li>
            <li className="flex items-center gap-4 group">
              <svg className="text-[#3b82f6] shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <span className="text-[13px] font-bold text-white/90 underline group-hover:text-[#ff2d46] transition-colors duration-300">www.shopsprinters.com</span>
            </li>
          </ul>
          
          {/* Professional Composite Payment */}
          <div className="mt-10">
            <img 
              src="/pay/payments.svg" 
              alt="Payment Gateways" 
              className="h-20 w-auto p-2 rounded-lg brightness-100 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-[12px] font-bold">
        <p>Copyright © 2026 Shops Printers All rights reserved</p>
        <button className="hover:text-[#ff2d46] transition-colors duration-300">Do Not Sell or Share My Personal Information</button>
      </div>
    </footer>
  );
};

export default Footer;
