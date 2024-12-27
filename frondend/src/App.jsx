import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingBadge from './components/FloatingBadge';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import CookieConsent from './components/CookieConsent';
import BlogContent from './components/BlogContent';
import BlogPost from './pages/BlogPost';
import BlogDetails from './pages/BlogDetails';
import BlogSection from './components/BlogSection';
import FAQs from './pages/FAQs';
import  ShippingInfo from './pages/ShippingInfo';
import  ReturnRefundPolicy from './pages/ReturnRefundPolicy';
import  PrivacyPolicy from './pages/PrivacyPolicy';


// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const About = lazy(() => import('./pages/About'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const PlaceOrder = lazy(() => import('./pages/PlaceOrder'));
const Orders = lazy(() => import('./pages/Orders'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Checkout = lazy(() => import('./pages/Checkout'));

const App = () => {
  return (
    <div className='px-0 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <CookieConsent />
      <Navbar />
      <FloatingBadge />
      <ScrollToTop />
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/order' element={<Orders />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path="/blog/:postId" element={<BlogContent />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/blog/:id" element={<BlogDetails/>} />
          <Route path="/bl" element={<BlogSection/>} />
          <Route path="/faq" element={<FAQs/>} />
          <Route path="/shipping" element={<ShippingInfo/>} />
          <Route path="/returns" element={<ReturnRefundPolicy/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
