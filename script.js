const apiKey = '2aa88303f9f750a28ef94e6d9ea2cee9'; // مفتاحك المقدم
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

searchBtn.addEventListener('click', getData);

async function getData() {
    const city = cityInput.value.trim();
    if (!city) return alert("من فضلك اكتب اسم مدينة");

    const resultCard = document.getElementById('resultCard');
    const errorMsg = document.getElementById('errorMsg');
    const loader = document.getElementById('loader');

    // تصفية النتائج السابقة
    resultCard.style.display = 'none';
    errorMsg.innerText = '';
    loader.style.display = 'block';

    try {
        // 1. طلب بيانات الطقس
        const weatherUrl = `api.openweathermap.org{city}&appid=${apiKey}&units=metric&lang=ar`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        if (weatherData.cod !== 200) {
            throw new Error("لم نجد المدينة، أو ربما المفتاح لم يتم تفعيله بعد من الشركة.");
        }

        // 2. طلب بيانات الدولة (مجاني بدون مفتاح)
        const countryCode = weatherData.sys.country;
        const countryRes = await fetch(`restcountries.com{countryCode}`);
        const countryData = await countryRes.json();
        const countryInfo = countryData[0];

        // 3. عرض البيانات في الصفحة
        document.getElementById('cityName').innerText = `${weatherData.name}, ${countryInfo.translations.ara.common}`;
        document.getElementById('temp').innerText = `${Math.round(weatherData.main.temp)}°C`;
        document.getElementById('weatherDesc').innerText = weatherData.weather[0].description;
        document.getElementById('weatherIcon').src = `openweathermap.org{weatherData.weather[0].icon}@2x.png`;
        document.getElementById('countryFlag').src = countryInfo.flags.svg;
        
        document.getElementById('countryName').innerText = countryInfo.translations.ara.common;
        document.getElementById('capital').innerText = countryInfo.capital[0];
        document.getElementById('population').innerText = countryInfo.population.toLocaleString('ar-EG');
        document.getElementById('timezone').innerText = countryInfo.timezones[0];

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
