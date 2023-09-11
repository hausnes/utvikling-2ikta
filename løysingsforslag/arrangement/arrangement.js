// Map som skal innehalde alle deltakarar på arrangementet
let deltakarar = new Map();

// Eit eksempel på ein deltakar, type objekt
let eksempelDeltakar = {
    fornavn:   "First", 
    etternavn: "Firstesen",
    epost:     "first@first.no", 
    telefon:   "123-45-678",
    passord:   "First#12345"
};

// Legg til eksempelDeltakar i map, legg merke til at me brukar epost som key/nøkkel
deltakarar.set(eksempelDeltakar.epost, eksempelDeltakar);

// Utskrift for å sjå at deltakarlista fungerer
console.log(deltakarar);

// Skjema for å legge til deltakarar
let skjema = document.querySelector("#skjemaArrangement");

// Lytt til submit på skjema
skjema.addEventListener("submit", lagreDeltakar);

// Funksjon for å lagre deltakar
function lagreDeltakar(e) {
    // Forhindra at skjemaet sender data til server: SPA (single page application)
    e.preventDefault();

    // Lag ein deltakar basert på data i skjema
    let deltakar = {
        fornavn:   skjema.fornavn.value,
        etternavn: skjema.etternavn.value,
        epost:     skjema.epost.value,
        telefon:   skjema.telefon.value,
        passord:   skjema.passord.value
    };

    console.log(deltakar);

    // Kontrollerer om eposten allereie finst i map
    if (deltakarar.has(deltakar.epost)) {
        // Gi beskjed til brukar om at eposten allereie finst
        alert("Eposten er allereie registrert, deltakar IKKJE registrert.");
        return; // Avslutt funksjonen, dvs. ikkje legg til deltakar
    }

    // Kontroller at passordet er sterkt nok
    if (!kontrollerPassord(deltakar.passord)) { // Sjå funksjonen kontrollerPassord lengre ned
        // Gi beskjed til brukar om at passordet ikkje er sterkt nok
        alert("Passordet er ikkje sterkt nok, deltakar ikkje registrert.");
        return; // Avslutt funksjonen, dvs. ikkje legg til deltakar
    }

    // Legg til deltakar i map
    deltakarar.set(deltakar.epost, deltakar);

    // Utskrift for å sjå at deltakarlista fungerer
    console.log("Deltakar lagt til!");
    console.log(deltakarar);
}

// Debug-funksjonalitet for å kunne skrive ut deltakarliste når ein ynskjer det
let knappUtskrift = document.querySelector("#knappUtskrift");
knappUtskrift.addEventListener("click", skrivUtDeltakarliste);  
function skrivUtDeltakarliste() {
    // Stygg, basic utskrift av deltakarar
    console.log(deltakarar);

    // Forståelse av kva keys, values og entries er
    console.log(deltakarar.keys());
    console.log(deltakarar.values());
    console.log(deltakarar.entries());

    // Klargjer stad for å skrive ut deltakarar til modal (popup) i HTML
    let modal = document.querySelector("#modal");
    // Vis modal (popup) med alle deltakarar utskrive i HTML
    modal.style.display = "block";
    console.log(modal);

    // Fjern alt som er i indre del av modal frå før
    let utskrift = document.querySelector("#deltakarliste");
    utskrift.innerHTML = "";    

    // Ei løkke som går gjennom alle element og skriv dei ut
    for (let [key, value] of deltakarar.entries()) {
        console.log(key, value);

        // Navn på deltakar
        let elNavn = document.createElement("h3");
        let navn = value.fornavn + " " + value.etternavn;
        elNavn.innerText = navn;
        utskrift.appendChild(elNavn);

        // Epost til deltakar
        let elEpost = document.createElement("p");
        elEpost.innerText = value.epost;
        utskrift.appendChild(elEpost);

        // Telefonnummer til deltakar
        let elTelefon = document.createElement("p");
        elTelefon.innerText = value.telefon;
        utskrift.appendChild(elTelefon);

        // Passord til deltakar
        let elPassord = document.createElement("p");
        elPassord.innerText = value.passord;
        utskrift.appendChild(elPassord);
    };
}

// Funksjon for å kontrollere at eit passord er sterkt nok
function kontrollerPassord(passord) {
    // Ein variabel som held styr på om passordet er sterkt nok
    let styrke = 4;

    // Sjekkar først om passordet har ein lengde på minst 10 teikn
    if (passord.length < 10) {
        styrke--;
        // return false;
    }
    // Sjekkar om passordet inneheld minst ein stor bokstav (A-Z) og ein liten bokstav (a-z)
    // NB: For å lære deg meir om regex, sjå https://regexlearn.com/
    if (passord.search(/[A-Z]/) < 0 && passord.search(/[a-z]/) < 0) {
        styrke--;
        // return false;
    }
    // Sjekkar om passordet inneheld minst eit tal (0-9)
    if (passord.search(/[0-9]/) < 0) {
        styrke--;
        // return false;
    }
    // Sjekkar om passordet inneheld minst eit spesialteikn
    if (passord.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) < 0) {
        styrke--;
        // return false;
    }

    // Endeleg beskjed om status for styrke, dvs. om passordet er sterkt nok: 3 av 4 krav må oppfyllast
    if (styrke < 3) {
        // Gi beskjed til brukar om at passordet ikkje er sterkt nok
        return false;
    }
    else {
        return true;
    }
}

// For å kunne lukke modal
let lukk = document.querySelector("#modalLukk");
lukk.addEventListener("click", lukkModal);
function lukkModal() {
    let modal = document.querySelector("#modal");
    modal.style.display = "none";
}