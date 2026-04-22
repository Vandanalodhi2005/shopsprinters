import React from 'react';

const DoNotSell = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-[#fdf2f2]">
        <div className="max-w-4xl mx-auto px-2 text-center">
          <h1 className="text-[36px] md:text-[54px] font-[900] text-dark mb-6 leading-tight">
            Do Not Sell or Share My Personal Information
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10 text-gray-600 font-medium italic">
            <p>Effective Date: January 27, 2026</p>
            <p>Last Updated: January 27, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-12">
            <p className="text-lg">
              This page is provided in accordance with the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). It explains your rights as a California resident and allows you to request that Shops Printers (“we,” “us,” “our”) not sell or share your personal information.
            </p>
            
            <p className="text-lg">
              Shops Printers does not sell personal information for monetary gain. However, under CCPA/CPRA, certain data practices related to analytics or advertising may be considered “selling” or “sharing.” This page gives you the option to opt out of such activities.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">1. Your Rights Under CCPA/CPRA</h2>
              <p className="mb-6 font-medium">As a California resident, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Opt out of the sale or sharing of your personal information</li>
                <li>Request to access the personal information we hold about you</li>
                <li>Request to delete your personal information (with some exceptions)</li>
                <li>Request to correct inaccurate information</li>
                <li>Limit the use of sensitive personal information (if collected)</li>
                <li>Appoint an authorized agent to make requests on your behalf</li>
              </ul>
              <p className="mt-6 font-bold text-dark">We will not discriminate against you for exercising any of these rights.</p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">2. How We Collect and Use Information</h2>
              <p className="mb-4">We collect personal information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process orders</li>
                <li>Provide customer support</li>
                <li>Improve website functionality</li>
                <li>Secure our systems</li>
                <li>Perform analytics</li>
                <li>Deliver optional marketing communications</li>
              </ul>
              <p className="mt-4">
                We do not sell customer personal information for profit. Some third-party tools (analytics, ads, cookies) may collect data, which may be interpreted as “sharing” under CCPA/CPRA.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">3. How to Submit a “Do Not Sell or Share” Request</h2>
              <p className="mb-6">To opt out of any selling or sharing of personal information under CCPA/CPRA, please contact us through either method below:</p>
              
              <div className="bg-[#fcfcfc] p-8 rounded-[24px] border border-gray-100 space-y-4">
                <p className="font-bold text-dark">Email: <span className="text-[#ff2d46]">support@shopsprinters.com</span></p>
                <p className="font-bold text-dark italic">Subject line: “CCPA Opt-Out Request”</p>
                
                <div className="pt-2">
                  <p className="font-bold mb-2 text-dark underline">Please include:</p>
                  <ul className="list-disc pl-6 space-y-1 font-medium">
                    <li>Your full name</li>
                    <li>Email address used on our website</li>
                    <li>Order number (if applicable)</li>
                    <li>Your specific request</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 italic">We will verify your identity to protect your privacy before processing your request.</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">4. Cookie-Based Opt-Out (If Applicable)</h2>
              <p className="mb-4">Some third-party analytics or advertising cookies may process personal information. To disable such tracking, you may:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reject non-essential cookies via our cookie banner (for applicable regions)</li>
                <li>Adjust browser settings to block tracking cookies</li>
                <li>Use Global Privacy Controls (GPC) where supported</li>
              </ul>
              <p className="mt-4 font-medium">We honor GPC signals from California residents where technically feasible.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">5. Verification Process</h2>
              <p className="">
                We may ask for additional information to verify your identity before fulfilling your opt-out request. We do this to protect your privacy and prevent unauthorized access to personal data.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">6. Contact Information</h2>
              <p className="mb-6">If you have questions about your privacy rights or wish to submit a request, please contact us:</p>
              <div className="bg-[#fcfcfc] p-10 rounded-[30px] border border-gray-100">
                <h4 className="text-xl font-black text-dark mb-2">Shops Printers</h4>
                <p className="font-medium text-gray-600 mb-1">17807 Lakecrest View Drive, #1205</p>
                <p className="font-medium text-gray-600 mb-1">Cypress, TX 77433, United States</p>
                <p className="font-medium text-gray-600 mb-1">Email: <span className="text-[#ff2d46]">support@shopsprinters.com</span></p>
                <p className="font-medium text-gray-600">Website: <a href="https://shopsprinters.com" target="_blank" rel="noopener noreferrer" className="text-[#ff2d46] hover:underline">https://shopsprinters.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DoNotSell;
