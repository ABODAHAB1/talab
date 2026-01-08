// سنة الفوتر
document.getElementById('year').textContent = new Date().getFullYear();

// ساعة إلكترونية
function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clockTime').textContent = `${hh}:${mm}:${ss}`;
}
updateClock();
setInterval(updateClock, 1000);

// ترجمة: عربي/إنجليزي
const i18nStrings = {
  ar: {
    siteTitle: "خدماتي من خدمات أبو الدهب",
    siteSubtitle: "نصمم ونطوّر مواقع تبني ثقة وتبيع بذكاء",
    navServices: "الخدمات",
    navPortfolio: "أعمال سابقة",
    navEcom: "حلول التجارة الإلكترونية",
    navCustom: "مواقع خاصة",
    navContact: "تواصل",
    heroTitle: "موقعك مش بس شكل... هو تجربة كاملة تنمّي مشروعك",
    heroText: "من أول الفكرة لحد الإطلاق، ببني موقعك خطوة بخطوة: سرعة، حماية، تجربة مستخدم، وتحويلات عالية.",
    heroBtn1: "ابدأ الآن",
    heroBtn2: "شوف أعمالي",
    servicesTitle: "الخدمات",
    svc1Title: "تصميم مواقع احترافية",
    svc1Desc: "واجهات لامعة، ألوان متناغمة، وتجربة مستخدم سلسة، مع توافق كامل للموبايل وسرعة تحميل ممتازة.",
    svc1F1: "تصميم لاندنج بيدج جذابة",
    svc1F2: "تحسين السرعة وSEO",
    svc1F3: "تكامل نماذج التواصل والواتساب",
    svc2Title: "متاجر إلكترونية",
    svc2Desc: "متجر سريع وآمن مع سلة مشتريات، دفع، وتتبع الطلبات، وتجربة شراء بسيطة وواضحة.",
    svc2F1: "إدارة منتجات وخصومات",
    svc2F2: "بوابات دفع متعددة",
    svc2F3: "تقارير ومتابعة المبيعات",
    svc3Title: "حلول التجارة الإلكترونية",
    svc3Desc: "استراتيجيات عملية لزيادة التحويلات، تحسين رحلة العميل، وأتمتة التسويق والبريد.",
    svc3F1: "تحليل سلوك المستخدم",
    svc3F2: "أتمتة البريد والسلال المتروكة",
    svc3F3: "تكامل الشحن والمرتجعات",
    svc4Title: "مواقع خاصة ومخصصة",
    svc4Desc: "حلول موجهة لاحتياجك: مواقع شخصية، شركات ناشئة، سيرة ذاتية تفاعلية، ولوحات إدارة فريدة.",
    svc4F1: "تصميم بحسب الهوية",
    svc4F2: "لوحات تحكم سهلة",
    svc4F3: "إضافات مميزة مثل ساعة وإحصائيات",
    portfolioTitle: "أعمالي السابقة",
    work1Title: "موقع شركة توريد معدات",
    work1Story:
      "صممت الموقع بهوية داكنة ولمعة ذهبية، ركزت على عرض المنتجات ببطاقات واضحة وسهلت التواصل بنموذج فوري وزر واتساب. حَسّنت الصور وضغطتها، وربطت الصفحات بمسارات بسيطة علشان العميل يوصل بسرعة للمنتج ويطلبه بدون تعقيد.",
    work2Title: "متجر ملابس عصري",
    work2Story:
      "استخدمت ألوان مرحة مع تباين قوي، بنيت سلة مشتريات سريعة، وطبّقت فلاتر ذكية حسب المقاس واللون. اختبرت تجربة المستخدم على الموبايل وقللت عدد النقرات لحد الشراء، ودمجت كوبونات خصم لمضاعفة المبيعات.",
    work3Title: "موقع شخصي لمصور",
    work3Story:
      "ركزت على إبراز الأعمال بصور كبيرة وسلايدر ناعم، مع صفحة نبذة مختصرة وحجز جلسات مباشرة. ضفت حماية للصور وعلامة مائية خفيفة، واهتميت بسرعة التحميل وتحسين الظهور في البحث.",
    ecomTitle: "حلول التجارة الإلكترونية",
    ecom1Title: "تحويلات أعلى",
    ecom1Desc: "خرّطت رحلة العميل خطوة بخطوة، قللت مصادر التشتت، واستخدمت دعوات إجراء واضحة، مع اختبار A/B لتحسين الصفحات.",
    ecom2Title: "تكامل دفع وشحن",
    ecom2Desc: "جهزت بوابات دفع متعددة وخطوات دفع مختصرة، وربطت الشحن بتتبع مباشر ورسائل تأكيد تلقائية.",
    ecom3Title: "أتمتة تسويقية",
    ecom3Desc: "بنيت حملات بريدية للسلال المتروكة، وقسمت العملاء لشرائح، وربطت المتجر بأدوات تحليلات دقيقة لاتخاذ قرارات سريعة.",
    customTitle: "مواقع خاصة ومصممة حسب الطلب",
    custom1Title: "موقع شخصي/سيرة ذاتية",
    custom1Desc: "عرض أعمالك بأسلوب نظيف وجذاب، مع قسم نبذة، مهارات، واتصال مباشر. ألوان متوازنة ولمعة خفيفة تعكس هويتك.",
    custom2Title: "موقع شركة ناشئة",
    custom2Desc: "صفحة طويلة واضحة تحكي القصة، تعرض المزايا، شهادات العملاء، وخريطة تواصل. جاهزة للتوسّع مستقبلاً.",
    custom3Title: "لوحة تحكم بسيطة",
    custom3Desc: "واجهة منظمة لإدارة المحتوى أو الطلبات، مؤشرات أداء فورية، وسهولة استخدام بدون تعقيد.",
    ctaTitle: "جاهز تبني موقع أقوى من منافسيك؟",
    ctaDesc: "خليني أجهّزلك واجهة أنضف وألوان أحلى ولمعان مميز، مع زر ترجمة وساعة إلكترونية وإضافات فريدة.",
    ctaBtn: "تواصل دلوقتي",
    contactTitle: "تواصل",
    contactNameLabel: "الاسم",
    contactEmailLabel: "البريد الإلكتروني",
    contactMsgLabel: "رسالتك",
    contactNamePh: "اسمك",
    contactEmailPh: "email@example.com",
    contactMsgPh: "احكي طلبك بالتفصيل",
    contactBtn: "إرسال",
    footerBrand: "خدماتي من خدمات أبو الدهب",
    footerText: "نبني مواقع تِكسب ثقة وتبيع بذكاء",
  },
  en: {
    siteTitle: "My Services by Abu ElDahab",
    siteSubtitle: "We design and develop sites that build trust and sell smart",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navEcom: "E-commerce Solutions",
    navCustom: "Custom Sites",
    navContact: "Contact",
    heroTitle: "Your site isn’t just a look—it’s a full experience that grows your business",
    heroText: "From idea to launch, I build step by step: speed, security, UX, and high conversions.",
    heroBtn1: "Start now",
    heroBtn2: "See my work",
    servicesTitle: "Services",
    svc1Title: "Professional Website Design",
    svc1Desc: "Glossy interfaces, harmonious colors, and smooth UX, fully responsive with great load speed.",
    svc1F1: "Compelling landing pages",
    svc1F2: "Speed and SEO optimization",
    svc1F3: "Contact forms and WhatsApp integration",
    svc2Title: "Online Stores",
    svc2Desc: "Fast and secure stores with cart, payments, order tracking, and simple checkout.",
    svc2F1: "Product and discount management",
    svc2F2: "Multiple payment gateways",
    svc2F3: "Sales tracking and reports",
    svc3Title: "E-commerce Solutions",
    svc3Desc: "Practical strategies for higher conversions, better journeys, and automated marketing.",
    svc3F1: "User behavior analytics",
    svc3F2: "Email automation and abandoned carts",
    svc3F3: "Shipping and returns integration",
    svc4Title: "Custom and Private Websites",
    svc4Desc: "Tailored solutions: personal sites, startups, interactive resumes, unique dashboards.",
    svc4F1: "Identity-based design",
    svc4F2: "Easy admin panels",
    svc4F3: "Special add-ons like clock and stats",
    portfolioTitle: "My Past Work",
    work1Title: "Equipment Supply Company Site",
    work1Story:
      "I designed a dark identity with golden sheen, focused on clear product cards and instant contact via form and WhatsApp. I optimized and compressed images, and simplified paths so clients reach products and order quickly.",
    work2Title: "Trendy Clothing Store",
    work2Story:
      "I used playful colors with strong contrast, built a fast cart, and applied smart filters by size and color. I tested mobile UX to reduce clicks to purchase, and added discount coupons to boost sales.",
    work3Title: "Photographer’s Personal Site",
    work3Story:
      "I highlighted work with large images and a smooth slider, with an about page and direct session booking. I added light watermarks and improved speed and search visibility.",
    ecomTitle: "E-commerce Solutions",
    ecom1Title: "Higher Conversions",
    ecom1Desc: "I mapped the customer journey, reduced distractions, used clear CTAs, and A/B tested pages.",
    ecom2Title: "Payments & Shipping",
    ecom2Desc: "I set multiple gateways, streamlined checkout, and integrated tracking with auto confirmations.",
    ecom3Title: "Marketing Automation",
    ecom3Desc: "I built email campaigns for abandoned carts, segmented customers, and connected analytics.",
    customTitle: "Custom, Made-to-Order Sites",
    custom1Title: "Personal/Resume Site",
    custom1Desc: "Showcase your work cleanly with bio, skills, and direct contact. Balanced colors and subtle gloss.",
    custom2Title: "Startup Website",
    custom2Desc: "Long, clear story page with benefits, testimonials, and contact map. Ready to scale.",
    custom3Title: "Simple Dashboard",
    custom3Desc: "Organized interface for content or orders, instant KPIs, and easy use without complexity.",
    ctaTitle: "Ready to build a site stronger than your competitors?",
    ctaDesc: "I’ll craft cleaner UI, better colors and shine, with translation button, clock, and unique add-ons.",
    ctaBtn: "Contact now",
    contactTitle: "Contact",
    contactNameLabel: "Name",
    contactEmailLabel: "Email",
    contactMsgLabel: "Your message",
    contactNamePh: "Your name",
    contactEmailPh: "email@example.com",
    contactMsgPh: "Describe your request in detail",
    contactBtn: "Send",
    footerBrand: "My Services by Abu ElDahab",
    footerText: "We build sites that earn trust and sell smart",
  }
};

