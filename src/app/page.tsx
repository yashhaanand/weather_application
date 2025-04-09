"use client";

import React, { useState } from "react";

const API_KEY = "1e3f2707afec01c81ef9d674347ca784";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
  
    setLoading(true);
    setError(null);
    setWeather(null);
  
    try {
      console.log("Fetching weather for:", city);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "City not found");
      }
  
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Weather App</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={fetchWeather}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Loading..." : "Get Weather"}
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {weather && (
        <div className="bg-white shadow-md rounded p-4 text-center">
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <p className="text-3xl">{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
