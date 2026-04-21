import React, { useState, useEffect } from 'react';

const Header = ({ setPage, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Shop', id: 'shop' },
    { name: "FAQ's", id: 'faqs' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setPage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md h-20' : 'bg-white h-24'
    } flex items-center`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo Left */}
        <button onClick={() => handleNavClick('home')} className="flex items-center shrink-0">
          <img 
            src="/Shops-Printers-Logo.png" 
            alt="ShopsPrinters Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </button>

        {/* Links Right (exactly like reference) */}
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-[15px] font-semibold transition-colors duration-300 ${
                  currentPage === link.id ? 'text-[#ff2d46]' : 'text-[#333] hover:text-[#ff2d46]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-6 shrink-0 border-l pl-8 border-gray-100 ml-4 hidden lg:flex">
            <button className="text-[#333] hover:text-[#ff2d46] transition-colors" aria-label="User Account">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            <button className="relative text-[#333] hover:text-[#ff2d46] transition-colors" aria-label="Shopping Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-1 -right-2 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#333]" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 right-0 w-full h-screen bg-white transition-all duration-500 z-50 lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col items-center justify-center gap-8`}>
        <button 
          className="absolute top-8 right-8 text-black" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className={`text-2xl font-bold ${
              currentPage === link.id ? 'text-[#ff2d46]' : 'text-black'
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
