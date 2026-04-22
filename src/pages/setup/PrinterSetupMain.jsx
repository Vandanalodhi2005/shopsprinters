import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import SetupHeader from './SetupHeader';
import Footer from '../../components/Footer';
import { AuthProvider } from '../../context/AuthContext';
import { CartProvider } from '../../context/CartContext';

// Simplified IssueSelector logic from PrintsMatrix
const IssueSelector = ({ setStep }) => {
  const issues = [
    { label: 'Set Up a New Printer', iconPath: "M20 7H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM4 9h16v5H4V9zm2 12h12V17H6v4zM18 2H6v4h12V2z" },
    { label: 'Install Printer Drivers', iconPath: "M19 13v6H5v-6H3v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2zm-7-1.3l4.1-4.1 1.4 1.4-6.5 6.5-6.5-6.5 1.4-1.4 4.1 4.1V3h2v8.7z" },
    { label: 'Fix Printer Offline Issue', iconPath: "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l4 4 4-4c-2.21-2.21-5.79-2.21-8 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2c-3.86-3.86-10.14-3.86-14 0z" },
    { label: 'Fix WiFi Connection Issues', iconPath: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl mx-auto border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">Select The Issue</h2>
      <p className="text-gray-600 mb-8 text-center">Select what you need help with to continue:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {issues.map((issue) => (
          <button 
            key={issue.label}
            onClick={() => setStep(2)}
            className="flex flex-col items-center justify-center border border-gray-200 rounded-lg py-8 px-4 hover:bg-blue-50 transition-all group"
          >
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#0075be] mb-4 group-hover:scale-110 transition-transform">
              <path d={issue.iconPath} />
            </svg>
            <span className="font-bold text-gray-700">{issue.label}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-6">
        <button 
          onClick={() => setStep(2)}
          className="w-full border border-gray-200 rounded-lg py-8 px-4 hover:bg-blue-50 transition-all flex flex-col items-center group"
        >
          <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#0075be] mb-4 group-hover:rotate-45 transition-transform">
            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.35,2.85,9.48l2.03,1.58C4.84,11.36,4.81,11.69,4.81,12c0,0.31,0.02,0.65,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
          </svg>
          <span className="font-bold text-gray-700">Printer Not Detected or Other Issues</span>
        </button>
      </div>
    </div>
  );
};

const ConnectionSelector = ({ setStep }) => {
  const connections = [
    { label: 'Wireless (WiFi) Connection' },
    { label: 'USB / Wired Connection' },
    { label: 'Ethernet (LAN) Connection' },
    { label: 'Not Sure / Other Method' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl mx-auto border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">How Is Your Printer Connected?</h2>
      <p className="text-gray-600 mb-8 text-center">Choose how your printer connects to your device to continue.</p>
      
      <div className="grid grid-cols-2 gap-4">
        {connections.map((conn) => (
          <button 
            key={conn.label}
            onClick={() => window.location.href = '/'}
            className="flex flex-col items-center justify-center border border-gray-200 rounded-lg py-8 px-4 hover:bg-blue-50 transition-all font-bold text-gray-700"
          >
            {conn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const SetupPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <SetupHeader step={1} />
      
      <main className="container mx-auto px-4 md:px-20 py-12">
        <div className="text-center mb-12">
           <h1 className="text-3xl md:text-5xl font-extrabold text-[#101721] mb-6">
              Fast & Simple Printer Setup Guide
           </h1>
           <p className="max-w-4xl mx-auto text-dark font-medium leading-relaxed">
              Start your printer setup right here. Our streamlined guide walks you through downloading drivers and connecting to Wi-Fi to ensure your printer is configured and ready to print without the hassle.
           </p>
        </div>

        {step === 1 && <IssueSelector setStep={setStep} />}
        {step === 2 && <ConnectionSelector setStep={setStep} />}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 mb-20">
            {[
              { title: 'Download Software', desc: 'Get the latest printer drivers designed for optimal performance.', color: '#f6eced' },
              { title: 'Connect Printer', desc: 'Connect via USB or Wi-Fi using the printer setup options.', color: '#f6eced' },
              { title: 'Install Drivers', desc: 'Run the setup file and follow instructions to install drivers.', color: '#f6eced' },
              { title: 'Test Print', desc: 'Print a test page to confirm your printer is working properly.', color: '#f6eced' },
            ].map((item, i) => (
              <div key={i} className="bg-[#f6eced] p-8 rounded-2xl flex flex-col items-center text-center">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-800 font-bold mb-4 shadow-sm">
                    {i + 1}
                 </div>
                 <h3 className="font-extrabold text-blue-800 mb-2">{item.title}</h3>
                 <p className="text-sm text-dark leading-relaxed">{item.desc}</p>
              </div>
            ))}
        </div>

        <div className="bg-[#f6eced] rounded-2xl border-l-4 border-blue-700 p-8 md:p-12 space-y-10 mb-20">
           <div>
             <h2 className="text-blue-800 font-bold text-xl md:text-2xl mb-6">Easy Printer Setup and Installation</h2>
             <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                   <h4 className="font-bold text-lg">Step 1: Unbox & Prepare</h4>
                   <p className="text-sm">Remove all protective tapes, internal locks, and packaging materials.</p>
                </div>
                <div className="space-y-4">
                   <h4 className="font-bold text-lg">Step 2: Power On</h4>
                   <p className="text-sm">Plug into wall outlet and select language preferences on display.</p>
                </div>
             </div>
           </div>
        </div>
      </main>

      <Footer setPage={() => window.location.href = '/'} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('printer-setup-root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <SetupPage />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
