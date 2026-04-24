import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ModelSearch from "./ModelSearch";
import SetupHeader from "./Header";

const brandConfigs = {
  HP: {
    logo: "/hp-bg.png",
    placeholder: 'e.g. "OfficeJet 9010"',
    bgImage: "/hero_background_image%20copy.webp",
    searchButtonBgColor: "bg-blue-600",
    searchButtonTextColor: "text-white",
    searchButtonHoverColor: "bg-blue-700",

  },
  Brother: {
    logo: "/brother-bg.png",
    placeholder: 'e.g. "HL-L2350DW"',
    bgImage: "/hero_background_image%20copy.webp",
     searchButtonBgColor: "bg-blue-900",
    searchButtonTextColor: "text-white",
    searchButtonHoverColor: "bg-blue-800",
  },
  EPSON: {
    logo: "/epson-bg.png",
    placeholder: 'e.g. "EcoTank L3150"',
    bgImage: "/hero_background_image%20copy.webp",
     searchButtonBgColor: "bg-blue-950",
    searchButtonTextColor: "text-white",
    searchButtonHoverColor: "bg-blue-800",
  },
  Canon: {
    logo: "/canon-bg.png",
    placeholder: 'e.g. "PIXMA G3000"',
    bgImage: "/canon-gemini2.jpeg",
     searchButtonBgColor: "bg-red-700",
    searchButtonTextColor: "text-white",
    searchButtonHoverColor: "bg-red-600",
  },
};

const DynamicModelSearch = () => {
  const { brand } = useParams();
  const navigate = useNavigate();
  const config = brandConfigs[brand] || {};
  const [allowCompleteSetup, setAllowCompleteSetup] = React.useState(true);
  const [settings, setSettings] = React.useState({ showHeader: false, showLogo: true });

  React.useEffect(() => {
    const fetchSettings = () => {
      fetch(import.meta.env.VITE_API_URL.replace('/api', '/setup-api/header-visibility'))
        .then(res => res.json())
        .then(data => {
          setAllowCompleteSetup(data.showCompleteSetupPage !== false);
          setSettings({
            showHeader: data.showHeader !== false,
            showLogo: data.showLogo !== false
          });
        })
        .catch(() => {
          setAllowCompleteSetup(true);
          setSettings({ showHeader: false, showLogo: true });
        });
    };
    fetchSettings();
    const intervalId = setInterval(fetchSettings, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSearch = (model) => {
    localStorage.setItem('printerModel', model);
    if (allowCompleteSetup) {
      navigate(`/complete-setup/${brand}/`);
    } else {
      // If we skip complete setup, we might go straight to a progress/failed flow
      // But DynamicModelSearch is a standalone page. Let's just go to installation-failed or progress.
      // Easiest is to go back to the main guide which handles it
      navigate('/easy-setup-guide/');
    }
  };

  return (
    <>
      {settings.showHeader && <SetupHeader showLogo={settings.showLogo} />}
      <ModelSearch
        brand={brand}
        logo={config.logo}
        placeholder={config.placeholder}
        bgImage={config.bgImage}
        searchButtonBgColor={config.searchButtonBgColor}
        searchButtonTextColor={config.searchButtonTextColor}
        searchButtonHoverColor={config.searchButtonHoverColor}
        onSearch={handleSearch}
        onBack={() => navigate('/select-your-brand/')}
      />
    </>
  );
};

export default DynamicModelSearch;
