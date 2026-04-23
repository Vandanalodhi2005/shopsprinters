import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    
    // Auth Check
    useEffect(() => {
        if (!isAuthenticated || !user?.isAdmin) {
            navigate('/admin-login');
        }
    }, [isAuthenticated, user, navigate]);

    const [currentTime, setCurrentTime] = useState(new Date());
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    if (!user || !user.isAdmin) return null;

    return (
        <div className="flex h-screen bg-white overflow-hidden font-outfit">
            <AdminSidebar 
               isOpen={isSidebarOpen} 
               setIsOpen={setIsSidebarOpen} 
               logout={logout}
            />

            <div className="flex-1 flex flex-col min-w-0 bg-gray-50/30">
                {/* Top Header */}
                <header className="h-24 bg-white border-b border-gray-50 flex items-center justify-between px-10 z-20 relative">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden p-3 text-gray-400 hover:bg-gray-50 rounded-2xl transition-all"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                        </button>

                        <div className="hidden md:flex items-center gap-3 text-gray-400 px-5 py-2.5 rounded-2xl bg-gray-50 border border-gray-100">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            <span className="text-xs font-medium tracking-tight">
                                {currentTime.toLocaleDateString()} • {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-3 pl-3 pr-2 py-2 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                            >
                                <div className="w-10 h-10 bg-dark rounded-xl flex items-center justify-center text-white font-medium text-sm shadow-lg shadow-black/10">
                                    {(user.firstName?.charAt(0) || 'A')}
                                </div>
                                <div className="hidden sm:block text-left">
                                    <p className="text-[13px] font-medium text-dark leading-none mb-1">{user.firstName || 'Admin'}</p>
                                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">Administrator</p>
                                </div>
                                <svg className={`text-gray-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                            </button>

                            {isProfileOpen && (
                              <div className="absolute right-0 mt-4 w-64 bg-white rounded-3xl shadow-2xl border border-gray-50 py-4 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 z-[1300]">
                                <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/50 mb-2">
                                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest leading-none mb-1">Signed in as</p>
                                    <p className="text-[13px] font-medium text-dark truncate">{user.email}</p>
                                </div>
                                <Link to="/profile" className="w-full text-left px-6 py-3.5 text-[14px] font-medium text-dark hover:bg-gray-50 flex items-center gap-3 transition-all block">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                    My Profile
                                </Link>
                                <div className="h-px bg-gray-50 my-2 mx-6"></div>
                                <button onClick={() => { logout(); navigate('/'); }} className="w-full text-left px-6 py-3.5 text-[14px] font-medium text-red-500 hover:bg-red-50 flex items-center gap-3 transition-all">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                                    Sign Out
                                </button>
                              </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-8 lg:p-12">
                   <div className="max-w-7xl mx-auto text-left">
                      <Outlet />
                   </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
