import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // أهم سطر عشان التنسيق يشتغل
import { HelmetProvider } from 'react-helmet-async'; // أضفنا هذا السطر
import './i18n'; // تأكد إن المسار مظبوط حسب مكان الملف


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)