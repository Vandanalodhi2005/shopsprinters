import React, { useState } from 'react';

const TrackOrder = ({ setPage }) => {
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/orders/${orderId.trim()}`);
      if (!response.ok) {
        throw new Error('Order not found. Please check your Order ID.');
      }
      const data = await response.json();
      // If found, redirect to order details
      localStorage.setItem('lastTrackedOrder', orderId.trim());
      setPage(`order-details-${orderId.trim()}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white pt-40 pb-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="mb-12">
          <div className="w-20 h-20 bg-[#fdf2f2] rounded-3xl flex items-center justify-center text-[#ff2d46] mx-auto mb-8 shadow-sm">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8l-2-2H5L3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z"/><path d="M10 12h4"/></svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-medium text-dark mb-4 tracking-tight">Track Your Order</h1>
          <p className="text-gray-400 font-medium leading-relaxed opacity-80">
            Enter your order ID below to see the current status of your printer or supplies delivery.
          </p>
        </div>

        <form onSubmit={handleTrack} className="space-y-6 bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm">
          {error && (
            <div className="p-4 bg-red-50 text-red-500 rounded-2xl text-xs font-medium border border-red-100 animate-fade-in">
              {error}
            </div>
          )}

          <div className="text-left">
            <label className="text-xs font-medium text-gray-400 mb-3 block ml-2 uppercase tracking-widest">Order ID</label>
            <input 
              type="text" 
              placeholder="e.g. 65cba123af89..." 
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-dark font-medium placeholder:text-gray-300 focus:bg-white focus:border-[#ff2d46] outline-none transition-all"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-dark text-white py-4 rounded-2xl font-medium text-sm tracking-widest uppercase hover:bg-[#ff2d46] transition-all transform hover:-translate-y-1 shadow-lg shadow-black/5 disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <>
                Track Order
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-sm text-gray-400 font-medium">
          Need help? <button onClick={() => setPage('contact')} className="text-[#ff2d46] hover:underline">Contact Support</button>
        </div>
      </div>
    </main>
  );
};

export default TrackOrder;
