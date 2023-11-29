const utskrift = document.querySelector("#utskrift");

async function visBrukerinfo() {
    const url = await fetch("/hentBrukerinfo");
    const bruker = await url.json();
    console.log(bruker); // Test for å se om vi får hentet data

    let id = document.createElement("p");
    id.innerText = "ID: " + bruker.brukerid;

    let brukernavn = document.createElement("h3");
    brukernavn.innerText = "Brukernavn: " + bruker.brukernavn;

    let passord = document.createElement("p");
    passord.innerText = "Passord: " + bruker.passord;

    utskrift.appendChild(brukernavn);
    utskrift.appendChild(id);
    utskrift.appendChild(passord);
}

visBrukerinfo();