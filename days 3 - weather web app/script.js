const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const locationEl = document.querySelector(".location");
const dateEl = document.querySelector(".date");
const weatherIconEl = document.querySelector(".weather-icon");
const temperatureEl = document.querySelector(".weather-temperature");
const forecastEl = document.querySelector(".forecast");

function getWeatherData(location) {
  // Code to fetch weather data from API
  // This is just a placeholder for demonstration purposes
  const weatherData = {
    location: "New York, NY",
    date: new Date(),
    weatherIcon: "https://www.weatherbit.io/static/img/icons/c01d.png",
    temperature: "57°F",
    forecast: "Clear"
  };
  
  return weatherData;
}

function displayWeatherData(weatherData) {
  locationEl.textContent = weatherData.location;
  dateEl.textContent = weatherData.date.toLocaleDateString();
  weatherIconEl.style.backgroundImage = `url(${weatherData.weatherIcon})`;
  temperatureEl.textContent = weatherData.temperature;
  forecastEl.textContent = weatherData.forecast;
}

searchBtn.addEventListener("click", () => {
  const location = searchBar.value;
  const weatherData = getWeatherData(location);
  displayWeatherData(weatherData);
});
