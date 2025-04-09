# React Weather Dashboard

A clean and responsive weather application built with React, leveraging the OpenWeatherMap API to provide real-time weather information.

## ✨ Features

- **Search by City:** Effortlessly retrieve weather details for any location worldwide. Simply type the city name and hit search.
- **Real-time Weather Insights:** Get up-to-the-minute weather information, including:
  - **City Name**
  - **Current Temperature (°C)**
  - **Weather Condition**
  - **Humidity (%)**
  - **Wind Speed (km/h)**
  - **Weather Icon** (from OpenWeatherMap)
- **Intuitive User Experience:**
  - **Responsive Layout:** Adapts seamlessly to different screen sizes (desktop and mobile).
  - **Loading Indicator:** Shows a spinner while data is being fetched.
  - **Error Handling:** Displays friendly messages for invalid city names or API issues.

## 🚀 Bonus Features

- **Recent Search History:** Quickly access your last 5 searched cities.
- **5-Day Forecast:** Plan ahead with detailed 5-day/3-hour interval weather predictions.
- **Dark/Light Theme Toggle:** Choose a look that fits your environment.
- **Refresh Button:** Instantly re-fetch weather data for the current city.
- **Loader Animation:** Engaging visuals while data loads.
- **Smooth UI Transitions:** Delightful animations using Framer Motion or CSS.

## 🛠️ Technologies Used

- **Framework:** [React.js](https://react.dev/) (using Create React App)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **API:** OpenWeatherMap (via native `fetch` API)

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-weather-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Obtain OpenWeatherMap API key:**

   - Visit: https://openweathermap.org/api
   - Sign up and get your free API key.

4. **Configure the API key:**

   Open `src/services/api.js` and replace `YOUR_API_KEY` with your actual API key.

   ```javascript
   const API_KEY = 'YOUR_API_KEY'; // Replace with your key
   const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
   const FORECAST_WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
   ```

   ⚠️ **Important Security Note:** Avoid committing API keys to public repositories. In real projects, use `.env` files for API keys. This project uses direct insertion due to constraints.

5. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

   Navigate to `http://localhost:3000` to view the app in your browser.

## 🌍 Deployment

This app is deployed using **Netlify**.

**Live Demo:** [Your Live Demo URL Here]

Just click the link above—no login required.

## 📁 Code Structure

```
react-weather-dashboard/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── WeatherCard.js
│   │   ├── Forecast.js
│   │   ├── ThemeToggle.js
│   │   ├── SearchHistory.js
│   │   ├── Loader.js
│   │   └── ErrorMessage.js
│   │
│   ├── hooks/
│   │   └── useWeatherData.js (if applicable)
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── context/
│   │   └── ThemeContext.js (if applicable)
│   │
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── App.css (optional)
│
├── package.json
└── README.md
```

## 📌 License

This project is open-source and available under the [MIT License](LICENSE).

## 💬 Contact

Have questions or feedback? Feel free to reach out!