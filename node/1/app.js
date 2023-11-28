const express = require('express');
const app = express();
const port = 3000;

// Gjer det mogleg å bruke public-mappa
const path = require('path');
const publicMappe = path.join(__dirname, "public");
app.use(express.static(publicMappe));

// "startside"
app.get('/running', (_request, response) => response.send('Node is up and running!'));

// Public-mappa
app.get('/', (request, response) => {
    response.sendFile(path.join(publicMappe, "index.html"));
    // Eventuelt 
    // res.sendFile(publicMappe + "/index.html");
});

// Hente data frå randomuserme-API
async function getUsers(request, response) {
    if (!request.query.results) {
        request.query.results = 1; // Default er altså no å be om 2 stk. brukarar. Begrens deg litt her, så du ikkje blir blokkert.
    }

    if (!request.query.nat) {
        request.query.nat = "no"; // Default er altså no å be om norske brukarar. Skriv du sjølv ?nat=us i adressefeltet, får du amerikanske brukarar.
    }

    const baseURL = "https://randomuser.me/api/?"
    const url = baseURL + new URLSearchParams(request.query); // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
    console.log("URL så langt: " + url);
    
    // Kan sjekke om ein har spurt om norske brukarar, og reagere på det
    const params = new URLSearchParams(request.query);
    if (params.get("nat") === "no") { // Ein test for å bruke "has"
        console.log("Det blei bedt om norske brukarar, reagerer på dette.");
    }

    // Hent data frå randomuserme-API
    const fetch_response = await fetch(url);
    const json = await fetch_response.json();
    console.log("JSON-resultat: ");
    console.log(json.results);

    response.send(json.results);
}

app.get("/users", getUsers);

// Start serveren
app.listen(port, () => {
        console.log(`Node app listening on port ${port}!`);
        console.log(`http://localhost:${port}`);
    }
);