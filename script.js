// Translation strings
const strings = {
  ar: {
    brand: 'استور أبو الدهب',
    brand_sub: 'مكان واحد لكل خدماتك',
    nav_market: 'السوق',
    nav_pricing: 'الخطط والأسعار',
    nav_contact: 'تواصل معنا',
    btn_back: 'رجوع',

    hero_title: 'خدمات تطوير مواقع احترافية',
    hero_desc: 'اختر الخطة المناسبة، وبعد الطلب نحدد معك الصفحات والألوان والنماذج بالتفصيل قبل البدء.',
    enter_market: 'ادخل السوق',

    free_title: 'خطط بدومين مجاني',
    paid_title: 'خطط بدومين مدفوع',
    market_sub: 'اختر الباقة التي تناسبك، وبعد طلبها يتواصل معك فني التنفيذ لتحديد التفاصيل.',

    plan_basic: 'عادي',
    plan_pro: 'مميز',
    plan_special: 'مخصص',

    plan_basic_title: 'موقع لفريقي بسيط',
    plan_pro_title: 'موقع تعريفي متكامل',
    plan_special_title: 'موقع شركة أو خدمات',

    paid_basic_title: 'موقع كبير أو كتالوج',
    paid_pro_title: 'متجر متقدم أو نظام بسيط',
    paid_special_title: 'نظام طلبات أو محجوزات',

    brief_free: 'بدون دومين',
    brief_paid: 'بدومين',

    deliver_2d: 'التسليم: ٢ أيام',
    deliver_4d: 'التسليم: ٤ أيام',
    deliver_7d: 'التسليم: ٧ أيام',
    deliver_10d: 'التسليم: ١٠ أيام',

    order_service: 'طلب الخطة',

    // Features
    feat_pages3: 'من 3 صفحات',
    feat_pages6: 'حتى 6 صفحات',
    feat_pages8: 'حتى 8 صفحات',
    feat_responsive: 'تصميم متجاوب',
    feat_whatsapp: 'واتساب مباشر',
    feat_seo_basic: 'تهيئة سيو أساسي',
    feat_identity: 'هوية ألوان وخطوط',
    feat_contact_map: 'صفحة تواصل وخريطة',
    feat_speed: 'تحسين سرعة وتحميل',
    feat_services_section: 'قسم خدمات/أعمال',
    feat_form_advanced: 'نموذج تواصل متقدم',
    feat_seo_pages: 'تحسين سيو للصفحات',
    feat_all_from_pro: 'كل ميزات خطة مميز',
    feat_free_domain: 'دومين مجاني',

    feat_multi_sections: 'أقسام متعددة المستوى',
    feat_custom_forms: 'نماذج طلب حسب الطلب',
    feat_cart: 'سلة مشتريات كاملة',
    feat_coupons: 'كوبونات وخصومات',
    feat_orders_tracking: 'متابعة الطلبات',
    feat_admin_panel: 'لوحة إدارة الطلبات',
    feat_reports_simple: 'تقارير بسيطة',

    feat_booking_forms: 'نماذج طلبات ومحجوزات',
    feat_whatsapp_confirm: 'تأكيدات واتساب أو العمل',
    feat_seo_products: 'تهيئة سيو للمنتجات',
    feat_company_design: 'تصميم شركة وتحصيل',

    footer_note: 'جميع الحقوق محفوظة - استور أبو الدهب ©'
  },
  en: {
    brand: 'Abd El Dahab Store',
    brand_sub: 'One place for all your services',
    nav_market: 'Market',
    nav_pricing: 'Plans & Pricing',
    nav_contact: 'Contact us',
    btn_back: 'Back',

    hero_title: 'Professional website development services',
    hero_desc: 'Pick a plan; after ordering, we confirm pages, colors, and forms before starting.',
    enter_market: 'Enter the market',

    free_title: 'Free domain plans',
    paid_title: 'Paid domain plans',
    market_sub: 'Pick the plan you prefer; a specialist will contact you to finalize details.',

    plan_basic: 'Basic',
    plan_pro: 'Pro',
    plan_special: 'Custom',

    plan_basic_title: 'Simple team website',
    plan_pro_title: 'Full profile website',
    plan_special_title: 'Company or services website',

    paid_basic_title: 'Large website or catalog',
    paid_pro_title: 'Advanced store or simple system',
    paid_special_title: 'Orders or bookings system',

    brief_free: 'Free domain',
    brief_paid: 'Paid domain',

    deliver_2d: 'Delivery: 2 days',
    deliver_4d: 'Delivery: 4 days',
    deliver_7d: 'Delivery: 7 days',
    deliver_10d: 'Delivery: 10 days',

    order_service: 'Order plan',

    // Features
    feat_pages3: '3 pages',
    feat_pages6: 'Up to 6 pages',
    feat_pages8: 'Up to 8 pages',
    feat_responsive: 'Responsive design',
    feat_whatsapp: 'Direct WhatsApp',
    feat_seo_basic: 'Basic SEO setup',
    feat_identity: 'Color & font identity',
    feat_contact_map: 'Contact page & map',
    feat_speed: 'Speed & loading optimization',
    feat_services_section: 'Services/Portfolio section',
    feat_form_advanced: 'Advanced contact form',
    feat_seo_pages: 'Page-level SEO',
    feat_all_from_pro: 'All Pro plan features',
    feat_free_domain: 'Free domain included',

    feat_multi_sections: 'Multi-level sections',
    feat_custom_forms: 'Custom request forms',
    feat_cart: 'Full shopping cart',
    feat_coupons: 'Coupons & discounts',
    feat_orders_tracking: 'Order tracking',
    feat_admin_panel: 'Orders admin panel',
    feat_reports_simple: 'Basic reports',

    feat_booking_forms: 'Booking/request forms',
    feat_whatsapp_confirm: 'WhatsApp or on-site confirmations',
    feat_seo_products: 'Product SEO setup',
    feat_company_design: 'Company design & collection',

    footer_note: 'All rights reserved - Abd El Dahab Store ©'
  }
};

let currentLang = 'ar';

function setLanguage(lang) {
  currentLang = lang;
  // Update dir and lang on <html>
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = strings[lang][key];
    if (typeof text === 'string') {
      el.textContent = text;
    }
  });

  // Update toggle button label
  const toggle = document.getElementById('langToggle');
  toggle.textContent = lang === 'ar' ? 'EN' : 'AR';
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize language
  setLanguage(currentLang);

  // Toggle handler
  const toggle = document.getElementById('langToggle');
  toggle.addEventListener('click', () => {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
  });

  // Example handler for ordering buttons (no backend)
  document.querySelectorAll('.pkg-order').forEach(btn => {
    btn.addEventListener('click', () => {
      const level = btn.getAttribute('data-level');
      const msg = currentLang === 'ar'
        ? `تم اختيار الخطة: ${level}. سنتواصل معك لتأكيد التفاصيل.`
        : `Selected plan: ${level}. We will contact you to confirm details.`;
      alert(msg);
    });
  });
});
