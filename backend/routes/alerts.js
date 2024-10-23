// routes/alerts.js
const express = require('express');
const router = express.Router();
const { getAlerts } = require('../controllers/alertController');

router.get('/:city', getAlerts);

module.exports = router;