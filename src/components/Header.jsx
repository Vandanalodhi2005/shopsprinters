import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = ({ setPage, currentPage }) => {
  const { cartCount } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Shop', id: 'shop' },
    { name: 'Printer Setup', id: 'easy-setup-guide' },
    { name: 'About Us', id: 'about' },
    { name: "FAQ's", id: 'faqs' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setPage(id);
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-in-out ${
      isScrolled ? 'bg-white shadow-md h-20' : 'bg-white h-24'
    } flex items-center`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo Left */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <img 
            src="/Shops-Printers-Logo.png" 
            alt="ShopsPrinters Logo" 
            className={`${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'} w-auto object-contain transition-all duration-500`}
          />
        </button>

        {/* Links + Actions Right */}
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              link.id === 'easy-setup-guide' ? (
                <a
                  key={link.id}
                  href="/easy-setup-guide/"
                  className={`text-[18px] font-medium tracking-tight transition-all duration-300 relative group ${
                    currentPage === link.id ? 'text-[#ff2d46]' : 'text-dark hover:text-[#ff2d46]'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#ff2d46] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
                </a>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[18px] font-medium tracking-tight transition-all duration-300 relative group ${
                    currentPage === link.id ? 'text-[#ff2d46]' : 'text-dark hover:text-[#ff2d46]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#ff2d46] transition-transform duration-300 origin-left ${
                    currentPage === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              )
            ))}
          </nav>

          <div className="flex items-center gap-6 shrink-0 border-l pl-8 border-gray-100 ml-2 hidden lg:flex">
            <div className="relative">
              <button 
                onClick={() => isAuthenticated ? setIsUserMenuOpen(!isUserMenuOpen) : handleNavClick('login')}
                className={`flex items-center justify-center border transition-all duration-300 ${
                  isAuthenticated 
                    ? 'w-10 h-10 rounded-xl bg-white border-gray-100 text-[#ff2d46] font-medium text-xs shadow-sm hover:border-[#ff2d46]' 
                    : 'text-dark hover:text-[#ff2d46] border-transparent'
                }`} 
                aria-label="User Account"
              >
                {isAuthenticated ? (
                  <span>{(user.firstName?.charAt(0) || 'U') + (user.lastName?.charAt(0) || '')}</span>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                )}
              </button>

              {isAuthenticated && isUserMenuOpen && (
                <div className="absolute right-0 mt-4 w-56 bg-white border border-gray-100 rounded-2xl shadow-2xl py-4 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="px-6 py-3 mb-2 bg-[#fdf2f2]/50 border-b border-gray-100">
                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest leading-none mb-1">Signed in as</p>
                    <p className="text-[13px] font-medium text-dark truncate">{user.firstName} {user.lastName}</p>
                  </div>
                  <button onClick={() => handleNavClick('profile')} className="w-full text-left px-6 py-3 text-[14px] font-medium text-dark hover:bg-gray-50 flex items-center gap-3 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Profile
                  </button>
                  <button onClick={() => { logout(); setIsUserMenuOpen(false); }} className="w-full text-left px-6 py-3 text-[14px] font-medium text-[#ff2d46] hover:bg-[#fdf2f2]/50 flex items-center gap-3 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
            <button 
              onClick={() => handleNavClick('cart')}
              className="relative p-2 text-dark hover:text-[#ff2d46] transition-all duration-300 hover:-translate-y-0.5" 
              aria-label="Shopping Cart"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#ff2d46] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium shadow-lg shadow-[#ff2d46]/30 animate-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Actions Overlay - Mobile Only */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={() => handleNavClick('cart')}
              className="relative p-2 text-dark" 
              aria-label="Shopping Cart"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#ff2d46] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="p-2 text-dark" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 bg-dark/60 backdrop-blur-sm z-[2000] lg:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className={`absolute top-0 right-0 w-[80%] max-w-[340px] h-full bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 flex items-center justify-between border-b border-gray-50">
            <img src="/Shops-Printers-Logo.png" alt="Logo" className="h-6 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-dark hover:text-[#ff2d46]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <div className="p-8 bg-[#fdf2f2]/30 flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#ff2d46] font-medium text-lg shadow-sm">
                  {(user.firstName?.charAt(0) || 'U') + (user.lastName?.charAt(0) || '')}
                </div>
                <div>
                  <p className="text-sm font-medium text-dark leading-none mb-1">{user.firstName} {user.lastName}</p>
                  <button onClick={() => handleNavClick('profile')} className="text-[11px] font-medium text-[#ff2d46] uppercase tracking-wider">Account Settings</button>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-2 w-full">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Welcome Guest</p>
                <button 
                  onClick={() => handleNavClick('login')}
                  className="w-full bg-dark text-white py-4 rounded-xl font-medium text-[13px] uppercase tracking-widest hover:bg-[#ff2d46] transition-all active:scale-95 shadow-xl shadow-black/10"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>

          <nav className="flex-1 p-8 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left py-4 px-6 rounded-2xl text-[18px] font-medium transition-all ${
                  currentPage === link.id 
                    ? 'bg-[#ff2d46] text-white shadow-lg shadow-[#ff2d46]/20 translate-x-2' 
                    : 'text-dark hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="p-8 border-t border-gray-50 space-y-4">
             <button 
                onClick={() => handleNavClick('cart')}
                className="w-full flex items-center justify-between p-5 rounded-2xl bg-gray-50 text-dark font-medium transition-all hover:bg-dark hover:text-white"
             >
                <span className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  My Cart
                </span>
                <span className="bg-[#ff2d46] text-white text-[10px] px-2.5 py-1 rounded-full">{cartCount} items</span>
             </button>

             {isAuthenticated && (
               <button 
                 onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                 className="w-full py-4 text-[13px] font-medium text-[#ff2d46] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#fdf2f2] rounded-xl transition-colors"
               >
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                 Logout Securely
               </button>
             )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
