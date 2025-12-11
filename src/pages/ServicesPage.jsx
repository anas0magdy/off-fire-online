import React from 'react';
import { CheckCircle, Info } from 'lucide-react';
import Button from '../components/Button';
import { DETAILED_SERVICES } from '../data/content';

const ServicesPage = () => {
  return (
    <div className="animate-fadeIn pt-24">
      <div className="bg-dark py-20 text-center px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-50 blur-3xl"></div>
        <h1 className="text-3xl md:text-5xl font-black text-text-main mb-6 relative z-10">أكثر من مجرد خدمات..</h1>
        <p className="text-text-sub max-w-3xl mx-auto text-lg md:text-xl leading-relaxed relative z-10">
          نحن شريكك التقني لإدارة منظومة الأمن والسلامة بذكاء. نربطك بنخبة المكاتب الهندسية وشركات السلامة المعتمدة.
        </p>
      </div>

      <section className="py-20 bg-darker">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {DETAILED_SERVICES.map((service, idx) => (
                <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* المحتوى النصي */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-6xl font-black text-white/5">{`0${service.id}`}</span>
                        <h3 className="text-3xl font-bold text-text-main">{service.title}</h3>
                    </div>
                    <p className="text-text-sub mb-8 text-lg">{service.desc}</p>
                    
                    <div className="bg-card p-6 rounded-xl border border-white/5 mb-8">
                        <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
                            <Info size={18}/> نطاق الخدمة:
                        </h4>
                        <ul className="space-y-3">
                        {service.details.map((feat, i) => (
                            <li key={i} className="flex items-start gap-3 text-text-sub text-sm">
                                <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                {feat}
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div className="p-4 bg-cta/10 border-r-4 border-cta rounded-l-lg mb-8">
                        <span className="font-bold text-white block mb-1">💡 دور المنصة:</span>
                        <p className="text-sm text-text-sub">{service.role}</p>
                    </div>

                    <Button primary className="w-full sm:w-auto">اطلب الخدمة الآن</Button>
                  </div>
                  
                  {/* الصورة */}
                  <div className="flex-1 w-full h-[450px]">
                     <div className="h-full bg-card rounded-3xl border border-white/5 p-2 shadow-2xl relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-dark/80 to-transparent z-10 rounded-2xl pointer-events-none"></div>
                        <img 
                            src={service.image} 
                            className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                            alt={service.title}
                            onError={(e) => e.target.style.display = 'none'} 
                        />
                     </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;