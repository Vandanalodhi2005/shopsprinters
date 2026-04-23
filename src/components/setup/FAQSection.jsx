import React from "react";

const FAQSection = () => (
  <section className="py-16 bg-gray-50 w-full flex justify-center">
    <div className="w-full max-w-5xl px-4">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-900">Frequently Asked Questions</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2 text-blue-800">Q: What are the steps to setup a new printer?</h3>
        <p className="mb-2">A: Setting up a printer is a straightforward process if you have some knowledge about printing devices. But if you're a newbie with a printer, then be careful, as a single misstep can make your printer out of order.</p>
        <ul className="list-decimal list-inside space-y-1 mb-2 pl-4">
          <li>Plug in your printer and connect it to a wifi device.</li>
          <li>Visit your printer's manufacturer's website.</li>
          <li>Provide your printer model in the search box.</li>
          <li>Click on the Driver and Download option from the dashboard.</li>
          <li>Download the Driver for your printer and install it.</li>
          <li>Print a demo document to check whether your printer is set up correctly.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2 text-blue-800">Q: My printer is not working properly. What are the reasons?</h3>
        <p>A: There are many reasons for a printer not working, including outdated printer drivers, incorrect configuration, empty ink cartridges, wifi error, driver error, etc. Let our professionals help you get the best results with your printer.</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 text-blue-800">Q: I changed my printer cartridges recently, and my printer has not been working since then.</h3>
        <p>A: Sometimes, when we change the ink cartridge or refill it, the printer still reads it as an empty cartridge, or sometimes, it doesn't even recognize the new ink cartridge. You can try resetting your printer cartridge settings or reinstalling your printer's ink cartridge.</p>
      </div>
    </div>
  </section>
);

export default FAQSection;
