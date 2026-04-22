import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = ({ setPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(email, password);
      setPage('home');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-[#f9f9f9] border border-gray-100 px-6 py-4 rounded-2xl text-dark font-medium placeholder:text-gray-300 focus:border-[#ff2d46] focus:bg-white transition-all outline-none mb-6";
  const labelClass = "text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2 block ml-2";

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#fafafa] flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-6">
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl p-10 md:p-14">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-dark mb-4 tracking-tight">Welcome <span className="text-[#ff2d46]">Back</span></h1>
            <p className="text-gray-400 font-medium text-xs uppercase tracking-widest leading-relaxed">Enter your credentials to access your account</p>
          </header>

          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-xs font-semibold flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div>
              <label className={labelClass}>Email Address</label>
              <input 
                type="email" 
                required 
                className={inputClass} 
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className={labelClass}>Password</label>
              <input 
                type="password" 
                required 
                className={inputClass} 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-end mb-8">
              <button 
                type="button" 
                onClick={() => setPage('forgot-password')}
                className="text-[11px] font-semibold text-[#ff2d46] uppercase tracking-wider hover:text-dark transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-dark text-white py-6 rounded-[24px] font-semibold text-[15px] hover:bg-[#ff2d46] transition-all transform hover:-translate-y-1 shadow-xl shadow-black/10 flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Connect Securely
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </>
              )}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-50 text-center">
            <p className="text-[13px] font-medium text-gray-400">
              New to Shops Printers? 
              <button 
                onClick={() => setPage('signup')}
                className="text-[#ff2d46] ml-2 font-semibold uppercase tracking-wider hover:underline"
              >
                Create Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
