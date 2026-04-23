import React from "react";

const CustomerSupportIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2">
    <g>
      <path d="M32 36c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11zm0 3c8 0 15 6 15 13.5V56H17v-3.5C17 45 24 39 32 39zm-13 7a3 3 0 1 1-6 0v-6a3 3 0 1 1 6 0v6zm32 0a3 3 0 1 1-6 0v-6a3 3 0 1 1 6 0v6z" fill="#111"/>
      <path d="M32 14c-6.627 0-12 5.373-12 12v2c0 1.105.895 2 2 2h2v-4c0-4.418 3.582-8 8-8s8 3.582 8 8v4h2c1.105 0 2-.895 2-2v-2c0-6.627-5.373-12-12-12z" fill="#111"/>
      <circle cx="32" cy="26" r="7" fill="#fff"/>
      <path d="M25 26c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7-7-3.134-7-7z" fill="#111"/>
      <path d="M32 33c-3.866 0-7-3.134-7-7h14c0 3.866-3.134 7-7 7z" fill="#fff"/>
      <rect x="19" y="46" width="6" height="8" rx="2" fill="#111" />
      <rect x="39" y="46" width="6" height="8" rx="2" fill="#111" />
    </g>
  </svg>
);

const SupportHighlights = () => (
  <section className="py-16 w-full flex justify-center bg-white">
    <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 px-4">
      {/* Card 1 */}
      <div className="flex flex-col items-center w-full md:w-1/3 text-center bg-white rounded-lg shadow-md p-8 mx-2">
        <CustomerSupportIcon />
        <h3 className="text-2xl font-extrabold mb-2">24×7 Customer Support</h3>
        <p className="text-lg text-gray-700">We really care about our clients, and that's why our professionals are here for you round the clock. Need help, contact us anytime.</p>
      </div>
      {/* Card 2 */}
      <div className="flex flex-col items-center w-full md:w-1/3 text-center bg-white rounded-lg shadow-md p-8 mx-2">
        <CustomerSupportIcon />
        <h3 className="text-2xl font-extrabold mb-2">Years of Experience</h3>
        <p className="text-lg text-gray-700">Our professionals have been helping printer users for over a decade, and with vast experience, they are capable of resolving any printer issue.</p>
      </div>
      {/* Card 3 */}
      <div className="flex flex-col items-center w-full md:w-1/3 text-center bg-white rounded-lg shadow-md p-8 mx-2">
        <CustomerSupportIcon />
        <h3 className="text-2xl font-extrabold mb-2">Support you need</h3>
        <p className="text-lg text-gray-700">Our team of experts has in-depth knowledge about printer devices and has or can resolve any query, whether it is related to Driver or anything.</p>
      </div>
    </div>
  </section>
);

export default SupportHighlights;
