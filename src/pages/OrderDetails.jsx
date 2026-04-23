import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const OrderDetails = () => {
  const { orderId: paramOrderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const id = paramOrderId || localStorage.getItem('lastTrackedOrder');
        if (!id) {
          navigate('/track-order');
          return;
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/orders/${id}`);
        if (!response.ok) throw new Error('Order not found');
        const data = await response.json();
        setOrder(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [paramOrderId, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="w-12 h-12 border-4 border-[#ff2d46] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <h2 className="text-2xl font-medium text-dark mb-4">Error loading order</h2>
        <p className="text-gray-500 mb-8 max-w-sm font-medium">{error || 'Something went wrong while fetching order details.'}</p>
        <Link to="/track-order" className="bg-dark text-white px-8 py-3 rounded-xl font-medium text-sm hover:bg-[#ff2d46] transition-all">Back to Tracking</Link>
      </div>
    );
  }

  const steps = [
    { title: 'Ordered', icon: '🛒', completed: true, date: new Date(order.createdAt).toLocaleDateString() },
    { title: 'Processing', icon: '⚙️', completed: true, date: 'Usually 24-48 hrs' },
    { title: 'Shipped', icon: '🚚', completed: order.isDelivered, date: order.isDelivered ? 'Out for delivery' : 'Pending' },
    { title: 'Delivered', icon: '📦', completed: order.isDelivered, date: order.deliveredAt || 'Pending' }
  ];

  return (
    <main className="min-h-screen bg-gray-50/50 pt-32 md:pt-40 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-10 transition-all">
           <Link to="/" className="hover:text-dark">Home</Link>
           <span>/</span>
           <Link to="/track-order" className="hover:text-dark">Tracking</Link>
           <span>/</span>
           <span className="text-[#ff2d46]">Order #{order._id.slice(-8).toUpperCase()}</span>
        </div>

        {/* Status Header Block */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 mb-8 shadow-sm border border-gray-100/50">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-50 pb-10 mb-10">
              <div>
                 <h1 className="text-3xl font-medium text-dark mb-2 tracking-tight">Order Details</h1>
                 <p className="text-sm font-medium text-gray-400">Order ID: <span className="text-dark ml-1">{order._id}</span></p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                 <div className={`px-5 py-2.5 rounded-xl font-medium text-xs flex items-center justify-center gap-2 ${order.isDelivered ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${order.isDelivered ? 'bg-green-500' : 'bg-blue-500'}`}></span>
                    {order.isDelivered ? 'Delivered' : 'Product in Transit'}
                 </div>
                 <button onClick={() => window.print()} className="px-5 py-2.5 rounded-xl border border-gray-100 bg-white font-medium text-xs text-gray-500 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                    Download Invoice
                 </button>
              </div>
           </div>

           {/* Tracker UI - Inspired by Prints Matrix */}
           <div className="relative pt-12 pb-6 px-4">
              <div className="absolute top-[84px] left-12 right-12 h-0.5 bg-gray-50 z-0 hidden md:block">
                 <div className="h-full bg-[#ff2d46] transition-all duration-1000" style={{ width: order.isDelivered ? '100%' : '50%' }}></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
                 {steps.map((step, idx) => (
                   <div key={idx} className="flex flex-col items-center group">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl shadow-md transition-all duration-500 mb-4 ${step.completed ? 'bg-[#ff2d46] text-white scale-110' : 'bg-white text-gray-300 border border-gray-100'}`}>
                         {step.icon}
                      </div>
                      <h3 className={`text-sm font-medium mb-1 ${step.completed ? 'text-dark' : 'text-gray-300'}`}>{step.title}</h3>
                      <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400">{step.date}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Detailed Order Summary */}
           <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100/50">
                 <h2 className="text-xl font-medium text-dark mb-8">Order Items</h2>
                 <div className="space-y-8">
                    {order.orderItems?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-6 group">
                         <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-50 flex items-center justify-center p-4 transition-all group-hover:shadow-md">
                            <img src={item.image || '/placeholder-printer.png'} alt={item.name} className="max-h-full max-w-full object-contain" />
                         </div>
                         <div className="flex-grow">
                            <h4 className="text-[17px] font-medium text-dark mb-1 group-hover:text-[#ff2d46] transition-colors">{item.name}</h4>
                            <p className="text-xs text-gray-400 font-medium tracking-tight">Quantity: <span className="text-dark">{item.qty}</span></p>
                         </div>
                         <div className="text-right">
                            <p className="text-lg font-medium text-dark">${(item.price * item.qty).toFixed(2)}</p>
                            <p className="text-[10px] text-gray-400 font-medium">${item.price.toFixed(2)} / unit</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Shipping & Payment Block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100/50">
                    <h3 className="text-lg font-medium text-dark mb-6">Free Fast Shipping</h3>
                    <div className="space-y-1">
                       <p className="text-sm font-medium text-dark">{order.shippingAddress?.fullName || order.user?.firstName + ' ' + order.user?.lastName}</p>
                       <p className="text-[13px] text-gray-400 font-medium leading-relaxed">
                          {order.shippingAddress?.address}<br />
                          {order.shippingAddress?.city}, {order.shippingAddress?.postalCode}<br />
                          {order.shippingAddress?.country}
                       </p>
                       <p className="text-[13px] text-gray-400 font-medium pt-3">{order.shippingAddress?.phone}</p>
                    </div>
                 </div>

                 <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100/50">
                    <h3 className="text-lg font-medium text-dark mb-6">Payment Method</h3>
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-xs text-gray-300 font-medium">VISA</div>
                       <p className="text-sm font-medium text-dark">{order.paymentMethod || 'Credit Card'}</p>
                    </div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full text-[10px] font-medium text-green-600`}>
                       <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                       Paid Successfully
                    </div>
                    <p className="text-[13px] text-gray-400 font-medium mt-6 opacity-80 leading-relaxed">
                       Your data is fully protected and encrypted. No sensitive data is stored.
                    </p>
                 </div>
              </div>
           </div>

           {/* Financial Sidebar */}
           <div className="lg:col-span-1">
              <div className="bg-dark text-white rounded-[40px] p-10 shadow-2xl sticky top-40 overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                 
                 <h2 className="text-xl font-medium mb-10 relative z-10 tracking-tight">Order Summary</h2>
                 
                 <div className="space-y-6 relative z-10">
                    <div className="flex justify-between text-sm font-medium text-white/60">
                       <span>Subtotal</span>
                       <span>${(order.totalPrice - (order.shippingPrice || 0) - order.taxPrice).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-white/60">
                       <span>Shipping Fee</span>
                       <span className="text-green-400">FREE</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-white/60 pb-6 border-b border-white/10">
                       <span>Estimated Tax</span>
                       <span>${order.taxPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-2xl font-medium pt-4">
                       <span>Total</span>
                       <span>${order.totalPrice.toFixed(2)}</span>
                    </div>
                 </div>

                 <div className="mt-12 bg-white/10 p-6 rounded-3xl relative z-10">
                    <p className="text-xs font-medium text-white/60 leading-relaxed">
                       Estimated arrival: <span className="text-white ml-1">3 - 7 Business Days</span>
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
