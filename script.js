// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Tabs toggle
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const content = document.getElementById(target);
    if (content) content.classList.add('active');
  });
});

// Package select flow
document.querySelectorAll('[data-select]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const pkg = btn.getAttribute('data-select');
    // هنا نعرض الخطوات أو نفتح نموذج تفاصيل الباقة
    alert(`تم اختيار الباقة: ${pkg}\nسنحدد التفاصيل خطوة بخطوة، ونرسل لك ملخصًا قبل التنفيذ.`);
  });
});
