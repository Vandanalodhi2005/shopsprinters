import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';

const AdminLogin = ({ setPage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [localError, setLocalError] = useState('');
    const { login, user, loading } = useAuth();

    useEffect(() => {
        if (user && user.isAdmin) {
            setPage('admin-dashboard');
        } else if (user) {
            setLocalError('Access denied. Administrator privileges required.');
        }
    }, [user, setPage]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLocalError('');
        try {
            const data = await login(email, password);
            if (!data.isAdmin) {
                setLocalError('Access denied. Administrator privileges required.');
            }
        } catch (err) {
            setLocalError(err.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen bg-dark flex items-center justify-center p-6 font-outfit">
            <div className="w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
                <div className="bg-[#ff2d46] p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16"></div>
                    <div className="w-20 h-20 bg-white/10 rounded-[30px] flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h2 className="text-3xl font-medium text-white tracking-tight">Admin Gateway</h2>
                    <p className="text-white/70 mt-2 text-sm font-medium">Secure access to the printer management hub.</p>
                </div>

                <div className="p-12">
                    {localError && (
                        <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-500 text-xs font-medium rounded-2xl flex items-center gap-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                            {localError}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-8">
                        <div>
                            <label className="text-[10px] font-medium text-gray-400 uppercase tracking-widest block mb-3 ml-1">Email Intelligence</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl focus:bg-white focus:border-dark outline-none transition-all font-medium"
                                placeholder="admin@shopesprinters.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-[10px] font-medium text-gray-400 uppercase tracking-widest block mb-3 ml-1">Access Key</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl focus:bg-white focus:border-dark outline-none transition-all font-medium"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-5 bg-dark hover:bg-[#ff2d46] text-white font-medium rounded-2xl transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 uppercase text-xs tracking-widest"
                        >
                            {loading ? (
                                <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                            ) : 'Authorize Access'}
                        </button>
                    </form>

                    <div className="mt-10 flex justify-between items-center text-[11px] text-gray-400 font-medium">
                        <button onClick={() => setPage('home')} className="hover:text-dark transition-colors">Back to Terminal</button>
                        <span>Encrypted SSL Connection</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
