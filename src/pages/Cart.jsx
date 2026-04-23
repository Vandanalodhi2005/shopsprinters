import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen pt-40 pb-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="w-32 h-32 bg-[#fdf2f2] rounded-full flex items-center justify-center mx-auto mb-10 shadow-sm">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff2d46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <h2 className="text-4xl font-medium text-dark mb-6">Your cart is empty</h2>
          <p className="text-gray-500 mb-12 max-w-md mx-auto font-medium">It looks like you haven't added any premium printers to your cart yet. Explore our shop to find the perfect match for your needs.</p>
          <Link
            to="/shop"
            className="bg-dark text-white px-12 py-5 rounded-[20px] font-medium hover:bg-[#ff2d46] transition-all shadow-lg shadow-black/10 flex items-center gap-3 mx-auto w-fit"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Cart Items List */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-10">
              <h1 className="text-4xl font-medium text-dark tracking-tight">Shopping <span className="text-[#ff2d46]">Cart</span></h1>
              <span className="bg-white border border-gray-100 px-6 py-2 rounded-full font-medium text-xs text-gray-500 shadow-sm">
                {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
              </span>
            </div>

            <div className="bg-white rounded-[30px] border border-gray-100 shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-50">
                {cart.map((item) => (
                  <div key={item._id} className="p-8 flex flex-col md:flex-row items-center gap-10 hover:bg-[#fcfcfc] transition-all">
                    {/* Image */}
                    <div className="w-32 h-32 bg-[#f9f9f9] rounded-2xl p-4 flex items-center justify-center flex-shrink-0 border border-gray-50 shadow-inner">
                      <img
                        src={item.images?.[0] || item.image || '/placeholder-printer.png'}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow text-center md:text-left">
                      <p className="text-[10px] font-medium text-[#ff2d46] uppercase tracking-widest mb-1">{item.brand || 'Premium Brand'}</p>
                      <h3 className="text-xl font-medium text-dark mb-2 leading-tight">{item.title}</h3>
                      <p className="text-2xl font-medium text-dark">${Number(item.price).toFixed(2)}</p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center bg-gray-50 rounded-xl px-2 py-1 border border-gray-100 min-w-[140px] justify-between">
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-dark transition-colors font-medium text-xl"
                      >
                        −
                      </button>
                      <span className="font-medium text-dark w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#ff2d46] transition-colors font-medium text-xl"
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total & Remove */}
                    <div className="flex flex-col items-center md:items-end gap-3 min-w-[120px]">
                      <p className="text-lg font-medium text-dark">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-[11px] font-medium text-gray-300 hover:text-red-500 transition-colors uppercase tracking-widest flex items-center gap-2"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 p-4">
              <Link
                to="/shop"
                className="text-[12px] font-medium text-gray-400 hover:text-dark transition-colors uppercase tracking-widest flex items-center gap-3"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-[12px] font-medium text-gray-400 hover:text-[#ff2d46] transition-colors uppercase tracking-widest"
              >
                Clear Entire Cart
              </button>
            </div>
          </div>

          {/* Right: Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl p-10 lg:sticky lg:top-32">
              <h2 className="text-2xl font-medium text-dark mb-10 tracking-tight">Order Summary</h2>

              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center text-gray-500">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-medium text-dark">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500">
                  <span className="font-medium">Estimated Shipping</span>
                  <span className="text-[#00c853] font-medium text-[13px] uppercase tracking-wider">Free</span>
                </div>
                <div className="flex justify-between items-center text-gray-500">
                  <span className="font-medium">Estimated Tax</span>
                  <span className="font-medium text-dark">${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="h-px bg-gray-50 my-4"></div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-xl font-medium text-dark tracking-tight">Total Payment</span>
                  <span className="text-3xl font-medium text-[#ff2d46] tracking-tighter">
                    ${(cartTotal * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-dark text-white py-6 rounded-[24px] font-medium text-lg hover:bg-[#ff2d46] transition-all shadow-xl shadow-black/10 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4 block text-center"
              >
                Proceed to Checkout
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>

              <div className="mt-8 text-center">
                <div className="flex items-center justify-center gap-3 text-[11px] font-medium text-gray-400 mb-6">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff2d46" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  SECURE 256-BIT SSL ENCRYPTED
                </div>
                <div className="flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <img src="/pay/payments.svg" alt="Visa" className="h-12" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Cart;
