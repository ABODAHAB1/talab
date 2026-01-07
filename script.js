const countries = {
  "مصر": { lat: 26.8206, lon: 30.8025 },
  "Egypt": { lat: 26.8206, lon: 30.8025 },
  "السعودية": { lat: 23.8859, lon: 45.0792 },
  "Saudi Arabia": { lat: 23.8859, lon: 45.0792 },
  "الجزائر": { lat: 28.0339, lon: 1.6596 },
  "Algeria": { lat: 28.0339, lon: 1.6596 },
  "المغرب": { lat: 31.7917, lon: -7.0926 },
  "Morocco": { lat: 31.7917, lon: -7.0926 },
  "تونس": { lat: 33.8869, lon: 9.5375 },
  "Tunisia": { lat: 33.8869, lon: 9.5375 },
  "العراق": { lat: 33.2232, lon: 43.6793 },
  "Iraq": { lat: 33.2232, lon: 43.6793 },
  "سوريا": { lat: 34.8021, lon: 38.9968 },
  "Syria": { lat: 34.8021, lon: 38.9968 },
  "لبنان": { lat: 33.8547, lon: 35.8623 },
  "Lebanon": { lat: 33.8547, lon: 35.8623 },
  "فلسطين": { lat: 31.9522, lon: 35.2332 },
  "Palestine": { lat: 31.9522, lon: 35.2332 }
};

const translations = {
  ar: {
    search: "ابحث",
    placeholder: "اكتب اسم المدينة أو الدولة...",
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
    placeholder: "Enter city or country...",
    location: "📍",
    humidity: "Humidity",
    wind: "Wind Speed",
    pressure: "Pressure",
    statusSearch: "Searching for location...",
    statusWeather: "Fetching weather...",
    notFound: "Location not found.",
    error: "An error occurred. Try again."
  }
};

let currentLang = "ar";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");
const langToggle = document.getElementById("langToggle");
const statusEl = document.getElementById("status");
const card = document.getElementById("weatherCard");
const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temperature");
const descEl = document.getElementById("weatherDesc");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const pressureEl = document.getElementById("pressure");

document.getElementById("labelHumidity").textContent = translations.ar.humidity;
document.getElementById("labelWind").textContent = translations.ar.wind;
document.getElementById("labelPressure").textContent = translations.ar.pressure;

searchBtn.addEventListener("click", () => {
  const name = cityInput.value.trim();
  if (!name) {
    showStatus("اكتب اسم المدينة أو الدولة أولًا.", "warn");
    return;
  }
  const match = countries[name];
  if (match) {
    fetchWeatherByCoords(match.lat, match.lon, name);
  } else {
    searchAsCity(name);
  }
});

locationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    showStatus("المتصفح لا يدعم تحديد الموقع.", "error");
    return;
  }
  showStatus("جارِ تحديد موقعك...", "info");
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      fetchWeatherByCoords(latitude, longitude, "موقعي الحالي");
    },
    () => showStatus("تعذر الحصول على الموقع.", "error"),
    { enableHighAccuracy: true, timeout: 10000 }
  );
});

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyTranslations();
});

function applyTranslations() {
  const t = translations[currentLang];
  searchBtn.textContent = t.search;
  cityInput.placeholder = t.placeholder;
  document.getElementById("locationBtn").textContent = t.location;
  document.getElementById("labelHumidity").textContent = t.humidity;
  document.getElementById("labelWind").textContent = t.wind;
  document.getElementById("labelPressure").textContent = t.pressure;
}

async function searchAsCity(name) {
  try {
    showStatus(translations[currentLang].statusSearch, "info");
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=1&language=${currentLang}&format=json`;
    const geoRes = await fetch(geoUrl);
    const geo = await geoRes.json();
    if (!geo.results || geo.results.length === 0) {
      showStatus(translations[currentLang].notFound, "error");
      return;
    }
    const place = geo.results[0];
    const cityLabel = `${place.name}, ${place.country}`;
    await fetchWeatherByCoords(place.latitude, place.longitude, cityLabel);
  } catch (e) {
    showStatus(translations[currentLang].error, "error");
  }
}

async function fetchWeatherByCoords(lat, lon, label) {
  try {
    showStatus(translations[currentLang].
