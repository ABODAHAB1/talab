// Live clock
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const date = now.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
  document.getElementById('clock').textContent = `${date} — ${time}`;
}
setInterval(updateClock, 1000);
updateClock();

// Smooth scroll to services
document.getElementById('servicesNav').addEventListener('click', () => {
  document.getElementById('market').scrollIntoView({ behavior: 'smooth' });
});

// Package quick-fill -> redirect to request page
document.querySelectorAll('.pkg-order').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.pkg');
    const plan = {
      title: card.querySelector('.pkg-title').textContent,
      price: card.querySelector('.price').textContent,
      time: card.querySelector('.time').textContent,
      brief: card.querySelector('.brief').textContent
    };
    localStorage.setItem('selectedPlan', JSON.stringify(plan));
    window.location.href = 'request.html'; // صفحة الطلب الجديدة
  });
});

// Language toggle
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
    basic: 'عادي',
    pro: 'مميز',
    special: 'متخصص',
    site_simple: 'موقع إلكتروني بسيط',
    site_full: 'موقع إلكتروني متكامل',
    site_services: 'موقع خدمات',
    site_catalog: 'موقع كبير كاتلوج',
    system_mid: 'نظام متكامل أو نظام متوسط',
    system_reports: 'نظام تقارير وحجوزات',
    brief_free: 'بدون دومين',
    brief_paid: 'بدومين',
    deliver_2d: 'التسليم: يومين',
    deliver_4d: 'التسليم: ٤ أيام',
    deliver_6d: 'التسليم: ٦ أيام',
    deliver_8d: 'التسليم: ٨ أيام',
    deliver_10d: 'التسليم: ١٠ أيام',
    order_service: 'طلب الخدمة',
    extra_services_title: 'فئات إضافية للخدمات',
    footer_note: '© ABODAHAB Store — جميع الحقوق محفوظة'
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
    basic: 'Basic',
    pro: 'Pro',
    special: 'Specialized',
    site_simple: 'Simple website',
    site_full: 'Complete website',
    site_services: 'Service website',
    site_catalog: 'Large catalog website',
    system_mid: 'Complete or mid-level system',
    system_reports: 'Reports and bookings system',
    brief_free: 'No domain',
    brief_paid: 'With domain',
    deliver_2d: 'Delivery: 2 days',
    deliver_4d: 'Delivery: 4 days',
    deliver_6d: 'Delivery: 6 days',
    deliver_8d: 'Delivery: 8 days',
    deliver_10d: 'Delivery: 10 days',
    order_service: 'Order service',
    extra_services_title: 'Additional service categories',
    footer_note: '© ABODAHAB Store — All rights reserved'
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
