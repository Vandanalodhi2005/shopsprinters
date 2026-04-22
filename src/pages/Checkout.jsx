import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Checkout = ({ setPage }) => {
  const { cart, cartTotal, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment
  const [loading, setLoading] = useState(false);
  
  const [agreed, setAgreed] = useState(false);
  const [shippingData, setShippingData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    phone: '',
  });

  const [shippingRates, setShippingRates] = useState([]);
  const [selectedRate, setSelectedRate] = useState(null);
  const [shippingError, setShippingError] = useState(null);

  useEffect(() => {
    if (user) {
      setShippingData(prev => ({
        ...prev,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }));
    }
  }, [user]);

  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: ''
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'number') {
      const cleaned = value.replace(/\D/g, '').slice(0, 16);
      formattedValue = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    } else if (name === 'expiry') {
      const cleaned = value.replace(/\D/g, '').slice(0, 4);
      if (cleaned.length >= 2) {
        formattedValue = `${cleaned.slice(0, 2)} / ${cleaned.slice(2)}`;
      } else {
        formattedValue = cleaned;
      }
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setCardData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const calculateShipping = async () => {
    setLoading(true);
    setShippingError(null);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/shipping/rates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shippingAddress: {
            name: `${shippingData.firstName} ${shippingData.lastName}`,
            address: shippingData.address,
            city: shippingData.city,
            state: shippingData.state,
            postalCode: shippingData.zip,
            country: shippingData.country,
            phone: shippingData.phone,
          },
          cartItems: cart.map(item => ({ ...item, qty: item.quantity }))
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to calculate shipping rates');
      }

      const rates = await response.json();
      setShippingRates(rates);
      if (rates.length > 0) {
        setSelectedRate(rates[0]);
      } else {
        setShippingError("No shipping rates found for this address.");
      }
    } catch (error) {
      console.error('Shipping calculation error:', error);
      setShippingError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    if (shippingRates.length === 0) {
      calculateShipping();
    } else if (selectedRate) {
      setStep(2);
      window.scrollTo(0, 0);
    } else {
      alert("Please select a shipping method");
    }
  };

  const processPayment = async () => {
    setLoading(true);
    try {
      const orderData = {
        orderItems: cart,
        shippingAddress: shippingData,
        paymentMethod: 'Clover',
        itemsPrice: subtotal,
        taxPrice: tax,
        shippingPrice: shipping,
        totalPrice: total,
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) throw new Error('Payment failed');

      setTimeout(() => {
        clearCart();
        alert('Order placed successfully!');
        setPage('home');
      }, 1500);

    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  if (!isAuthenticated) return null; // Logic in App.jsx should handle this, but being safe

  const subtotal = cartTotal;
  const tax = Number((subtotal * 0.08).toFixed(2));
  const shipping = selectedRate ? Number(selectedRate.rate) : 0;
  const total = Number((subtotal + tax + shipping).toFixed(2));

  const handleInputChange = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  const labelClass = "text-[11px] font-medium text-gray-400 uppercase tracking-widest mb-3 block ml-1";
  const inputClass = "w-full bg-[#f9f9f9] border border-gray-100 px-6 py-4 rounded-2xl text-dark font-medium placeholder:text-gray-300 focus:border-[#ff2d46] focus:bg-white transition-all outline-none";

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Checkout Steps */}
          <div className="lg:col-span-7">
            {step === 1 ? (
              <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-10 md:p-14">
                <header className="mb-12">
                   <button 
                     onClick={() => setPage('cart')} 
                     className="flex items-center gap-2 text-[11px] font-medium text-gray-400 uppercase tracking-widest hover:text-[#ff2d46] transition-colors mb-6 group"
                   >
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                     Back to Cart
                   </button>
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-[#fdf2f2] flex items-center justify-center text-[#ff2d46]">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                     </div>
                     <h2 className="text-3xl font-medium text-dark tracking-tight">Shipping Details</h2>
                   </div>
                </header>

                <form onSubmit={handleShippingSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>First Name</label>
                      <input name="firstName" value={shippingData.firstName} readOnly className={`${inputClass} opacity-60 cursor-not-allowed`} />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name</label>
                      <input name="lastName" value={shippingData.lastName} readOnly className={`${inputClass} opacity-60 cursor-not-allowed`} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input name="email" value={shippingData.email} readOnly className={`${inputClass} opacity-60 cursor-not-allowed`} />
                  </div>

                  <div>
                    <label className={labelClass}>Street Address</label>
                    <input name="address" required className={inputClass} placeholder="123 Printing Blvd" onChange={handleInputChange} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className={labelClass}>City</label>
                      <input name="city" required className={inputClass} placeholder="Kitchener" onChange={handleInputChange} />
                    </div>
                    <div>
                      <label className={labelClass}>State/Prov</label>
                      <input name="state" required className={inputClass} placeholder="ON" onChange={handleInputChange} />
                    </div>
                    <div>
                      <label className={labelClass}>Zip/Postal</label>
                      <input name="zip" required className={inputClass} placeholder="N2R 0S5" onChange={handleInputChange} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Country</label>
                    <select name="country" className={inputClass} onChange={handleInputChange} defaultValue="United States">
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input name="phone" required className={inputClass} placeholder="+1 (555) 000-0000" onChange={handleInputChange} />
                  </div>

                  <div className="pt-8 border-t border-gray-50">
                    <h3 className="text-[13px] font-medium text-dark uppercase tracking-widest mb-6">Select Shipping Method</h3>
                    {shippingRates.length > 0 ? (
                      <div className="space-y-4">
                        {shippingRates.map((rate) => (
                          <label key={rate.id} className={`flex items-center justify-between p-6 rounded-2xl border cursor-pointer transition-all ${selectedRate?.id === rate.id ? 'border-[#ff2d46] bg-[#fdf2f2]' : 'border-gray-50 hover:border-gray-200 bg-white'}`}>
                            <div className="flex items-center gap-4">
                              <input type="radio" name="rate" checked={selectedRate?.id === rate.id} onChange={() => setSelectedRate(rate)} className="accent-[#ff2d46] w-4 h-4" />
                              <div>
                                <p className="font-medium text-dark text-[15px]">{rate.service || rate.carrier}</p>
                                <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                                  {rate.carrier} • {rate.est_delivery_days ? `${rate.est_delivery_days} days` : 'Standard Delivery'}
                                </p>
                              </div>
                            </div>
                            <span className="font-medium text-dark">${Number(rate.rate).toFixed(2)}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-[#fcfcfc] p-10 rounded-[30px] border border-dashed border-gray-100 text-center">
                        <p className="text-gray-400 font-medium text-sm">Please fill in your address and click 'Calculate Shipping' below to see available methods.</p>
                      </div>
                    )}

                    {shippingError && (
                      <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-2xl text-[12px] font-medium border border-red-100">
                        Error: {shippingError}
                      </div>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-dark text-white py-6 rounded-[24px] font-medium text-[17px] hover:bg-[#ff2d46] transition-all transform hover:-translate-y-1 shadow-xl shadow-black/10 flex items-center justify-center gap-4 mt-8"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Calculating...
                      </div>
                    ) : (
                      <>
                        {shippingRates.length === 0 ? 'Calculate Shipping Rates' : 'Continue to Payment'}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-10 md:p-14 animate-fade-in">
                <header className="mb-12">
                   <button 
                     onClick={() => setStep(1)} 
                     className="flex items-center gap-2 text-[11px] font-medium text-gray-400 uppercase tracking-widest hover:text-[#ff2d46] transition-colors mb-6 group"
                   >
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                     Back to Shipping
                   </button>
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#f0f9ff] flex items-center justify-center text-[#3b82f6]">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                        </div>
                        <h2 className="text-3xl font-medium text-dark tracking-tight">Secure Payment</h2>
                     </div>
                   </div>
                </header>

                <div className="space-y-10">
                   {/* Payment Info Card */}
                   <div className="bg-[#fcfcfc] p-8 rounded-[30px] border border-gray-100">
                      <div className="flex justify-between items-center mb-6">
                         <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Amount to Pay</span>
                         <span className="text-2xl font-medium text-[#ff2d46] tracking-tighter">${total.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center justify-center bg-white rounded-2xl h-20 border border-gray-50 flex-wrap">
                         <img src="/pay/payments.svg" alt="Payment Channels" className="h-12" />
                      </div>
                   </div>

                   {/* Simulated Card Form */}
                   <div className="space-y-6">
                      <div>
                        <label className={labelClass}>Card Number</label>
                        <div className="relative">
                          <input 
                            name="number"
                            className={inputClass} 
                            placeholder="XXXX XXXX XXXX XXXX" 
                            value={cardData.number}
                            onChange={handleCardChange}
                          />
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className={labelClass}>Expiry Date</label>
                          <input 
                            name="expiry"
                            className={inputClass} 
                            placeholder="MM / YY" 
                            value={cardData.expiry}
                            onChange={handleCardChange}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>CVV / CVC</label>
                          <input 
                            name="cvv"
                            className={inputClass} 
                            placeholder="***" 
                            type="password" 
                            value={cardData.cvv}
                            onChange={handleCardChange}
                          />
                        </div>
                      </div>
                   </div>

                   <div className="flex items-start gap-4 p-6 bg-[#fdf2f2] rounded-3xl border border-[#ff2d46]/10">
                      <div className="mt-1 text-[#ff2d46]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                      <p className="text-[12px] font-medium text-dark leading-relaxed">Your data is fully protected. We use advanced encryption and do not store sensitive payment information on our servers.</p>
                   </div>

                   <div className="flex items-start gap-3 px-2">
                     <input 
                       type="checkbox" 
                       id="terms-checkbox"
                       checked={agreed}
                       onChange={(e) => setAgreed(e.target.checked)}
                       className="mt-1 w-5 h-5 accent-[#ff2d46] cursor-pointer"
                     />
                     <label htmlFor="terms-checkbox" className="text-[12px] font-medium text-gray-500 cursor-pointer select-none leading-relaxed">
                       By placing your order, you confirm that you have read and agree to our 
                       <button onClick={(e) => { e.preventDefault(); setPage('terms'); }} className="text-[#ff2d46] mx-1 hover:underline">Terms & Conditions</button>, 
                       <button onClick={(e) => { e.preventDefault(); setPage('refund-policy'); }} className="text-[#ff2d46] mx-1 hover:underline">Refund & Return Policy</button> 
                       and understand how your personal information is used as described in our 
                       <button onClick={(e) => { e.preventDefault(); setPage('privacy'); }} className="text-[#ff2d46] mx-1 hover:underline">Privacy Policy</button>.
                     </label>
                   </div>

                   <button 
                    onClick={processPayment}
                    disabled={loading || !agreed}
                    className={`w-full py-6 rounded-[24px] font-medium text-lg transition-all shadow-xl flex items-center justify-center gap-4 ${loading || !agreed ? 'bg-gray-100 text-gray-300 cursor-not-allowed shadow-none' : 'bg-dark text-white hover:bg-[#ff2d46]'}`}
                   >
                     {loading ? 'Processing Payment...' : 'Finalize Payment & Place Order'}
                     {!loading && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>}
                   </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Sidebar Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[40px] border border-gray-100 p-8 shadow-sm lg:sticky lg:top-32">
               <h3 className="text-xl font-medium text-dark mb-8 tracking-tight">Review Order</h3>
               
               <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto px-2 scrollbar-hide">
                  {cart.map((item) => (
                    <div key={item._id} className="flex gap-4 items-center">
                      <div className="w-16 h-16 bg-gray-50 rounded-xl p-2 flex items-center justify-center border border-gray-50">
                        <img src={item.images?.[0] || item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-[13px] font-medium text-dark line-clamp-1">{item.title}</h4>
                        <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-medium text-dark text-[14px]">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
               </div>

                <div className="space-y-4 pt-8 border-t border-gray-100">
                  <div className="flex justify-between text-gray-500 text-[14px]">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-medium text-dark">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-[14px]">
                    <span className="font-medium">Shipping</span>
                    <span className="font-medium text-dark">{shipping === 0 ? (shippingRates.length === 0 ? 'Calculated next' : 'FREE') : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 text-[14px]">
                    <span className="font-medium">Tax (8%)</span>
                    <span className="font-medium text-dark">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-6 mt-4 border-t border-gray-50">
                    <span className="text-lg font-medium text-dark tracking-tight">Order Total</span>
                    <span className="text-2xl font-medium text-[#ff2d46] tracking-tighter">${total.toFixed(2)}</span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Checkout;
