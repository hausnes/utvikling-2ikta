// Express
const express = require('express');
const app = express();
// Database
const sqlite3 = require('better-sqlite3');
const db = sqlite3('nettavis.db', {verbose: console.log});
// Public-mappe
const path = require('path');
const publicDirectoryPath = path.join(__dirname, '/public');
app.use(express.static(publicDirectoryPath));

let PORT = 3000;

app.get('/', function(req, res) {
    res.send("Server fungerer.");
});

app.get('/artikler', function(req, res) {
    const sql = db.prepare('SELECT tittel, tekst FROM article');
    const rows = sql.all();
    console.log(rows);
    res.send(rows);
});

app.listen(PORT, () => {
    console.log('Serveren er oppe: http://localhost:' + PORT);
});