import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';

const AdminCategories = () => {
    const { user } = useAuth();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [name, setName] = useState('');

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/categories`);
            const data = await response.json();
            setCategories(data);
        } catch (err) {
            setError('Failed to load categories');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editingId ? 'PUT' : 'POST';
        const endpoint = editingId ? `/categories/${editingId}` : '/categories';

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
                method,
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ name })
            });
            if (!response.ok) throw new Error('Action failed');
            setIsFormOpen(false);
            setEditingId(null);
            setName('');
            fetchCategories();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this category?')) return;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${user.token}` }
            });
            if (!response.ok) throw new Error('Delete failed');
            fetchCategories();
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-medium text-dark tracking-tight">Category Manager</h1>
                    <p className="text-gray-400 font-medium">Organize your printer inventory with semantic categories.</p>
                </div>
                {!isFormOpen && (
                    <button
                        onClick={() => { setName(''); setEditingId(null); setIsFormOpen(true); }}
                        className="bg-dark text-white px-8 py-4 rounded-2xl font-medium text-sm tracking-widest uppercase hover:bg-[#ff2d46] transition-all shadow-xl shadow-black/10 flex items-center gap-3"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        Create Category
                    </button>
                )}
            </div>

            {error && <div className="p-5 bg-red-50 text-red-500 rounded-[24px] font-medium text-sm">{error}</div>}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {isFormOpen && (
                    <div className="lg:col-span-1 bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm h-fit animate-in slide-in-from-left-6">
                        <h2 className="text-xl font-medium text-dark mb-8 tracking-tight">{editingId ? 'Edit Category' : 'New Category'}</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                           <div>
                              <label className="text-[10px] font-medium text-gray-400 uppercase tracking-widest block mb-2 ml-1">Category Name</label>
                              <input 
                                 value={name} 
                                 onChange={(e) => setName(e.target.value)} 
                                 className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl focus:bg-white focus:border-dark outline-none transition-all font-medium"
                                 placeholder="e.g. Laser Printers"
                                 required 
                              />
                           </div>
                           <div className="flex gap-3 pt-4">
                              <button type="submit" className="flex-1 bg-dark text-white py-4 rounded-2xl font-medium text-sm tracking-widest uppercase hover:bg-[#ff2d46] transition-all">Save</button>
                              <button type="button" onClick={() => setIsFormOpen(false)} className="flex-1 bg-gray-100 text-gray-500 py-4 rounded-2xl font-medium text-sm transition-all hover:bg-gray-200">Cancel</button>
                           </div>
                        </form>
                    </div>
                )}

                <div className={`${isFormOpen ? 'lg:col-span-2' : 'lg:col-span-3'} bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden`}>
                    <div className="p-8 border-b border-gray-50 bg-gray-50/30">
                        <h2 className="font-medium text-lg text-dark tracking-tight">Active Categories</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="text-gray-400 border-b border-gray-50">
                                <tr>
                                    <th className="px-10 py-6 text-[11px] uppercase tracking-widest">Category Name</th>
                                    <th className="px-10 py-6 text-[11px] uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {loading ? (
                                    <tr><td colSpan="2" className="py-20 text-center text-gray-300 font-medium">Loading categories...</td></tr>
                                ) : categories.map(cat => (
                                    <tr key={cat._id} className="group hover:bg-gray-50/50 transition-all">
                                        <td className="px-10 py-8 font-medium text-dark">{cat.name}</td>
                                        <td className="px-10 py-8 text-right">
                                            <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all">
                                                <button 
                                                   onClick={() => { setEditingId(cat._id); setName(cat.name); setIsFormOpen(true); }} 
                                                   className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-dark hover:bg-dark hover:text-white transition-all"
                                                >
                                                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                                                </button>
                                                <button onClick={() => handleDelete(cat._id)} className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all">
                                                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCategories;
