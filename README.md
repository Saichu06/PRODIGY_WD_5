# ⛅ Weather App

A simple, responsive weather application built using **HTML**, **CSS**, and **JavaScript**. Users can search for weather information by city name or use their current location to get real-time data.

---

## 📁 File Structure

weather-app/
│
├── index.html # Main HTML layout and structure
├── style.css # Styling and responsive design
└── script.js # Weather fetching logic and interactivity

yaml
Copy
Edit

---

## ✨ Features

- 🔍 Search weather by **city name**
- 📍 Fetch weather using **current geolocation**
- 🌡️ Displays:
  - Temperature
  - Weather description
  - Feels like
  - Humidity
  - Wind speed
  - Pressure
- 🧭 Smooth user feedback: loading, errors, and weather display
- 📱 Fully **responsive layout** for mobile devices
- 💡 Clean and modular code

---

## 🚀 Getting Started

### 📦 Installation

1. **Download** or **clone** the repository:

```bash
git clone https://github.com/your-username/weather-app.git
Open the project folder.

Open index.html in your browser.

🔑 API Configuration
This app uses the OpenWeatherMap API.

Get your free API key from: https://openweathermap.org/api

In script.js, replace:

javascript
Copy
Edit
const API_KEY = 'demo_key'; // Replace with your actual API key
⚠️ The current version uses mock data for demo purposes. You must uncomment the real API logic in fetchWeather() and comment out or remove the mock block to make live requests.


📚 Technologies Used
HTML5

CSS3

JavaScript (Vanilla JS)

OpenWeatherMap API

🧪 Future Enhancements
🌙 Dark/Light theme toggle

🌐 Multi-language support

📆 5-day forecast view

🌍 Weather map integration

