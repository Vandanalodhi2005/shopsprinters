import React from 'react';

const connections = [
  { icon: 'fa-signal', label: 'Wireless (WiFi) Connection' },
  { icon: 'fa-usb', label: 'USB / Wired Connection' },
  { icon: 'fa-bluetooth-b', label: 'Ethernet (LAN) Connection' },
  { icon: 'fa-circle-question', label: 'Not Sure / Other Method' },
];

const ConnectionSelector = ({ onSelect, onBack }) => {
  return (
    <div className="text-center py-8 px-4 sm:px-8 animate-in fade-in slide-in-from-right-8 duration-500">
    
      <h2 className="text-2xl md:text-[28px] font-bold text-gray-800 mb-2">How Is Your Printer Connected?</h2>
      <p className="text-gray-500 text-sm md:text-base mb-8">Choose how your printer connects to your device to continue.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {connections.map((conn) => (
          <button
            key={conn.label}
            className="flex flex-col items-center justify-center border border-gray-200 rounded-lg py-7 px-2 bg-white hover:bg-blue-50 transition-colors focus:outline-none w-full"
            onClick={() => onSelect(conn.label)}
          >
            <div className="relative mb-4">
                <i className={`fa-solid ${conn.icon} text-4xl text-blue-700 transition-transform`}></i>
            </div>
            <span className="font-semibold text-gray-700 text-base">{conn.label}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 mt-4">
        <button 
            className="text-gray-500 hover:underline text-sm flex items-center transition-all group"
            onClick={onBack}
        >
            <i className="fa-solid fa-arrow-left mr-1 transform group-hover:-translate-x-1 transition-transform"></i>
            Back
        </button>
        
        <p className="text-gray-500 pt-5 text-sm italic">
            Need help? Contact our support team via chat or email.
        </p>
      </div>
    </div>
  );
};

export default ConnectionSelector;
