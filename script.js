// Clock: localized to Arabic by default, with EEST awareness via browser
function updateClock() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('ar-EG', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  const timeStr = now.toLocaleTimeString('ar-EG', {
    hour: '2-digit', minute: '2-digit'
  });
  document.getElementById('dateText').textContent = dateStr;
  document.getElementById('timeText').textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

/* Simple i18n toggle: Arabic <-> English */
const i18n = {
  ar: {
    brandTitle: 'Abou El Dahab Store',
    brandSub: 'مكان واحد لكل خدمات المواقع — بنسلم بسرعة وبجودة.',
    heroTitle: 'خدمات إنشاء مواقع إلكترونية',
    heroDesc: 'اختار الخدمة المناسبة لك، واضغط "اطلب الآن" علشان نحدد التفاصيل خطوة بخطوة ونراجعها قبل التنفيذ.',
    chips: ['ملاحظات سريعة', 'بدون دومين مجاني', '١ دومين مجاني', '٢ دومين مجاني', 'التسليم حسب الخطة'],
    sectionTitle: 'اضغط على أي خدمة علشان نحدد تفاصيلها',
    services: {
      companies: ['مواقع الشركات والمؤسسات', 'تعريف الخدمات والأقسام، صفحات متعددة، نموذج تواصل، تحسين سيو أساسي.'],
      ecommerce: ['المتاجر الإلكترونية', 'منتجات، سلة، دفع/تحويل، لوحه إدارة، تقارير بسيطة.'],
      blogs: ['المدونات والمواقع الإخبارية', 'مقالات، تصنيفات، أرشفة، سرعة وتحليل، تهيئة سيو أساسي.'],
      education: ['منصات التعليم', 'دورات، دروس، عضويات، بوابات دفع، إدارة محتوى.'],
      personal: ['المواقع الشخصية', 'نبذة، أعمال، معرض صور/فيديو، تواصل سريع، هوية ألوان وخطوط.'],
      government: ['المواقع الحكومية والخدمية', 'خدمات، نماذج، تكامل بوابات، وصولية عالية، تقارير.'],
      social: ['منصات التواصل الاجتماعي', 'حسابات، تفاعل، إدارة مجتمع، تكامل إشعارات، أداء.'],
      booking: ['مواقع الحجوزات والخدمات', 'تقويم، حجز، دفع/تحويل، إدارة طلبات، تقارير بسيطة.'],
      hosting: ['إدارة الاستضافة والنشر', 'استضافة، نشر مستمر، نسخ احتياطي، مراقبة الأداء.'],
      servers: ['برمجة الخوادم', 'APIs، قواعد بيانات، أمن، موازنة تحميل، تكامل الأنظمة.']
    },
    modalTitle: 'طلب إنشاء موقع',
    submitText: 'ارسل الطلب على واتساب',
    formHint: 'سيتم تجميع البيانات وإرسالها لك بصيغة مرتبة للمراجعة قبل البدء.'
  },
  en: {
    brandTitle: 'Abou El Dahab Store',
    brandSub: 'One place for your website services — fast delivery, solid quality.',
    heroTitle: 'Website creation services',
    heroDesc: 'Pick a service, tap “Order Now”, and we’ll finalize details step-by-step before execution.',
    chips: ['Quick notes', 'No free domain', '1 free domain', '2 free domains', 'Delivery per plan'],
    sectionTitle: 'Tap any service to set its details',
    services: {
      companies: ['Company & organization websites', 'Services overview, multi-pages, contact form, basic SEO.'],
      ecommerce: ['E-commerce stores', 'Products, cart, payment/transfer, admin panel, simple reports.'],
      blogs: ['Blogs & news sites', 'Articles, categories, indexing, speed & analytics, basic SEO.'],
      education: ['Education platforms', 'Courses, lessons, memberships, payment gateways, content management.'],
      personal: ['Personal sites', 'About, portfolio, gallery, quick contact, brand colors & fonts.'],
      government: ['Government & service portals', 'Services, forms, gateway integration, high accessibility, reports.'],
      social: ['Social platforms', 'Accounts, engagement, community management, notifications integration, performance.'],
      booking: ['Booking & services sites', 'Calendar, booking, payment/transfer, order management, simple reports.'],
      hosting: ['Hosting & deployment management', 'Hosting, CI/CD, backups, performance monitoring.'],
      servers: ['Server programming', 'APIs, databases, security, load balancing, system integrations.']
    },
    modalTitle: 'Request a website',
    submitText: 'Send request via WhatsApp',
    formHint: 'We will compile and send a structured summary for review before starting.'
  }
};

let currentLang = 'ar';

// Apply translation function
function applyTranslations(lang) {
  const t = i18n[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Header
  const brandTitleEl = document.querySelector('.brand-title');
  const brandSubEl = document.querySelector('.brand-sub');
  if (brandTitleEl) brandTitleEl.textContent = t.brandTitle;
  if (brandSubEl) brandSubEl.textContent = t.brandSub;

  // Hero
  const heroTitleEl = document.querySelector('.hero-title');
  const heroDescEl = document.querySelector('.hero-desc');
  if (heroTitleEl) heroTitleEl.textContent = t.heroTitle;
  if (heroDescEl) heroDescEl.textContent = t.heroDesc;

  // Chips
  const chipEls = document.querySelectorAll('.chip');
  chipEls.forEach((el, idx) => { el.textContent = t.chips[idx]; });

  // Section title
  const sectionTitleEl = document.querySelector('.section-title');
  if (sectionTitleEl) sectionTitleEl.textContent = t.sectionTitle;

  // Services
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const key = card.getAttribute('data-service-key');
    const titleEl = card.querySelector('.card-title');
    const descEl = card.querySelector('.card-desc');
    const btnEl = card.querySelector('.btn.btn-primary');
    if (i18n[lang].services[key]) {
      titleEl.textContent = t.services[key][0];
      descEl.textContent = t.services[key][1];
    }
    btnEl.textContent = lang === 'ar' ? 'اطلب الآن' : 'Order now';
  });

  // Plan tabs button text
  document.querySelectorAll('.plan-tab').forEach(tab => {
    const plan = tab.getAttribute('data-plan');
    tab.textContent =
      lang === 'ar'
        ? (plan === 'basic' ? 'عادي' : plan === 'standard' ? 'متوسط' : 'مميز')
        : (plan === 'basic' ? 'Basic' : plan === 'standard' ? 'Standard' : 'Premium');
  });

  // Plan cards primary/secondary button
  document.querySelectorAll('.plan-card .btn').forEach(btn => {
    btn.textContent = lang === 'ar' ? 'اطلب الآن' : 'Order now';
  });

  // Modal labels and submit
  document.getElementById('modalTitle').textContent = t.modalTitle;
  document.querySelector('#requestForm .btn-primary').textContent = t.submitText;
  document.querySelector('.form-hint').textContent = t.formHint;

  // Translate toggle button label
  const translateBtn = document.getElementById('translateToggle');
  translateBtn.textContent = lang === 'ar' ? 'Translate' : 'ترجمة';
}

