import React from 'react';

const issues = [
  { icon: 'fa-box-open', label: 'Set Up a New Printer' },
  { icon: 'fa-magnifying-glass', label: 'Install Printer Drivers' },
  { icon: 'fa-wifi', label: 'Fix Printer Offline Issue' },
  { icon: 'fa-network-wired', label: "Fix WiFi Connection Issues" },
  { icon: 'fa-gears', label: 'Printer Not Detected or Other Issues', wide: true },
];

const IssueSelector = ({ onSelect }) => {
  return (
    <div className="text-center py-8 px-4 sm:px-8">
      <h2 className="text-2xl md:text-[28px] font-bold text-gray-800 mb-2">Select The Issue</h2>
      <p className="text-gray-500 text-sm md:text-base mb-8">Select what you need help with to continue:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {issues.slice(0, 4).map((issue) => (
          <button
            key={issue.label}
            className="flex flex-col items-center justify-center border border-gray-200 rounded-lg py-7 px-2 bg-white hover:bg-blue-50 transition-colors focus:outline-none w-full"
            onClick={() => onSelect(issue.label)}
          >
            <i className={`fa-solid ${issue.icon} text-4xl text-blue-700 mb-4`}></i>
            <span className="font-semibold text-gray-700 text-base">{issue.label}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="flex flex-col items-center justify-center border border-gray-200 rounded-lg py-7 px-2 bg-white hover:bg-blue-50 transition-colors focus:outline-none w-full sm:w-4/5"
          onClick={() => onSelect(issues[4].label)}
        >
          <i className="fa-solid fa-gears text-4xl text-blue-700 mb-4"></i>
          <span className="font-semibold text-gray-700 text-base">{issues[4].label}</span>
        </button>
      </div>

      <p className="text-gray-500 pt-10 text-sm italic">
        Need help? Contact our support team via chat or email.
      </p>
    </div>
  );
};

export default IssueSelector;
