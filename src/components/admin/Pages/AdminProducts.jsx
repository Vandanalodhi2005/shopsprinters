import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';

const TECHNOLOGY_OPTIONS = ["Inkjet", "Laser", "Laser (B/W)"];
const USAGE_CATEGORY_OPTIONS = ["Home", "Office", "Mobile", "Photo"];
const ALL_IN_ONE_OPTIONS = ["Multifunction", "Single Function"];
const WIRELESS_OPTIONS = ["Yes", "No"];
const MAIN_FUNCTION_OPTIONS = ["Print", "Scan", "Copy", "Fax", "Print Only"];

const AdminProducts = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState(null);

    const initialFormState = {
        technology: [],
        usageCategory: [],
        allInOneType: [],
        wireless: '',
        mainFunction: [],
        brand: '',
        title: '',
        category: '',
        price: '',
        oldPrice: '',
        countInStock: '',
        description: '',
        shortSpecification: '',
        overview: '',
        technicalSpecification: '',
        images: []
    };

    const [formData, setFormData] = useState(initialFormState);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/products?keyword=${searchTerm}`, {
                headers: { 'Authorization': `Bearer ${user.token}` }
            });
            const data = await response.json();
            setProducts(data.products || []);
        } catch (err) {
            setError('Failed to load products');
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
            const data = await response.json();
            setCategories(data);
        } catch (err) {
            console.error('Failed to load categories');
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, [searchTerm]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            const current = formData[name] || [];
            if (checked) {
                setFormData({ ...formData, [name]: [...current, value] });
            } else {
                setFormData({ ...formData, [name]: current.filter(v => v !== value) });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editingId ? 'PUT' : 'POST';
        const endpoint = editingId ? `/products/${editingId}` : '/products';
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
                method,
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) throw new Error('Action failed');
            setIsFormOpen(false);
            setEditingId(null);
            fetchProducts();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this product?')) return;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${user.token}` }
            });
            if (!response.ok) throw new Error('Delete failed');
            fetchProducts();
        } catch (err) {
            setError(err.message);
        }
    };

    const startEdit = (product) => {
        setEditingId(product._id);
        const catId = typeof product.category === 'object' ? product.category?._id : product.category;
        setFormData({ ...product, category: catId });
        setIsFormOpen(true);
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-medium text-dark tracking-tight">Product Inventory</h1>
                    <p className="text-gray-400 font-medium">Manage and refine your printing equipment catalog.</p>
                </div>
                {!isFormOpen && (
                    <button
                        onClick={() => { setFormData(initialFormState); setEditingId(null); setIsFormOpen(true); }}
                        className="bg-dark text-white px-8 py-4 rounded-2xl font-medium text-sm tracking-widest uppercase hover:bg-[#ff2d46] transition-all shadow-xl shadow-black/10 flex items-center gap-3"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        Add Product
                    </button>
                )}
            </div>

            {error && <div className="p-5 bg-red-50 text-red-500 rounded-[24px] font-medium text-sm">{error}</div>}

            {isFormOpen ? (
                <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden animate-in slide-in-from-bottom-6">
                    <div className="p-10 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                        <h2 className="text-xl font-medium text-dark tracking-tight">{editingId ? 'Edit Product' : 'Register New Product'}</h2>
                        <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-dark">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <label className="text-[10px] font-medium text-gray-400 uppercase tracking-widest block mb-2 ml-1">Product Title</label>
                                <input name="title" value={formData.title} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl focus:bg-white focus:border-dark outline-none transition-all font-medium" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[10px] font-medium text-gray-400 uppercase tracking-widest block mb-2 ml-1">Price</label>
                                    <input type="number" name="price" value={formData.price} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl focus:bg-white focus:border-dark outline-none transition-all font-medium" required />
                                </div>
                                <div>
                                    <label className="text-[10px] font-medium text-gray-400 uppercase tracking-widest block mb-2 ml-1">Stock</label>
                                    <input type="number" name="countInStock" value={formData.countInStock} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl focus:bg-white focus:border-dark outline-none transition-all font-medium" required />
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-medium text-gray-400 uppercase tracking-widest block mb-2 ml-1">Category</label>
                                <select name="category" value={formData.category} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl focus:bg-white focus:border-dark outline-none transition-all font-medium" required>
                                    <option value="">Select Category</option>
                                    {categories.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label className="text-[10px] font-medium text-gray-400 uppercase tracking-widest block mb-2 ml-1">Description</label>
                                <textarea name="description" value={formData.description} onChange={handleInputChange} rows="8" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl focus:bg-white focus:border-dark outline-none transition-all font-medium resize-none" required></textarea>
                            </div>
                        </div>
                        <div className="md:col-span-2 pt-6">
                            <button type="submit" className="w-fit bg-dark text-white px-12 py-4 rounded-2xl font-medium text-sm tracking-widest uppercase hover:bg-[#ff2d46] transition-all shadow-xl shadow-black/5">
                               {editingId ? 'Update Product' : 'Save Product'}
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-8 border-b border-gray-50 bg-gray-50/30">
                        <div className="relative max-w-md">
                            <input 
                                type="text" 
                                placeholder="Search products..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white border border-gray-200 px-12 py-3.5 rounded-2xl font-medium text-sm focus:border-dark outline-none transition-all"
                            />
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="text-gray-400 border-b border-gray-50">
                                <tr>
                                    <th className="px-10 py-6 text-[11px] uppercase tracking-widest">Product</th>
                                    <th className="px-6 py-6 text-[11px] uppercase tracking-widest">Price</th>
                                    <th className="px-6 py-6 text-[11px] uppercase tracking-widest">Stock</th>
                                    <th className="px-10 py-6 text-[11px] uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {loading ? (
                                    <tr><td colSpan="4" className="py-20 text-center text-gray-300 font-medium">Updating list...</td></tr>
                                ) : products.map(product => (
                                    <tr key={product._id} className="group hover:bg-gray-50/50 transition-all">
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-5">
                                                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center p-3">
                                                    <img src={product.images?.[0] || '/printer-without-bg.png'} className="max-h-full object-contain" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-dark leading-snug line-clamp-1">{product.title}</p>
                                                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">{product.brand || 'No Brand'}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-8 font-medium text-dark">${(product.price || 0).toFixed(2)}</td>
                                        <td className="px-6 py-8">
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-medium ${product.countInStock > 5 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                                {product.countInStock} Units
                                            </span>
                                        </td>
                                        <td className="px-10 py-8 text-right">
                                            <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all">
                                                <button onClick={() => startEdit(product)} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-dark hover:bg-dark hover:text-white transition-all">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                                                </button>
                                                <button onClick={() => handleDelete(product._id)} className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all">
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
            )}
        </div>
    );
};

export default AdminProducts;
