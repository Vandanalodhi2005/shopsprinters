import React from 'react';

const ShippingPolicy = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section - Matches Policy UI */}
      <section className="pt-40 pb-20 bg-[#fdf2f2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[42px] md:text-[54px] font-[900] text-dark mb-6 leading-tight">
            Shipping & Delivery Policy
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
              Thank you for shopping with <span className="font-bold">Shops Printers</span>. This Shipping & Delivery Policy explains how orders are processed, shipped, and delivered through <a href="https://shopsprinters.com" className="text-[#ff2d46] hover:underline">https://shopsprinters.com</a>.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">1. Where We Ship</h2>
              <p className="mb-4">We currently ship to customers within:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>United States</li>
                <li>Canada</li>
              </ul>
              <p className="mt-4 italic">If your location is outside these regions, shipping may not be available.</p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">2. Order Processing Time</h2>
              <p className="mb-4">Orders are typically processed within <span className="font-bold text-dark">1–2 business days</span> after payment confirmation. Processing does not occur on weekends or public holidays.</p>
              <p className="italic">During high-volume periods, processing times may be slightly longer.</p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">3. Shipping Methods & Delivery Times</h2>
              <p className="mb-4">We work with trusted carriers to deliver orders safely and efficiently. Delivery timelines depend on the destination, carrier, and product availability.</p>
              
              <div className="bg-[#fafafa] p-8 rounded-2xl border border-gray-100 my-8">
                <p className="font-black text-dark mb-4">Estimated delivery times:</p>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-bold">United States:</span>
                    <span className="text-[#ff2d46]">3–7 business days</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-bold">Canada:</span>
                    <span className="text-[#ff2d46]">5–10 business days</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm italic text-gray-500">These are estimates and not guaranteed delivery dates.</p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">4. Order Tracking</h2>
              <p className="mb-4">Once your order has shipped, you will receive an email with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Order confirmation</li>
                <li>Shipping notification</li>
                <li>Tracking number and tracking link</li>
              </ul>
              <p className="mt-4">You can monitor shipment progress directly through the carrier’s website.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">5. Shipping Costs</h2>
              <p className="mb-4">Shipping costs are calculated at checkout based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Delivery address</li>
                <li>Weight and size of items</li>
                <li>Selected shipping method</li>
              </ul>
              <p className="mt-4">Any applicable taxes or duties will be shown during checkout.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">6. Delivery Issues</h2>
              <p className="mb-4">Please contact us if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your package is delayed</li>
                <li>Tracking information is unclear</li>
                <li>The shipment shows “delivered” but you did not receive it</li>
              </ul>
              <p className="mt-4">We will work with the carrier to help resolve the issue.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">7. Incorrect or Damaged Items</h2>
              <p className="mb-4">If your order arrives damaged, defective, or incorrect:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Email <span className="font-bold text-[#ff2d46]">support@shopsprinters.com</span> within 48–72 hours</li>
                <li>Provide your order number and clear photos of the issue</li>
              </ul>
              <p className="mt-4">We will arrange a replacement or resolve the issue according to our Refund & Return Policy.</p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">8. Delivery Address Responsibility</h2>
              <p className="mb-4">Customers are responsible for providing an accurate and complete shipping address at checkout. We are not responsible for delays or failed deliveries caused by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Incorrect addresses</li>
                <li>Missing apartment or suite numbers</li>
                <li>Inaccessible delivery locations</li>
              </ul>
              <p className="mt-6 italic font-bold">If a package is returned due to an incorrect address, reshipping fees may apply.</p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">9. Business Days</h2>
              <p className="mb-2">Business days are Monday to Friday, excluding holidays.</p>
              <p>Orders placed after business hours will be processed the next business day.</p>
            </div>

            {/* Section 10 */}
            <div>
               <h2 className="text-[32px] md:text-[42px] font-[900] text-dark mb-6 leading-tight">10. Contact Information</h2>
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

export default ShippingPolicy;
