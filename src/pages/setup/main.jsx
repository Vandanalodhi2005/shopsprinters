import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import EasySetupGuide from './EasySetupGuide';
import Footer from '../../components/Footer';
import { AuthProvider } from '../../context/AuthContext';
import { CartProvider } from '../../context/CartContext';

const SetupApp = () => {
  const setPage = (id) => {
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <EasySetupGuide setPage={setPage} />
      </div>
      <Footer setPage={setPage} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('setup-root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <SetupApp />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
