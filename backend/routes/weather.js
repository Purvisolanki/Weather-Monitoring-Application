// routes/weather.js
const express = require('express');
const router = express.Router();
const { getCurrentWeather, getWeatherSummary } = require('../controllers/weatherController');

router.get('/:city', getCurrentWeather);
router.get('/summary/:city', getWeatherSummary);

module.exports = router;