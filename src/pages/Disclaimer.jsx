import React from 'react';

const Disclaimer = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section - Matches Policy UI */}
      <section className="pt-40 pb-20 bg-[#fdf2f2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[42px] md:text-[54px] font-[900] text-dark mb-6 leading-tight">
            Disclaimer
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
              The information provided on <a href="https://shopsprinters.com" className="text-[#ff2d46] hover:underline">https://shopsprinters.com</a> (“we,” “us,” “our”) is for general informational and retail purposes only. By using our website, you agree to the terms outlined in this Disclaimer.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">1. No Manufacturer Affiliation</h2>
              <p className="mb-4">Shops Printers is an independent online retailer.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We are not affiliated with, endorsed by, or authorized by any printer manufacturers, unless specifically stated.</li>
                <li>All trademarks, brand names, and product images belong to their respective owners.</li>
                <li>Products listed on our site may also be available on the official websites of the respective brand owners.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">2. Product Information</h2>
              <p className="mb-4">We make every effort to provide accurate product descriptions, pricing, and availability. However, we do not guarantee that all information is error-free. Product specifications, packaging, and appearance may vary based on supplier updates.</p>
              <p className="italic font-bold">If an error is identified, we reserve the right to correct it without prior notice.</p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">3. Service Guidance Disclaimer</h2>
              <p className="mb-4">We provide general assistance for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Printer setup</li>
                <li>Wi-Fi and connectivity</li>
                <li>Driver installation</li>
                <li>Basic troubleshooting</li>
              </ul>
              <p className="mt-4">This support is intended to help users understand common setup and usage procedures. We do not provide manufacturer-authorized service, repairs, or certified technical work unless specified.</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">4. No Professional or Technical Guarantee</h2>
              <p className="mb-2">Information on this website is offered “as is.”</p>
              <p className="mb-2">We do not guarantee that the website or its content will always be available, uninterrupted, or error-free.</p>
              <p>Technical issues or temporary downtime may occur.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">5. Third-Party Links</h2>
              <p className="mb-2">Our website may contain links to third-party websites.</p>
              <p className="mb-2">We are not responsible for the content, accuracy, or policies of external sites.</p>
              <p>Users should review the terms and policies of those websites independently.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">6. Liability Limitation</h2>
              <p className="mb-4">To the fullest extent permitted by law, Shops Printers is not liable for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Losses due to product misuse</li>
                <li>Issues caused by third-party carriers or service providers</li>
                <li>Errors or interruptions in website performance</li>
              </ul>
              <p className="mt-4 font-black">Your sole remedy for dissatisfaction with the website is to stop using it.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">7. User Responsibility</h2>
              <p className="mb-4">By using our website, you acknowledge that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are responsible for verifying product compatibility</li>
                <li>You use any product or information at your own discretion</li>
                <li>You agree to follow all product instructions and safety guidelines</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">8. Changes to This Disclaimer</h2>
              <p>We may update this Disclaimer from time to time. The latest version will always be posted on this page with the updated date.</p>
            </div>

            {/* Section 9 */}
            <div>
               <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">9. Contact Information</h2>
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

export default Disclaimer;
