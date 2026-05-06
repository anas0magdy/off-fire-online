import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Mail, Phone, Briefcase, UploadCloud, CheckCircle, ChevronLeft, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const CATEGORY_DOCS = {
  consultant: {
    label: { ar: 'مكتب استشاري هندسي', en: 'Engineering Consultant Office' },
    doc1: { label: { ar: 'السجل التجاري / ترخيص المكتب', en: 'Commercial Register / Office License' }, required: true },
    doc2: { label: { ar: 'شهادة الهيئة السعودية للمهندسين', en: 'Saudi Council of Engineers Certificate' }, required: true }
  },
  contractor: {
    label: { ar: 'شركة مقاولات عامة', en: 'General Contracting Company' },
    doc1: { label: { ar: 'السجل التجاري (نشاط مقاولات)', en: 'Commercial Register (Contracting)' }, required: true },
    doc2: { label: { ar: 'شهادة تصنيف المقاولين (اختياري)', en: 'Contractors Classification (Optional)' }, required: false }
  },
  security_safety: {
    label: { ar: 'شركة أمن وسلامة معتمدة', en: 'Certified Safety & Security Company' },
    doc1: { label: { ar: 'السجل التجاري', en: 'Commercial Register' }, required: true },
    doc2: { label: { ar: 'اعتماد الدفاع المدني (بوابة سلامة)', en: 'Civil Defense Approval (Salamah)' }, required: true }
  },
  supplier: {
    label: { ar: 'مورد معدات سلامة', en: 'Safety Equipment Supplier' },
    doc1: { label: { ar: 'السجل التجاري', en: 'Commercial Register' }, required: true },
    doc2: { label: { ar: 'شهادة ضريبة القيمة المضافة أو وكالة (اختياري)', en: 'VAT Certificate or Agency (Optional)' }, required: false }
  },
  technician: {
    label: { ar: 'فني / صنايعي مستقل', en: 'Independent Technician' },
    doc1: { label: { ar: 'الهوية الوطنية / الإقامة', en: 'National ID / Iqama' }, required: true },
    doc2: { label: { ar: 'شهادة فحص مهني أو دورات (اختياري)', en: 'Professional Exam or Courses (Optional)' }, required: false }
  }
};

