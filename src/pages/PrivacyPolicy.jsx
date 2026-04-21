import React from 'react';

const PrivacyPolicy = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section - Matches image UI */}
      <section className="pt-40 pb-20 bg-[#fdf2f2]">
        <div className="max-w-4xl mx-auto px-2 text-center">
          <h1 className="text-[42px] md:text-[54px] font-[900] text-dark mb-6 leading-tight">
            Privacy Policy
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
              At <span className="font-bold">Shops Printers</span> (“we,” “us,” “our”), accessible at <a href="https://shopsprinters.com" className="text-[#ff2d46] hover:underline">https://shopsprinters.com</a>, we are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in accordance with GDPR (EU/UK), CCPA/CPRA (California), and PIPEDA (Canada).
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">1. Information We Collect</h2>
              <p className="mb-6">We collect information that helps us process orders, provide support, and improve our services.</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-dark mb-4">a. Information You Provide to Us</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Billing and shipping address</li>
                    <li>Payment details (processed securely by third-party gateways; we do not store full card details)</li>
                    <li>Account information (if applicable)</li>
                    <li>Messages sent through contact forms, email, or live chat</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-dark mb-4">b. Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address</li>
                    <li>Device information</li>
                    <li>Browser type</li>
                    <li>Pages visited</li>
                    <li>Cookies and tracking technologies (for functionality, analytics, and security)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-dark mb-4">c. Information from Third Parties</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment processors</li>
                    <li>Shipping carriers</li>
                    <li>Analytics providers (e.g., Google Analytics)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">2. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill orders</li>
                <li>Communicate order updates and tracking</li>
                <li>Provide customer support</li>
                <li>Improve website performance and user experience</li>
                <li>Prevent fraud and maintain security</li>
                <li>Comply with legal obligations</li>
                <li>Send optional promotional emails (only with your consent)</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">3. Legal Bases for Processing (GDPR)</h2>
              <p className="mb-4">We process data under the following lawful bases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-bold">Contractual necessity</span> – to fulfill your orders</li>
                <li><span className="font-bold">Legitimate interests</span> – website security, fraud prevention, service improvement</li>
                <li><span className="font-bold">Consent</span> – marketing emails, optional cookies</li>
                <li><span className="font-bold">Legal obligations</span> – tax, accounting, compliance</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">4. Sharing Your Information</h2>
              <p className="mb-4">We do not sell your personal information.</p>
              <p className="mb-4">We may share data only with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment processors</li>
                <li>Shipping and delivery partners</li>
                <li>Customer support tools</li>
                <li>Website hosting providers</li>
                <li>Analytics and security tools</li>
                <li>Legal authorities (only when required by law)</li>
              </ul>
              <p className="mt-4 italic">All partners follow appropriate data protection requirements.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">5. Cookies & Tracking Technologies</h2>
              <p className="mb-4">We use cookies for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website functionality</li>
                <li>Shopping cart and checkout</li>
                <li>Analytics and performance</li>
                <li>Security and fraud prevention</li>
              </ul>
              <p className="mt-4 text-sm">You may manage or disable cookies through your browser settings. For GDPR regions, a cookie consent banner is displayed.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">6. Your Rights (GDPR, CCPA/CPRA, PIPEDA)</h2>
              <p className="mb-4">You may request:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion (“right to be forgotten”)</li>
                <li>Restriction or objection to processing</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
                <li>Do Not Sell or Share My Personal Information (for CCPA/CPRA)</li>
                <li>Withdrawal of consent at any time</li>
              </ul>
              <p className="mt-4">To exercise your rights, contact us at <span className="text-[#ff2d46]">support@shopsprinters.com</span>.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">7. Data Retention</h2>
              <p className="mb-4">We retain personal data only as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fulfill orders</li>
                <li>Provide support</li>
                <li>Meet legal, tax, and accounting requirements</li>
                <li>Maintain business records</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">8. Data Security</h2>
              <p className="mb-4">We use industry-standard security measures to protect your data, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL encryption</li>
                <li>Secure payment gateways</li>
                <li>Controlled access to data</li>
                <li>Regular security monitoring</li>
              </ul>
              <p className="mt-4">However, no online system is 100% secure, and we cannot guarantee absolute protection.</p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">9. International Data Transfers</h2>
              <p className="mb-4">Data may be stored or processed in the United States or other jurisdictions.</p>
              <p className="mb-4">By using our website, you consent to the transfer of your data outside your region where applicable laws may differ.</p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">10. Children’s Privacy</h2>
              <p className="mb-4">Our site is not intended for individuals under 16 years old.</p>
              <p className="mb-4">We do not knowingly collect data from children. If submitted, it will be deleted upon request.</p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">11. Third-Party Links</h2>
              <p className="mb-4">Our website may contain links to external sites.</p>
              <p className="mb-4">We are not responsible for the privacy practices of third-party websites.</p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">12. Changes to This Policy</h2>
              <p className="mb-4">We may update this Privacy Policy periodically.</p>
              <p className="mb-4">The “Last Updated” date will reflect the latest revision.</p>
            </div>

            {/* Section 13 */}
            <div>
               <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">13. Contact Information</h2>
               <p className="mb-6">For questions about this Privacy Policy or your data rights, contact us:</p>
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

export default PrivacyPolicy;
