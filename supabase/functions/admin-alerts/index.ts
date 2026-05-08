import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  try {
    const payload = await req.json()
    const { record, table } = payload // البيانات اللي دخلت الجدول

    let subject = ""
    let htmlContent = ""

    // لو الطلب جاي من جدول عروض الأسعار
    if (table === 'contact_requests') {
      subject = "🔥 طلب عرض سعر جديد - Off Fire Online"
      htmlContent = `
        <div style="font-family: sans-serif; direction: rtl; text-align: right;">
          <h2>وصلك طلب عرض سعر جديد</h2>
          <p><strong>الاسم:</strong> ${record.facility_name}</p>
          <p><strong>الجوال:</strong> ${record.phone}</p>
          <p><strong>الخدمة المطلوبة:</strong> ${record.service_type}</p>
          <p><strong>الايميل:</strong> ${record.email}</p>
          <p><strong>اسم المسؤول:</strong> ${record.contact_name}</p>
        </div>
      `
    } 
    // لو الطلب جاي من جدول الشركاء
    else if (table === 'service_providers') {
      subject = "🤝 طلب انضمام شريك جديد - Off Fire Online"
      htmlContent = `
        <div style="font-family: sans-serif; direction: rtl; text-align: right;">
          <h2>طلب انضمام شريك نجاح</h2>
          <p><strong>اسم المنشأة:</strong> ${record.provider_name}</p>
          <p><strong>الايميل:</strong> ${record.official_email}</p>
          <p><strong>الجوال:</strong> ${record.phone}</p>
          <p><strong>الفئة:</strong> ${record.category}</p>
        </div>
      `
    } else {
      return new Response("Table not matched", { status: 200 })
    }

    // إرسال الإيميل عن طريق Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'System <system@offfireonline.com>', // ده اسم مرسل وهمي عشان تعرف إنه من السيستم
        to: ['info@offfireonline.com'], // إيميلك اللي هتستقبل عليه
        subject: subject,
        html: htmlContent,
      }),
    })

    const data = await res.json()
    return new Response(JSON.stringify(data), { status: 200 })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
})