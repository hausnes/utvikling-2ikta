const express = require('express');
const app = express();
const port = 3000;

// Gjer det mogleg å bruke public-mappa
const path = require('path');
const publicMappe = path.join(__dirname, "public");
app.use(express.static(publicMappe));

// "startside"
app.get('/running', (request, response) => response.send('Node is up and running!'));

// Public-mappa
app.get('/', (request, response) => {
    response.sendFile(path.join(publicMappe, "index.html"));
    // Eventuelt 
    // res.sendFile(publicMappe + "/index.html");
});

// Hente data frå randomuserme-API
async function getUsers(request, response) {
    if (!request.query.results) {
        request.query.results = 2; // Default er altså no å be om 2 stk. brukarar. Begrens deg litt her, så du ikkje blir blokkert.
    }

    if (!request.query.nat) {
        request.query.nat = "no"; // Default er altså no å be om norske brukarar. Skriv du sjølv ?nat=us i adressefeltet, får du amerikanske brukarar.
    }

    const baseURL = "https://randomuser.me/api/?"
    const url = baseURL + new URLSearchParams(request.query);
    console.log("URL så langt: " + url);

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