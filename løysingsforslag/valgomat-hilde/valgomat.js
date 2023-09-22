const questions = [ // NB: Dette er ein array med objekt (ikkje map)
    {
        question: 'Jeg er enig i gratis SFO',
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
    {
        question: 'Jeg er uenig i bybane over Bryggen',
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
    {
        question: 'Jeg ønsker Hordfast',
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
]; 

// Her lagrast resultata undervegs - basert på kva du velgjer når du trykker på einig - uenig
let partyScores = {
    MDG: 0,
    A: 0,
    H: 0
}

const questionT = document.getElementById('question'); // Der me skriv ut spørsmålet
const btnNext = document.getElementById('btnNext');
const rbAnswer = document.getElementsByName('answer'); // radiobuttons (fleirtal)
const inputForm = document.getElementById('valgomatForm');

btnNext.addEventListener('click', nextQuestion);

let qidx = 0; // Hvilken spørsmål er vi på nå (begynner på 0)
questionT.innerHTML = questions[qidx].question; // Skriver ut det første spørsmålet til HTML

function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked'); // henter hvilken radioknapp som er valgt
    
    if (radioChecked) {
        calculateResult(qidx, radioChecked.value); // regner ut resultatet
        qidx++; // øker spørsmåls-ID med 1
        if (qidx < questions.length) { // Dersom det er fleire spørsmål igjen
            radioChecked.checked = false;
            questionT.innerHTML = questions[qidx].question; // Skriver ut neste spørsmål til HTML
        }
        else {  // Dersom det ikkje er fleire spørsmål igjen så kan me kalle på funksjonen som oppsummer resultatet
            inputForm.style.display = 'none'; // Skjuler skjemaet
            showResult(); 
        }
    }
    else {
        alert("Du må velge et svaralternativ!");
    }
}

// Funksjon som regner ut resultatet, får inn spørsmåls-ID og hvilket svar som er valgt (enig/uenig)
function calculateResult(qidx, chosen) {
    console.log("Spørsmåls-ID: " + qidx + ", valgt: " + chosen);

    let partyChoices = questions[qidx][chosen]; // Henter ut partiene og poengene for det valgte svaret
    console.log("partyChoices: ");
    console.log(partyChoices);

    for (let party in partyChoices){
        partyScores[party] += partyChoices[party];
    }

    console.log("partyScore: ");
    console.log(partyScores);
}

function showResult() {
    // Konverter objektet til et array av nøkkel-verdi-par
    let entries = Object.entries(partyScores);

    // Sorter arrayet etter verdiene i stigende rekkefølge
    entries.sort ((a, b) => b [1] - a [1]);

    // Konverter arrayet tilbake til et objekt
    let sortedPartyScores = Object.fromEntries(entries);

    console.log("Sortert etter poengsum: ");
    console.log(sortedPartyScores); 

    // Skriver ut resultatet til HTML
    const resultBox = document.getElementById("result");
    for (let party in sortedPartyScores) {
        resultBox.innerHTML += party + ": " + sortedPartyScores[party] + "<br>";
    }
}