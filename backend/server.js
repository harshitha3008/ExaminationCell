const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config()
app.use(cors());

const PORT = process.env.PORT || 5000;
const user = require('./routes/user')
const dashboard = require('./routes/dashboard')
const notification = require('./routes/notification')
const result = require('./routes/reasult')
const schedule = require('./routes/schedule')
const setting = require('./routes/setting')
const student = require('./routes/student')

app.use('/api/v1/user', user.router);
app.use('/api/v1/dashboard', dashboard.router);
app.use('/api/v1/notification', notification.router);
app.use('/api/v1/result', result.router);
app.use('/api/v1/schedule', schedule.router);
app.use('/api/v1/setting', setting.router);
app.use('/api/v1/student', student.router);


app.listen(PORT, ()=>{
    console.log("server is listining");
})