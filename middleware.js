export const config = {
  // السطر ده بيخلي الكود يشتغل على كل المسارات، ما عدا الملفات اللي فيها نقطة (زي .png, .css, .js)
  matcher: '/((?!.*\\..*).*)',
};

export default function middleware(request) {
  const acceptHeader = request.headers.get('accept') || '';

  // لو اللي بيطلب الصفحة ده Agent وعايز Markdown
  if (acceptHeader.includes('text/markdown')) {
    
    // بنجيب اسم المسار اللي الروبوت طالبه (مثلا /services)
    const url = new URL(request.url);
    const path = url.pathname;
    
    // بنحدد اسم الصفحة عشان نعرضه في النص
    let pageName = 'Homepage';
    if (path !== '/') {
      // بنشيل علامة السلاش ونكبر الحروف عشان يكون شكلها احترافي
      pageName = path.replace('/', '').toUpperCase(); 
    }

    // ده النص الديناميكي اللي الروبوت هيشوفه حسب الصفحة اللي هو فيها
    const markdownContent = `# Off Fire Online - ${pageName}
Welcome to the ${pageName} section of Off Fire Online. We provide comprehensive fire safety systems, security services, and equipment maintenance.`;

    // بنرد عليه بالنسخة النصية
    return new Response(markdownContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': 'true'
      },
    });
  }

  // لو مستخدم عادي، Vercel هيكمل شغله ويفتح صفحة الـ React العادية
}