export default function ProviderRegistration() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    provider_name: '',
    official_email: '',
    phone: '',
    category: '',
    primary_doc: null,
    secondary_doc: null,
    specialties: [],
    bio: ''
  });

  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState('');

  const validateStep1 = () => {
    let tempErrors = {};
    if (!formData.provider_name.trim()) tempErrors.provider_name = isEn ? 'Facility name is required' : 'اسم المنشأة مطلوب';
    if (!formData.official_email.match(/^\S+@\S+\.\S+$/)) tempErrors.official_email = isEn ? 'Invalid email format' : 'صيغة الإيميل خاطئة';
    if (!formData.phone.match(/^05\d{8}$/)) tempErrors.phone = isEn ? 'Must start with 05 (10 digits)' : 'يجب أن يبدأ بـ 05 (10 أرقام)';
    if (!formData.category) tempErrors.category = isEn ? 'Please select activity' : 'يرجى تحديد النشاط';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'category') {
      setFormData(prev => ({ ...prev, [name]: value, primary_doc: null, secondary_doc: null }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e, docType) => {
    const file = e.target.files[0];
    setFileError('');
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFileError(isEn ? `File ${file.name} exceeds 5MB.` : `عفواً، حجم ملف ${file.name} يتجاوز 5 ميجابايت.`);
        e.target.value = '';
        return;
      }
      setFormData(prev => ({ ...prev, [docType]: file }));
    }
  };

  const handleSpecialtyToggle = (specialty) => {
    setFormData(prev => {
      const exists = prev.specialties.includes(specialty);
      return { 
        ...prev, 
        specialties: exists ? prev.specialties.filter(s => s !== specialty) : [...prev.specialties, specialty] 
      };
    });
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    
    if (step === 2) {
      const rules = CATEGORY_DOCS[formData.category];
      if (rules.doc1.required && !formData.primary_doc) {
        setFileError(isEn ? `Please attach: ${rules.doc1.label.en}` : `يرجى إرفاق: ${rules.doc1.label.ar}`);
        return;
      }
      if (rules.doc2.required && !formData.secondary_doc) {
        setFileError(isEn ? `Please attach: ${rules.doc2.label.en}` : `يرجى إرفاق: ${rules.doc2.label.ar}`);
        return;
      }
    }
    setStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.specialties.length === 0) {
      alert(isEn ? 'Please select at least one specialty' : 'يرجى اختيار تخصص واحد على الأقل');
      return;
    }
    setIsSubmitting(true);

    try {
      const uploadFile = async (file, pathName) => {
        if (!file) return null;
        const fileExt = file.name.split('.').pop();
        const fileName = `${formData.category}-${pathName}-${Date.now()}.${fileExt}`;
        const { error } = await supabase.storage.from('provider_documents').upload(fileName, file);
        if (error) throw error;
        const { data: { publicUrl } } = supabase.storage.from('provider_documents').getPublicUrl(fileName);
        return publicUrl;
      };

      const primaryUrl = await uploadFile(formData.primary_doc, 'DOC1');
      const secondaryUrl = await uploadFile(formData.secondary_doc, 'DOC2');

      const { error: dbError } = await supabase
        .from('service_providers')
        .insert([{
          provider_name: formData.provider_name,
          official_email: formData.official_email,
          phone: formData.phone,
          category: formData.category,
          primary_doc_url: primaryUrl,
          secondary_doc_url: secondaryUrl,
          specialties: formData.specialties,
          bio: formData.bio
        }]);

      if (dbError) throw dbError;
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting:', error.message);
      alert(isEn ? 'An error occurred. Please try again.' : 'حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentDocs = formData.category ? CATEGORY_DOCS[formData.category] : null;

  const slideVariants = {
    hidden: { opacity: 0, x: isEn ? 30 : -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: isEn ? -30 : 30, transition: { duration: 0.3, ease: "easeIn" } }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center p-4" dir={isEn ? 'ltr' : 'rtl'}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#111827] rounded-3xl p-10 text-center border border-green-500/30 max-w-lg w-full shadow-[0_0_40px_rgba(34,197,94,0.1)]"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle size={48} />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            {isEn ? 'Submitted Successfully' : 'تم استلام طلبك بنجاح'}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            {isEn ? 'Our team will review your documents and contact you shortly.' : 'سيقوم فريقنا بمراجعة المستندات وسيتواصل مندوبنا معكم في أقرب وقت.'}
          </p>
          <button onClick={() => window.location.href = '/'} className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition-colors">
            {isEn ? 'Back to Home' : 'العودة للرئيسية'}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative" dir={isEn ? 'ltr' : 'rtl'}>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#EF4444]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-3xl bg-[#111827]/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/5 relative z-10">
        
        <div className="px-8 pt-10 pb-8 border-b border-white/5">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              {isEn ? 'Join as a' : 'انضم كشريك'} <span className="text-[#EF4444]">{isEn ? 'Success Partner' : 'نجاح'}</span>
            </h2>
            <p className="text-slate-400">
              {isEn ? 'Register to access the largest safety projects network in KSA' : 'سجل بياناتك للوصول لأكبر شبكة مشاريع سلامة في المملكة'}
            </p>
          </div>
          
          <div className="flex justify-between items-center max-w-md mx-auto relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-800 -z-10 rounded-full"></div>
            <motion.div 
              className={`absolute ${isEn ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 h-1 bg-[#EF4444] -z-10 rounded-full`}
              initial={{ width: '0%' }}
              animate={{ width: `${((step - 1) / 2) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            
            {[
              { num: 1, label: isEn ? 'Info' : 'البيانات' },
              { num: 2, label: isEn ? 'Docs' : 'التوثيق' },
              { num: 3, label: isEn ? 'Specialty' : 'التخصص' }
            ].map(item => (
              <div key={item.num} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${step >= item.num ? 'bg-[#EF4444] text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] scale-110' : 'bg-slate-800 text-slate-500 border border-slate-700'}`}>
                  {step > item.num ? <CheckCircle size={20} /> : item.num}
                </div>
                <span className={`text-xs mt-3 font-medium transition-colors ${step >= item.num ? 'text-white' : 'text-slate-500'}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 min-h-[420px] overflow-hidden relative">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div key="step1" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4 ltr:text-left rtl:text-right">
                  <Briefcase className="text-[#EF4444]" size={24} />
                  <h3 className="text-xl font-bold">{isEn ? 'Basic Information' : 'المعلومات الأساسية'}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 flex flex-col items-start">
                    <label className="text-sm font-medium text-slate-300">{isEn ? 'Official Entity / Individual Name' : 'الاسم الرسمي للمنشأة / الفرد'}</label>
                    <div className="relative w-full">
                      <div className={`absolute inset-y-0 ${isEn ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center pointer-events-none text-slate-500`}><Building2 size={18} /></div>
                      <input type="text" name="provider_name" value={formData.provider_name} onChange={handleChange} className={`w-full bg-[#0f172a] border ${errors.provider_name ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-700 focus:border-[#EF4444] focus:ring-[#EF4444]/20'} rounded-xl py-3.5 ${isEn ? 'pl-10 pr-4' : 'pr-10 pl-4'} text-white focus:outline-none focus:ring-4 transition-all ltr:text-left rtl:text-right`} placeholder={isEn ? 'Name as in Commercial Register' : 'اكتب الاسم كما في السجل'} />
                    </div>
                    {errors.provider_name && <span className="text-red-500 text-xs">{errors.provider_name}</span>}
                  </div>
                  
                  <div className="space-y-2 flex flex-col items-start">
                    <label className="text-sm font-medium text-slate-300">{isEn ? 'Official Email' : 'الإيميل الرسمي'}</label>
                    <div className="relative w-full">
                      <div className={`absolute inset-y-0 ${isEn ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center pointer-events-none text-slate-500`}><Mail size={18} /></div>
                      <input type="email" name="official_email" value={formData.official_email} onChange={handleChange} className={`w-full bg-[#0f172a] border ${errors.official_email ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-700 focus:border-[#EF4444] focus:ring-[#EF4444]/20'} rounded-xl py-3.5 ${isEn ? 'pl-10 pr-4' : 'pr-10 pl-4'} text-white focus:outline-none focus:ring-4 transition-all ltr:text-left rtl:text-right`} placeholder="info@company.com" />
                    </div>
                    {errors.official_email && <span className="text-red-500 text-xs">{errors.official_email}</span>}
                  </div>

                  <div className="space-y-2 flex flex-col items-start">
                    <label className="text-sm font-medium text-slate-300">{isEn ? 'Activity Classification' : 'تصنيف النشاط'}</label>
                    <div className="relative w-full">
                      <div className={`absolute inset-y-0 ${isEn ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center pointer-events-none text-slate-500`}><ShieldCheck size={18} /></div>
                      <select name="category" value={formData.category} onChange={handleChange} className={`w-full bg-[#0f172a] border ${errors.category ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-700 focus:border-[#EF4444] focus:ring-[#EF4444]/20'} rounded-xl py-3.5 ${isEn ? 'pl-10 pr-4' : 'pr-10 pl-4'} text-white focus:outline-none focus:ring-4 transition-all appearance-none ltr:text-left rtl:text-right cursor-pointer`}>
                        <option value="">{isEn ? 'Choose your classification' : 'اختر تصنيف نشاطك'}</option>
                        {Object.entries(CATEGORY_DOCS).map(([key, val]) => (
                          <option key={key} value={key}>{isEn ? val.label.en : val.label.ar}</option>
                        ))}
                      </select>
                    </div>
                    {errors.category && <span className="text-red-500 text-xs">{errors.category}</span>}
                  </div>

                  <div className="space-y-2 flex flex-col items-start">
                    <label className="text-sm font-medium text-slate-300">{isEn ? 'Mobile (WhatsApp)' : 'رقم الجوال (واتساب)'}</label>
                    <div className="relative w-full">
                      <div className={`absolute inset-y-0 ${isEn ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center pointer-events-none text-slate-500`}><Phone size={18} /></div>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`w-full bg-[#0f172a] border ${errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-700 focus:border-[#EF4444] focus:ring-[#EF4444]/20'} rounded-xl py-3.5 ${isEn ? 'pl-10 pr-4' : 'pr-10 pl-4'} text-white focus:outline-none focus:ring-4 transition-all text-left`} dir="ltr" placeholder="05XXXXXXXX" />
                    </div>
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && currentDocs && (
              <motion.div key="step2" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-[#EF4444]" size={24} />
                    <h3 className="text-xl font-bold">{isEn ? 'Official Documentation' : 'التوثيق الرسمي'}</h3>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-slate-800 rounded-full text-slate-300">{isEn ? 'Max 5MB per file' : 'الحد الأقصى 5MB للملف'}</span>
                </div>
                
                {fileError && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl text-sm flex items-center gap-2">
                    <CheckCircle size={16} className="shrink-0" /> {fileError}
                  </motion.div>
                )}

                <div className="space-y-5">
                  {[
                    { id: 'primary_doc', label: isEn ? currentDocs.doc1.label.en : currentDocs.doc1.label.ar, req: currentDocs.doc1.required },
                    { id: 'secondary_doc', label: isEn ? currentDocs.doc2.label.en : currentDocs.doc2.label.ar, req: currentDocs.doc2.required }
                  ].map((docField) => (
                    <div key={docField.id} className={`relative overflow-hidden group rounded-2xl border-2 border-dashed transition-all duration-300 ${formData[docField.id] ? 'border-green-500 bg-green-500/5' : 'border-slate-600 bg-[#0f172a] hover:border-[#EF4444] hover:bg-slate-800/50'}`}>
                      <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileChange(e, docField.id)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                      <div className="p-6 flex flex-col sm:flex-row items-center gap-4 text-center ltr:sm:text-left rtl:sm:text-right">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-colors ${formData[docField.id] ? 'bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 'bg-slate-800 text-slate-400 group-hover:bg-[#EF4444] group-hover:text-white'}`}>
                          {formData[docField.id] ? <CheckCircle size={28} /> : <UploadCloud size={28} />}
                        </div>
                        <div className="flex flex-col items-start">
                          <h4 className="text-white font-bold text-lg mb-1">{docField.label} {docField.req && <span className="text-[#EF4444]">*</span>}</h4>
                          <p className={`text-sm ${formData[docField.id] ? 'text-green-400 font-medium' : 'text-slate-500'}`}>
                            {formData[docField.id] ? (isEn ? `Attached: ${formData[docField.id].name}` : `تم إرفاق: ${formData[docField.id].name}`) : (isEn ? 'Click or drag to upload (PDF, JPG, PNG)' : 'اضغط هنا أو اسحب الملف للرفع (PDF, JPG, PNG)')}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4 ltr:text-left rtl:text-right">
                  <Building2 className="text-[#EF4444]" size={24} />
                  <h3 className="text-xl font-bold">{isEn ? 'Specialties' : 'مجالات التخصص'}</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { id: 'exec', label: isEn ? 'Safety Systems (Execution)' : 'أنظمة أمن وسلامة (تنفيذ)', icon: '🔧' },
                    { id: 'permits', label: isEn ? 'Permits & Engineering Plans' : 'تصاريح ومخططات هندسية', icon: '📐' },
                    { id: 'supply', label: isEn ? 'Safety Equipment Supply' : 'توريد معدات ولوازم سلامة', icon: '📦' },
                    { id: 'maintenance', label: isEn ? 'Maintenance Contracts' : 'عقود صيانة دورية', icon: '🔄' }
                  ].map(item => {
                    const isSelected = formData.specialties.includes(item.id);
                    return (
                      <div 
                        key={item.id} 
                        onClick={() => handleSpecialtyToggle(item.id)}
                        className={`flex items-center p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${isSelected ? 'border-[#EF4444] bg-[#EF4444]/10 shadow-[0_0_15px_rgba(239,68,68,0.15)]' : 'border-slate-700 bg-[#0f172a] hover:border-slate-500'}`}
                      >
                        <div className={`w-6 h-6 rounded flex items-center justify-center ${isEn ? 'mr-4' : 'ml-4'} transition-colors ${isSelected ? 'bg-[#EF4444] text-white' : 'bg-slate-800 border border-slate-600'}`}>
                          {isSelected && <CheckCircle size={16} strokeWidth={3} />}
                        </div>
                        <span className={`text-xl ${isEn ? 'mr-2' : 'ml-2'}`}>{item.icon}</span>
                        <span className={`font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>{item.label}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-2 flex flex-col items-start">
                  <label className="text-sm font-medium text-slate-300">{isEn ? 'Short Bio / Experience (Optional)' : 'نبذة مختصرة عن أعمالك (اختياري)'}</label>
                  <textarea 
                    name="bio" 
                    value={formData.bio} 
                    onChange={handleChange} 
                    rows="4" 
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-[#EF4444] focus:ring-4 focus:ring-[#EF4444]/20 resize-none transition-all ltr:text-left rtl:text-right" 
                    placeholder={isEn ? "Talk about your previous works, projects, or competitive advantages..." : "تحدث عن سابقة أعمالك، المشاريع التي نفذتها، أو الميزات التنافسية التي تقدمها..."}
                  ></textarea>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="px-8 py-6 border-t border-white/5 bg-[#0f172a]/80 backdrop-blur-md rounded-b-3xl flex justify-between items-center ltr:flex-row rtl:flex-row">
          <button 
            onClick={prevStep} 
            disabled={step === 1 || isSubmitting} 
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${step === 1 ? 'opacity-0 pointer-events-none' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
          >
            {isEn ? 'Previous' : 'السابق'}
          </button>
          
          {step < 3 ? (
            <button 
              onClick={nextStep} 
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold bg-[#EF4444] hover:bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all hover:scale-105"
            >
              {isEn ? 'Next' : 'التالي'} <ChevronLeft size={20} className={isEn ? 'rotate-180' : 'rotate-0'} />
            </button>
          ) : (
            <button 
              onClick={handleSubmit} 
              disabled={isSubmitting} 
              className="flex items-center justify-center gap-2 px-10 py-3 rounded-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitting ? (
                isEn ? <>Uploading Data <span className="animate-pulse">...</span></> : <>جاري رفع البيانات <span className="animate-pulse">...</span></>
              ) : (
                isEn ? <>Confirm & Submit <CheckCircle size={20} /></> : <>تأكيد وإرسال الطلب <CheckCircle size={20} /></>
              )}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}