import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import BrandFooter from './BrandFooter';

const ModelSearch = ({ brand, placeholder, bgImage, searchButtonBgColor, searchButtonTextColor, searchButtonHoverColor }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [allowModelSearch, setAllowModelSearch] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/setup-api/header-visibility')
            .then(res => res.json())
            .then(data => setAllowModelSearch(data.allowModelSearch !== false))
            .catch(() => setAllowModelSearch(true));
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!allowModelSearch) {
            return;
        }
        if (input.trim() === "") {
            setError("Please enter your product name.");
            return;
        }
        localStorage.setItem('modelSearchInput', input.trim());
        setError("");
        // Navigate to dynamic complete-setup route with brand name
        if (brand) {
            navigate(`/complete-setup/${brand}`);
        } else {
            navigate('/complete-setup');
        }
    };

    return (
        <>
            <Helmet>
                <title>Model Search | {brand ? brand + ' ' : ''}Smart App</title>
            </Helmet>
            <div className="w-full md:min-h-[90vh] min-h-screen bg-white flex flex-col">
                <section
                    className="w-full min-h-[420px] flex items-start justify-center relative md:px-[6%] px-3"
                    style={{
                        height: '420px',
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="w-full max-w-[1200px] flex md:flex-row flex-col items-start md:justify-between justify-start relative h-full">
                        <div className="flex flex-col justify-center h-full w-full max-w-[700px] md:pt-0 pt-8" id="model-search-main-content">
                            <h1 className="text-white text-[2.7rem] md:text-[2.7rem] text-2xl font-normal mb-8 leading-tight drop-shadow-lg">Set up your {brand ? brand + ' ' : ''}printer</h1>
                            <p className="text-white md:text-xl text-base mb-8 font-normal leading-snug drop-shadow">
                                Enter your product name and model number to get the right smart software
                                and drivers for you
                            </p>
                            <form className="flex md:flex-row flex-col items-center w-full max-w-[600px] gap-3 md:gap-0" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    placeholder={placeholder ? placeholder : 'Enter your product name here. For example: OfficeJet 9010'}
                                    className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg bg-white shadow-sm w-full"
                                    disabled={!allowModelSearch}
                                />
                                <button
                                    type="submit"
                                    className={`px-5 py-3 rounded-full ${searchButtonBgColor} ${searchButtonTextColor} font-bold text-lg shadow-sm hover:${searchButtonHoverColor} transition`}
                                >
                                    Search
                                </button>
                            </form>
                            {error && <div className="text-red-500 text-sm mt-2 text-left">{error}</div>}
                        </div>
                    </div>
                </section>
                {/* Additional Info Section Below Hero */}
                <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between mt-12 px-4 mb-12">
                    <div className="flex-1 mb-8 md:mb-0">
                        <p className="text-lg text-gray-800 mb-4">Install {brand ? brand + ' ' : ''}Smart software and drivers on each device you want to print from.</p>
                        <p className="text-lg text-gray-800">Need additional help? Visit <a href="#" className="text-blue-600 underline hover:text-blue-800">{brand ? brand + ' ' : ''}Support</a></p>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end">
                        <img src="/printer-without-bg.png" alt="Printer and Devices" className="h-[220px] w-auto max-w-full drop-shadow-xl" />
                    </div>
                </div>
                {/* Brand-specific footer for brand routes */}
                {brand && <BrandFooter brand={brand} />}
            </div>
        </>
    );
};

export default ModelSearch;