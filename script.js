// هام جداً: استبدل YOUR_API_KEY بالمفتاح الخاص بك من OpenWeatherMap
const API_KEY = 'YOUR_API_KEY';
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');
const errorMessage = document.getElementById('error-message');

const cityNameEl = document.getElementById('city-name');
const temperatureEl = document.getElementById('temperature');
const weatherDescriptionEl = document.getElementById('weather-description');
const weatherIconEl = document.getElementById('weather-icon');
const windSpeedEl = document.getElementById('wind-speed');
const humidityEl = document.getElementById('humidity');
const pressureEl = document.getElementById('pressure');

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherData(city);
    } else {
        showError('الرجاء إدخال اسم المدينة.');
    }
});

async function getWeatherData(city) {
    // نطلب البيانات باللغة العربية والانجليزية معاً
    const API_URL = `api.openweathermap.org{city}&appid=${API_KEY}&units=metric&lang=ar`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        showError('عفواً، لم يتم العثور على المدينة المحددة أو حدث خطأ في مفتاح الـ API.');
    }
}

function displayWeatherData(data) {
    // إخفاء رسالة الخطأ وعرض النتائج
    errorMessage.style.display = 'none';
    weatherResult.style.display = 'block';

    cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
    temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;
    // الوصف يفضل جلبه من أول عنصر في مصفوفة الطقس
    weatherDescriptionEl.textContent = data.weather[0].description; 
    weatherIconEl.src = `openweathermap.org{data.weather[0].icon}.png`;
    windSpeedEl.textContent = `${data.wind.speed} كم/س`;
    humidityEl.textContent = `${data.main.humidity}%`;
    pressureEl.textContent = `${data.main.pressure} hPa`;
}

function showError(message) {
    weatherResult.style.display = 'none';
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}
