// Sånn kunne en versjon med map sett ut

const questions = {
    'Jeg er enig i gratis SFO' : {
        question : 'Jeg er enig i gratis SFO',
        enig: {
            MDG: 2, 
            A: 2, 
            H: 0
        },
        uenig: {
            H: 0, 
            MDG: 0, 
            A: 0
        }
    },
    'Jeg er uenig i bybane over Bryggen' : {
        question : 'Jeg er uenig i bybane over Bryggen',
        enig: {
            MDG: 1, 
            A: 2, 
            H:0
        },
        uenig: {
            H:2, 
            MDG:0, 
            A:2
        }
    },
    'Jeg ønsker Hordfast' : {
        question : "Jeg ønsker Hordfast",
        enig: {
            MDG: 0, 
            A: 0, 
            H:2
        },
        uenig: {
            H:0, 
            MDG:0, 
            A:0
        }
    }
};

console.log(questions); // Skriver ut hele map-et
console.log(questions["Jeg er enig i gratis SFO"]["enig"]); // Skriver ut partiene og poengene for det valgte svaret

// Eksempel på sortering
let partyScores = {
    MDG: 3,
    A: 4,
    H: 6
};

// Konverter objektet til et array av nøkkel-verdi-par
let entries = Object.entries(partyScores);

// Sorter arrayet etter verdiene i stigende rekkefølge
entries.sort ((a, b) => b [1] - a [1]);

// Konverter arrayet tilbake til et objekt
let sortedPartyScores = Object.fromEntries(entries);

console.log(sortedPartyScores); 




let score = 3;
console.log("Du fikk " + score + " poeng. Det var 'kjempebra!'");
console.log(`Du fikk ${score} poeng! Det var "kjempebra"!`);