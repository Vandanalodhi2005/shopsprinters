import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import BrandFooter from './BrandFooter';

const ModelSearch = ({ 
    brand, 
    logo,
    placeholder, 
    bgImage, 
    searchButtonBgColor, 
    searchButtonTextColor, 
    searchButtonHoverColor,
    onSearch,
    onBack
}) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [allowModelSearch, setAllowModelSearch] = useState(true);

    useEffect(() => {
        const fetchSettings = () => {
            fetch(import.meta.env.VITE_API_URL.replace('/api', '/setup-api/header-visibility'))
                .then(res => res.json())
                .then(data => setAllowModelSearch(data.allowModelSearch !== false))
                .catch(() => setAllowModelSearch(true));
        };
        fetchSettings();
        const intervalId = setInterval(fetchSettings, 10000);
        return () => clearInterval(intervalId);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!allowModelSearch) return;
        
        if (input.trim() === "") {
            setError("Please enter your product name.");
            return;
        }
        setError("");
        if (onSearch) {
            onSearch(input.trim());
        }
    };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <Helmet>
                <title>Model Search | {brand ? brand + ' ' : ''}Smart App</title>
            </Helmet>
            
            <section
                className="w-full min-h-[420px] flex items-start justify-center relative md:px-[6%] px-3 py-12"
                style={{
                    backgroundImage: `url('/hero_background_image%20copy.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-full max-w-[1200px] flex flex-col items-start justify-center relative h-full">
                    <h1 className="text-white text-[2.7rem] md:text-[2.7rem] text-2xl font-normal mb-8 leading-tight drop-shadow-lg text-left">
                        Set up your {brand ? brand + ' ' : ''}printer
                    </h1>
                    <p className="text-white md:text-xl text-base mb-8 font-normal leading-snug drop-shadow text-left">
                        Enter your product name and model number to get the right smart software
                        and drivers for you
                    </p>
                    <form className="flex md:flex-row flex-col items-center w-full max-w-[600px] gap-3 md:gap-0" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder={placeholder || "Enter your product name here. For example: OfficeJet 9010"}
                            className={`flex-1 px-5 py-3 rounded-full ${allowModelSearch ? 'md:rounded-r-none' : ''} border border-gray-200 focus:outline-none text-lg bg-white shadow-sm w-full`}
                        />
                        {allowModelSearch && (
                            <button
                                type="submit"
                                className={`px-8 py-3 rounded-full md:rounded-l-none font-bold text-lg shadow-sm transition w-full md:w-auto ${searchButtonBgColor || 'bg-orange-500'} ${searchButtonTextColor || 'text-white'} hover:${searchButtonHoverColor || 'bg-orange-600'}`}
                            >
                                Search
                            </button>
                        )}
                    </form>
                    {error && <div className="text-red-500 text-sm mt-2 text-left bg-white/80 px-2 rounded">{error}</div>}
                </div>
            </section>

            <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between mt-12 px-4 mb-12">
                <div className="flex-1 mb-8 md:mb-0 text-left">
                    <p className="text-lg text-gray-800 mb-4">Install {brand ? brand + ' ' : ''}Smart software and drivers on each device you want to print from.</p>
                    <p className="text-lg text-gray-800">Need additional help? Visit <a href="#" className="text-blue-600 underline hover:text-blue-800">{brand ? brand + ' ' : ''}Support</a></p>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                    {logo ? (
                        <img src={logo} alt={`${brand} Logo`} style={{ width: '160px', height: '60px', objectFit: 'contain', background: 'none', borderRadius: 0 }} />
                    ) : (
                        <img src="/printer-without-bg.png" alt="Printer" className="h-[220px] w-auto max-w-full drop-shadow-xl" />
                    )}
                </div>
            </div>
            
            
            
            {brand && <BrandFooter brand={brand} />}
        </div>
    );
};

export default ModelSearch;
