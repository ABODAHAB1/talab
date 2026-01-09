// إعداد رابط تيليجرام
const TELEGRAM_USERNAME = "uuruuc";
const TELEGRAM_URL = `https://t.me/${TELEGRAM_USERNAME}`;

// توليد رسالة الطلب
function buildMessage({ plan, price, domain, delivery, pages, extra }) {
  const lines = [
    `مرحباً مازن 👋`,
    `أرغب في طلب خطة: ${plan}`,
    `السعر: ${price}`,
    `الدومين: ${domain}`,
    `التسليم: ${delivery}`,
    `عدد الصفحات/الوحدات: ${pages}`,
    `المميزات: ${extra}`,
    ``,
    `لو متاح أي إضافات أو عروض، أخبرني من فضلك.`,
    `شكراً لك.`,
  ];
  return lines.join("\n");
}

// نسخ إلى الحافظة
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    //Fallback قديم
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }
}

// إظهار توست
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// التعامل مع نقر زر "اطلب الخطة"
function handleCtaClick(e) {
  const btn = e.currentTarget;
  const payload = {
    plan: btn.dataset.plan,
    price: btn.dataset.price,
    domain: btn.dataset.domain,
    delivery: btn.dataset.delivery,
    pages: btn.dataset.pages,
    extra: btn.dataset.extra,
  };

  const message = buildMessage(payload);

  copyToClipboard(message).then((ok) => {
    if (ok) {
      showToast("تم نسخ تفاصيل الخطة. سيتم فتح محادثة تيليجرام الآن.");
    } else {
      showToast("تعذر النسخ تلقائياً. سيتم فتح تيليجرام—انسخ الرسالة يدوياً.");
    }
    // فتح محادثة تيليجرام
    window.open(TELEGRAM_URL, "_blank", "noopener");
  });
}

// تفعيل الأزرار
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cta").forEach((btn) => {
    btn.addEventListener("click", handleCtaClick);
  });
});
