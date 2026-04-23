import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: Email, 2: OTP & New Password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { forgotPasswordRequest, resetPasswordRequest } = useAuth();
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await forgotPasswordRequest(email);
      setStep(2);
      setMessage(`Reset code sent to ${email}`);
    } catch (err) {
      setError(err.message || 'Failed to send reset code');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return setError('Passwords do not match');
    }
    setLoading(true);
    setError('');
    try {
      await resetPasswordRequest(email, otp, newPassword);
      setMessage('Password reset successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.message || 'Password reset failed');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-[#f9f9f9] border border-gray-100 px-6 py-4 rounded-2xl text-dark font-medium placeholder:text-gray-300 focus:border-[#ff2d46] focus:bg-white transition-all outline-none mb-4";
  const labelClass = "text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2 block ml-2";

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#fafafa] flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-6">
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl p-10 md:p-14 text-center">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-dark mb-4 tracking-tight text-center">
              {step === 1 ? 'Forgot ' : 'Reset '}
              <span className="text-[#ff2d46]">{step === 1 ? 'Password' : 'Security'}</span>
            </h1>
            <p className="text-gray-400 font-medium text-xs uppercase tracking-widest leading-relaxed text-center">
              {step === 1 ? 'Enter your email to receive a reset code' : 'Enter the code and your new password'}
            </p>
          </header>

          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-xs font-semibold flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              {error}
            </div>
          )}

          {message && (
            <div className="mb-8 p-4 bg-green-50 border border-green-100 rounded-2xl text-green-600 text-xs font-semibold flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              {message}
            </div>
          )}

          {step === 1 ? (
            <form onSubmit={handleSendOTP}>
              <div className="text-left">
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

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-dark text-white py-6 rounded-[24px] font-semibold text-[15px] hover:bg-[#ff2d46] transition-all transform hover:-translate-y-1 shadow-xl shadow-black/10 flex items-center justify-center gap-3 mt-4"
              >
                {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'Request Reset Code'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword}>
              <div className="text-left">
                <label className={labelClass}>Reset Code (OTP)</label>
                <input 
                  type="text" 
                  required 
                  maxLength="6"
                  className={`${inputClass} text-center text-xl tracking-[5px] font-bold`} 
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <div className="text-left">
                <label className={labelClass}>New Password</label>
                <input 
                  type="password" 
                  required 
                  className={inputClass} 
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div className="text-left">
                <label className={labelClass}>Confirm New Password</label>
                <input 
                  type="password" 
                  required 
                  className={inputClass} 
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-dark text-white py-6 rounded-[24px] font-semibold text-[15px] hover:bg-[#ff2d46] transition-all transform hover:-translate-y-1 shadow-xl shadow-black/10 flex items-center justify-center gap-3 mt-4"
              >
                {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'Reset Password'}
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-gray-50 text-center">
            <Link 
              to="/login"
              className="text-[13px] font-medium text-gray-400 hover:text-dark transition-colors"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
