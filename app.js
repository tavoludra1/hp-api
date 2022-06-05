import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// endpoint
app.get('/', (req, res) => {
  res.json({ msg: 'hola endpoint' });
});

app.listen(3010, () => {
  console.log('App is listening');
});

require('dotenv').config();
const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log('Connected to PlanetScale!');
connection.end();
