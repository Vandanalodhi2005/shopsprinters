import React from 'react';

const SetupHeader = ({ setPage, step = 1 }) => {
  return (
    <header className="bg-white border-b border-[#e6e6e6] py-8 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-32 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Steps */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className={`w-[22px] h-[22px] rounded-full flex items-center justify-center text-white text-[12px] font-bold ${step >= 1 ? 'bg-[#0059B3]' : 'bg-[#767676]'}`}>1</span>
            <span className={`text-[13px] font-bold ${step === 1 ? 'text-[#333333]' : 'text-[#767676]'}`}>Identify &gt;</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-[22px] h-[22px] rounded-full flex items-center justify-center text-white text-[12px] font-bold ${step >= 2 ? 'bg-[#0059B3]' : 'bg-[#767676]'}`}>2</span>
            <span className={`text-[13px] font-bold ${step === 2 ? 'text-[#333333]' : 'text-[#767676]'}`}>Download &gt;</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-[22px] h-[22px] rounded-full flex items-center justify-center text-white text-[12px] font-bold ${step >= 3 ? 'bg-[#0059B3]' : 'bg-[#767676]'}`}>3</span>
            <span className={`text-[13px] font-bold ${step === 3 ? 'text-[#333333]' : 'text-[#767676]'}`}>Install</span>
          </div>
        </div>

        {/* Product Type Selection */}
        <div className="flex items-center gap-4">
          <span className="text-[13px] font-bold text-[#333333]">Select a different product type:</span>
          <div className="flex items-center gap-1.5">
            <button className="w-9 h-9 rounded-full bg-[#0059B3] text-white flex items-center justify-center shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/><rect x="6" y="2" width="12" height="6"/></svg>
            </button>
            <button className="w-9 h-9 rounded-full bg-[#f4f4f4] text-[#767676] flex items-center justify-center hover:bg-[#e6e6e6] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </button>
            <button className="w-9 h-9 rounded-full bg-[#f4f4f4] text-[#767676] flex items-center justify-center hover:bg-[#e6e6e6] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
            </button>
            <button className="w-9 h-9 rounded-full bg-[#f4f4f4] text-[#767676] flex items-center justify-center hover:bg-[#e6e6e6] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10v10H7z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SetupHeader;
