import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Signup = ({ setPage }) => {
  const [step, setStep] = useState(1); // 1: Info, 2: OTP
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { sendRegistrationOTP, verifyRegistrationOTP } = useAuth();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }
    
    setLoading(true);
    setError('');
    try {
      await sendRegistrationOTP({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });
      setStep(2);
      setMessage(`OTP sent to ${formData.email}`);
    } catch (err) {
      setError(err.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await verifyRegistrationOTP(formData.email, otp);
      setMessage('Account verified successfully! Please log in.');
      setTimeout(() => setPage('login'), 2000);
    } catch (err) {
      setError(err.message || 'OTP verification failed');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-[#f9f9f9] border border-gray-100 px-6 py-4 rounded-2xl text-dark font-medium placeholder:text-gray-300 focus:border-[#ff2d46] focus:bg-white transition-all outline-none mb-4";
  const labelClass = "text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2 block ml-2";

  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#fafafa] flex flex-col items-center justify-center">
      <div className="w-full max-w-xl px-6">
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl p-10 md:p-14">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-dark mb-4 tracking-tight">
              {step === 1 ? 'Join the ' : 'Verify Your '}
              <span className="text-[#ff2d46]">{step === 1 ? 'Future' : 'Account'}</span>
            </h1>
            <p className="text-gray-400 font-medium text-xs uppercase tracking-widest leading-relaxed">
              {step === 1 ? 'Create your account for a personalized experience' : 'Enter the 6-digit code sent to your email'}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input name="firstName" required className={inputClass} placeholder="John" onChange={handleInputChange} value={formData.firstName} />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input name="lastName" required className={inputClass} placeholder="Doe" onChange={handleInputChange} value={formData.lastName} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Email Address</label>
                <input name="email" type="email" required className={inputClass} placeholder="john@example.com" onChange={handleInputChange} value={formData.email} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Password</label>
                  <input name="password" type="password" required className={inputClass} placeholder="••••••••" onChange={handleInputChange} value={formData.password} />
                </div>
                <div>
                  <label className={labelClass}>Confirm Password</label>
                  <input name="confirmPassword" type="password" required className={inputClass} placeholder="••••••••" onChange={handleInputChange} value={formData.confirmPassword} />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-dark text-white py-6 rounded-[24px] font-semibold text-[15px] hover:bg-[#ff2d46] transition-all transform hover:-translate-y-1 shadow-xl shadow-black/10 flex items-center justify-center gap-3 mt-4"
              >
                {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'Send Verification Code'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP}>
              <div>
                <label className={labelClass}>Verification Code (OTP)</label>
                <input 
                  type="text" 
                  required 
                  maxLength="6"
                  className={`${inputClass} text-center text-2xl tracking-[10px] font-bold`} 
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-dark text-white py-6 rounded-[24px] font-semibold text-[15px] hover:bg-[#ff2d46] transition-all transform hover:-translate-y-1 shadow-xl shadow-black/10 flex items-center justify-center gap-3 mt-4"
              >
                {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'Verify & Create Account'}
              </button>
              
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="w-full mt-4 text-[11px] font-semibold text-gray-400 uppercase tracking-widest hover:text-dark transition-colors"
              >
                Go Back
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-gray-50 text-center">
            <p className="text-[13px] font-medium text-gray-400">
              Already have an account? 
              <button 
                onClick={() => setPage('login')}
                className="text-[#ff2d46] ml-2 font-semibold uppercase tracking-wider hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
