import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

import PrinterSetupGuide from './pages/setup/PrinterSetupGuide';
import MultiSelect from './components/setup/MultiSelect';
import DynamicModelSearch from './components/setup/DynamicModelSearch';
import CompleteSetup from './components/setup/CompleteSetup';
import InstallationFailedPage from './components/setup/InstallationFailedPage';
import { Navigate } from 'react-router-dom';

const TrailingSlashRedirect = () => {
  const location = useLocation();
  if (location.pathname !== '/' && !location.pathname.endsWith('/')) {
    return (
      <Navigate
        to={{
          pathname: `${location.pathname}/`,
          search: location.search,
          hash: location.hash,
        }}
        replace
      />
    );
  }
  return null;
};

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');
  const isSetupPage = location.pathname.startsWith('/easy-setup-guide')
    || location.pathname.startsWith('/select-your-brand')
    || location.pathname.startsWith('/model-search')
    || location.pathname.startsWith('/complete-setup')
    || location.pathname.startsWith('/installation-failed');

  return (
    <div className="flex flex-col min-h-screen">
      <TrailingSlashRedirect />
      {!isAdminPage && !isSetupPage && <Header />}
      <div className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/" element={<Shop />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/faqs/" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/terms-conditions/" element={<TermsConditions />} />
          <Route path="/refund-return-policy" element={<RefundReturnPolicy />} />
          <Route path="/refund-return-policy/" element={<RefundReturnPolicy />} />
          <Route path="/shipping-delivery-policy" element={<ShippingPolicy />} />
          <Route path="/shipping-delivery-policy/" element={<ShippingPolicy />} />
          <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
          <Route path="/accessibility-statement/" element={<AccessibilityStatement />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/cookie-policy/" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/disclaimer/" element={<Disclaimer />} />
          <Route path="/do-not-sell" element={<DoNotSell />} />
          <Route path="/do-not-sell/" element={<DoNotSell />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgot-password/" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/track-order/" element={<TrackOrder />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/:id/" element={<ProductDetails />} />
          <Route path="/order-details/:orderId" element={<OrderDetails />} />
          <Route path="/order-details/:orderId/" element={<OrderDetails />} />
          <Route path="/easy-setup-guide" element={<PrinterSetupGuide />} />
          <Route path="/easy-setup-guide/" element={<PrinterSetupGuide />} />
          <Route path="/select-your-brand" element={<MultiSelect />} />
          <Route path="/select-your-brand/" element={<MultiSelect />} />
          <Route path="/model-search/:brand/" element={<DynamicModelSearch />} />
          <Route path="/model-search/:brand" element={<DynamicModelSearch />} />
          <Route path="/complete-setup/:brand" element={<CompleteSetup />} />
          <Route path="/complete-setup/:brand/" element={<CompleteSetup />} />
          <Route path="/installation-failed/:brand" element={<InstallationFailedPage />} />
          <Route path="/installation-failed/:brand/" element={<InstallationFailedPage />} />
          


          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-login/" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/login/" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="customers" element={<AdminCustomers />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="chat" element={<AdminChat />} />
          </Route>
        </Routes>
      </div>
      {!isAdminPage && !isSetupPage && <Footer />}
    </div>
  );
}

export default App;
