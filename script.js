// تم إضافة مفتاح الـ API الخاص بك هنا
const API_KEY = '2aa88303f9f750a28ef94e6d9ea2cee97';
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
    weatherDescriptionEl.textContent = data.weather.description; 
    weatherIconEl.src = `openweathermap.org{data.weather.icon}.png`;
    windSpeedEl.textContent = `${data.wind.speed} كم/س`;
    humidityEl.textContent = `${data.main.humidity}%`;
    pressureEl.textContent = `${data.main.pressure} hPa`;
}

function showError(message) {
    weatherResult.style.display = 'none';
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}
