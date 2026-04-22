import React from 'react';
import SetupHeader from './SetupHeader';

const EasySetupGuide = ({ setPage }) => {
  const [step, setStep] = React.useState(1);

  const issueCards = [
    { 
      title: "Printer Setup Issues", 
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0059B3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/><rect x="6" y="2" width="12" height="6"/><circle cx="15" cy="18" r="3"/><path d="m14 18 1 1 2-2"/>
        </svg>
      )
    },
    { 
      title: "Printer Offline Issues", 
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0059B3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/><rect x="6" y="2" width="12" height="6"/><circle cx="15" cy="18" r="3"/><line x1="13" y1="16" x2="17" y2="20"/>
        </svg>
      )
    },
    { 
      title: "WiFi Connection Errors", 
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0059B3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.1 0"/><path d="M1.4 9a16 16 0 0 1 21.2 0"/><path d="M8.5 16.1a6 6 0 0 1 7 0"/><path d="M12 20h.01"/>
        </svg>
      )
    },
    { 
      title: "Paper Jam Errors", 
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0059B3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="15" cy="16" r="3"/><line x1="13" y1="14" x2="17" y2="18"/>
        </svg>
      )
    },
    { 
      title: "Print Jobs Stuck in Queue", 
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0059B3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="2" strokeDasharray="3 3"/><rect x="6" y="2" width="12" height="6"/>
        </svg>
      )
    },
    { 
      title: "Scanner Malfunctions", 
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0059B3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="6" width="18" height="12" rx="2"/><path d="M6 10h12" strokeDasharray="2 2"/><circle cx="15" cy="14" r="3"/><line x1="13" y1="12" x2="17" y2="16"/>
        </svg>
      )
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#333333]">
      <SetupHeader setPage={setPage} step={step} />
      
      <main className="container mx-auto px-4 md:px-40 py-16">
        {/* Hero Section */}
        {step === 1 && (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
            <div className="flex-1 space-y-6 max-w-xl">
              <h1 className="text-[32px] font-bold text-[#0059B3] leading-tight">
                Easy Printer Setup
              </h1>
              <p className="text-[15px] text-[#333333]">
                Power on your printer to get started.
              </p>
              <div className="space-y-4">
                <p className="text-[15px] text-[#333333] leading-relaxed">
                   Next, select <span className="font-bold">Printer Setup</span> to follow an easy, step-by-step guide for setting up, customizing, and registering your device.
                </p>
                <a 
                  href="/printer-setup-guide/"
                  className="inline-block bg-[#0059B3] hover:bg-[#004a94] text-white px-7 py-3 rounded-lg text-[15px] font-bold transition-all shadow-md active:scale-95"
                >
                  Click Here for Printer Setup
                </a>
              </div>
            </div>
            
            <div className="flex-1 relative flex items-center justify-center">
              <button className="hidden md:block absolute left-[-40px] text-[#333] hover:text-[#0059B3]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <div className="max-w-md">
                <img 
                  src="/slide-1.png" 
                  alt="Printer" 
                  className="w-full h-auto drop-shadow-xl" 
                />
              </div>
              <button className="hidden md:block absolute right-[-40px] text-[#333] hover:text-[#0059B3]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-xl mx-auto text-center py-24 mb-20 animate-in fade-in zoom-in duration-500">
             <div className="w-20 h-20 bg-[#f4f4f4] text-[#0059B3] rounded-full flex items-center justify-center mx-auto mb-8">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
             </div>
             <h2 className="text-2xl font-bold mb-3">Downloading Drivers</h2>
             <p className="text-[14px] text-[#767676] mb-10">Searching for available software for your operating system...</p>
             <div className="w-full bg-[#f4f4f4] h-1.5 rounded-full overflow-hidden mb-6">
                <div className="bg-[#0059B3] h-full w-[45%]"></div>
             </div>
             <button onClick={() => setStep(3)} className="text-[13px] text-[#0059B3] font-bold hover:underline">Manual Install &gt;</button>
          </div>
        )}
        
        {step === 3 && (
          <div className="max-w-xl mx-auto text-center py-24 mb-20 animate-in fade-in zoom-in duration-500">
             <div className="w-20 h-20 bg-[#f4f4f4] text-[#28a745] rounded-full flex items-center justify-center mx-auto mb-8">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
             </div>
             <h2 className="text-2xl font-bold mb-3">Software Ready</h2>
             <p className="text-[14px] text-[#767676] mb-10">The setup software is ready to be executed on your computer.</p>
             <button 
                onClick={() => setStep(1)}
                className="bg-dark text-white px-10 py-3 rounded-lg text-[15px] font-bold hover:bg-[#0059B3] transition-all"
              >
                Return to Dashboard
              </button>
          </div>
        )}

        {/* Issue Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-24">
          {issueCards.map((card, i) => (
            <button key={i} className="bg-white border border-[#e6e6e6] p-7 rounded-2xl flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-lg transition-all">
              <div className="w-16 h-16 flex items-center justify-center">
                {card.icon}
              </div>
              <span className="text-[13px] font-bold text-[#0059B3] leading-tight px-1">
                {card.title}
              </span>
            </button>
          ))}
        </div>

        {/* Text Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-10 mb-24">
            <h2 className="text-[36px] font-bold text-[#333333] tracking-tight">
              Step-by-Step Printer Setup Guide
            </h2>
            <p className="text-[15px] text-[#555555] leading-relaxed">
               Get your printer ready quickly and confidently with our streamlined setup instructions. Whether you’re installing a brand-new device or reconnecting an existing one, this guide walks you through each step to configure, connect, and test your printer with ease.
            </p>
        </div>

        {/* Support Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white rounded-[32px] border border-[#e6e6e6] p-12 shadow-sm animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="flex-1 space-y-8 max-w-xl">
            <h3 className="text-[20px] font-bold text-[#0059B3]">
              Need Help? Connect with Online Experts
            </h3>
            <p className="text-[15px] text-[#333333] leading-relaxed">
              If you’re still experiencing issues after following these steps, our certified support experts are here to assist you. Connect online for real-time troubleshooting, personalized guidance, and quick solutions to get your printer up and running smoothly.
            </p>
            <button className="bg-[#0059B3] hover:bg-[#004a94] text-white px-8 py-4 rounded-lg text-[15px] font-bold transition-all shadow-md active:scale-95">
              Click for Live Chat Assistance
            </button>
          </div>
          
          <div className="flex-1 max-w-md lg:max-w-xl">
             <img 
               src="/printer-setup-guide.jpg" 
               alt="Online Expert Support" 
               className="w-full h-auto rounded-2xl shadow-xl border border-[#e6e6e6]" 
             />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EasySetupGuide;
