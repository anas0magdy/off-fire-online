import React from 'react';

const TextWithBrand = ({ text, className = "" }) => {
  if (!text) return null;

  const parts = text.split('OFF FIRE ONLINE');

  return (
    <span className={className}>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            /* التعديل:
               1. dir="ltr": عشان الكلمة الإنجليزي تظهر صح وسط العربي
               2. whitespace-nowrap: عشان الكلمة متتقسمش على سطرين
               3. font-black: سمك تقيل عشان تبرز بس
               4. الألوان: أبيض للجزء الأول وبرتقالي للثاني
            */
            <span className="inline-block mx-1 font-black whitespace-nowrap" dir="ltr">
              <span className="text-white">OFF FIRE</span>{' '}
              <span className="text-cta">ONLINE</span>
            </span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
};

export default TextWithBrand;