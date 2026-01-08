// Clock
function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent = `${hh}:${mm}:${ss}`;
}
setInterval(updateClock, 1000);
updateClock();

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Language strings
const strings = {
  ar: {
    title: "Mazen Abou El Dahab Store",
    clockLabel: "الساعة",
    langBtn: "English",
    brandTitle: "Mazen Abou El Dahab Store",
    brandSub: "ماركت خاص، والمبرمج مازن أبو الدهب، باسم",
    heroTitle: "Mazen Abou El Dahab Store",
    heroText:
      "مكان واحد لكل خدماتك. اضغط على ماركت، واختر الخدمة، وبعدها نحدد التفاصيل خطوة بخطوة.",
    enterMarket: "دخول الماركت",
    devInfoBtn: "معلومات للمبرمج",
    servicesLeftTitle: "الخدمات",
    servicesLeftDesc: "اضغط على أي خدمة علشان نحدد تفاصيلها",
    svcAutoPublish: "تنصيب حساب نشر تلقائي",
    svcAutoPublishDesc: "اعداد القنوات والجدولة",
    svcNftGift: "شراء هدية مطورة NFT",
    svcNftGiftDesc: "اختيار الهدية والتسليم",
    svcWebBuild: "خدمات انشاء مواقع الكترونية",
    svcWebBuildDesc: "موقع تعريفي أو متجر أو نظام طلبات",
    svcTgPremium: "شحن مميز تيليجرام بريميوم",
    svcTgPremiumDesc: "مدة الاشتراك والتفعيل",
    svcNumbersBot: "تنصيب بوت تخزين ارقام",
    svcNumbersBotDesc: "ارسل البوت والتوكن واثبات الدفع",
    svcCrypto: "شراء تون أو USDT أو ليرا أو كاش",
    svcCryptoDesc: "تحديد العملة وطريقة التسليم",
    svcCryptoSoon: "شراء تون أو USDT أو ليرا أو كاش — قريباً",
    svcNftGiftSoon: "شراء هدية مطورة NFT — قريباً",
    availableServicesMiddle: "اختيار خدمة",
    startBtn: "ابدأ",
    soonBtn: "قريباً",
    availableServicesRight: "الخدمات المتاحة",
    starsTopup: "شحن النجوم",
    starsTopupDesc: "اختيار الباقة وطريقة الدفع",
    starsWithdraw: "سحب النجوم من القنوات",
    starsWithdrawDesc: "تحديد القناة والكمية",
    nftUser: "شراء يوزرات NFT",
    nftUserDesc: "بحث عن يوزر وتأكيد الشراء",
    webPlansTitle: "خدمات انشاء مواقع الكترونية",
    deliverOnRequest: "تسليم حسب الطلب",
    briefFree: "حفظ بريف مجاني",
    briefPaid: "دفع بريف مدفوع",
    catFreeBrief: "عادي - مميز - متخصص (بريف مجاني)",
    freeBrief: "بريف مجاني",
    proInformative: "متخصص موقع تعريفي + خدمات",
    premInformative: "مميز موقع تعريفي متكامل",
    stdInformative: "عادي موقع تعريفي بسيط",
    price: "السعر:",
    delivery: "التسليم:",
    f6pages: "✔ حتى 6 صفحات",
    fServicesPortfolio: "✔ قسم خدمات + أعمال",
    fAdvContact: "✔ نموذج تواصل متقدم",
    fSeoPages: "✔ تحسين سيو الصفحات",
    f5pages: "✔ حتى 5 صفحات",
    fBranding: "✔ هوية ألوان وخطوط",
    fContactMap: "✔ نموذج تواصل + خريطة",
    fPerf: "✔ تحسين سرعة وتحميل",
    f3pages: "✔ حتى 3 صفحات",
    fResponsive: "✔ تصميم بسيط متجاوب",
    fWhatsappReply: "✔ رد واتساب مباشر",
    fSeoBasic: "✔ تهيئة سيو أساسي",
    catPaidBrief: "عادي - مميز - متخصص (بريف مدفوع)",
    paidBrief: "بريف مدفوع",
    proRequests: "متخصص نظام تقارير وطلبات",
    premRequests: "مميز نظام تقارير وطلبات متوسط",
    stdCatalog: "عادي موقع كبير كاتلوج",
    fForms: "✔ نماذج تقارير وطلبات",
    fEmail: "✔ إدخالات وربط إيميل",
    fOrdersBoard: "✔ لوحة الطلبات",
    fSimpleReports: "✔ تقارير بسيطة",
    fFullMisc: "✔ لوحة متفرقات كاملة",
    fAlerts: "✔ تنبيهات حسب الطلب",
    f12pages: "✔ حتى 12 صفحة",
    fMultiSections: "✔ أقسام متعددة للمحتوى",
    fCustomForms: "✔ نماذج تواصل حسب الطلب",
    extraCatsTitle: "تصنيفات إضافية لخدمات إنشاء المواقع",
    catEcommerce: "المتاجر الإلكترونية",
    catBlogsNews: "المدونات والمواقع الإخبارية",
    catEduPlatforms: "منصات التعليم",
    catPersonalSites: "المواقع الشخصية",
    catGovService: "المواقع الحكومية والخدمية",
    catSocialPlatforms: "منصات التواصل الاجتماعي",
    catBookingService: "مواقع الحجوزات والخدمات",
    catHostingMgmt: "إدارة الاستضافة والنشر",
    catServerDev: "برمجة الخوادم",
    requestTitle: "طلب إنشاء موقع",
    yourName: "اسمك",
    whatsapp: "رقم واتساب",
    siteType: "نوع الموقع",
    siteTypeCompany: "شركة/مؤسسة",
    siteTypeEcommerce: "متجر إلكتروني",
    siteTypeBlog: "مدونة/إخباري",
    siteTypePersonal: "شخصي",
    siteTypeEdu: "تعليمي",
    siteTypeGov: "حكومي/خدمي",
    siteTypeBooking: "حجوزات/خدمات",
    siteTypeSocial: "منصة تواصل",
    visibility: "الظهور في جوجل",
    visibilityTrial: "تجريبي — لا تظهر في نتائج جوجل",
    visibilityIndex: "مفهرس — تظهر في نتائج جوجل",
    levelPlan: "المستوى والخطة",
    planStd: "عادي — 1990 — 3 أيام",
    planPrem: "مميز — 3490 — 4 أيام",
    planPro: "متخصص — 5490 — 6 أيام",
    planSysMid: "نظام متوسط — 9990 — 7 أيام",
    planSysPro: "نظام متقدم — 12990 — 10 أيام",
    notes: "ملاحظات",
    collectDataNote:
      "سيتم تجميع البيانات وارسالها لك بصيغة مرتبة للمراجعة قبل البدء.",
    sendWhatsapp: "ارسل الطلب على واتساب",
    devInfoTitle: "معلومات للمبرمج",
    devInfoText:
      "هذا الموقع نسخة مخصصة باسم مازن أبو الدهب مع دعم اللغة والساعة الثابتة، وتجميع الطلبات عبر واتساب."
  },
  en: {
    title: "Mazen Abou El Dahab Store",
    clockLabel: "Time",
    langBtn: "العربية",
    brandTitle: "Mazen Abou El Dahab Store",
    brandSub: "Private market, developer Mazen Abou El Dahab",
    heroTitle: "Mazen Abou El Dahab Store",
    heroText:
      "One place for all your services. Enter the market, choose a service, then we define details step by step.",
    enterMarket: "Enter market",
    devInfoBtn: "Developer info",
    servicesLeftTitle: "Services",
    servicesLeftDesc: "Click any service to define its details",
    svcAutoPublish: "Auto-publish account setup",
    svcAutoPublishDesc: "Channels setup and scheduling",
    svcNftGift: "Buy advanced NFT gift",
    svcNftGiftDesc: "Choose gift and delivery",
    svcWebBuild: "Electronic website creation",
    svcWebBuildDesc: "Company site, store, or requests system",
    svcTgPremium: "Telegram Premium top-up",
    svcTgPremiumDesc: "Subscription duration and activation",
    svcNumbersBot: "Numbers-storage bot install",
    svcNumbersBotDesc: "Send bot, token, and payment proof",
    svcCrypto: "Buy TON, USDT, Lira or Cash",
    svcCryptoDesc: "Choose currency and delivery method",
    svcCryptoSoon: "Buy TON, USDT, Lira or Cash — soon",
    svcNftGiftSoon: "Advanced NFT gift — soon",
    availableServicesMiddle: "Choose a service",
    startBtn: "Start",
    soonBtn: "Soon",
    availableServicesRight: "Available services",
    starsTopup: "Stars top-up",
    starsTopupDesc: "Choose package and payment method",
    starsWithdraw: "Withdraw stars from channels",
    starsWithdrawDesc: "Choose channel and amount",
    nftUser: "Buy NFT usernames",
    nftUserDesc: "Search username and confirm purchase",
    webPlansTitle: "Electronic website creation services",
    deliverOnRequest: "Deliver on request",
    briefFree: "Save free brief",
    briefPaid: "Paid brief",
    catFreeBrief: "Standard - Premium - Specialized (Free brief)",
    freeBrief: "Free brief",
    proInformative: "Specialized informative + services website",
    premInformative: "Premium complete informative website",
    stdInformative: "Standard simple informative website",
    price: "Price:",
    delivery: "Delivery:",
    f6pages: "✔ Up to 6 pages",
    fServicesPortfolio: "✔ Services + portfolio section",
    fAdvContact: "✔ Advanced contact form",
    fSeoPages: "✔ On-page SEO",
    f5pages: "✔ Up to 5 pages",
    fBranding: "✔ Color & font identity",
    fContactMap: "✔ Contact form + map",
    fPerf: "✔ Performance optimization",
    f3pages: "✔ Up to 3 pages",
    fResponsive: "✔ Simple responsive design",
    fWhatsappReply: "✔ Direct WhatsApp reply",
    fSeoBasic: "✔ Basic SEO setup",
    catPaidBrief: "Standard - Premium - Specialized (Paid brief)",
    paidBrief: "Paid brief",
    proRequests: "Specialized reports & requests system",
    premRequests: "Premium mid-level reports & requests system",
    stdCatalog: "Standard large catalog website",
    fForms: "✔ Reports & requests forms",
    fEmail: "✔ Inputs & email integration",
    fOrdersBoard: "✔ Orders dashboard",
    fSimpleReports: "✔ Simple reports",
    fFullMisc: "✔ Full misc dashboard",
    fAlerts: "✔ Custom alerts",
    f12pages: "✔ Up to 12 pages",
    fMultiSections: "✔ Multiple content sections",
    fCustomForms: "✔ Custom contact forms",
    extraCatsTitle: "Additional categories for site services",
    catEcommerce: "E-commerce stores",
    catBlogsNews: "Blogs & news sites",
    catEduPlatforms: "Education platforms",
    catPersonalSites: "Personal websites",
    catGovService: "Government & service sites",
    catSocialPlatforms: "Social media platforms",
    catBookingService: "Booking & services sites",
    catHostingMgmt: "Hosting management & publishing",
    catServerDev: "Server programming",
    requestTitle: "Website request",
    yourName: "Your name",
    whatsapp: "WhatsApp number",
    siteType: "Site type",
    siteTypeCompany: "Company/Organization",
    siteTypeEcommerce: "E-commerce store",
    siteTypeBlog: "Blog/News",
    siteTypePersonal: "Personal",
    siteTypeEdu: "Educational",
    siteTypeGov: "Government/Service",
    siteTypeBooking: "Booking/Services",
    siteTypeSocial: "Social platform",
    visibility: "Google visibility",
    visibilityTrial: "Trial — Do not appear in Google results",
    visibilityIndex: "Indexed — Appear in Google results",
    levelPlan: "Level & plan",
    planStd: "Standard — 1990 — 3 days",
    planPrem: "Premium — 3490 — 4 days",
    planPro: "Specialized — 5490 — 6 days",
    planSysMid: "System (mid) — 9990 — 7 days",
    planSysPro: "System (pro) — 12990 — 10 days",
    notes: "Notes",
    collectDataNote:
      "Your data will be compiled and sent for review before we start.",
    sendWhatsapp: "Send request on WhatsApp",
    devInfoTitle: "Developer info",
    devInfoText:
      "This site is a customized clone with your name, language toggle, fixed clock, and WhatsApp request compilation."
  }
};

