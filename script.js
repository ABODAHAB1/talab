// إعدادات تلجرام
const TELEGRAM_USERNAME = "uuruuc"; // غيّرها إذا احتجت
const TELEGRAM_WEB_URL = `https://t.me/${TELEGRAM_USERNAME}`;

// قالب الرسالة الجاهزة
function buildMessage({ service, price, delivery, notes }) {
  const time = new Date().toLocaleString("ar-EG");
  return `مرحبا محمود،
أنا مهتم بخدمة: ${service}
السعر المعروض: ${price} EGP
مدة التنفيذ: ${delivery}
تفاصيل إضافية: ${notes}

لو مناسب نبدأ الإجراءات.
وقت الطلب: ${time}`;
}

// انسخ للنص للحافظة
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // fallback: أنشئ textarea مؤقت
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }
}

// إشعار بسيط
function showToast(msg = "تم نسخ الرسالة الجاهزة. سيفتح تلجرام الآن.") {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// افتح تلجرام
function openTelegram() {
  // يفتح رابط الويب—على الموبايل والكمبيوتر هيتحوّل لتطبيق تلجرام لو مثبت
  window.open(TELEGRAM_WEB_URL, "_blank", "noopener");
}

// ربط الأزرار
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".service-card .order-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const card = e.currentTarget.closest(".service-card");
      const payload = {
        service: card.dataset.service || card.querySelector("h3")?.textContent?.trim() || "خدمة",
        price: card.dataset.price || "—",
        delivery: card.dataset.delivery || "—",
        notes: card.dataset.notes || card.querySelector("p")?.textContent?.trim() || ""
      };

      const message = buildMessage(payload);
      const copied = await copyToClipboard(message);

      if (copied) {
        showToast();
      } else {
        showToast("انسخ الرسالة يدويًا بعد فتح تلجرام.");
      }

      openTelegram();
    });
  });
});
