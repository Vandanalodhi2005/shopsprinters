import React, { useState } from 'react';

const ModelSearch = ({ onSearch, onBack }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === "") {
            setError("Please enter your product name.");
            return;
        }
        setError("");
        onSearch(input.trim());
    };

    return (
        <div className="w-full bg-white flex flex-col">
            <section
                className="w-full min-h-[420px] flex items-start justify-center relative md:px-[6%] px-3 py-12"
                style={{
                    backgroundImage: `url('/hero_background_image copy.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-full max-w-[1200px] flex flex-col items-start justify-center relative h-full">
                    <h1 className="text-white text-[2.7rem] md:text-[2.7rem] text-2xl font-normal mb-8 leading-tight drop-shadow-lg text-left">Set up your printer</h1>
                    <p className="text-white md:text-xl text-base mb-8 font-normal leading-snug drop-shadow text-left">
                        Enter your product name and model number to get the right smart software
                        and drivers for you
                    </p>
                    <form className="flex md:flex-row flex-col items-center w-full max-w-[600px] gap-3 md:gap-0" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Enter your product name here. For example: OfficeJet 9010"
                            className="flex-1 px-5 py-3 rounded-full md:rounded-r-none border border-gray-200 focus:outline-none text-lg bg-white shadow-sm w-full"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 rounded-full md:rounded-l-none bg-orange-500 text-white font-bold text-lg shadow-sm hover:bg-orange-600 transition w-full md:w-auto"
                        >
                            Search
                        </button>
                    </form>
                    {error && <div className="text-red-500 text-sm mt-2 text-left bg-white/80 px-2 rounded">{error}</div>}
                </div>
            </section>

            <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between mt-12 px-4 mb-12">
                <div className="flex-1 mb-8 md:mb-0 text-left">
                    <p className="text-lg text-gray-800 mb-4">Install printer software and drivers on each device you want to print from.</p>
                    <p className="text-lg text-gray-800">Need additional help? Visit <a href="#" className="text-blue-600 underline hover:text-blue-800">Support</a></p>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                    <img src="/printer-without-bg.png" alt="Printer" className="h-[220px] w-auto max-w-full drop-shadow-xl" />
                </div>
            </div>
            
            <div className="flex justify-center mb-8">
                <button className="text-gray-500 hover:underline text-sm flex items-center" onClick={onBack}>
                    <i className="fa-solid fa-arrow-left mr-1"></i> Back to Connection
                </button>
            </div>
        </div>
    );
};

export default ModelSearch;
