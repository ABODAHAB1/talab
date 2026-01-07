const apiKey = "ضع مفتاح الـ API هنا"; // من OpenWeather أو أي خدمة أخرى

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  getWeather(city);
});

document.getElementById("locationBtn").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCoords(lat, lon);
    });
  }
});

function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ar`)
    .then(response => response.json())
    .then(data => displayWeather(data));
}

function getWeatherByCoords(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ar`)
    .then(response => response.json())
    .then(data => displayWeather(data));
}

function displayWeather(data) {
  document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
  document.getElementById("weatherDesc").textContent = data.weather[0].description;
  document.getElementById("humidity").textContent = `${data.main.humidity}%`;
  document.getElementById("wind").textContent = `${data.wind.speed} كم/ساعة`;
  document.getElementById("pressure").textContent = `${data.main.pressure} ملي بار`;
  document.getElementById("weatherCard").style.display = "block";
}
