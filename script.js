// Live clock (EEST/Egypt local by device)
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString(undefined, {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
  const date = now.toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: '2-digit'
  });
  document.getElementById('clock').textContent = `${date} — ${time}`;
}
setInterval(updateClock, 1000);
updateClock();

// Smooth scroll to services
document.getElementById('servicesNav').addEventListener('click', () => {
  document.getElementById('market').scrollIntoView({ behavior: 'smooth' });
});

// Package quick-fill -> set form plan accordingly
document.querySelectorAll('.pkg-order').forEach(btn => {
  btn.addEventListener('click', () => {
    const map = {
      basic: 'basic-1990-2',
      mid: 'mid-3490-4',
      pro: 'pro-5490-6',
      basic_big: 'catalog-7490-6',
      mid_system: 'system-9990-8',
      pro_reports: 'reports-12990-10'
    };
    const val = map[btn.dataset.level] || 'basic-1990-2';
    const radio = document.querySelector(`input[name="plan"][value="${val}"]`);
    if (radio) radio.checked = true;
    document.getElementById('request').scrollIntoView({ behavior: 'smooth' });
  });
});

// WhatsApp sender
document.getElementById('sendWhatsApp').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const wa = document.getElementById('whatsapp').value.trim();
  const type = document.getElementById('type').value.trim();
  const vis = document.querySelector('input[name="visibility"]:checked')?.value || 'test';
  const plan = document.querySelector('input[name="plan"]:checked')?.value || '';
  const notes = document.getElementById('notes').value.trim();

  if (!name || !wa) {
    alert(document.documentElement.lang === 'ar'
      ? 'من فضلك أدخل الاسم ورقم الواتساب'
      : 'Please enter your name and WhatsApp number');
    return;
  }

  const [level, price, days] = plan.split('-');
  const visText = vis === 'test'
    ? (document.documentElement.lang === 'ar' ? 'تجريبي' : 'Test (no indexing)')
    : (document.documentElement.lang === 'ar' ? 'مفهرس' : 'Indexed');

  const msgAr = `طلب إنشاء موقع — ABODAHAB Store
الاسم: ${name}
واتساب: ${wa}
النوع: ${type}
الظهور في جوجل: ${visText}
الخطة: ${level} — ${price} — ${days} يوم
ملاحظات: ${notes || 'لا يوجد'}

رجاءً التواصل للتفاصيل وبدء التنفيذ.`;
  const msgEn = `Website Request — ABODAHAB Store
Name: ${name}
WhatsApp: ${wa}
Type: ${type}
Google visibility: ${visText}
Plan: ${level} — ${price} — ${days} days
Notes: ${notes || 'N/A'}

Please reach out to confirm details and start.`;

  const message = document.documentElement.lang === 'ar' ? msgAr : msgEn;
  const phoneToSend = wa.replace(/[^0-9]/g, '');
  const url = `https://wa.me/${phoneToSend}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});

// Language toggle (Arabic/English)
const strings = {
  ar: {
    hero_title: 'ABODAHAB Store',
    hero_desc: 'مكان واحد لكل خدماتك. اضغط على الماركت واختر الخدمة، وبعدها حدد التفاصيل خطوة بخطوة.',
    enter_market: 'دخول الماركت',
    market_features: 'مميزات الماركت',
    features_title: 'مميزات الماركت',
    feat_one_t: 'تسعير واضح',
    feat_one_d: 'باقات محددة، تفاصيل شفافة، واستلام ضمن المدة.',
    feat_two_t: 'هوية متناسقة',
    feat_two_d: 'ألوان، خطوط، وتراكيب محتوى احترافية لعلامتك.',
    feat_three_t: 'جاهزية للسيو',
    feat_three_d: 'تهيئة أساسية أو متقدمة لصفحاتك للظهور الصحيح.',
    market_title: 'خدمات إنشاء مواقع إلكترونية',
    market_sub: 'اختر الباقة التي تناسبك، وبعد طلبك لموقعك سيتم التواصل معك قبل التنفيذ.',
    delivery_on_demand: 'تسليم حسب الطلب',
    free_brief: 'حفظ بروفيس مجاني',
    paid_brief: 'حفظ بروفيس مدفوع',
    basic: 'عادي',
    pro: 'مميز',
    special: 'متخصص',
    site_simple: 'موقع إلكتروني بسيط',
    site_full: 'موقع إلكتروني متكامل',
    site_services: 'موقع خدمات',
    site_catalog: 'موقع كبير كاتلوج',
    system_mid: 'نظام متكامل أو نظام متوسط',
    system_reports: 'نظام تقارير وحجوزات',
    brief_free: 'بروفيس مجاني',
    brief_paid: 'بروفيس مدفوع',
    deliver_2d: 'التسليم: يومين',
    deliver_4d: 'التسليم: ٤ أيام',
    deliver_6d: 'التسليم: ٦ أيام',
    deliver_8d: 'التسليم: ٨ أيام',
    deliver_10d: 'التسليم: ١٠ أيام',
    order_service: 'طلب الخدمة',
    extra_services_title: 'فئات إضافية للخدمات',
    request_title: 'طلب إنشاء موقع',
    name_label: 'اسمك',
    wa_label: 'رقم واتساب',
    type_label: 'نوع الموقع',
    visibility_label: 'الظهور في جوجل',
    plan_label: 'المستوى والخطة',
    notes_label: 'ملاحظات',
    notes_helper: 'سيتم تجميع البيانات وارسالها لك بصيغة مرتبة للمراجعة قبل البدء.',
    send_wa: 'ارسل الطلب على واتساب',
    footer_note: 'بعد ارسال الطلب سيتم مراجعة الطلب المقدم. الأولوية للخدمات المطلوبة بشكل دائم أو نظام خاص بمتطلبات محددة قبل التنفيذ.'
  },
  en: {
    hero_title: 'ABODAHAB Store',
    hero_desc: 'One place for all your services. Enter the market, pick a service, then specify details step by step.',
    enter_market: 'Enter the market',
    market_features: 'Market features',
    features_title: 'Market features',
    feat_one_t: 'Clear pricing',
    feat_one_d: 'Defined packages, transparent details, on-time delivery.',
    feat_two_t: 'Consistent identity',
    feat_two_d: 'Professional colors, fonts, and content structure.',
    feat_three_t: 'SEO readiness',
    feat_three_d: 'Basic or advanced page optimization done right.',
    market_title: 'Website creation services',
    market_sub: 'Choose a package. We will contact you before implementation.',
    delivery_on_demand: 'Delivery on demand',
    free_brief: 'Free brief saving',
    paid_brief: 'Paid brief saving',
    basic: 'Basic',
    pro: 'Pro',
    special: 'Specialized',
    site_simple: 'Simple website',
    site_full: 'Complete website',
    site_services: 'Service website',
    site_catalog: 'Large catalog website',
    system_mid: 'Complete or mid-level system',
    system_reports: 'Reports and bookings system',
    brief_free: 'Free brief',
    brief_paid: 'Paid brief',
    deliver_2d: 'Delivery: 2 days',
    deliver_4d: 'Delivery: 4 days',
    deliver_6d: 'Delivery: 6 days',
    deliver_8d: 'Delivery: 8 days',
    deliver_10d: 'Delivery: 10 days',
    order_service: 'Order service',
    extra_services_title: 'Additional service categories',
    request_title: 'Request a website',
    name_label: 'Your name',
    wa_label: 'WhatsApp number',
    type_label: 'Website type',
    visibility_label: 'Google visibility',
    plan_label: 'Level and plan',
    notes_label: 'Notes',
    notes_helper: 'Your data will be compiled and sent to you for review before we start.',
    send_wa: 'Send request on WhatsApp',
    footer_note: 'After sending the request, it will be reviewed. Priority is given to ongoing services or special systems with defined requirements before execution.'
  }
};

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.style.textAlign = lang === 'ar' ? 'right' : 'left';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[lang][key]) el.textContent = strings[lang][key];
  });
}
document.getElementById('langToggle').addEventListener('click', () => {
  const next = document.documentElement.lang === 'ar' ? 'en' : 'ar';
  applyLang(next);
});
applyLang('ar');