// حالة اللغة
let currentLang = 'ar';

function applyTranslations(lang) {
  const strings = i18nStrings[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // النصوص
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key]) el.textContent = strings[key];
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (strings[key]) el.setAttribute('placeholder', strings[key]);
  });

  // زر الترجمة: إظهار النص المناسب
  document.querySelectorAll('#translateBtn .lang-ar, #translateBtn .lang-en')
    .forEach(span => span.style.display = 'none');
  document.querySelector(`#translateBtn .lang-${lang === 'ar' ? 'en' : 'ar'}`).style.display = 'inline';
}

document.getElementById('translateBtn').addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  applyTranslations(currentLang);
});

// تفعيل الترجمة عند التحميل
applyTranslations(currentLang);

// نموذج التواصل (تحقق بسيط)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = currentLang === 'ar'
      ? 'من فضلك أكمل الحقول المطلوبة.'
      : 'Please complete all required fields.';
    formStatus.className = 'form-status error';
    return;
  }

  // مكان الإرسال الفعلي: AJAX أو خدمة بريد — حالياً عرض رسالة نجاح
  formStatus.textContent = currentLang === 'ar'
    ? 'تم إرسال رسالتك بنجاح. هتواصل معاك قريب.'
    : 'Your message was sent successfully. I’ll contact you soon.';
  formStatus.className = 'form-status success';

  contactForm.reset();
});