// Toggle language on button click
document.getElementById('translateToggle').addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  applyTranslations(currentLang);
});
applyTranslations(currentLang);

// Plans tabs interaction
const planTabs = document.querySelectorAll('.plan-tab');
const planCards = document.querySelectorAll('.plan-card');

planTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    planTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const sel = tab.getAttribute('data-plan');
    planCards.forEach(card => {
      card.classList.toggle('hidden', card.getAttribute('data-plan') !== sel);
    });
  });
});

// Modal interactions
const modal = document.getElementById('requestModal');
const openButtons = document.querySelectorAll('.open-modal');
const closeEls = modal.querySelectorAll('[data-close]');

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    // Optionally prefill siteType based on clicked card
    const svc = btn.getAttribute('data-service');
    const map = {
      companies: 'companies',
      ecommerce: 'ecommerce',
      blogs: 'blogs',
      education: 'education',
      personal: 'personal',
      government: 'government',
      social: 'social',
      booking: 'booking',
      hosting: 'companies',
      servers: 'companies',
      basic: 'personal',
      standard: 'companies',
      premium: 'booking'
    };
    const siteTypeSelect = document.getElementById('siteType');
    siteTypeSelect.value = map[svc] || 'companies';
  });
});

closeEls.forEach(el => {
  el.addEventListener('click', () => {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  });
});

// WhatsApp submission
document.getElementById('requestForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('clientName').value.trim();
  const wa = document.getElementById('whatsapp').value.trim();
  const type = document.getElementById('siteType').value;
  const visibility = document.getElementById('visibility').value;
  const notes = document.getElementById('notes').value.trim();

  const tier = [...document.querySelectorAll('input[name="tier"]')]
    .find(r => r.checked)?.value;

  const tierInfo = {
    basic: { label: currentLang === 'ar' ? 'عادي' : 'Basic', price: '1990', days: '3' },
    standard: { label: currentLang === 'ar' ? 'متوسط' : 'Standard', price: '3490', days: '4' },
    premium: { label: currentLang === 'ar' ? 'مميز' : 'Premium', price: currentLang === 'ar' ? '5490–12990' : '5490–12990', days: currentLang === 'ar' ? '4–14' : '4–14' }
  }[tier];

  const typeLabels = i18n[currentLang].services[type][0];

  const visLabel = visibility === 'hidden'
    ? (currentLang === 'ar' ? 'تجريبي (لا تظهر في جوجل)' : 'Experimental (hidden from Google)')
    : (currentLang === 'ar' ? 'تظهر في نتائج جوجل' : 'Visible in Google');

  const summary =
    (currentLang === 'ar'
      ? `طلب جديد من ${name}\n` +
        `النوع: ${typeLabels}\n` +
        `الظهور: ${visLabel}\n` +
        `المستوى: ${tierInfo.label} — السعر: ${tierInfo.price} — التسليم: ${tierInfo.days} يوم\n` +
        (notes ? `ملاحظات: ${notes}\n` : '') +
        `رقم واتساب: ${wa}\n` +
        `تم الإنشاء عبر Abou El Dahab Store`
      : `New request from ${name}\n` +
        `Type: ${typeLabels}\n` +
        `Visibility: ${visLabel}\n` +
        `Tier: ${tierInfo.label} — Price: ${tierInfo.price} — Delivery: ${tierInfo.days} days\n` +
        (notes ? `Notes: ${notes}\n` : '') +
        `WhatsApp: ${wa}\n` +
        `Generated via Abou El Dahab Store`
    );

  // Replace with your WhatsApp number if needed:
  const myNumber = '201000000000'; // international format without '+'
  const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(summary)}`;

  window.open(url, '_blank');
});

// Accessibility: close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
});
