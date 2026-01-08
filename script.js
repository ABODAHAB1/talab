// ✅ الساعة الثابتة
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent =
    now.toLocaleDateString('ar-EG', {weekday:'long', day:'numeric', month:'long', year:'numeric'}) +
    " — " +
    now.toLocaleTimeString('ar-EG', {hour:'2-digit', minute:'2-digit'});
}
setInterval(updateClock, 1000);
updateClock();

// ✅ ترجمة عربي/إنجليزي
let currentLang = 'ar';
document.getElementById('translateToggle').addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  document.getElementById('translateToggle').textContent = currentLang === 'ar' ? 'ترجمة' : 'Translate';

  // تغيير النصوص الأساسية
  document.querySelector('.brand-title').textContent = 'Abou El Dahab Store';
  document.querySelector('.brand-sub').textContent =
    currentLang === 'ar'
      ? 'مكان واحد لكل خدمات المواقع — بنسلم بسرعة وبجودة.'
      : 'One place for your website services — fast delivery, solid quality.';
  document.querySelector('.hero-title').textContent =
    currentLang === 'ar' ? 'خدمات إنشاء مواقع إلكترونية' : 'Website creation services';
  document.querySelector('.hero-desc').textContent =
    currentLang === 'ar'
      ? 'اختار الخدمة المناسبة لك، واضغط "اطلب الآن" علشان نحدد التفاصيل خطوة بخطوة ونراجعها قبل التنفيذ.'
      : 'Pick a service, tap “Order Now”, and we’ll finalize details step-by-step before execution.';

  // تغيير زر الطلب
  document.querySelectorAll('.order-btn, .open-modal').forEach(btn => {
    btn.textContent = currentLang === 'ar' ? 'اطلب الآن' : 'Order now';
  });

  // تغيير عنوان نافذة الطلب
  document.getElementById('modalTitle').textContent =
    currentLang === 'ar' ? 'طلب إنشاء موقع' : 'Request a website';
  document.querySelector('#requestForm .btn-primary').textContent =
    currentLang === 'ar' ? 'ارسل الطلب على واتساب' : 'Send request via WhatsApp';
  document.querySelector('.form-hint').textContent =
    currentLang === 'ar'
      ? 'سيتم تجميع البيانات وإرسالها لك بصيغة مرتبة للمراجعة قبل البدء.'
      : 'We will compile and send a structured summary for review before starting.';
});

// ✅ نافذة الطلب
const modal = document.getElementById('requestModal');
const closeBtn = document.querySelector('.modal-close');
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.style.display = 'block';

    // جلب تفاصيل الخدمة
    const service = btn.closest('.card')?.querySelector('.card-title')?.textContent || 'خدمة';
    const price = btn.closest('.card')?.querySelector('.card-desc')?.textContent || '';
    document.getElementById('modalTitle').textContent = `طلب: ${service}`;
    document.getElementById('notes').placeholder = `تفاصيل إضافية (${price})`;
  });
});
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
});

// ✅ إرسال الطلب على واتساب
document.getElementById('requestForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('clientName').value.trim();
  const wa = document.getElementById('whatsapp').value.trim();
  const notes = document.getElementById('notes').value.trim();

  const summary =
    (currentLang === 'ar'
      ? `طلب جديد من ${name}\n` +
        (notes ? `ملاحظات: ${notes}\n` : '') +
        `رقم واتساب: ${wa}\n` +
        `تم الإنشاء عبر Abou El Dahab Store`
      : `New request from ${name}\n` +
        (notes ? `Notes: ${notes}\n` : '') +
        `WhatsApp: ${wa}\n` +
        `Generated via Abou El Dahab Store`
    );

  // رقمك على واتساب (عدل هنا)
  const myNumber = '201000000000'; // صيغة دولية بدون +
  const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(summary)}`;
  window.open(url, '_blank');
});

// ✅ إغلاق النافذة بالـ Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
});
