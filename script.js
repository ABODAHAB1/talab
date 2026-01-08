const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

searchBtn.addEventListener('click', getData);

async function getData() {
    const city = cityInput.value.trim();
    if (!city) return alert("من فضلك اكتب اسم مدينة");

    const resultCard = document.getElementById('resultCard');
    const errorMsg = document.getElementById('errorMsg');
    const loader = document.getElementById('loader');

    resultCard.style.display = 'none';
    errorMsg.innerText = '';
    loader.style.display = 'block';

    try {
        // 1. جلب بيانات الدولة للحصول على الإحداثيات (مجاني تماماً)
        const countryRes = await fetch(`restcountries.com{city}?fullText=true`);
        const countryData = await countryRes.json();
        
        if (countryData.status === 404) throw new Error("المدينة/الدولة غير موجودة.");

        const lat = countryData[0].latlng[0];
        const lon = countryData[0].latlng[1];
        const countryInfo = countryData[0];
        const cityNameArabic = countryInfo.translations.ara.common;

        // 2. طلب بيانات الطقس من Open-Meteo (مجاني ولا يحتاج مفتاح)
        const weatherUrl = `api.open-meteo.com{lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        // 3. عرض البيانات في الصفحة
        document.getElementById('cityName').innerText = `${city}, ${cityNameArabic}`;
        document.getElementById('temp').innerText = `${Math.round(weatherData.current_weather.temperature)}°C`;
        document.getElementById('weatherDesc').innerText = "طقس اليوم"; // Open-Meteo يحتاج ربط Weather code بالوصف
        document.getElementById('weatherIcon').src = `openweathermap.org`; // استخدم أيقونة افتراضية أو ابحث عن ربط
        document.getElementById('countryFlag').src = countryInfo.flags.svg;
        
        document.getElementById('countryName').innerText = cityNameArabic;
        document.getElementById('capital').innerText = countryInfo.capital;
        document.getElementById('population').innerText = countryInfo.population.toLocaleString('ar-EG');
        document.getElementById('timezone').innerText = weatherData.timezone;

        loader.style.display = 'none';
        resultCard.style.display = 'block';

    } catch (error) {
        loader.style.display = 'none';
        errorMsg.innerText = "⚠️ خطأ: " + error.message;
    }
}

// البحث عند الضغط على Enter
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getData();
});
