const express = require('express');
const axios = require('axios');
const app = express();
const port = 3010;
const path = require('path');

require('dotenv').config();
const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log('Connected to PlanetScale!');
connection.end();

// app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve('pages/index.html'));
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
