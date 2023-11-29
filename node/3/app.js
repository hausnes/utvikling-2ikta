const express = require('express');
const app = express();
const sqlite3 = require('better-sqlite3');
const db = sqlite3('brukere.db', {verbose: console.log});
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const port = 3000;

app.use(express.urlencoded({extended: true})); // For å kunne hente ut data fra POST-forespørsler (skjema, forms)

app.use(session( {
    secret: process.env.SESSION_SECRET, // Brukes til å kryptere sessionen - NB, for å køyre: node --env-file .env app.js
    resave: false,
    saveUninitialized : false
}));

// Sette opp en public-mappe som inneholder statiske filer som skal serveres
const path = require('path');
const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    if (req.session.logedIn !== true) {
        res.redirect("/login.html");
        return;
    }
    
    res.send( /* NB: Dette er en dårlig måte å generere HTML på, men vises for eks. skyld */
        `
        <!DOCTYPE html>
        <html lang="no">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Startside</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <nav>
                <a href="/">Hjem</a>
                <a href="personlig.html">Profil</a>
                <a href="nybruker.html">Ny bruker</a>
                <a href="login.html">Login</a>
            </nav>
            <h1>Startside</h1>
            <p>Dette er startsiden</p>
        </body>
        </html>
        `
    );
});

app.get('/personlig.html', (req, res) => {
    if (req.session.logedIn !== true) {
        res.redirect("/login.html");
        return;
    }

    res.sendFile(__dirname + "/personlig.html");
});

// Funksjon som henter ut brukerinformasjonen til den innloggede brukeren
app.get('/hentBrukerinfo', (req, res) => {
    if (req.session.logedIn !== true) {
        res.redirect("/login.html");
        return;
    }

    const stmt = db.prepare('SELECT * FROM brukere WHERE brukernavn = ?');
    const row = stmt.get(req.session.username); // Vi lagret dette tidligere i login-funksjonen
    console.log("Inne i hentBrukerinfo:");
    console.log(row); // Dersom vi får ut noe her, så er brukernavn riktig

    res.send(row);
});     

app.post('/login', (req, res) => {
    // Testing av at vi får inn data fra login-skjemaet
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password);

    // Lagrer passordet i en variabel
    let password = req.body.password;

    // Sjekk om brukernavn og passord er riktig opp mot databasen, der passordet er kryptert
    const sql = db.prepare('SELECT * FROM brukere WHERE brukernavn = ?');
    const row = sql.get(req.body.username);
    console.log(row); // Dersom vi får ut noe her, så er brukernavn riktig

    if (row === undefined) { // Dersom vi IKKE får noe ut, så er brukernavn feil
        req.session.logedIn = false;
        res.redirect("/login.html");
        return;
    }

    // Sjekk om passordet er riktig
    const result = bcrypt.compareSync(password, row.passord);
    console.log("Resultatet av å sammenligne passord: " + result);

    if (result == true) { // Dersom passordet er riktig, så skal vi logge brukeren inn
        req.session.logedIn = true;
        req.session.username = row.brukernavn; // Slik av vi lagret brukernavnet i sessionen (og kan bruke det senere, som i "hentBrukerinfo")
        res.redirect("/personlig.html");
    } else { // Ellers skal vi sende brukeren tilbake til login-siden
        req.session.logedIn = false;
        res.redirect("/login.html");
    }

    // Kontroller om brukernavn og passord er riktig opp mot databasen (dette fungerer bare uten krypterte passord, dvs. de to første oppføringene i databasen)
//     const stmt = db.prepare('SELECT * FROM brukere WHERE brukernavn = ? AND passord = ?'); 
//     const row = stmt.get(req.body.username, req.body.password); 
//     console.log(row); // Dersom vi får ut noe her, så er brukernavn og passord riktig

//     if (row === undefined) { // Dersom vi IKKE får noe ut, så er brukernavn og/eller passord feil
//         req.session.logedIn = false;
//         res.redirect("/login.html");
//         return;
//     }

//     if (req.body.username == row.brukernavn && // Dersom brukernavn og passord stemmer overens, så skal vi logge brukeren inn
//         req.body.password == row.passord ) {
//         req.session.logedIn = true;
//         res.redirect("/");
//     } else { // Ellers skal vi sende brukeren tilbake til login-siden
//         req.session.logedIn = false;
//         res.redirect("/login.html");
//     }
});

app.post('/nybruker', (req, res) => {
    // Testing av at vi får inn data fra registrer-skjemaet
    console.log(req.body);
    console.log(req.body.username);
    
    // Kontroller om brukernavn er ledig
    const stmt = db.prepare('SELECT * FROM brukere WHERE brukernavn = ?');
    const row = stmt.get(req.body.username);
    console.log(row); // Dersom vi får ut noe her, så er brukernavn opptatt

    if (row !== undefined) { // Dersom vi får noe ut, så er brukernavn opptatt
        console.log("Brukernavn er opptatt, sender brukeren tilbake til registreringssiden");
        res.redirect("/nybruker.html");
        return;
    }

    // Dersom brukernavn er ledig, så skal vi registrere brukeren
    const hash = bcrypt.hashSync(req.body.password, saltRounds); // Krypter passordet
    const stmt2 = db.prepare('INSERT INTO brukere (brukernavn, passord) VALUES (?, ?)'); 
    const info = stmt2.run(req.body.username, hash); // Legg inn brukernavn og kryptert passord i databasen
    console.log(info); 

    res.redirect("/login.html"); // Send brukeren til login-siden
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    console.log(`http://localhost:${port}`);
});