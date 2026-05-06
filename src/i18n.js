import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationAR from './locales/ar/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  ar: { translation: translationAR },
  en: { translation: translationEN }
};

// بنسأل المتصفح: هل في لغة محفوظة؟ لو مفيش، افتح عربي
const savedLang = localStorage.getItem('appLanguage') || 'ar';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang, // نستخدم اللغة المحفوظة أو العربي
    fallbackLng: 'ar',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

// ضبط اتجاه الصفحة (RTL/LTR) فوراً مع التحميل
document.documentElement.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', savedLang);

export default i18n;