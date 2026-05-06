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
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ProviderRegistration from './pages/ProviderRegistration'; // تأكد من المسار


function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen bg-dark text-text-main font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* المسارات العربية */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/register-provider" element={<ProviderRegistration />} />

            {/* المسارات الإنجليزية (تحت مسار /en) */}
            <Route path="/en" element={<HomePage />} />
            <Route path="/en/about" element={<AboutPage />} />
            <Route path="/en/services" element={<ServicesPage />} />
            <Route path="/en/blog" element={<BlogPage />} />
            <Route path="/en/contact" element={<ContactPage />} />
            <Route path="/en/terms" element={<TermsPage />} />
            <Route path="/en/privacy" element={<PrivacyPage />} />
            <Route path="/en/register-provider" element={<ProviderRegistration />} />

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