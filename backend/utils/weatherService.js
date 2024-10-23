// utils/weatherService.js
const axios = require('axios');

const API_KEY = '1276b60fdb467d2dfe1768ac3dcc004c';

const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error.message);
    return null;
  }
};

const kelvinToCelsius = (kelvin) => {
  return kelvin - 273.15;
};

module.exports = {
  fetchWeatherData,
  kelvinToCelsius,
};
