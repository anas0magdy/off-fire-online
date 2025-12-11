import React from 'react';

const Button = ({ children, primary, className, onClick, ...props }) => (
  <button 
    onClick={onClick}
    className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2
    ${primary 
      ? 'bg-primary hover:bg-red-600 text-white shadow-primary/20' 
      : 'bg-card hover:bg-slate-700 text-white border border-slate-600'} 
    ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;