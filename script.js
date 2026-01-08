// الساعة
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent =
    now.toLocaleDateString() + " — " + now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// إظهار النموذج عند طلب الخدمة
document.querySelectorAll('.pkg-order').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('request').style.display = 'block';
    document.getElementById('request').scrollIntoView({behavior:'smooth'});
  });
});

// إرسال الطلب على واتساب
document.getElementById('sendWhatsApp').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const wa = document.getElementById('whatsapp').value;
  const type = document.getElementById('type').value;
  const vis = document.querySelector('input[name="visibility"]:checked').value;
  const notes = document.getElementById('notes').value;

  const msg = `طلب إنشاء موقع — ABODAHAB Store
الاسم: ${name}
واتساب: ${wa}
النوع: ${type}
الظهور في جوجل: ${vis}
ملاحظات: ${notes}`;

  const url = `https://wa.me/${wa}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});

// زر اللغة
const strings = {
  ar: { market: "خدمات إنشاء مواقع إلكترونية", send: "إرسال الطلب على واتساب" },
  en: { market: "Website creation services", send: "Send request on WhatsApp" }
};
document.getElementById('langToggle').addEventListener('click', () => {
  const lang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = lang;
  document.querySelector('#market h2').textContent = strings[lang].market;
  document.getElementById('sendWhatsApp').textContent = strings[lang].send;
});
