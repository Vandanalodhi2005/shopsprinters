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
    { name: 'Track Order', id: 'track-order' },
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
    { name: 'Printer Setup Guide', id: 'easy-setup-guide' },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <button onClick={() => handleNavClick('home')} className="flex items-center group">
            <img 
              src="/Shops-Printers-White-Logo.png" 
              alt="ShopsPrinters Logo" 
              className="h-10 w-auto object-contain transition-opacity group-hover:opacity-80" 
            />
          </button>
          <p className="text-gray-200 text-md leading-relaxed max-w-xs font-medium">
            Your trusted online source for printers, ink, toner, and printing supplies—delivering genuine products, fast shipping, and reliable services.
          </p>
          <div className="flex gap-4">
             <button className="text-gray-200 hover:text-[#ff2d46] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
             </button>
             <button className="text-gray-200 hover:text-[#ff2d46] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
             </button>
             <button className="text-gray-200 hover:text-[#ff2d46] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
             </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[17px] font-medium mb-8 tracking-wide text-white">Quick Links</h4>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.id}>
                {link.id === 'easy-setup-guide' ? (
                  <a 
                    href="/easy-setup-guide/" 
                    className="text-md font-medium text-gray-200 hover:text-[#ff2d46] transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <button 
                    onClick={() => handleNavClick(link.id)} 
                    className="text-md font-medium text-gray-200 hover:text-[#ff2d46] transition-colors"
                  >
                    {link.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="text-[17px] font-medium mb-8 tracking-wide text-white">Important Links</h4>
          <ul className="space-y-4">
            {importantLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => handleNavClick(link.id)} 
                  className="text-md font-medium text-gray-200 hover:text-[#ff2d46] transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Contact */}
        <div>
          <h4 className="text-[17px] font-medium mb-8 tracking-wide text-white">Quick Contact</h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <svg className="text-[#ff2d46] shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-[16px] text-gray-200 font-medium leading-tight">17807 Lakecrest View Dr #1205,<br />Cypress, TX 77433</span>
            </li>
            <li className="flex items-center gap-4">
              <svg className="text-gray-200 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span className="text-[16px] text-gray-200 font-medium">support@shopsprinters.com</span>
            </li>
          </ul>
          <div className="mt-10">
            <img 
              src="/pay/payments.svg" 
              alt="Payments" 
              className="h-16 w-auto opacity-50 hover:opacity-100 transition-all duration-700" 
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-200 text-[15px] font-medium">
        <p>Copyright © 2026 Shops Printers All rights reserved</p>
        <button 
          onClick={() => handleNavClick('do-not-sell')} 
          className="hover:text-[#ff2d46] transition-colors"
        >
          Do Not Sell or Share My Personal Information
        </button>
      </div>
    </footer>
  );
};

export default Footer;
