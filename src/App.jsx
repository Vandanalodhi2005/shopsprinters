import React, { useState, useEffect } from 'react';
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
import DoNotSell from './pages/DoNotSell';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import TrackOrder from './pages/TrackOrder';
import OrderDetails from './pages/OrderDetails';

import AdminLogin from './components/admin/Auth/AdminLogin';
import AdminLayout from './components/admin/Layout/AdminLayout';
import AdminDashboard from './components/admin/Pages/AdminDashboard';
import AdminProducts from './components/admin/Pages/AdminProducts';
import AdminCategories from './components/admin/Pages/AdminCategories';
import AdminOrders from './components/admin/Pages/AdminOrders';
import AdminCustomers from './components/admin/Pages/AdminCustomers';
import AdminAnalytics from './components/admin/Pages/AdminAnalytics';
import AdminSettings from './components/admin/Pages/AdminSettings';
import AdminChat from './components/admin/Pages/AdminChat';

import EasySetupGuide from './pages/setup/EasySetupGuide';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'home';
  });
  
  const [selectedProductId, setSelectedProductId] = useState(() => {
    return localStorage.getItem('selectedProductId') || null;
  });

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (selectedProductId) {
      localStorage.setItem('selectedProductId', selectedProductId);
    } else {
      localStorage.removeItem('selectedProductId');
    }
  }, [selectedProductId]);

  const handleProductClick = (id) => {
    setSelectedProductId(id);
    setCurrentPage('product-details');
    window.scrollTo(0, 0);
  };

  const setPage = (page) => {
    if (page !== 'product-details') {
      setSelectedProductId(null);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    if (currentPage.startsWith('order-details-')) {
      const orderId = currentPage.replace('order-details-', '');
      return <OrderDetails orderId={orderId} setPage={setPage} />;
    }

    switch (currentPage) {
      case 'about':
        return <About />;
      case 'shop':
        return <Shop setPage={handleProductClick} />;
      case 'faqs':
        return <FAQs setPage={setPage} />;
      case 'contact':
        return <Contact setPage={setPage} />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsConditions />;
      case 'refund-policy':
        return <RefundReturnPolicy />;
      case 'shipping':
        return <ShippingPolicy />;
      case 'accessibility':
        return <AccessibilityStatement />;
      case 'cookie-policy':
        return <CookiePolicy />;
      case 'disclaimer':
        return <Disclaimer />;
      case 'do-not-sell':
        return <DoNotSell />;
      case 'cart':
        return <Cart setPage={setPage} />;
      case 'checkout':
        return <Checkout setPage={setPage} />;
      case 'login':
        return <Login setPage={setPage} />;
      case 'signup':
        return <Signup setPage={setPage} />;
      case 'forgot-password':
        return <ForgotPassword setPage={setPage} />;
      case 'profile':
        return <Profile setPage={setPage} />;
      case 'track-order':
        return <TrackOrder setPage={setPage} />;
      case 'product-details':
        return <ProductDetails productId={selectedProductId} setPage={setPage} />;
      
      // Admin Pages
      case 'admin-login':
        return <AdminLogin setPage={setPage} />;
      case 'admin-dashboard':
        return <AdminLayout setPage={setPage} currentPage={currentPage}><AdminDashboard setPage={setPage} /></AdminLayout>;
      case 'admin-products':
        return <AdminLayout setPage={setPage} currentPage={currentPage}><AdminProducts setPage={setPage} /></AdminLayout>;
      case 'admin-categories':
        return <AdminLayout setPage={setPage} currentPage={currentPage}><AdminCategories setPage={setPage} /></AdminLayout>;
      case 'admin-orders':
        return <AdminLayout setPage={setPage} currentPage={currentPage}><AdminOrders setPage={setPage} /></AdminLayout>;
      case 'admin-customers':
        return <AdminLayout setPage={setPage} currentPage={currentPage}><AdminCustomers setPage={setPage} /></AdminLayout>;
      case 'admin-analytics':
        return <AdminLayout setPage={setPage} currentPage={currentPage}><AdminAnalytics setPage={setPage} /></AdminLayout>;
      case 'admin-settings':
        return <AdminLayout setPage={setPage} currentPage={currentPage}><AdminSettings setPage={setPage} /></AdminLayout>;
      case 'admin-chat':
        return <AdminLayout setPage={setPage} currentPage={currentPage}><AdminChat setPage={setPage} /></AdminLayout>;

      default:
        return <Home setPage={handleProductClick} />;
    }
  };

  const isAdminPage = currentPage.startsWith('admin-');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminPage && <Header setPage={setPage} currentPage={currentPage} />}
      <div className="flex-grow">
        {renderPage()}
      </div>
      {!isAdminPage && <Footer setPage={setPage} />}
    </div>
  );
}

export default App;
