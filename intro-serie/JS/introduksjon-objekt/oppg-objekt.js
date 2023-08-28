let elever = [
    { 
        navn: "Ola", 
        fodselsaar: 2014,
    },
    { 
        navn: "Iben", 
        fodselsaar: 2010 
    },
    { 
        navn: "Martin", 
        fodselsaar: 2004 
    },
    { 
        navn: "Jesper",
        fodselsaar: 2017 
    },
    { 
        navn: "Aleksander", 
        fodselsaar: 2016 
    }
];

let tid = new Date();
console.log(tid.getFullYear()); // Test

let alder = 0;

for (let elev of elever) {
    alder = tid.getFullYear() - elev.fodselsaar;
    console.log(elev.navn + " er " + alder + " år gammel.");
}

// Skriv ut en liste på nettsiden der alle som er under 10 år gamle får rød bakgrunn.