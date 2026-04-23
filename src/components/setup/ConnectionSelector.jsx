import React from 'react';

const connections = [
  { icon: 'fa-signal', label: 'Wireless (WiFi) Connection' },
  { icon: 'fa-usb', label: 'USB / Wired Connection' },
  { icon: 'fa-sitemap', label: 'Ethernet (LAN) Connection' },
  { icon: 'fa-circle-question', label: 'Not Sure / Other Method' },
];

const ConnectionSelector = ({ onSelect, onBack }) => {
  return (
    <div className="text-center py-12 px-6 md:px-12 animate-in fade-in slide-in-from-right-8 duration-500">
      <h2 className="text-2xl md:text-[28px] font-bold text-gray-800 mb-2">How Is Your Printer Connected?</h2>
      <p className="text-gray-500 text-sm md:text-base mb-10">Choose how your printer connects to your device to continue.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {connections.map((conn) => (
          <button
            key={conn.label}
            className="group flex flex-col items-center justify-center border border-gray-100 rounded-xl py-10 px-4 bg-white hover:bg-gray-50/50 hover:border-blue-100 transition-all duration-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-lg focus:outline-none"
            onClick={() => onSelect(conn.label)}
          >
            <div className="relative mb-6">
                <i className={`fa-solid ${conn.icon} text-4xl text-blue-700 group-hover:scale-110 transition-transform`}></i>
            </div>
            <span className="font-bold text-gray-700 text-[15px]">{conn.label}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-8">
        <button 
            className="text-gray-400 hover:text-blue-700 font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all group"
            onClick={onBack}
        >
            <i className="fa-solid fa-arrow-left transform group-hover:-translate-x-1 transition-transform"></i>
            Go Back
        </button>
        
        <p className="text-gray-400 text-[13px] font-medium italic">
            Need help? Contact our support team via chat or email.
        </p>
      </div>
    </div>
  );
};

export default ConnectionSelector;
