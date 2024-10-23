// server.js
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const connectDB = require('./config/database');
const weatherRoutes = require('./routes/weather');
const alertRoutes = require('./routes/alerts');
const { updateWeatherData } = require('./controllers/weatherController');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRoutes);
app.use('/api/alerts', alertRoutes);

cron.schedule('*/5 * * * *', updateWeatherData);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

