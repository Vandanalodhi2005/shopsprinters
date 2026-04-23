import React from "react";

const brandFooters = {
  Brother: (brandName = "Brother") => (
    <footer className="bg-[#232222] text-white w-full pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-2 tracking-wide border-b border-white pb-1">About Us</h3>
          <ul className="space-y-2 text-base">
            <li>Contact {brandName}</li>
            <li>Careers</li>
            <li>Investor relations</li>
            <li>Sustainable impact</li>
            <li>Press center</li>
            <li>The Garage</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 tracking-wide border-b border-white pb-1">Ways To Buy</h3>
          <ul className="space-y-2 text-base">
            <li>Shop online</li>
            <li>Call a {brandName} rep</li>
            <li>Find a reseller</li>
            <li>Enterprise store</li>
            <li>Public sector purchasing</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 tracking-wide border-b border-white pb-1">Support</h3>
          <ul className="space-y-2 text-base">
            <li>Download drivers</li>
            <li>Support & troubleshooting</li>
            <li>Community</li>
            <li>Register your product</li>
            <li>Authorized service providers</li>
            <li>Check repair status</li>
            <li>Training & certification</li>
            <li>Fraud alert</li>
            <li>Security Center</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 tracking-wide border-b border-white pb-1">{brandName} Partners</h3>
          <ul className="space-y-2 text-base">
            <li>{brandName} Amplify</li>
            <li>Partner Program</li>
            <li>{brandName} Partner Portal</li>
            <li>Developers</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 tracking-wide border-b border-white pb-1">Useful Links</h3>
          <ul className="space-y-2 text-base">
            <li>Recalls</li>
            <li>Product recycling</li>
            <li>Accessibility</li>
            <li>CA Supply Chains Act</li>
            <li>Site Map</li>
            <li>Privacy</li>
            <li>Use of cookies</li>
            <li>Personal data rights</li>
            <li>Terms of use</li>
            <li>Limited warranty statement</li>
            <li>Terms & conditions of sales & service</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <hr className="border-gray-700" />
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <p className="text-gray-400 text-sm">© Copyright 2026 {brandName}</p>
          <form className="flex items-center gap-2">
            <input type="email" placeholder="Your Email address" className="rounded-full px-5 py-2 text-black focus:outline-none" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-full transition">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </footer>
  ),
};

const BrandFooter = ({ brand }) => {
  if (!brand) return null;
  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();
  return brandFooters.Brother(brandName);
};

export default BrandFooter;
