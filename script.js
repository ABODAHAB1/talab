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

  document.querySelector('.brand-title').textContent = 'Abou El Dahab Store';
  document.querySelector('.brand-sub').textContent =
    currentLang === 'ar'
      ? 'مكان واحد لكل خدمات المواقع — بنسلم بسرعة وبجودة.'
      : 'One place for your website services — fast delivery, solid quality.';
  document.querySelector('.hero-title').textContent =
    currentLang === 'ar' ? 'خدمات إنشاء مواقع الويب' : 'Website creation services';
  document.querySelector('.hero-desc').textContent =
    currentLang === 'ar'
      ? 'اختر الباقة أو الخدمة المناسبة لك، واضغط "اطلب الآن".'
      : 'Pick a package or service, tap “Order Now”.';

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.textContent = currentLang === 'ar' ? 'اطلب الآن' : 'Order now';
  });

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

    const service = btn.closest('.card')?.querySelector('h4')?.textContent || 'خدمة';
    const price = btn.closest('.card')?.querySelector('p')?.textContent || '';
    document.getElementById('modalTitle').textContent = `طلب: ${service}`;
    document.getElementById('notes').placeholder = `تفاصيل إضافية (${price})`;
  });
});
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.style.display = 'none';
});
window.addEventListener
