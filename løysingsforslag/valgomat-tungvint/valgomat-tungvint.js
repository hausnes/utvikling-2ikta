const skjema = document.getElementById("skjemaValgomat");

skjema.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Du har svart på spørsmålene!");

    const sporsmal1 = skjema.elements["question1"];
    console.log(sporsmal1); // Skriv ut for å sjå kva dette er, og kan sjå at det er ei node-liste
    const sporsmal2 = skjema.elements["question2"];
    
    let svar1 = "";
    let svar2 = "";

    for (let i = 0; i < sporsmal1.length; i++) { // Går gjennom alle radioknappane som ligg i node-lista og sjekkar om dei er valde
        if (sporsmal1[i].checked) {
            svar1 = sporsmal1[i].value;
            break;
        }
    }

    for (let i = 0; i < sporsmal2.length; i++) {
        if (sporsmal2[i].checked) {
            svar2 = sporsmal2[i].value;
            break;
        }
    }

    console.log("Svar på spørsmål 1: " + svar1);
    console.log("Svar på spørsmål 2: " + svar2);
});