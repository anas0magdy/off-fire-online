import React from 'react';
import Button from '../components/Button';

const ContactPage = () => {
  return (
    <div className="animate-fadeIn pt-24 min-h-screen bg-gradient-to-b from-dark to-darker">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto bg-card p-8 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">توقف عن البحث… وابدأ الآن</h2>
            <p className="text-gray-400 text-lg">Off Fire Online تمنحك القدرة على اتخاذ قرار سريع وواضح وآمن.</p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">اسم المنشأة</label>
                <input type="text" className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">الاسم المسؤول</label>
                <input type="text" className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">رقم الجوال</label>
                <input type="tel" className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">البريد الإلكتروني</label>
                <input type="email" className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-gray-400 text-sm">تفاصيل الطلب</label>
              <textarea rows="4" className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors"></textarea>
            </div>
            <Button primary className="w-full text-lg py-4 mt-4">إرسال الطلب مجاناً</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;