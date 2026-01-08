const apiKey = '2aa88303f9f750a28ef94e6d9ea2cee9';
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
        // استخدام الوسيط (Proxy) لتجاوز خطأ CORS
        const proxy = 'https://corsproxy.io/?'; // وسيط مجاني يعمل
        const weatherUrl = `api.openweathermap.org{city}&appid=${apiKey}&units=metric&lang=ar`;
        
        const weatherRes = await fetch(proxy + encodeURIComponent(weatherUrl));
        const weatherData = await weatherRes.json();

        if (weatherData.cod !== 200) {
            throw new Error(`المدينة غير موجودة. رسالة الخطأ: ${weatherData.message}`);
        }

        // جلب بيانات الدولة (مجاني بدون مفتاح)
        const countryCode = weatherData.sys.country;
        const countryRes = await fetch(`restcountries.com{countryCode}`);
        const countryInfo = await countryRes.json();

        // عرض البيانات
        document.getElementById('cityName').innerText = `${weatherData.name}, ${countryInfo.translations.ara.common}`;
        document.getElementById('temp').innerText = `${Math.round(weatherData.main.temp)}°C`;
        document.getElementById('weatherDesc').innerText = weatherData.weather.description;
        document.getElementById('weatherIcon').src = `openweathermap.org{weatherData.weather.icon}@2x.png`;
        document.getElementById('countryFlag').src = countryInfo.flags.svg;
        
        document.getElementById('countryName').innerText = countryInfo.translations.ara.common;
        document.getElementById('capital').innerText = countryInfo.capital;
        document.getElementById('population').innerText = countryInfo.population.toLocaleString('ar-EG');
        document.getElementById('timezone').innerText = countryInfo.timezones;

        loader.style.display = 'none';
        resultCard.style.display = 'block';

    } catch (error) {
        loader.style.display = 'none';
        errorMsg.innerText = "⚠️ خطأ: " + error.message;
    }
}

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getData();
});
