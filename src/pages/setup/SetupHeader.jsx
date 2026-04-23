import React from 'react';

const PrinterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9"/>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
    <rect x="6" y="14" width="12" height="8"/>
  </svg>
);
const LaptopIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const TabletIcon = () => (
  <svg width="17" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="14" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);

const SetupHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 top-0 z-50">
      <div
        className="flex items-center justify-between mx-6 md:mx-16 lg:mx-24 py-4 md:py-5"
      >
        {/* Step breadcrumb */}
        <div className="flex items-center gap-1.5 text-[14px] text-[#333]">
          <span className="w-[22px] h-[22px] rounded-full bg-[#0059B3] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">1</span>
          <span className="font-semibold ml-0.5 mr-3">Identify &gt;</span>

          <span className="w-[22px] h-[22px] rounded-full bg-[#0059B3] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">2</span>
          <span className="font-semibold ml-0.5 mr-3">Download &gt;</span>

          <span className="w-[22px] h-[22px] rounded-full bg-[#0059B3] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">3</span>
          <span className="font-semibold ml-0.5">Install</span>
        </div>

        {/* Product type selector */}
        <div className="flex items-center gap-3">
          <span className="text-[14px] text-[#333] font-medium hidden md:inline">Select a different product type:</span>
          <div className="flex items-center gap-2">
            <button className="w-[40px] h-[40px] rounded-full bg-[#0059B3] text-white flex items-center justify-center flex-shrink-0 shadow-sm" title="Printer">
              <PrinterIcon />
            </button>
            <button className="w-[40px] h-[40px] rounded-full border border-gray-300 bg-white text-[#555] flex items-center justify-center flex-shrink-0 hover:bg-gray-50 transition" title="Laptop">
              <LaptopIcon />
            </button>
            <button className="w-[40px] h-[40px] rounded-full border border-gray-300 bg-white text-[#555] flex items-center justify-center flex-shrink-0 hover:bg-gray-50 transition" title="Tablet">
              <TabletIcon />
            </button>
            <button className="w-[40px] h-[40px] rounded-full border border-gray-300 bg-white text-[#555] flex items-center justify-center flex-shrink-0 hover:bg-gray-50 transition" title="Phone">
              <PhoneIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SetupHeader;
