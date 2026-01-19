// تحديث الساعة والتاريخ
function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").textContent =
    now.toLocaleString("ar-EG", { hour12: false });
}
setInterval(updateDateTime, 1000);

// زر الترجمة (تجريبي)
document.getElementById("translateBtn").addEventListener("click", () => {
  alert("ميزة الترجمة هتضاف قريب 🔄");
});

// زر طلب الخدمة
document.querySelectorAll(".orderBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("orderForm").scrollIntoView({ behavior: "smooth" });
  });
});

// إرسال النموذج (تجريبي)
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("تم إرسال الطلب ✅ سيتم التواصل معك قريباً");
});
