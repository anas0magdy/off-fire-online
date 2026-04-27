import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TERMS_CONTENT } from '../data/content';

const TermsPage = () => {
  return (
    <div className="animate-fadeIn pt-24 pb-16 bg-darker">
      <Helmet>
        <title>الشروط والأحكام | OFF FIRE ONLINE</title>
        <meta name="robots" content="noindex, follow" /> {/* لعدم أرشفة الصفحات القانونية بشكل مزعج */}
      </Helmet>

      {/* الحاوية المحددة بـ 800px تقريباً (max-w-3xl) لتسهيل القراءة */}
      <div className="container mx-auto px-6 max-w-3xl bg-dark p-8 md:p-12 rounded-2xl border border-white/5 shadow-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-6 border-b border-white/10 pb-4">
          {TERMS_CONTENT.title}
        </h1>
        
        <p className="text-text-sub text-[15px] leading-relaxed mb-8">
          {TERMS_CONTENT.intro}
        </p>

        <div className="space-y-8">
          {TERMS_CONTENT.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-bold text-white mb-3">
                {section.title}
              </h2>
              {section.intro && (
                <p className="text-text-sub text-[15px] leading-relaxed mb-3">
                  {section.intro}
                </p>
              )}
              {section.items && (
                <ul className="list-disc list-inside space-y-2 text-text-sub text-[15px] leading-relaxed pr-4">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* الخدعة القانونية: السجل التجاري بحجم صغير جداً ولون خافت */}
        <p className="text-[10px] text-[#333333] mt-24 text-center select-none">
          {TERMS_CONTENT.cr}
        </p>
      </div>
    </div>
  );
};

export default TermsPage;