import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationAR from './locales/ar/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  ar: { translation: translationAR },
  en: { translation: translationEN }
};

// التعديل الأهم: قراءة اللغة من الرابط مباشرة لضمان نجاح react-snap
const isEnglishUrl = typeof window !== 'undefined' && window.location.pathname.startsWith('/en');
const initialLang = isEnglishUrl ? 'en' : 'ar';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang, // استخدام اللغة بناءً على الرابط
    fallbackLng: 'ar',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

// ضبط اتجاه الصفحة (RTL/LTR) فوراً مع التحميل
document.documentElement.setAttribute('dir', initialLang === 'ar' ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', initialLang);

export default i18n;