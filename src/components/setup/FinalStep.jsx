import React, { useState } from 'react';

const FinalStep = ({ onBack, onSubmit, loading, initialModel = '' }) => {
  const [form, setForm] = useState({ 
    model: initialModel, 
    name: '', 
    phone: '', 
    email: '', 
    agree: true 
  });

  const isValid = form.model && form.name && form.phone && form.email && form.agree;

  return (
    <div className="flex items-center justify-center w-full px-4 py-12 bg-gray-100/50 min-h-[70vh]">
      <form
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl space-y-5 border border-gray-100"
        onSubmit={e => {
          e.preventDefault();
          onSubmit(form);
        }}
      >
        <div className="text-blue-700 font-bold text-sm tracking-widest text-center mb-2 uppercase">FINAL STEP</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">Register & Start Setup</h2>
        <p className="text-gray-500 text-base mb-4 text-center">Enter your details to complete setup.</p>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Enter Printer Model</label>
          <input 
            type="text" 
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" 
            placeholder="e.g., OfficeJet Pro 9010" 
            value={form.model} 
            onChange={e => setForm(f => ({ ...f, model: e.target.value }))} 
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Enter Your Name</label>
          <input 
            type="text" 
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" 
            placeholder="John Doe" 
            value={form.name} 
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))} 
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Enter Phone Number</label>
          <input 
            type="tel" 
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" 
            placeholder="+1 (555) 000-0000" 
            value={form.phone} 
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} 
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Enter Email Address</label>
          <input 
            type="email" 
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" 
            placeholder="john@email.com" 
            value={form.email} 
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))} 
            required
          />
        </div>
        <div className="flex items-center mt-2">
          <input 
            type="checkbox" 
            id="privacy" 
            className="mr-2 w-4 h-4" 
            checked={form.agree} 
            onChange={e => setForm(f => ({ ...f, agree: e.target.checked }))} 
          />
          <label htmlFor="privacy" className="text-sm text-gray-700">I agree to accept the <a href="/privacy-policy" className="text-blue-700 underline font-semibold">Privacy Policy</a>.</label>
        </div>

        <button 
          type="submit" 
          disabled={!isValid || loading} 
          className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg text-lg mt-2 flex items-center justify-center transition-all ${(!isValid || loading) ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          {loading ? <i className="fa-solid fa-circle-notch animate-spin mr-2"></i> : null}
          CONTINUE TO START <i className="fa-solid fa-bolt ml-2"></i>
        </button>

        <div className="flex justify-center mt-4">
          <button type="button" className="text-gray-500 hover:underline text-sm flex items-center" onClick={onBack}>
            <i className="fa-solid fa-arrow-left mr-1"></i> Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default FinalStep;
