import React from 'react';

const issues = [
  { icon: 'fa-box-open', label: 'Set Up a New Printer' },
  { icon: 'fa-magnifying-glass', label: 'Install Printer Drivers' },
  { icon: 'fa-wifi', label: 'Fix Printer Offline Issue' },
  { icon: 'fa-sitemap', label: 'Fix WiFi Connection Issues' },
  { icon: 'fa-gears', label: 'Printer Not Detected or Other Issues' },
];

const IssueSelector = ({ onSelect }) => {
  return (
    <div className="text-center py-12 px-6 md:px-12">
      <h2 className="text-2xl md:text-[28px] font-bold text-gray-800 mb-2">Select The Issue</h2>
      <p className="text-gray-500 text-sm md:text-base mb-10">Select what you need help with to continue:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {issues.slice(0, 4).map((issue) => (
          <button
            key={issue.label}
            className="group flex flex-col items-center justify-center border border-gray-100 rounded-xl py-10 px-4 bg-white hover:bg-gray-50/50 hover:border-blue-100 transition-all duration-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-lg focus:outline-none"
            onClick={() => onSelect(issue.label)}
          >
            <i className={`fa-solid ${issue.icon} text-4xl text-blue-700 mb-6 group-hover:scale-110 transition-transform`}></i>
            <span className="font-bold text-gray-700 text-[15px]">{issue.label}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="group flex flex-col items-center justify-center border border-gray-100 rounded-xl py-10 px-4 bg-white hover:bg-gray-50/50 hover:border-blue-100 transition-all duration-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-lg focus:outline-none w-full"
          onClick={() => onSelect(issues[4].label)}
        >
          <i className="fa-solid fa-gears text-4xl text-blue-700 mb-6 group-hover:rotate-45 transition-transform"></i>
          <span className="font-bold text-gray-700 text-[15px]">{issues[4].label}</span>
        </button>
      </div>

      <p className="text-gray-400 mt-12 text-[13px] font-medium italic">
        Need help? Contact our support team via chat or email.
      </p>
    </div>
  );
};

export default IssueSelector;
