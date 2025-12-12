import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// استدعاء المكونات الثابتة
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop'; // 1. استيراد الملف الجديد

// استدعاء الصفحات
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 2. تشغيله هنا عشان يشتغل مع الراوتر */}
      
      <div className="flex flex-col min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
        
        {/* الهيدر ثابت في كل الصفحات */}
        <Navbar />

        {/* المحتوى المتغير حسب الرابط */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* الأزرار العائمة والفوتر ثابتين */}
        <FloatingActions />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;