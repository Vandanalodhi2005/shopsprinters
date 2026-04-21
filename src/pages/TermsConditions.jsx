import React from 'react';

const TermsConditions = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section - Matches Privacy Policy UI */}
      <section className="pt-40 pb-20 bg-[#fdf2f2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[42px] md:text-[54px] font-[900] text-dark mb-6 leading-tight">
            Terms & Conditions
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
              Welcome to <span className="font-bold">Shops Printers</span> (“we,” “us,” “our”). These Terms & Conditions govern your use of <a href="https://shopsprinters.com" className="text-[#ff2d46] hover:underline">https://shopsprinters.com</a> and any purchases or services offered through our website. By accessing or using our site, you agree to be bound by these Terms. If you do not agree, please do not use our website.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">1. Use of the Website</h2>
              <p className="mb-4">You may use our site only for lawful purposes. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Misuse or disrupt the website</li>
                <li>Attempt to gain unauthorized access to any systems</li>
                <li>Use the site to engage in fraudulent, harmful, or illegal activity</li>
              </ul>
              <p className="mt-4">We reserve the right to restrict access or terminate accounts for misuse.</p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">2. Product Information</h2>
              <p className="mb-4">We provide descriptions, pricing, and availability information for printers, ink, toner, and accessories. While we strive for accuracy, occasional errors may occur. We reserve the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Correct inaccuracies</li>
                <li>Update product listings</li>
                <li>Change pricing or availability at any time</li>
              </ul>
              <p className="mt-4 italic">Images and descriptions are for reference and may vary from actual products.</p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">3. Independent Retailer Disclosure</h2>
              <p>Shops Printers is an independent online retailer and is not affiliated with, endorsed by, or authorized by any printer manufacturer, unless explicitly stated. Products may also be available on the official websites of their respective brand owners.</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">4. Order Acceptance & Payment</h2>
              <p className="mb-4">By placing an order, you agree that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All information you provide is accurate</li>
                <li>You are authorized to use the selected payment method</li>
                <li>Your purchase is subject to order verification and availability</li>
              </ul>
              <p className="mt-6 mb-4">We may cancel or refuse orders if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment fails</li>
                <li>Fraud is suspected</li>
                <li>Products become unavailable</li>
                <li>Information provided is incomplete or inaccurate</li>
              </ul>
              <p className="mt-6">Payments are processed securely by trusted third-party payment gateways. We do not store full card details.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">5. Shipping & Delivery</h2>
              <p className="mb-4">We ship across the United States and Canada. Delivery timelines depend on location, carrier, and product availability. Once shipped, customers receive tracking details via email.</p>
              <p className="italic font-bold">Shops Printers is not liable for delays caused by carriers, weather conditions, or factors beyond our control.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">6. Returns & Refunds</h2>
              <p className="mb-4">Eligible products may be returned in accordance with our Refund & Return Policy, available on our website. Return approval requires:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The product to be in eligible condition</li>
                <li>A valid order number</li>
                <li>Returns submitted within the permitted timeframe</li>
              </ul>
              <p className="mt-4">Refunds are processed after inspection of returned items.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">7. Support Services</h2>
              <p className="mb-4">We offer remote assistance for:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li className="font-bold">Printer setup</li>
                <li className="font-bold">Wi-Fi and connectivity issues</li>
                <li className="font-bold">Driver installation</li>
                <li className="font-bold">Basic troubleshooting</li>
              </ul>
              <p className="mt-6">Support is provided via email, phone, live chat, or contact form. We do not provide on-site services.</p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">8. Intellectual Property</h2>
              <p>All content on this website—including text, images, graphics, logos, and design—is the property of Shops Printers or its licensors and may not be copied, reproduced, or used without permission.</p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">9. Limitation of Liability</h2>
              <p className="mb-4">To the fullest extent permitted by law, Shops Printers is not liable for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Losses due to website unavailability or delays</li>
                <li>Product misuse or third-party service issues</li>
              </ul>
              <p className="mt-4 font-bold">Our total liability shall not exceed the amount paid for the product or service in question.</p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">10. Privacy</h2>
              <p>Your use of our site is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.</p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">11. External Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for their content, accuracy, or privacy practices.</p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">12. Changes to Terms</h2>
              <p className="mb-4">We may update these Terms & Conditions at any time. Revisions will be posted with an updated “Last Updated” date. Continued use of the website constitutes acceptance of the updated terms.</p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">13. Governing Law</h2>
              <p>These Terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles. Any disputes will be resolved in the appropriate courts within Texas, United States.</p>
            </div>

            {/* Section 14 */}
            <div>
               <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">14. Contact Information</h2>
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

export default TermsConditions;
