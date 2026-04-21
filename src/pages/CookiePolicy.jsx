import React from 'react';

const CookiePolicy = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section - Matches Policy UI */}
      <section className="pt-40 pb-20 bg-[#fdf2f2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[42px] md:text-[54px] font-[900] text-dark mb-6 leading-tight">
            Cookie Policy
          </h1>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10 text-gray-600 font-medium italic">
            <p>Effective Date: January 27, 2026</p>
            <p>Last Updated: January 27, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-12">
            <p className="text-lg">
              This Cookie Policy explains how <span className="font-bold">Shops Printers</span> (“we,” “us,” “our”) uses cookies and similar tracking technologies on <a href="https://shopsprinters.com" className="text-[#ff2d46] hover:underline">https://shopsprinters.com</a>. By continuing to use our website, you consent to the use of cookies as described in this policy.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">1. What Are Cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help improve your browsing experience by remembering your preferences, enabling essential website functions, and helping us understand how the site is used.</p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">2. Types of Cookies We Use</h2>
              
              <div className="space-y-8 mt-6">
                <div>
                  <h3 className="text-2xl font-black text-dark mb-4">a. Essential Cookies</h3>
                  <p className="mb-4 text-gray-600 font-mediumitalic">Required for the website to function properly. These cookies enable:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Secure checkout</li>
                    <li>Shopping cart functionality</li>
                    <li>Account login (if applicable)</li>
                    <li>Site security and stability</li>
                  </ul>
                  <p className="mt-4 italic">Without these cookies, certain services cannot be provided.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-dark mb-4">b. Performance & Analytics Cookies</h3>
                  <p className="mb-4 text-gray-600 font-mediumitalic">Used to analyze how visitors use our site. These cookies help us:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Measure traffic</li>
                    <li>Understand user behavior</li>
                    <li>Improve website performance</li>
                  </ul>
                  <p className="mt-4">Common tools include Google Analytics or similar platforms.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-dark mb-4">c. Functional Cookies</h3>
                  <p className="mb-4 text-gray-600 font-mediumitalic">These cookies allow the site to remember your choices, such as:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Language preferences</li>
                    <li>Saved items</li>
                    <li>User settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-dark mb-4">d. Advertising & Marketing Cookies</h3>
                  <p className="mb-4 text-gray-600 font-mediumitalic">Used—when applicable—to show relevant ads, limit repetitive ads, and measure ad performance.</p>
                  <p className="mb-4">These may come from trusted third-party advertising partners.</p>
                  <p className="font-bold underline">You can opt out of marketing cookies where required by law.</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">3. Third-Party Cookies</h2>
              <p className="mb-4">We may allow trusted third-party partners to place cookies for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analytics</li>
                <li>Advertising performance</li>
                <li>Payment processing</li>
                <li>Security</li>
              </ul>
              <p className="mt-4 italic">These partners may collect data according to their own privacy and cookie policies.</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">4. Cookie Consent (GDPR Compliance)</h2>
              <p className="mb-4">Visitors from regions covered by GDPR (EU/UK) will see a cookie consent banner allowing them to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize cookie preferences</li>
              </ul>
              <p className="mt-4 font-bold italic">Essential cookies cannot be disabled as they are required for core site functionality.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">5. Managing Your Cookies</h2>
              <p className="mb-4">You can manage or disable cookies at any time through your browser settings. Common browsers allow you to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Block all cookies</li>
                <li>Delete existing cookies</li>
                <li>Allow only certain types of cookies</li>
              </ul>
              <p className="mt-6 font-bold underline">Please note: disabling essential cookies may affect site performance or checkout functionality.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">6. Do Not Track (DNT)</h2>
              <p>Our site does not currently respond to “Do Not Track” signals due to lack of industry standards, but we respect user privacy and minimize tracking where possible.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">7. Changes to This Cookie Policy</h2>
              <p>We may update this Cookie Policy periodically. The “Last Updated” date reflects the latest revision. Continued use of the site indicates acceptance of any changes.</p>
            </div>

            {/* Section 8 */}
            <div>
               <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">8. Contact Information</h2>
               <p className="mb-6">For questions about our Cookie Policy, contact us:</p>
               <div className="bg-[#fcfcfc] p-10 rounded-[30px] border border-gray-100">
                  <h4 className="text-xl font-black text-dark mb-2">Shops Printers</h4>
                  <p className="font-medium text-gray-600 mb-1">17807 Lakecrest View Drive, #1205</p>
                  <p className="font-medium text-gray-600 mb-1">Cypress, TX 77433, United States</p>
                  <p className="font-medium text-gray-600 mb-1">Email: <span className="text-[#ff2d46]">support@shopsprinters.com</span></p>
                  <p className="font-medium text-gray-600">Website: <span className="text-[#ff2d46]">https://shopsprinters.com</span></p>
               </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default CookiePolicy;