let currentLang = "ar";
function applyLang(lang) {
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  currentLang = lang;
  const map = strings[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (map[key]) {
      el.textContent = map[key];
    }
  });
  document.title = map.title || document.title;
  // Keep inputs placeholders sensible after switch (optional: leave as-is)
}
document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(currentLang === "ar" ? "en" : "ar");
});
applyLang("ar");

// WhatsApp submission
document.getElementById("sendWhatsApp").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const wa = document.getElementById("whatsapp").value.trim();
  const siteType = document.getElementById("siteType").value;
  const vis = document.getElementById("visibility").value;
  const plan = document.getElementById("plan").value;
  const notes = document.getElementById("notes").value.trim();

  const langMap = strings[currentLang];

  const lines = [
    `${langMap.requestTitle}:`,
    `${langMap.yourName} : ${name || "-"}`,
    `${langMap.whatsapp} : ${wa || "-"}`,
    `${langMap.siteType} : ${siteType}`,
    `${langMap.visibility} : ${vis}`,
    `${langMap.levelPlan} : ${plan}`,
    `${langMap.notes} : ${notes || "-"}`,
  ];

  const text = encodeURIComponent(lines.join("\n"));
  // Replace with your WhatsApp number (international format) when ready:
  const targetNumber = "201000000000"; // Example: 20 + number for Egypt
  const url = `https://wa.me/${targetNumber}?text=${text}`;
  window.open(url, "_blank");
});
