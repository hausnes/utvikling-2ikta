let arrBrukere = []; // array som skal innehalde nye brukarar

const skjema = document.getElementById("skjemaRegistrering");

skjema.addEventListener("submit", registrerBruker); // NB: lyttefunksom på skjema

function registrerBruker(evt) {
    evt.preventDefault();
    let nyEpost = document.getElementById("inpEpost").value;
    let nyttPassord = document.getElementById("inpPassord").value;

    // Opprettar eit objekt frå input
    let objBruker = {
        epost : nyEpost,
        passord : nyttPassord
    };
    arrBrukere.push(objBruker); // Legg objekt inn i array
    console.log(arrBrukere); // Sjekkar om obj blei lagt til

    // Utskrift til HTML
    let ut = "<li>" + nyEpost + ", " + nyttPassord + "</li>";
    document.getElementById("utskrift").innerHTML += ut;
}