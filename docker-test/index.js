const express = require('express');
const app = express();
const port = 3000;

const database = require('better-sqlite3');
const db = new database('database.db', { verbose: console.log });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
    const users = db.prepare('SELECT * FROM Users').all();
    res.json(users);
});

app.get('/test', (req, res) => {
    res.send('Test');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});