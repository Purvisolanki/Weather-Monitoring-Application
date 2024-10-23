// controllers/weatherController.js
const Weather = require('../models/Weather');
const { fetchWeatherData, kelvinToCelsius } = require('../utils/weatherService');
const { checkAlerts } = require('./alertController');

const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];

const updateWeatherData = async () => {
  for (const city of cities) {
    const weatherData = await fetchWeatherData(city);
    if (weatherData) {8
      const temp = kelvinToCelsius(weatherData.main.temp);
      const condition = weatherData.weather[0].main;

      await updateDailySummary(city, temp, condition);
      await checkAlerts(city, temp, condition);
    }
  }
};

const getCurrentWeather = async (req, res) => {
  try {
    const { city } = req.params;
    const weatherData = await fetchWeatherData(city);
    if (weatherData) {
      const processedData = {
        city,
        temp: kelvinToCelsius(weatherData.main.temp),
        feelsLike: kelvinToCelsius(weatherData.main.feels_like),
        condition: weatherData.weather[0].main,
        timestamp: new Date(weatherData.dt * 1000),
      };
      res.json(processedData);
    } else {
      res.status(404).json({ error: 'Weather data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getWeatherSummary = async (req, res) => {
  try {
    const { city } = req.params;
    const summary = await Weather.find({ city }).sort({ date: -1 }).limit(7);
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateDailySummary = async (city, temp, condition) => {
  const today = new Date().setHours(0, 0, 0, 0);
  let summary = await Weather.findOne({ city, date: today });

  if (!summary) {
    summary = new Weather({
      city,
      date: today,
      avgTemp: temp,
      maxTemp: temp,
      minTemp: temp,
      dominantCondition: condition,
      hourlyData: []
    });
  } else {
    const hourlyDataCount = summary.hourlyData.length;
    summary.avgTemp = ((summary.avgTemp * hourlyDataCount) + temp) / (hourlyDataCount + 1);
    summary.maxTemp = Math.max(summary.maxTemp, temp);
    summary.minTemp = Math.min(summary.minTemp, temp);
    
    summary.hourlyData.push({
      hour: new Date().getHours(),
      temp,
      condition
    });
    
    // Update dominant condition
    const conditionCounts = {};
    summary.hourlyData.forEach(data => {
      conditionCounts[data.condition] = (conditionCounts[data.condition] || 0) + 1;
    });
    summary.dominantCondition = Object.entries(conditionCounts)
      .sort((a, b) => b[1] - a[1])[0][0];
  }

  await summary.save();
};

module.exports = {
  updateWeatherData,
  getCurrentWeather,
  getWeatherSummary,
};