import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IssueSelector from '../../components/setup/IssueSelector';
import ConnectionSelector from '../../components/setup/ConnectionSelector';
import ModelSearch from '../../components/setup/ModelSearch';
import FinalStep from '../../components/setup/FinalStep';
import SetupProgressModal from '../../components/setup/SetupProgressModal';
import InstallationFailed from '../../components/setup/InstallationFailed';

const PrinterSetupGuide = () => {
  const [step, setStep] = useState('issue'); // issue, connection, model, final, progress, failed
  const [setupData, setSetupData] = useState({
    issue: '',
    connection: '',
    model: '',
    userName: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleIssueSelect = (issue) => {
    setSetupData(prev => ({ ...prev, issue }));
    setStep('connection');
  };

  const handleConnectionSelect = (connection) => {
    setSetupData(prev => ({ ...prev, connection }));
    sessionStorage.setItem('setupData', JSON.stringify({ ...setupData, connection }));
    navigate('/multi-select');
  };


  const handleModelSearch = (model) => {
    setSetupData(prev => ({ ...prev, model }));
    setStep('final');
  };

  const handleFinalSubmit = (formData) => {
    setSetupData(prev => ({ ...prev, ...formData }));
    setLoading(true);
    
    // Simulate registration
    setTimeout(() => {
        setLoading(false);
        setStep('progress');
    }, 1500);
  };

  const handleChat = () => {
    if (window.jivo_api && typeof window.jivo_api.open === 'function') {
      window.jivo_api.open();
    } else {
      alert('Support Chat is currently initializing.');
    }
  };

  // Exactly as per screenshot
  const renderHero = () => (
    <section className="relative bg-[#0066a1] min-h-[400px] flex flex-col items-center justify-center text-white pb-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        style={{
            backgroundImage: "url('/hero_background_image copy.webp')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-[40px] md:text-[50px] font-bold mb-3 tracking-tight">Smart Printer Setup & Troubleshooting</h1>
        <p className="text-lg md:text-xl mb-8 font-medium opacity-90">Set Up & Troubleshoot Your Printer in Minutes</p>
        <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-2.5 shadow-lg text-[#4ade80] rounded-full font-bold transition-all text-sm uppercase tracking-wide">
                Quick Setup
            </button>
            <button className="px-8 py-2.5 shadow-lg text-[#4ade80] rounded-full font-bold transition-all text-sm uppercase tracking-wide">
                Easy Troubleshooting
            </button>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      {/* Persistent Hero for the landing state */}
      {(step === 'issue' || step === 'connection') && renderHero()}

      <section className={`${(step === 'issue' || step === 'connection') ? '-mt-24' : 'pt-12'} relative z-10 pb-20`}>
        <div className="container mx-auto max-w-4xl px-4">
            
            {step === 'issue' && (
                <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
                    <IssueSelector onSelect={handleIssueSelect} />
                </div>
            )}

            {step === 'connection' && (
                <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
                    <ConnectionSelector onSelect={handleConnectionSelect} onBack={() => setStep('issue')} />
                </div>
            )}

            {step === 'model' && (
                <div className="animate-in fade-in duration-500">
                    <ModelSearch onSearch={handleModelSearch} onBack={() => setStep('connection')} />
                </div>
            )}

            {step === 'final' && (
                <div className="mt-12 animate-in fade-in duration-500">
                    <FinalStep 
                        onBack={() => setStep('model')} 
                        onSubmit={handleFinalSubmit} 
                        loading={loading}
                        initialModel={setupData.model}
                    />
                </div>
            )}

            {step === 'progress' && (
                <SetupProgressModal 
                    open={true} 
                    onClose={() => setStep('final')} 
                    printer={setupData.model} 
                    user={setupData.userName} 
                    onError={() => setStep('failed')}
                />
            )}

            {step === 'failed' && (
                <div className="animate-in fade-in duration-500">
                    <InstallationFailed onChat={handleChat} printer={setupData.model} />
                </div>
            )}
        </div>
      </section>

      {/* Instructional Content below for SEO and clarity - Exactly as per reference */}
      {step === 'issue' && (
        <section className="bg-white py-20 px-4 border-t border-gray-100">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Fast & Simple Printer Setup Guide</h2>
                    <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
                        Start your printer setup right here. Our streamlined guide walks you through downloading drivers and connecting to Wi-Fi to ensure your printer is configured and ready to print without the hassle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
                    {[
                        { id: 1, title: 'Download Software', desc: 'Get the latest printer drivers designed for optimal performance.' },
                        { id: 2, title: 'Connect Printer', desc: 'Connect via USB or Wi-Fi using the printer setup options.' },
                        { id: 3, title: 'Install Drivers', desc: 'Run the setup file and follow instructions to install drivers.' },
                        { id: 4, title: 'Test Print', desc: 'Print a test page to confirm your printer is working properly.' },
                    ].map((item) => (
                        <div key={item.id} className="bg-gray-50 p-10 rounded-2xl border border-gray-100 text-center flex flex-col items-center">
                            <div className="text-4xl font-black text-blue-700 mb-6 opacity-20">{item.id}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50 rounded-3xl p-10 md:p-20 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-14 text-center">Easy Printer Setup and Installation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">1</div>
                            <div>
                                <h4 className="text-2xl font-bold text-gray-800 mb-4">Step 1: Unbox & Prepare</h4>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Remove all protective tapes, internal locks, and packaging materials. Ensure all accessories like ink cartridges and power cables are present.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">2</div>
                            <div>
                                <h4 className="text-2xl font-bold text-gray-800 mb-4">Step 2: Power On</h4>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Plug into wall outlet and select language preferences on display. Wait for the printer to initialize and follow any on-screen prompts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )}
    </div>
  );
};

export default PrinterSetupGuide;
