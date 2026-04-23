import React, { useRef, useState } from 'react';

export default function FinalStep({ onBack, onSubmit, nameRef, loading, modelValue, setModelValue }) {
  const [form, setForm] = useState({ model: modelValue || '', name: '', phone: '', email: '', agree: true });

  const dataofmodel = localStorage.getItem('printerModel') || setModelValue;
  React.useEffect(() => {
    setForm(f => ({ ...f, model: modelValue || dataofmodel || '' }));
  }, [modelValue]);

  const handleModelChange = (e) => {
    setForm(f => ({ ...f, model: e.target.value }));
    if (setModelValue) setModelValue(e.target.value);
  };

  const isValid = form.model && form.name && form.phone && form.email && form.agree;
  return (
    <div className="flex items-center justify-center w-full px-2 xs:px-4">
      <form
        className="bg-white rounded-2xl shadow-2xl p-4 xs:p-8 w-full max-w-2xl min-w-0 xs:min-w-[320px] sm:min-w-[420px] md:min-w-[520px] space-y-5 border border-gray-100"
        style={{ maxWidth: 700 }}
        onSubmit={e => {
          e.preventDefault();
          onSubmit(form);
        }}
      >
        <div className="text-blue-700 font-bold text-xs xs:text-sm tracking-widest text-center mb-2">FINAL STEP</div>
        <h2 className="text-lg xs:text-xl md:text-2xl font-bold text-gray-800 mb-1 text-center">Register & Start Setup</h2>
        <p className="text-gray-500 text-xs xs:text-base mb-4 text-center">Enter your details to complete setup.</p>
        <div>
          <label className="block text-xs xs:text-sm font-semibold text-gray-700 mb-1">Enter Printer Model</label>
          <input type="text" className="w-full border border-gray-200 rounded-lg px-3 xs:px-4 py-2 xs:py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-xs xs:text-base" placeholder="e.g., OfficeJet Pro 9010" value={form.model} onChange={handleModelChange} />
        </div>
        <div>
          <label className="block text-xs xs:text-sm font-semibold text-gray-700 mb-1">Enter Your Name</label>
          <input ref={nameRef} type="text" className="w-full border border-gray-200 rounded-lg px-3 xs:px-4 py-2 xs:py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-xs xs:text-base" placeholder="John Doe" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
        </div>
        <div>
          <label className="block text-xs xs:text-sm font-semibold text-gray-700 mb-1">Enter Phone Number</label>
          <input type="tel" className="w-full border border-gray-200 rounded-lg px-3 xs:px-4 py-2 xs:py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-xs xs:text-base" placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
        </div>
        <div>
          <label className="block text-xs xs:text-sm font-semibold text-gray-700 mb-1">Enter Email Address</label>
          <input type="email" className="w-full border border-gray-200 rounded-lg px-3 xs:px-4 py-2 xs:py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-xs xs:text-base" placeholder="john@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" id="privacy" className="mr-2" checked={form.agree} onChange={e => setForm(f => ({ ...f, agree: e.target.checked }))} />
          <label htmlFor="privacy" className="text-xs xs:text-sm text-gray-700">I agree to accept the <a href="/privacy-policy" className="text-blue-700 underline">Privacy Policy</a>.</label>
        </div>
        <button type="submit" disabled={!isValid || loading} className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 xs:py-3 rounded-lg text-sm xs:text-lg mt-2 flex items-center justify-center transition-colors ${(!isValid || loading) ? 'opacity-60 cursor-not-allowed' : ''}`}>
          {loading ? <span className="animate-spin mr-2"><i className="fa-solid fa-circle-notch"></i></span> : null}
          CONTINUE TO START <i className="fa-solid fa-bolt ml-2"></i>
        </button>
        <div className="flex justify-center mt-2">
          <button type="button" className="text-gray-500 hover:underline text-xs xs:text-sm flex items-center" onClick={onBack}>
            <i className="fa-solid fa-arrow-left mr-1"></i> Back
          </button>
        </div>
      </form>
    </div>
  );
}
