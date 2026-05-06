import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TERMS_CONTENT } from '../data/content';
import { useTranslation } from 'react-i18next';

const TermsPage = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <div className="animate-fadeIn pt-24 pb-16 bg-darker" dir={isEn ? 'ltr' : 'rtl'}>
<Helmet>
    <title>{isEn ? 'Terms & Conditions | OFF FIRE ONLINE' : 'الشروط والأحكام | OFF FIRE ONLINE'}</title>
    
    {/* منع الأرشفة مع السماح لجوجل بتتبع الروابط الداخلية */}
    <meta name="robots" content="noindex, follow" />

    {/* الروابط الأساسية لضبط المسار داخل الموقع */}
    <link rel="canonical" href={isEn ? "https://www.offfireonline.com/en/terms" : "https://www.offfireonline.com/terms"} />
    
    {/* ربط اللغات لضمان سلاسة التنقل لمحركات البحث حتى مع عدم الأرشفة */}
    <link rel="alternate" hreflang="ar" href="https://www.offfireonline.com/terms" />
    <link rel="alternate" hreflang="en" href="https://www.offfireonline.com/en/terms" />
</Helmet>

      <div className="container mx-auto px-6 max-w-3xl bg-dark p-8 md:p-12 rounded-2xl border border-white/5 shadow-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-6 border-b border-white/10 pb-4 text-start">
          {TERMS_CONTENT.title}
        </h1>
        
        <p className="text-text-sub text-[15px] leading-relaxed mb-8 text-start">
          {TERMS_CONTENT.intro}
        </p>

        <div className="space-y-8">
          {TERMS_CONTENT.sections.map((section, index) => (
            <div key={index} className="text-start">
              <h2 className="text-lg font-bold text-white mb-3 text-start">
                {section.title}
              </h2>
              {section.intro && (
                <p className="text-text-sub text-[15px] leading-relaxed mb-3 text-start">
                  {section.intro}
                </p>
              )}
              {section.items && (
                <ul className="list-disc list-inside space-y-2 text-text-sub text-[15px] leading-relaxed ps-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-start">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <p className="text-[10px] text-[#333333] mt-24 text-center select-none">
          {TERMS_CONTENT.cr}
        </p>
      </div>
    </div>
  );
};

export default TermsPage;