import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';

const AdminDashboard = ({ setPage }) => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [analytics, setAnalytics] = useState(null);
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await fetch(`${API_URL}/analytics`, {
                    headers: { 'Authorization': `Bearer ${user.token}` }
                });
                if (!response.ok) throw new Error('Failed to fetch analytics');
                const data = await response.json();
                setAnalytics(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (user?.isAdmin) {
            fetchAnalytics();
        }
    }, [user, API_URL]);

    const statsDisplay = analytics ? [
        {
            label: 'Total Revenue',
            value: `$${analytics.revenue?.total?.toFixed(2) || '0.00'}`,
            change: `${(analytics.revenue?.growth || 0) >= 0 ? '+' : ''}${analytics.revenue?.growth || 0}%`,
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            ),
            color: 'text-emerald-600',
            bg: 'bg-emerald-50'
        },
        {
            label: 'Total Orders',
            value: (analytics.orders?.total || 0).toString(),
            change: `${(analytics.orders?.growth || 0) >= 0 ? '+' : ''}${analytics.orders?.growth || 0}%`,
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            ),
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        {
            label: 'Total Customers',
            value: (analytics.customers?.total || 0).toString(),
            change: `${(analytics.customers?.growth || 0) >= 0 ? '+' : ''}${analytics.customers?.growth || 0}%`,
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            ),
            color: 'text-purple-600',
            bg: 'bg-purple-100'
        },
    ] : [];

    const statusStyles = {
        'Processing': 'bg-blue-50 text-blue-700 border-blue-100',
        'Shipped': 'bg-purple-50 text-purple-700 border-purple-100',
        'Delivered': 'bg-emerald-50 text-emerald-700 border-emerald-100',
        'Cancelled': 'bg-red-50 text-red-700 border-red-100',
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-medium text-dark tracking-tight">Dashboard Overview</h1>
                    <p className="text-gray-400 font-medium">Welcome back! Monitoring your printer sales and inventory.</p>
                </div>
                <div className="flex items-center gap-3 px-5 py-2.5 bg-white border border-gray-100 rounded-2xl text-gray-400 text-xs font-medium shadow-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading ? (
                    Array(3).fill(0).map((_, i) => (
                      <div key={i} className="bg-gray-50 h-40 rounded-[32px] animate-pulse"></div>
                    ))
                ) : error ? (
                    <div className="col-span-full bg-red-50 p-10 rounded-[32px] text-center text-red-500 font-medium">{error}</div>
                ) : statsDisplay.map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 group">
                        <div className="flex justify-between items-start mb-6">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} transition-transform duration-500 group-hover:scale-110`}>
                                {stat.icon}
                            </div>
                            <span className={`flex items-center text-[10px] font-bold px-3 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                {stat.change} 
                                <svg className="ml-1" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="7 7 17 7 17 17"/><line x1="7" y1="17" x2="17" y2="7"/></svg>
                            </span>
                        </div>
                        <h3 className="text-4xl font-medium text-dark mb-1 tracking-tight">{stat.value}</h3>
                        <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Recent Orders & Detail Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-[40px] border border-gray-50 shadow-sm overflow-hidden">
                    <div className="p-10 flex justify-between items-center bg-gray-50/30">
                        <h2 className="font-medium text-xl text-dark tracking-tight">Recent Orders</h2>
                        <button onClick={() => setPage('admin-orders')} className="text-xs text-[#ff2d46] font-medium uppercase tracking-widest hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto px-6 pb-6">
                        <table className="w-full text-left text-sm">
                            <thead className="text-gray-400 font-medium">
                                <tr>
                                    <th className="px-6 py-4 text-[11px] uppercase tracking-widest">Order ID</th>
                                    <th className="px-6 py-4 text-[11px] uppercase tracking-widest">Customer</th>
                                    <th className="px-6 py-4 text-[11px] uppercase tracking-widest">Amount</th>
                                    <th className="px-6 py-4 text-[11px] uppercase tracking-widest">Status</th>
                                    <th className="px-6 py-4 text-[11px] uppercase tracking-widest text-right">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {loading ? (
                                    <tr><td colSpan="5" className="py-20 text-center text-gray-300 font-medium">Loading orders...</td></tr>
                                ) : analytics?.recentOrders?.length > 0 ? (
                                    analytics.recentOrders.map((order) => (
                                        <tr key={order._id} className="hover:bg-gray-50/50 transition-all cursor-pointer" onClick={() => setPage('admin-orders')}>
                                            <td className="px-6 py-6 font-medium text-dark">#{order._id.substring(order._id.length - 6).toUpperCase()}</td>
                                            <td className="px-6 py-6">
                                                <div className="font-medium text-dark truncate max-w-[120px]">{order.user?.firstName || 'Guest'}</div>
                                                <div className="text-[11px] text-gray-400 font-medium">{order.user?.email || 'N/A'}</div>
                                            </td>
                                            <td className="px-6 py-6 font-medium text-dark">${order.totalPrice.toFixed(2)}</td>
                                            <td className="px-6 py-6">
                                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-medium border flex items-center gap-2 w-fit ${statusStyles[order.status] || 'bg-gray-50 text-gray-700 border-gray-100'}`}>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-6 text-right text-gray-400 font-medium text-xs">{new Date(order.createdAt).toLocaleDateString()}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr><td colSpan="5" className="py-20 text-center text-gray-300 font-medium">No recent orders yet.</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-dark text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                        <h3 className="font-medium text-lg mb-8 relative z-10 tracking-tight">Quick Actions</h3>
                        <div className="space-y-4 relative z-10">
                            <button onClick={() => setPage('admin-products')} className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
                                <span className="text-sm font-medium">Add New Product</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                            </button>
                            <button onClick={() => setPage('admin-orders')} className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
                                <span className="text-sm font-medium">Review Pending Orders</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button onClick={() => setPage('admin-chat')} className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
                                <span className="text-sm font-medium">Customer Inquiries</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
