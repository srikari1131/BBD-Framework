require('dotenv').config();
if (!process.env.FR_BROWSER) process.env.FR_BROWSER = 'CHROME';
if (!process.env.FR_INSTANCES) process.env.FR_INSTANCES = 1;
if (!process.env.FR_RETRY) process.env.FR_RETRY = 0;
exports.config = require('./config').config;