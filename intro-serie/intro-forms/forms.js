let registrerteBrukere = [];

let skjemaRegistrer = document.getElementById("formRegistrerBruker");

skjemaRegistrer.addEventListener("submit", function(e) {
    e.preventDefault();
    let innlestEpost = document.getElementById("inpEpost").value;
    let innlestPassord = document.getElementById("inpPassord").value;
    let bruker = {
        epost: innlestEpost,
        passord: innlestPassord
    };
    registrerteBrukere.push(bruker);

    skrivUtBrukerliste(registrerteBrukere);
    console.log(registrerteBrukere);
});

function skrivUtBrukerliste(registrerteBrukere) {
    let ut = "";
    for (let bruker of registrerteBrukere) {
        ut += "<li>" + bruker.epost + ", " + bruker.passord + "</li>";
    }
    document.getElementById("utskrift").innerHTML = ut;
}