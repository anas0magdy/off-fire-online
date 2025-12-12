import React from 'react';
import { CheckCircle, Info } from 'lucide-react';
import Button from '../components/Button';
import TextWithBrand from '../components/TextWithBrand'; // استدعاء المكون
import { DETAILED_SERVICES } from '../data/content';

const ServicesPage = () => {
  return (
    <div className="animate-fadeIn pt-20 lg:pt-24">
      {/* Hero Section */}
      <div className="bg-dark py-16 lg:py-24 text-center px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-50 blur-3xl"></div>
        <h1 className="text-3xl md:text-5xl font-black text-text-main mb-6 relative z-10 leading-tight">
          أكثر من مجرد خدمات..
        </h1>
        <p className="text-text-sub max-w-3xl mx-auto text-lg md:text-xl leading-relaxed relative z-10">
           {/* هنا كانت الجملة العادية، الآن ستصبح مميزة */}
           <TextWithBrand text="منصة OFF FIRE ONLINE هي وسيطك الرقمي الأول والمستقل. نربطك بنخبة من المكاتب الهندسية وشركات الأمن والسلامة المعتمدة لإصدار التراخيص وتنفيذ كافة الأنظمة." />
        </p>
      </div>

      {/* باقي الكود كما هو دون تغيير... */}
      <section className="py-16 lg:py-24 bg-darker">
        <div className="container mx-auto px-6">
          <div className="space-y-24 lg:space-y-32">
            {DETAILED_SERVICES.map((service, idx) => (
                <div key={service.id} className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  <div className="w-full lg:flex-1 h-[300px] lg:h-[500px] order-1 lg:order-none">
                     <div className="h-full bg-card rounded-3xl border border-white/5 p-2 shadow-2xl relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-dark/60 to-transparent z-10 rounded-2xl pointer-events-none"></div>
                        <img 
                            src={service.image} 
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                            alt={service.title}
                            onError={(e) => e.target.style.display = 'none'} 
                        />
                     </div>
                  </div>

                  <div className="w-full lg:flex-1 order-2 lg:order-none">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-5xl lg:text-6xl font-black text-white/5 select-none">{`0${service.id}`}</span>
                        <h3 className="text-2xl lg:text-3xl font-bold text-text-main">{service.title}</h3>
                    </div>
                    <p className="text-text-sub mb-8 text-base lg:text-lg leading-relaxed">{service.desc}</p>
                    
                    <div className="bg-card p-6 rounded-2xl border border-white/5 mb-8 shadow-inner">
                        <h4 className="text-primary font-bold mb-4 flex items-center gap-2 text-lg">
                            <Info size={20}/> نطاق الخدمة:
                        </h4>
                        <ul className="space-y-4">
                        {service.details.map((feat, i) => (
                            <li key={i} className="flex items-start gap-3 text-text-sub text-sm lg:text-base">
                                <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                                {feat}
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div className="p-5 bg-cta/5 border-r-4 border-cta rounded-l-xl mb-8 backdrop-blur-sm">
                        <span className="font-bold text-white block mb-2 text-lg">💡 دور المنصة:</span>
                        <p className="text-sm lg:text-base text-text-sub leading-relaxed">{service.role}</p>
                    </div>

                    <Button primary className="w-full lg:w-auto text-lg py-4">اطلب الخدمة الآن</Button>
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