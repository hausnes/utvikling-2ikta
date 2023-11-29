// Eksempel frå Hilde

const express = require("express");
const path = require("path");
const sqlite3 = require('better-sqlite3')
const db = sqlite3('./users.db', {verbose: console.log})
const session = require('express-session')
const dotenv = require('dotenv');
dotenv.config()

const app = express();
const staticPath = path.join(__dirname, 'public')

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.post('/login', (req, res) => {
   console.log("login, req.body:");
    console.log(req.body);
   
    if (checkUserPassword(req.body.username, req.body.password)) {
        req.session.loggedIn = true;
        req.session.username = req.body.username;
        res.redirect('/');
    } else {
        req.session.loggedIn = false;
        res.sendFile(path.join(__dirname, "public/loginForm.html"));
    }
});

function checkUserPassword(username, password){
    //Denne funksjonen må endres slik at man hasher passordet, og sjekker at det hashete 
    //passordet er likt det hashet passordet som ligger i databasen
    const sql = db.prepare('SELECT username FROM user WHERE password = ? AND username = ?');
    let rows = sql.all(password, username); // Swap the order if your table structure is username first, then password
    return rows.length > 0;
}

//Denne henger sammen med i loginformen -- Jeg var lat og har både login og register i loginform.html
//  <form action='/register' method="POST">
app.post('/register', (req, res) => {
    console.log(req.body)
    addUser(req.body.username, req.body.firstname, req.body.lastname, req.body.mobile, req.body.password)
    res.sendFile(path.join(__dirname, "public/loginForm.html"));
 });
 
 app.get('/createUser.html', (req, res) => {
    console.log("redirect to create user")
    res.sendFile(path.join(__dirname, 'public', 'createUser.html'));
});

app.post('/create-user', (req, res) => {
    console.log("createUser", req.body);
    const user = req.body;
    addUser(user.username, user.firstname, user.lastname, user.mobile, user.password);
    // Redirect to user list or confirmation page after adding user
    res.redirect('/loginForm.html');
});

//Middleware 
//I alle app.get() app.post og app.put blir denne funksjonen kjørt før app.() blir kjørt. 
//Her sjekkes om bruker er logget inn, hvis ikke blir du rutet til loginformen
//login og register ligger foran deklarasjonen av middleware, så denne slår
//derfor ikke inn der
app.use((req, res, next)=>{
    console.log(req.session);
    if (req.session.loggedIn != undefined && req.session.loggedIn){
        console.log("Bruker innlogget");
        next();
    }
    else {
        console.log("Bruker not logged in - redirect i middleware");
        res.sendFile(path.join(__dirname, "public/loginForm.html"));
    }
});

//denne må defineres etter middleware. 
//Jeg prøvde å flytte den opp, for å rydde i koden og da fungerte det ikke
app.use(express.static(staticPath));

async function getUsers(request, response) {
    const sql=db.prepare('SELECT username, firstname, lastname, mobile, role, password FROM user')
    let rows = sql.all();
    console.log("rows.length",rows.length)

    response.send(rows);
};

function addUser(username, firstName, lastName, mobile,  password) {
    //Denne funksjonen må endres slik at man hasher passordet før man lagrer til databasen
    //rolle skal heller ikke være hardkodet.

    const sql = db.prepare("INSERT INTO user (username, firstName, lastName, mobile, role, password) values (?, ?, ?, ?, ?, ?)")
    const info = sql.run(username, firstName, lastName, mobile, 1, password)
    return info
};

function updateUserDB(username, firstName, lastName, mobile) {
    const sql = db.prepare("update user set firstName=(?), lastName =(?), mobile=(?)  where username=(?)")
    const info = sql.run(firstName, lastName, mobile, username)
};

app.get('/', (req, res) => {  
    if (req.session.loggedIn != undefined && req.session.loggedIn) {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    } else {
        res.redirect('/loginForm.html');
    }
});

//denne henger sammen JavaScripten i index.html
//let response = await fetch('/users');
app.get("/users", getUsers);

//Denne henger sammen med i html: Se sammenheng Method = POST og app.post
// <form id="userForm" action='/user' method="POST">
app.post("/user", (req, res) => {
    console.log(req.body)
    const user = req.body
    updateUserDB(user.username, user.firstname, user.lastname, user.cell)
    res.sendFile(path.join(__dirname, "public/index.html"));
})
 
app.get("/users.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public/users.html"));
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});