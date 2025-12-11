import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  return (
    <>
      <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4 animate-slideUp">
        {/* واتساب */}
        <a 
          href="https://wa.me/966500000000" 
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 hover:scale-110 transition-transform cursor-pointer relative group"
        >
          <span className="absolute left-16 bg-white text-dark px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">تواصل واتساب</span>
          <MessageCircle size={32} fill="white" className="text-white" />
        </a>

        {/* اتصال */}
        <a 
          href="tel:+966500000000" 
          className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 hover:scale-110 transition-transform cursor-pointer relative group"
        >
          <span className="absolute left-16 bg-white text-dark px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">اتصل الآن</span>
          <Phone size={28} />
        </a>
      </div>
    </>
  );
};

export default FloatingActions;