let personer = [
    { navn: "Jo Bjørnar", fodselsaar: 1982 },
    { navn: "Lars"      , fodselsaar: 1957 },
    { navn: "Kari"      , fodselsaar: 1965 },
    { navn: "Per"       , fodselsaar: 1972 },
    { navn: "Ole"       , fodselsaar: 1980 },
    { navn: "Anne"      , fodselsaar: 1985 }
];

// Enkel ref. til ein plass i arrayen
console.log(personer[0].navn);

// Alternativ 1
for(let person of personer) {
    console.log(person.navn);
}

// ALternativ 2
for(let i = 0; i < personer.length; i++) {
    console.log(personer[i].navn);
}

// Hent ut og skriv ut alle personar som er fødd etter 1980
// Hint: new Date().getFullYear()
// Eller - begynn med å lese gjennom tema i boka

let tid = new Date();
let alder = 0;

for (let person of personer) {
    alder = tid.getFullYear() - person.fodselsaar;
    if (alder > 50) {
        console.log(person.navn + " er over 50 år.");
    }
}