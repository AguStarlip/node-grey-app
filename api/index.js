require('dotenv').config();
const { dbConnection } = require('./database/config');

const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(express.static('api/public'));

dbConnection();

app.listen(process.env.PORT, () => {
    console.log('Server online on port ' + process.env.PORT);
});