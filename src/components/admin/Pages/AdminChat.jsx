import React from 'react';

const AdminChat = () => (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">
        <h1 className="text-3xl font-medium text-dark tracking-tight">Customer Engagement</h1>
        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm h-[600px] flex items-center justify-center">
             <div className="text-center">
                 <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-[30px] flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                 </div>
                 <p className="text-gray-400 font-medium">Real-time chat with customers is currently being integrated.</p>
             </div>
        </div>
    </div>
);

export default AdminChat;
