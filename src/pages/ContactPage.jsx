import React, { useState } from 'react';
import Button from '../components/Button';
import { supabase } from '../supabaseClient'; // تأكد من مسار الملف حسب مشروعك
import { Helmet } from 'react-helmet-async'; // استدعاء المكتبة

const ContactPage = () => {
  // 1. إنشاء حالة (State) لحفظ البيانات التي يكتبها المستخدم
  const [formData, setFormData] = useState({
    facility_name: '',
    contact_name: '',
    phone: '',
    email: '',
    details: ''
  });

  // 2. إنشاء حالة لمعرفة هل جاري الإرسال أم لا (لتغيير نص الزر)
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 3. إنشاء حالة للتحكم في ظهور رسالة النجاح المنبثقة
  const [showSuccess, setShowSuccess] = useState(false);

  // 4. دالة للتعامل مع التغيير في الحقول
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 5. دالة الإرسال لقاعدة البيانات
  const handleSubmit = async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_requests')
        .insert([
          {
            facility_name: formData.facility_name,
            contact_name: formData.contact_name,
            phone: formData.phone,
            email: formData.email,
            details: formData.details
          }
        ]);

      if (error) throw error;

      // تفريغ الحقول بعد الإرسال
      setFormData({
        facility_name: '',
        contact_name: '',
        phone: '',
        email: '',
        details: ''
      });

      // إظهار رسالة النجاح الشيك
      setShowSuccess(true);
      
      // إخفاء الرسالة أوتوماتيك بعد 5 ثواني
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      alert('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fadeIn pt-24 min-h-screen bg-gradient-to-b from-dark to-darker relative">
      <Helmet>
        <title>اتصل بنا | Off Fire Online</title>
        <meta name="description" content="تواصل مع Off Fire Online لطلب أحدث أنظمة مكافحة الحريق والسلامة لمنشأتك. حلول سريعة، واضحة، وآمنة." />
        <meta name="keywords" content="مكافحة حريق, أنظمة سلامة, طفايات حريق, إنذار حريق, Off Fire Online" />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto bg-card p-8 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">توقف عن البحث… وابدأ الآن</h2>
            <p className="text-gray-400 text-lg">Off Fire Online تمنحك القدرة على اتخاذ قرار سريع وواضح وآمن.</p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">اسم المنشأة</label>
                <input 
                  type="text" 
                  name="facility_name"
                  value={formData.facility_name}
                  onChange={handleChange}
                  required
                  className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">الاسم المسؤول</label>
                <input 
                  type="text" 
                  name="contact_name"
                  value={formData.contact_name}
                  onChange={handleChange}
                  required
                  className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors" 
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">رقم الجوال</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-gray-400 text-sm">تفاصيل الطلب</label>
              <textarea 
                rows="4" 
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors"
              ></textarea>
            </div>
            
            <Button 
              primary 
              className="w-full text-lg py-4 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب مجاناً'}
            </Button>
          </form>
        </div>
      </div>

      {/* رسالة النجاح المنبثقة (Toast Notification) */}
      {showSuccess && (
        <div className="fixed bottom-10 right-10 bg-[#0f172a] border border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.2)] text-white px-6 py-4 rounded-xl z-50 flex items-center gap-3 animate-fadeIn transition-all duration-300">
          <div className="bg-green-500/20 p-2 rounded-full">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-green-400 text-right">تم الإرسال بنجاح!</h4>
            <p className="text-sm text-gray-300 text-right">سنتواصل معك في أقرب وقت لإتمام طلبك.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;