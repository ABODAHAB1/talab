// النصوص باللغتين
const translations = {
  ar: {
    search: "ابحث",
    placeholder: "اكتب اسم المدينة...",
    location: "📍",
    humidity: "الرطوبة",
    wind: "سرعة الرياح",
    pressure: "الضغط الجوي",
    statusSearch: "جارِ البحث عن المدينة...",
    statusWeather: "جارِ جلب حالة الطقس...",
    notFound: "لم يتم العثور على مدينة بهذا الاسم.",
    error: "حدث خطأ أثناء البحث. حاول مرة أخرى."
  },
  en: {
    search: "Get Weather",
    placeholder: "Enter city name...",
    location: "📍",
    humidity: "Humidity",
    wind: "Wind Speed",
    pressure: "Pressure",
    statusSearch: "Searching for city...",
    statusWeather: "Fetching weather...",
    notFound: "City not found.",
    error: "An error occurred. Try again."
  }
};

let currentLang = "ar";

// زر تبديل اللغة
document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyTranslations();
});

// تطبيق النصوص حسب اللغة
function applyTranslations() {
  const t = translations[currentLang];
  document.getElementById("searchBtn").textContent = t.search;
  document.getElementById("cityInput").placeholder = t.placeholder;
  document.getElementById("locationBtn").textContent = t.location;
  document.getElementById("labelHumidity").textContent = t.humidity;
  document.getElementById("labelWind").textContent = t.wind;
  document.getElementById("labelPressure").textContent = t.pressure;
}

// باقي الكود الخاص بالطقس (Open-Meteo API)
