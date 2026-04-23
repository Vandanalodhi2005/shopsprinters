import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const brandLogos = {
  HP: '/hp-bg.png',
  Brother: '/brother-bg.png',
  EPSON: '/epson-bg.png',
  Canon: '/canon-bg.png',
};

const Header = ({ showLogo = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  // Try to extract brand from the URL (e.g., /complete-setup/:brand, /model-search/:brand, /installation-failed/:brand)
  const brandMatch = location.pathname.match(/(?:complete-setup|model-search|installation-failed)\/(\w+)/i);
  const brand = brandMatch ? brandMatch[1] : null;
  const logoSrc = brand && brandLogos[brand] ? brandLogos[brand] : '/hp-logo.svg';

  return (
    <header className="w-full h-20 bg-white py-2 flex items-center px-[15vw]">
      <nav className="w-full flex items-center justify-between">
        <div className="flex items-center">
          {showLogo && (
            <img src={logoSrc} alt="Brand Logo" style={{ width: '120px', height: '48px', objectFit: 'contain', background: 'none', borderRadius: 0 }} />
          )}
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-10 items-center ml-auto">
          <li><Link to="#" className="text-gray-800 text-lg font-normal hover:font-semibold transition">Home</Link></li>
          <li><Link to="#" className="text-gray-800 text-lg font-normal hover:font-semibold transition">Inkjet</Link></li>
          <li><Link to="#" className="text-gray-800 text-lg font-normal hover:font-semibold transition">Laser</Link></li>
          <li><Link to="#" className="text-gray-800 text-lg font-normal hover:font-semibold transition">Envy</Link></li>
        </ul>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            aria-label="Open menu"
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 z-50 md:hidden animate-fade-in">
            <li><Link to="/" className="text-gray-800 text-lg font-normal hover:font-semibold transition">Home</Link></li>
            <li><Link to="/inkjet" className="text-gray-800 text-lg font-normal hover:font-semibold transition">Inkjet</Link></li>
            <li><Link to="/laser" className="text-gray-800 text-lg font-normal hover:font-semibold transition">Laser</Link></li>
            <li><Link to="/envy" className="text-gray-800 text-lg font-normal hover:font-semibold transition">Envy</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
