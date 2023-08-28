let elever = [
    { navn: "Jørgen", alder: 25, karakter: 6 },
    { navn: "Kari", alder: 23, karakter: 4 },
    { navn: "Per", alder: 24, karakter: 5 },
    { navn: "Ole", alder: 22, karakter: 3 },
    { navn: "Anne", alder: 21, karakter: 2 }
];

// Skriv ut navn på alle elever
for (let i = 0; i < elever.length; i++) {
    console.log(elever[i].navn);
}

for (let elev of elever) {
    console.log(elev.alder);
}

// Skriv ut navn på alle elever som har karakter 4 eller lavere
for (let elev of elever) {
    if (elev.karakter <= 4) {
        console.log(elev.navn);
    }
}

let person = {
    fornavn: "Ola",
    etternavn: "Hansen",
    fulltNavn: function() {
        return this.fornavn + " " + this.etternavn;
    }
};

console.log(person.fulltNavn());