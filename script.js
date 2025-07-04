const API_KEY = 'demo_key'; // Replace with your OpenWeatherMap API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function showLoading() {
  document.getElementById('loading').style.display = 'block';
  document.getElementById('error').style.display = 'none';
  document.getElementById('weatherInfo').classList.remove('show');
}

function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}

function showError(message) {
  document.getElementById('error').textContent = message;
  document.getElementById('error').style.display = 'block';
  document.getElementById('weatherInfo').classList.remove('show');
}

function displayWeather(data) {
  document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
  document.getElementById('description').textContent = data.weather[0].description;
  document.getElementById('feelsLike').textContent = `${Math.round(data.main.feels_like)}°C`;
  document.getElementById('humidity').textContent = `${data.main.humidity}%`;
  document.getElementById('windSpeed').textContent = `${data.wind.speed} m/s`;
  document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;

  document.getElementById('weatherInfo').classList.add('show');
}

async function fetchWeather(url) {
  showLoading();

  try {
    // For demo purposes, using mock data since no real API key
    const mockData = {
      name: "Chennai",
      sys: { country: "IN" },
      main: {
        temp: 28,
        feels_like: 32,
        humidity: 78,
        pressure: 1013
      },
      weather: [{ description: "partly cloudy" }],
      wind: { speed: 3.5 }
    };

    await new Promise(resolve => setTimeout(resolve, 1000));
    hideLoading();
    displayWeather(mockData);

    // Uncomment for real API usage
    // const response = await fetch(url);
    // if (!response.ok) throw new Error('Weather data not found');
    // const data = await response.json();
    // hideLoading();
    // displayWeather(data);

  } catch (error) {
    hideLoading();
    showError('Failed to fetch weather data. Please check your internet connection.');
  }
}

function searchWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) {
    showError('Please enter a city name');
    return;
  }

  const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  fetchWeather(url);
}

function getCurrentLocation() {
  if (!navigator.geolocation) {
    showError('Geolocation is not supported by this browser');
    return;
  }

  showLoading();
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      const url = `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      fetchWeather(url);
    },
    error => {
      hideLoading();
      showError('Unable to get your location. Please enter a city manually.');
    }
  );
}

// Allow Enter key to trigger search
document.getElementById('cityInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchWeather();
  }
});

// Load default location on page load
window.addEventListener('load', function () {
  document.getElementById('cityInput').value = 'Chennai';
  searchWeather();
});
