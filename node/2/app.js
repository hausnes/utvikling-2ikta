const express = require('express');
const app = express();
const port = 3000;

const bcrypt = require('bcrypt');

const path = require('path');
const publicMappe = path.join(__dirname, "public");
app.use(express.static(publicMappe));

// Sjekkar at eg kan hente verdiar frå .env-fila utan å bruker dotenv-pakka (NB: berre Node 20.6.0 og nyare)
// Start serveren ved å skrive: node --env-file .env app.js
// https://nodejs.org/en/blog/release/v20.6.0
console.log("API-key: " + process.env.API_KEY);

const session = require('express-session');
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

console.log("SESSION_SECRET: " + process.env.SESSION_SECRET);

// ------------------------

app.get('/running', (_request, response) => response.send('Node is up and running!'));

app.get('/', (_request, response) => {
    response.sendFile(path.join(publicMappe, "index.html"));
});

// Start serveren
app.listen(port, () => {
        console.log(`Node app lyttar på port ${port}!`);
        console.log(`http://localhost:${port}`);
    }
);