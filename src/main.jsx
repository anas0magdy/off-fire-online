import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client' // استدعاء hydrateRoot و createRoot
import App from './App.jsx'
import './index.css' // أهم سطر عشان التنسيق يشتغل
import { HelmetProvider } from 'react-helmet-async';
import './i18n'; // تأكد إن المسار مظبوط حسب مكان الملف

const container = document.getElementById('root');

const appContent = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// الفحص الذكي: لو الحاوية فيها HTML مطبوخ من react-snap نعمل hydrate
if (container.innerHTML !== "") {
  hydrateRoot(container, appContent);
} 
// لو الحاوية فاضية (في بيئة التطوير العادية) نعمل render
else {
  const root = createRoot(container);
  root.render(appContent);
}