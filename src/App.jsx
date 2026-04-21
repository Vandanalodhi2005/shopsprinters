import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundReturnPolicy from './pages/RefundReturnPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import AccessibilityStatement from './pages/AccessibilityStatement';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductClick = (id) => {
    setSelectedProductId(id);
    setCurrentPage('product-details');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'disclaimer':
        return <Disclaimer />;
      case 'product-details':
        return <ProductDetails productId={selectedProductId} setPage={setCurrentPage} />;
      default:
        return <Home setPage={handleProductClick} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header setPage={setCurrentPage} currentPage={currentPage} />
      <div className="flex-grow">
        {renderPage()}
      </div>
      <Footer setPage={setCurrentPage} />
    </div>
  );
}

export default App;
