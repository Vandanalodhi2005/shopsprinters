import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';

const AdminCustomers = () => {
    const { user } = useAuth();
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCustomers = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/users?fetchAll=true`, {
                headers: { 'Authorization': `Bearer ${user.token}` }
            });
            const data = await response.json();
            setCustomers(Array.isArray(data) ? data : (data.users || []));
        } catch (err) {
            console.error('Failed to load customers');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20">
            <h1 className="text-3xl font-medium text-dark tracking-tight">Customer Directory</h1>
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="text-gray-400 border-b border-gray-50">
                        <tr>
                            <th className="px-10 py-6 text-[11px] uppercase tracking-widest">Name</th>
                            <th className="px-6 py-6 text-[11px] uppercase tracking-widest">Email</th>
                            <th className="px-6 py-6 text-[11px] uppercase tracking-widest">Role</th>
                            <th className="px-10 py-6 text-[11px] uppercase tracking-widest text-right">Joined</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {loading ? (
                            <tr><td colSpan="4" className="py-20 text-center text-gray-300 font-medium">Loading user database...</td></tr>
                        ) : customers.map(c => (
                            <tr key={c._id} className="hover:bg-gray-50/50 transition-all">
                                <td className="px-10 py-8 font-medium text-dark">{c.firstName} {c.lastName}</td>
                                <td className="px-6 py-8 font-medium text-dark">{c.email}</td>
                                <td className="px-6 py-8">
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-medium border ${c.isAdmin ? 'bg-indigo-50 text-indigo-600 border-indigo-100' : 'bg-gray-50 text-gray-400 border-gray-100'}`}>
                                        {c.isAdmin ? 'Administrator' : 'Customer'}
                                    </span>
                                </td>
                                <td className="px-10 py-8 text-right text-gray-400 font-medium text-xs">{new Date(c.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminCustomers;
