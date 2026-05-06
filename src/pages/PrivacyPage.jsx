import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PRIVACY_CONTENT } from '../data/content';
import { useTranslation } from 'react-i18next';

const PrivacyPage = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <div className="animate-fadeIn pt-24 pb-16 bg-darker" dir={isEn ? 'ltr' : 'rtl'}>
      <Helmet>
        <title>{isEn ? 'Privacy Policy | OFF FIRE ONLINE' : 'سياسة الخصوصية | OFF FIRE ONLINE'}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="container mx-auto px-6 max-w-3xl bg-dark p-8 md:p-12 rounded-2xl border border-white/5 shadow-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-6 border-b border-white/10 pb-4 text-start">
          {PRIVACY_CONTENT.title}
        </h1>
        
        <p className="text-text-sub text-[15px] leading-relaxed mb-8 text-start">
          {PRIVACY_CONTENT.intro}
        </p>

        <div className="space-y-8">
          {PRIVACY_CONTENT.sections.map((section, index) => (
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
      </div>
    </div>
  );
};

export default PrivacyPage;