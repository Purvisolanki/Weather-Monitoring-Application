// controllers/alertController.js
const Alert = require('../models/Alert');
const { sendAlertEmail } = require('../utils/emailService');

let consecutiveAlerts = {};

const checkAlerts = async (city, temp, condition) => {
  const alerts = [
    { condition: 'temperature', threshold: 35, message: 'High temperature alert' },
    { condition: 'rain', threshold: null, message: 'Rain alert' },
  ];

  for (const alert of alerts) {
    if (
      (alert.condition === 'temperature' && temp >= alert.threshold) ||
      (alert.condition === 'rain' && condition.toLowerCase().includes('rain'))
    ) {
      consecutiveAlerts[`${city}-${alert.condition}`] = (consecutiveAlerts[`${city}-${alert.condition}`] || 0) + 1;
      
      if (consecutiveAlerts[`${city}-${alert.condition}`] >= 2) {
        const newAlert = new Alert({
          city,
          condition: alert.condition,
          threshold: alert.threshold,
          timestamp: new Date(),
          consecutive: consecutiveAlerts[`${city}-${alert.condition}`]
        });
        await newAlert.save();
        sendAlertEmail(city, `${alert.message} for ${consecutiveAlerts[`${city}-${alert.condition}`]} consecutive updates`);
      }
    } else {
      consecutiveAlerts[`${city}-${alert.condition}`] = 0;
    }
  }
};

const getAlerts = async (req, res) => {
  try {
    const { city } = req.params;
    const alerts = await Alert.find({ city }).sort({ timestamp: -1 }).limit(10);
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  checkAlerts,
  getAlerts,
};