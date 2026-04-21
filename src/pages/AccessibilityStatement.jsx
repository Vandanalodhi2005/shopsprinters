import React from 'react';

const AccessibilityStatement = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section - Matches Policy UI */}
      <section className="pt-40 pb-20 bg-[#fdf2f2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[42px] md:text-[54px] font-[900] text-dark mb-6 leading-tight">
            Accessibility Statement
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
              At <span className="font-bold">Shops Printers</span>, we are committed to ensuring that our website, <a href="https://shopsprinters.com" className="text-[#ff2d46] hover:underline">https://shopsprinters.com</a>, is accessible and usable for all individuals, including people with disabilities. We strive to follow recognized accessibility standards and continuously improve the user experience for everyone.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">1. Our Commitment to Accessibility</h2>
              <p>We aim to make our website compliant with the <span className="font-bold">Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</span>, which outline best practices for digital accessibility. Our goal is to ensure that all users, regardless of ability, can navigate, understand, and interact with our website.</p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">2. Accessibility Features</h2>
              <p className="mb-6">To support accessibility, our website includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Clear and consistent navigation</li>
                <li>Readable fonts and contrast settings</li>
                <li>Alt text for images where applicable</li>
                <li>Keyboard-friendly navigation</li>
                <li>Responsive design that adapts to various devices</li>
                <li>Descriptive link text</li>
                <li>Accessible form fields and labels</li>
              </ul>
              <p className="mt-4 italic">We are continuously reviewing and improving these features.</p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">3. Ongoing Efforts</h2>
              <p>Accessibility is an ongoing effort. We regularly review our website and make updates to improve functionality, compatibility, and user experience. As technologies and standards evolve, we will adapt our practices to maintain accessibility.</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">4. Third-Party Content</h2>
              <p>Some features or tools on our site may rely on third-party plugins or integrations. While we strive to choose accessible solutions, we cannot control the accessibility of third-party content or services.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">5. Feedback & Support</h2>
              <p className="mb-6">We welcome feedback from all users. If you experience difficulty accessing any part of our website or need assistance, please contact us:</p>
              
              <div className="bg-[#fcfcfc] p-10 rounded-[30px] border border-gray-100 space-y-4">
                  <p className="font-medium text-gray-700 leading-relaxed">
                    <span className="font-bold block text-dark">Email:</span> 
                    <span className="text-[#ff2d46]">support@shopsprinters.com</span>
                  </p>
                  <p className="font-medium text-gray-700 leading-relaxed">
                    <span className="font-bold block text-dark">Address:</span>
                    Shops Printers<br />
                    17807 Lakecrest View Drive, #1205<br />
                    Cypress, TX 77433, United States
                  </p>
                  <p className="font-medium text-gray-700 leading-relaxed">
                    <span className="font-bold block text-dark">Website:</span>
                    <span className="text-[#ff2d46]">https://shopsprinters.com</span>
                  </p>
               </div>
               
               <p className="mt-8">Please include details about the issue you encountered, the page where it occurred, and any assistive technology you were using. We will respond promptly and work to address the issue.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">6. Commitment to Improvement</h2>
              <p>We believe everyone should have equal access to information and services. We are continually improving our website to ensure a smooth and inclusive experience for all users.</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default AccessibilityStatement;
