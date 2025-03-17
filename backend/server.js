const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json()); // Important for handling JSON data in requests

const PORT = process.env.PORT || 5000;

// Importing Routes
const user = require('./routes/user');
const dashboard = require('./routes/dashboard');
const notification = require('./routes/notification');
const result = require('./routes/reasult');  // Check if it's `result.js` (typo?)
const schedule = require('./routes/schedule');
const setting = require('./routes/setting'); // Ensure correct file name
const student = require('./routes/student');

// API Routes
app.use('/api/v1/user', user.router);
app.use('/api/v1/dashboard', dashboard.router);
app.use('/api/v1/notification', notification.router);
app.use('/api/v1/result', result.router);
app.use('/api/v1/schedule', schedule.router);
app.use('/api/v1/setting', setting.router);  // Corrected route name
app.use('/api/v1/student', student.router);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
