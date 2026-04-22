import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';

const AdminOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/orders`, {
                headers: { 'Authorization': `Bearer ${user.token}` }
            });
            const data = await response.json();
            setOrders(data);
        } catch (err) {
            setError('Failed to load orders');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const updateOrderStatus = async (id, status) => {
        try {
            const response = await fetch(`${API_URL}/orders/${id}/status`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ status })
            });
            if (!response.ok) throw new Error('Update failed');
            fetchOrders();
        } catch (err) {
            setError(err.message);
        }
    };

    const statusStyles = {
        'Processing': 'bg-blue-50 text-blue-600 border-blue-100',
        'Shipped': 'bg-purple-50 text-purple-600 border-purple-100',
        'Delivered': 'bg-green-50 text-green-600 border-green-100',
        'Cancelled': 'bg-red-50 text-red-600 border-red-100',
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-medium text-dark tracking-tight">Order Fulfilment</h1>
                    <p className="text-gray-400 font-medium">Track and manage customer orders from warehouse to doorstep.</p>
                </div>
            </div>

            {error && <div className="p-5 bg-red-50 text-red-500 rounded-[24px] font-medium text-sm">{error}</div>}

            <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="text-gray-400 border-b border-gray-50">
                            <tr>
                                <th className="px-10 py-6 text-[11px] uppercase tracking-widest">Order ID</th>
                                <th className="px-6 py-6 text-[11px] uppercase tracking-widest">Customer</th>
                                <th className="px-6 py-6 text-[11px] uppercase tracking-widest">Total</th>
                                <th className="px-6 py-6 text-[11px] uppercase tracking-widest">Status</th>
                                <th className="px-10 py-6 text-[11px] uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {loading ? (
                                <tr><td colSpan="5" className="py-20 text-center text-gray-300 font-medium">Fetching orders...</td></tr>
                            ) : orders.map(order => (
                                <tr key={order._id} className="group hover:bg-gray-50/50 transition-all">
                                    <td className="px-10 py-8">
                                       <p className="font-medium text-dark leading-none mb-1.5">#{order._id.substring(order._id.length - 8).toUpperCase()}</p>
                                       <p className="text-[11px] text-gray-400 font-medium">{new Date(order.createdAt).toLocaleDateString()}</p>
                                    </td>
                                    <td className="px-6 py-8">
                                        <p className="font-medium text-dark leading-none mb-1.5">{order.user?.firstName} {order.user?.lastName}</p>
                                        <p className="text-[11px] text-gray-400 font-medium truncate max-w-[150px]">{order.user?.email}</p>
                                    </td>
                                    <td className="px-6 py-8 font-medium text-dark">${(order.totalPrice || 0).toFixed(2)}</td>
                                    <td className="px-6 py-8">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-medium border flex items-center gap-2 w-fit ${statusStyles[order.status] || 'bg-gray-50 text-gray-400 border-gray-100'}`}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                       <div className="flex items-center justify-end gap-2">
                                          <select 
                                             value={order.status} 
                                             onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                                             className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-xs font-medium focus:border-dark outline-none transition-all"
                                          >
                                             <option value="Processing">Processing</option>
                                             <option value="Shipped">Shipped</option>
                                             <option value="Delivered">Delivered</option>
                                             <option value="Cancelled">Cancelled</option>
                                          </select>
                                       </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminOrders;
