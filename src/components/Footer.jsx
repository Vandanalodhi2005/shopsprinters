import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Track Order', path: '/track-order' },
    { name: 'My account', path: '/profile' },
    { name: 'Blog', path: '#' },
    { name: "FAQ's", path: '/faqs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const importantLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms and Conditions', path: '/terms-conditions' },
    { name: 'Refund and Return Policy', path: '/refund-return-policy' },
    { name: 'Shipping & Delivery Policy', path: '/shipping-delivery-policy' },
    { name: 'Accessibility Statement', path: '/accessibility-statement' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Disclaimer', path: '/disclaimer' },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center group block">
            <img 
              src="/Shops-Printers-White-Logo.png" 
              alt="ShopsPrinters Logo" 
              className="h-10 w-auto object-contain transition-opacity group-hover:opacity-80" 
            />
          </Link>
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
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.path} 
                  className="text-md font-medium text-gray-200 hover:text-[#ff2d46] transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="text-[17px] font-medium mb-8 tracking-wide text-white">Important Links</h4>
          <ul className="space-y-4">
            {importantLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.path} 
                  className="text-md font-medium text-gray-200 hover:text-[#ff2d46] transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.name}
                </Link>
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
        <Link 
          to="/do-not-sell" 
          className="hover:text-[#ff2d46] transition-colors"
          onClick={() => window.scrollTo(0, 0)}
        >
          Do Not Sell or Share My Personal Information
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
