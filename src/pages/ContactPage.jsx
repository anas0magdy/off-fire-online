import React, { useState } from 'react';
import Button from '../components/Button';
import { supabase } from '../supabaseClient'; 
import { Helmet } from 'react-helmet-async'; 
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const [formData, setFormData] = useState({
    facility_name: '',
    contact_name: '',
    phone: '',
    email: '',
    service_type: '', 
    details: '',
    bot_field: '' 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && value !== '' && !/^[0-9]+$/.test(value)) {
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (formData.bot_field !== '') {
      console.warn('Bot detected! Submission rejected.');
      return;
    }

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
            service_type: formData.service_type, 
            details: formData.details
          }
        ]);

      if (error) throw error;

      setFormData({
        facility_name: '',
        contact_name: '',
        phone: '',
        email: '',
        service_type: '',
        details: '',
        bot_field: ''
      });

      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      alert(isEn ? 'An error occurred while sending. Please try again.' : 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fadeIn pt-24 min-h-screen bg-gradient-to-b from-dark to-darker relative" dir={isEn ? 'ltr' : 'rtl'}>
      <Helmet>
        <title>{isEn ? 'Contact Us | Off Fire Online' : 'اتصل بنا | Off Fire Online'}</title>
        <meta name="description" content={isEn ? 'Contact Off Fire Online to request the latest firefighting and safety systems for your facility. Fast, clear, and safe solutions.' : 'تواصل مع Off Fire Online لطلب أحدث أنظمة مكافحة الحريق والسلامة لمنشأتك. حلول سريعة، واضحة، وآمنة.'} />
        <meta name="keywords" content={isEn ? 'firefighting, safety systems, fire extinguishers, fire alarm, Off Fire Online' : 'مكافحة حريق, أنظمة سلامة, طفايات حريق, إنذار حريق, Off Fire Online'} />
      </Helmet>
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto bg-card p-8 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 ltr:right-0 rtl:left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl ltr:-mr-32 rtl:-ml-32 -mt-32"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isEn ? 'Stop searching... start now' : 'توقف عن البحث… وابدأ الآن'}
            </h2>
            <p className="text-gray-400 text-lg">
              {isEn ? 'Off Fire Online gives you the ability to make a quick, clear, and safe decision.' : 'Off Fire Online تمنحك القدرة على اتخاذ قرار سريع وواضح وآمن.'}
            </p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div style={{ display: 'none' }} aria-hidden="true">
              <input 
                type="text" 
                name="bot_field" 
                value={formData.bot_field} 
                onChange={handleChange} 
                tabIndex="-1" 
                autoComplete="off"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 flex flex-col items-start">
                <label className="text-gray-400 text-sm ltr:text-left rtl:text-right w-full">
                  {isEn ? 'Facility Name' : 'اسم المنشأة'}
                </label>
                <input 
                  type="text" 
                  name="facility_name"
                  value={formData.facility_name}
                  onChange={handleChange}
                  required
                  placeholder={isEn ? 'e.g., Horizon Trading Est.' : 'مثال: مؤسسة الأفق التجارية'}
                  className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors placeholder:text-gray-600 ltr:text-left rtl:text-right" 
                />
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <label className="text-gray-400 text-sm ltr:text-left rtl:text-right w-full">
                  {isEn ? 'Responsible Person Name' : 'الاسم المسؤول'}
                </label>
                <input 
                  type="text" 
                  name="contact_name"
                  value={formData.contact_name}
                  onChange={handleChange}
                  required
                  placeholder={isEn ? 'Full Name' : 'الاسم الكامل'}
                  className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors placeholder:text-gray-600 ltr:text-left rtl:text-right" 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 flex flex-col items-start">
                <label className="text-gray-400 text-sm ltr:text-left rtl:text-right w-full">
                  {isEn ? 'Phone Number' : 'رقم الجوال'}
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  dir="ltr"
                  placeholder="05XXXXXXXX"
                  className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors placeholder:text-gray-600 ltr:text-left rtl:text-right" 
                />
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <label className="text-gray-400 text-sm ltr:text-left rtl:text-right w-full">
                  {isEn ? 'Email Address' : 'البريد الإلكتروني'}
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  dir="ltr"
                  placeholder="example@domain.com"
                  className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors placeholder:text-gray-600 ltr:text-left rtl:text-right" 
                />
              </div>
            </div>

            <div className="space-y-2 flex flex-col items-start">
              <label className="text-gray-400 text-sm ltr:text-left rtl:text-right w-full">
                {isEn ? 'Required Service Type' : 'نوع الخدمة المطلوبة'}
              </label>
              <select 
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
                required
                className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors [&>option]:bg-darker [&>option]:text-white cursor-pointer ltr:text-left rtl:text-right"
              >
                <option value="" disabled>{isEn ? 'Select service type...' : 'اختر نوع الخدمة...'}</option>
                <option value="تصاريح وشهادات وتقارير فنية">{isEn ? 'Permits, Certificates & Tech Reports' : 'تصاريح وشهادات وتقارير فنية'}</option>
                <option value="أنظمة مكافحة الحريق والإنذار المبكر">{isEn ? 'Firefighting & Early Warning Systems' : 'أنظمة مكافحة الحريق والإنذار المبكر'}</option>
                <option value="معدات ومستلزمات الأمن والسلامة">{isEn ? 'Security & Safety Equipment' : 'معدات ومستلزمات الأمن والسلامة'}</option>
                <option value="استشارات وخدمات هندسية">{isEn ? 'Engineering Consultations & Services' : 'استشارات وخدمات هندسية'}</option>
                <option value="أنظمة المراقبة والتحكم الأمني">{isEn ? 'Surveillance & Security Control Systems' : 'أنظمة المراقبة والتحكم الأمني'}</option>
                <option value="طلب خدمة هندسية مخصصة">{isEn ? 'Request Custom Engineering Service' : 'طلب خدمة هندسية مخصصة'}</option>
                <option value="أخرى">{isEn ? 'Other (Please specify in details)' : 'أخرى (يرجى التوضيح في التفاصيل)'}</option>
              </select>
            </div>

            <div className="space-y-2 flex flex-col items-start">
              <label className="text-gray-400 text-sm ltr:text-left rtl:text-right w-full">
                {isEn ? 'Request Details' : 'تفاصيل الطلب'}
              </label>
              <textarea 
                rows="4" 
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                placeholder={isEn ? 'Please write your project or request details here...' : 'يرجى كتابة تفاصيل مشروعك أو طلبك هنا...'}
                className="bg-dark/50 border border-white/10 text-white p-4 rounded-xl focus:border-primary focus:outline-none w-full transition-colors placeholder:text-gray-600 resize-y ltr:text-left rtl:text-right"
              ></textarea>
            </div>
            
            <div className="text-center text-xs md:text-sm text-gray-400 mt-4 mb-2" dir="auto">
              {isEn ? 'By clicking "Submit Request", you agree to our ' : 'بمجرد النقر على "إرسال الطلب"، فإنك توافق على '}
              <Link to="/terms" target="_blank" className="text-primary hover:underline">{isEn ? 'Terms & Conditions' : 'الشروط والأحكام'}</Link>
              {isEn ? ' and ' : ' و '}
              <Link to="/privacy" target="_blank" className="text-primary hover:underline">{isEn ? 'Privacy Policy' : 'سياسة الخصوصية'}</Link>.
            </div>

            <Button 
              primary 
              className="w-full text-lg py-4 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting 
                ? (isEn ? 'Submitting...' : 'جاري الإرسال...') 
                : (isEn ? 'Submit Request for Free' : 'إرسال الطلب مجاناً')}
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2" dir="auto">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {isEn ? 'One of our consultants will contact you within 24 business hours' : 'سيقوم أحد مستشارينا بالتواصل معك خلال 24 ساعة عمل'}
            </p>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed bottom-10 left-10 right-10 md:ltr:left-auto md:rtl:right-auto md:ltr:right-10 md:rtl:left-10 bg-[#0f172a] border border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.2)] text-white px-6 py-4 rounded-xl z-50 flex items-center gap-3 animate-fadeIn transition-all duration-300">
          <div className="bg-green-500/20 p-2 rounded-full flex-shrink-0">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="ltr:text-left rtl:text-right">
            <h4 className="font-bold text-green-400 ltr:text-left rtl:text-right">
              {isEn ? 'Request Received Successfully!' : 'تم استلام طلبك بنجاح!'}
            </h4>
            <p className="text-sm text-gray-300 ltr:text-left rtl:text-right">
              {isEn ? 'One of our consultants will contact you shortly to complete the service.' : 'سيقوم أحد مستشارينا بالتواصل معك قريباً لإتمام الخدمة.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;