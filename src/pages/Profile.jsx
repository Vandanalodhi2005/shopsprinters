import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = ({ setPage }) => {
  const { user, logout, updateProfile, getOrders } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      setPage('login');
      return;
    }

    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, getOrders, setPage]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (formData.password && formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError(null);
      setMessage(null);
      await updateProfile({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password || undefined
      });
      setMessage('Profile updated successfully');
      setEditing(false);
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    }
  };

  if (!user) return null;

  const inputClass = "w-full bg-gray-50 border border-gray-100 px-5 py-3.5 rounded-xl text-dark font-medium placeholder:text-gray-300 focus:border-[#ff2d46] focus:bg-white transition-all outline-none";
  const labelClass = "text-xs font-medium text-gray-500 mb-2 block ml-1";

  return (
    <main className="min-h-screen pt-40 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-10 mb-12">
          <div>
            <h1 className="text-3xl font-medium text-dark mb-2 tracking-tight">My Account</h1>
            <p className="text-gray-400 text-sm font-medium">Manage your personal information and track your orders</p>
          </div>
          <button 
            onClick={() => { logout(); setPage('home'); }}
            className="mt-4 md:mt-0 px-6 py-2.5 rounded-lg border border-gray-100 text-sm font-medium text-gray-500 hover:text-[#ff2d46] hover:bg-gray-100 transition-all flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Settings Section */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-medium text-dark mb-8">Personal Information</h2>
            
            <div className="space-y-10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#fdf2f2] flex items-center justify-center text-xl font-medium text-[#ff2d46]">
                  {(user.firstName?.charAt(0) || 'U') + (user.lastName?.charAt(0) || '')}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-dark leading-none mb-1">{user.firstName} {user.lastName}</h3>
                  <p className="text-sm text-gray-400 font-medium">{user.email}</p>
                </div>
              </div>

              {!editing ? (
                <div className="space-y-6">
                  <div>
                    <p className={labelClass}>Account Status</p>
                    <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                       Active Member
                    </p>
                  </div>
                  <button 
                    onClick={() => setEditing(true)}
                    className="w-full py-3 bg-dark text-white rounded-xl text-sm font-medium hover:bg-[#ff2d46] transition-all shadow-sm"
                  >
                    Edit Profile Details
                  </button>
                  <button 
                    onClick={() => setPage('track-order')}
                    className="w-full py-3 bg-white border border-gray-100 text-dark rounded-xl text-sm font-medium hover:border-[#ff2d46] hover:text-[#ff2d46] transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 8l-2-2H5L3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z"/><path d="M10 12h4"/></svg>
                    Track a Specific Order
                  </button>
                </div>
              ) : (
                <form onSubmit={handleUpdate} className="space-y-5 animate-fade-in text-left">
                  {message && <div className="p-3 bg-green-50 text-green-600 rounded-xl text-xs font-medium text-center">{message}</div>}
                  {error && <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-medium text-center">{error}</div>}
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>First Name</label>
                      <input name="firstName" className={inputClass} value={formData.firstName} onChange={handleInputChange} />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name</label>
                      <input name="lastName" className={inputClass} value={formData.lastName} onChange={handleInputChange} />
                    </div>
                  </div>
                  
                  <div>
                    <label className={labelClass}>New Password</label>
                    <input name="password" type="password" className={inputClass} placeholder="Leave empty to keep" onChange={handleInputChange} />
                  </div>
                  
                  <div>
                    <label className={labelClass}>Confirm Password</label>
                    <input name="confirmPassword" type="password" className={inputClass} placeholder="Verify password" onChange={handleInputChange} />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button type="submit" className="flex-1 bg-dark text-white py-3 rounded-xl text-sm font-medium hover:bg-[#ff2d46] transition-all">Save Changes</button>
                    <button type="button" onClick={() => setEditing(false)} className="flex-1 bg-gray-100 text-gray-500 py-3 rounded-xl text-sm font-medium hover:bg-gray-200 transition-all">Cancel</button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Activity Section */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-medium text-dark mb-8">Purchase History</h2>
            
            <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
               {loading ? (
                 <div className="p-20 text-center flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-2 border-gray-200 border-t-[#ff2d46] rounded-full animate-spin"></div>
                    <p className="text-sm text-gray-400 font-medium tracking-tight">Loading orders...</p>
                 </div>
               ) : orders.length === 0 ? (
                 <div className="p-20 text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-200 mx-auto mb-6">
                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 8l-2-2H5L3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z"/><path d="M10 12h4"/></svg>
                    </div>
                    <h3 className="text-lg font-medium text-dark mb-2">No orders found</h3>
                    <p className="text-gray-400 text-sm font-medium mb-8 max-w-xs mx-auto">Browse our shop to find the best printers for your office or home.</p>
                    <button 
                      onClick={() => setPage('shop')}
                      className="px-8 py-3 bg-dark text-white rounded-xl text-sm font-medium hover:bg-[#ff2d46] transition-all"
                    >
                       Start Shopping
                    </button>
                 </div>
               ) : (
                 <div className="divide-y divide-gray-50">
                    {orders.map(order => (
                      <div key={order._id} className="p-8 flex flex-col sm:flex-row items-center justify-between gap-8 hover:bg-gray-50/50 transition-all">
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center text-gray-300 text-sm font-medium">
                            #{order._id.slice(-5).toUpperCase()}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-dark mb-1">Order Placed</p>
                            <p className="text-xs text-gray-400 font-medium">{new Date(order.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-10">
                          <div className="text-center sm:text-right">
                            <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-1 font-medium">Grand Total</p>
                            <p className="text-lg font-medium text-dark">${order.totalPrice.toFixed(2)}</p>
                          </div>
                          
                          <div className={`px-4 py-1.5 rounded-full text-[10px] font-medium flex items-center gap-2 ${
                            order.isDelivered ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${order.isDelivered ? 'bg-green-500' : 'bg-blue-500'}`}></span>
                            {order.isDelivered ? 'Delivered' : 'In Transit'}
                          </div>

                          <button 
                            onClick={() => setPage(`order-details-${order._id}`)}
                            className="w-10 h-10 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#ff2d46] hover:border-[#ff2d46] transition-all bg-white"
                            title="Track Order"
                          >
                             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8l-2-2H5L3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z"/><path d="M10 12h4"/></svg>
                          </button>
                        </div>
                      </div>
                    ))}
                 </div>
               )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Profile;
