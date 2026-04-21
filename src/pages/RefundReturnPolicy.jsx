import React from 'react';

const RefundReturnPolicy = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section - Matches Policy UI */}
      <section className="pt-40 pb-20 bg-[#fdf2f2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[42px] md:text-[54px] font-[900] text-dark mb-6 leading-tight">
            Refund & Return Policy
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
              Thank you for shopping with <span className="font-bold">Shops Printers</span>. We want you to be satisfied with your purchase. This Refund & Return Policy explains how returns, replacements, and refunds are handled for orders placed through <a href="https://shopsprinters.com" className="text-[#ff2d46] hover:underline">https://shopsprinters.com</a>.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">1. Eligibility for Returns</h2>
              <p className="mb-4">You may request a return if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The item is unused, in its original packaging, and in resellable condition</li>
                <li>The item is defective or damaged upon arrival</li>
                <li>The wrong item was received</li>
                <li>The return request is made within the allowed return window</li>
              </ul>
              <p className="mt-8 mb-4 font-bold">Products that cannot be returned include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Items that have been opened, used, or damaged by the customer</li>
                <li>Items not in their original condition or missing parts</li>
                <li>Clearance or final-sale items (if applicable)</li>
                <li>Digital or downloadable products (if offered)</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">2. Return Window</h2>
              <p>Return requests must be submitted within <span className="font-bold">15–30 days</span> of delivery (adjustable based on your preference). Returns requested after this period may not be eligible.</p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">3. Return Process</h2>
              
              <div className="space-y-8 mt-6">
                <div>
                  <h3 className="text-2xl font-black text-dark mb-4">Step 1: Contact Us</h3>
                  <p className="mb-3">Email us at <span className="text-[#ff2d46] font-bold">support@shopsprinters.com</span> with:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Order number</li>
                    <li>Reason for return</li>
                    <li>Photos (if item is damaged or defective)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-dark mb-4">Step 2: Receive Return Instructions</h3>
                  <p>If your return is approved, we will provide return instructions and, when applicable, the return shipping address.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-dark mb-4">Step 3: Ship the Item Back</h3>
                  <p className="mb-4">Items must be shipped back within the timeframe specified in your approval email.</p>
                  <p className="italic underline">Customers are responsible for return shipping costs unless the return is due to error or defect.</p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">4. Refunds</h2>
              <p className="mb-4">Once the returned item is received and inspected, we will notify you of the refund approval or denial. Approved refunds are issued to the original payment method within <span className="font-bold">5–10 business days</span>, depending on your bank or payment provider.</p>
              
              <p className="mt-8 mb-4 font-bold">Refunds may be denied if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The item shows signs of use</li>
                <li>The packaging is missing or damaged</li>
                <li>The return is outside the allowed return period</li>
                <li>The product is not eligible for return</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">5. Replacements & Exchanges</h2>
              <p className="mb-4">If your product was damaged, defective, or incorrect upon delivery, we can offer:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A replacement of the same item, or</li>
                <li>An exchange for an equivalent product (subject to availability)</li>
              </ul>
              <p className="mt-4">We may request photos or videos to verify the issue before approving a replacement.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">6. Order Cancellations</h2>
              <p>Orders may be cancelled before they are shipped. Once shipped, the order must follow the standard return process.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">7. Non-Arrival or Lost Packages</h2>
              <p className="mb-4">If your package does not arrive:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact us at <span className="text-[#ff2d46]">support@shopsprinters.com</span></li>
                <li>We will work with the carrier to investigate and resolve the issue</li>
              </ul>
              <p className="mt-4">Resolutions may include replacement or refund depending on the outcome.</p>
            </div>

            {/* Section 8 */}
            <div>
               <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">8. Contact Information</h2>
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

export default RefundReturnPolicy;
