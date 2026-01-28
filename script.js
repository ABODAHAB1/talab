// قائمة الهامبرغر والتنقل
// =========================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
});

// إغلاق القائمة عند اختيار رابط (للشاشات الصغيرة)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 700) {
      navLinks.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// =========================
// التنقل السلس (Smooth Scroll)
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.focus({ preventScroll: true });
    }
  });
});

// =========================
// تحقق نموذج التواصل وحماية السبام
// =========================
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const websiteInput = document.getElementById('website'); // honeypot
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

function validateEmail(email) {
  // تحقق بسيط من البريد
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formSuccess.textContent = '';

  // honeypot: إذا تم ملء الحقل المخفي، تجاهل الإرسال
  if (websiteInput.value) {
    return;
  }

  // تحقق الاسم
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = 'يرجى إدخال اسم صحيح (3 أحرف على الأقل).';
    valid = false;
  }
  // تحقق البريد
  if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'يرجى إدخال بريد إلكتروني صحيح.';
    valid = false;
  }
  // تحقق الرسالة
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = 'يرجى كتابة رسالة واضحة (10 أحرف على الأقل).';
    valid = false;
  }

  if (valid) {
    // محاكاة إرسال ناجح (يمكن ربطها بـ API أو بريد إلكتروني)
    formSuccess.textContent = 'تم إرسال رسالتك بنجاح! سنعود إليك قريبًا.';
    contactForm.reset();
    setTimeout(() => {
      formSuccess.textContent = '';
    }, 6000);
  }
});

// =========================
// تبديل الوضع الداكن (اختياري)
// =========================
// يمكن إضافة زر في القائمة أو التذييل لتبديل الثيم
// مثال:
// const themeToggle = document.getElementById('themeToggle');
// themeToggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });
