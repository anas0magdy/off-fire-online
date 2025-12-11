import React from 'react';
import { ChevronLeft, Search } from 'lucide-react';
import { BLOG_POSTS } from '../data/content';

const BlogPage = () => {
  return (
    <div className="animate-fadeIn pt-24">
      {/* Blog Hero */}
      <div className="bg-dark py-16 text-center px-4 border-b border-white/5">
        <h1 className="text-3xl md:text-4xl font-black text-text-main mb-4">المرجع الرقمي الأول للأمن والسلامة</h1>
        <p className="text-text-sub max-w-xl mx-auto mb-8">تعرف على اشتراطات الدفاع المدني والكود السعودي مشروحة ببساطة.</p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
            <input 
                type="text" 
                placeholder="ابحث عن موضوع (مثال: شروط المطاعم)" 
                className="w-full bg-card border border-white/10 text-white rounded-full py-3 px-6 pr-12 focus:outline-none focus:border-primary transition-colors"
            />
            <Search className="absolute right-4 top-3.5 text-text-sub" size={20} />
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 text-xs text-text-sub">
            {['#رخصة_سلامة', '#الكود_السعودي', '#عقود_الصيانة', '#المخالفات'].map(tag => (
                <span key={tag} className="bg-white/5 px-3 py-1 rounded-full">{tag}</span>
            ))}
        </div>
      </div>

      <section className="py-20 bg-darker">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="bg-card rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-primary transition-all shadow-lg hover:shadow-primary/10">
                <div className="h-48 overflow-hidden relative">
                  <span className="absolute top-4 right-4 bg-cta text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-lg">{post.category}</span>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" onError={(e) => e.target.style.display = 'none'} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-text-sub text-sm mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center text-primary font-bold text-sm gap-2">
                    اقرأ المقال <ChevronLeft size={16} />
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

export default BlogPage;