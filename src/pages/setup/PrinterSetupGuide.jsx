import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IssueSelector from '../../components/setup/IssueSelector';
import ConnectionSelector from '../../components/setup/ConnectionSelector';
import ModelSearch from '../../components/setup/ModelSearch';
import FinalStep from '../../components/setup/FinalStep';
import SetupProgressModal from '../../components/setup/SetupProgressModal';
import InstallationFailed from '../../components/setup/InstallationFailed';
import SetupHeader from '../../components/setup/Header';

const PrinterSetupGuide = () => {
  const [step, setStep] = useState('issue'); // issue, connection, model, final, progress, failed
  const [settings, setSettings] = useState({
    showHeader: true,
    showLogo: true,
    allowModelSearch: true,
    allowCompleteSetup: true,
    allowInstallationFailed: true
  });
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

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL.replace('/api', '/setup-api/header-visibility'));
        if (response.ok) {
          const data = await response.json();
          setSettings({
            showHeader: data.showHeader !== false,
            showLogo: data.showLogo !== false,
            allowModelSearch: data.allowModelSearch !== false,
            allowCompleteSetup: data.showCompleteSetupPage !== false,
            allowInstallationFailed: data.showInstallationErrorPage !== false
          });
        }
      } catch (err) {
        console.error('Failed to fetch settings', err);
      }
    };
    fetchSettings();
    const intervalId = setInterval(fetchSettings, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const handleIssueSelect = (issue) => {
    setSetupData(prev => ({ ...prev, issue }));
    localStorage.setItem('issue', issue);
    setStep('connection');
  };

  const handleConnectionSelect = (connection) => {
    setSetupData(prev => ({ ...prev, connection }));
    sessionStorage.setItem('setupData', JSON.stringify({ ...setupData, connection }));
    navigate('/select-your-brand/');
  };


  const handleModelSearch = (model) => {
    setSetupData(prev => ({ ...prev, model }));
    const savedIssue = localStorage.getItem('issue');
    if (settings.allowCompleteSetup && savedIssue === 'Set Up a New Printer') {
      setStep('final');
    } else {
      setStep('progress');
    }
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
      {/* {settings.showHeader && <SetupHeader showLogo={settings.showLogo} />} */}
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
                    onError={() => {
                        if (settings.allowInstallationFailed) {
                            setStep('failed');
                        } else {
                            alert("Installation completed successfully!");
                            navigate('/');
                        }
                    }}
                />
            )}

            {step === 'failed' && (
                <div className="animate-in fade-in duration-500">
                    <InstallationFailed onChat={handleChat} printer={setupData.model} />
                </div>
            )}
        </div>
      </section>

      {/* Need Help Section - Exact match to referral image */}
      {step === 'issue' && (
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-[1000px]">
            <div className="bg-white rounded-[20px] border border-gray-200 shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 md:gap-16 min-h-[400px]">
              
              {/* Left Side: Content */}
              <div className="flex-1 text-left py-4">
                <h2 className="text-[#1a56db] text-lg md:text-[28px] font-bold leading-[1.3] mb-6">
                  Still Need Help with 123 Hp Com Setup, Offline Fix & Troubleshooting?
                </h2>
                <p className="text-[#4b5563] text-base md:text-sm leading-[1.6] mb-10 font-sm">
                  If you're still facing issues after completing these steps, our 
                  certified support team is ready to help. Connect with our 
                  online experts for real-time troubleshooting, personalized 
                  guidance, and fast solutions to get your printer running 
                  perfectly again.
                </p>
                <button 
                  onClick={handleChat}
                  className="bg-[#1a56db] text-white px-8 py-3.5 rounded-[12px] font-bold text-base md:text-lg hover:bg-[#1e42af] transition-colors inline-block"
                >
                  Click for Live Chat Assistance
                </button>
              </div>

              {/* Right Side: Image */}
              <div className="flex-1 w-full md:w-[45%] h-full">
                <div className="relative rounded-[20px] overflow-hidden h-full min-h-[300px]">
                  <img 
                    src="/contact.webp" 
                    alt="Support Representative" 
                    className="w-full h-full object-cover"
                    style={{ minHeight: '350px' }}
                  />
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
