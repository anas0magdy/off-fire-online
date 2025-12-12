import React from 'react';
// استخدام HashRouter هو الحل الأضمن لاستضافة GitHub Pages
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// استدعاء المكونات الثابتة
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';

// استدعاء الصفحات
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
        
        {/* الهيدر ثابت */}
        <Navbar />

        {/* المحتوى المتغير */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* 🔥🔥 الحل السحري هنا: أي رابط غلط أو الصفحة فاضية، حولني فوراً للرئيسية 🔥🔥 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* الفوتر والأزرار */}
        <FloatingActions />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
