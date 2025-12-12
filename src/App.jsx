import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  // ⚠️ هام: لازم basename هنا يكون نفس اللي كتبته في vite.config.js
  // لو اسم الريبو '/off-fire-online/' يبقى هنا '/off-fire-online'
  // أو سيبها import.meta.env.BASE_URL وهي هتاخد القيمة من ملف vite.config.js أوتوماتيك
  
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen bg-dark text-text-main font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* توجيه أي رابط غلط للرئيسية */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <FloatingActions />
        <Footer />
      </div>
    </Router>
  );
}

export default App;