console.log("kode.js, i public-mappen");

const inpNasjonalitet = document.querySelector("#inpNasjonalitet");
inpNasjonalitet.addEventListener("change", hentBrukararS1); // change køyrer når du endrar verdien i eit input-felt (enter, til dømes)

function hentBrukararS1() { // S1 fordi dette er steg 1 i å hente brukarar
    let nasjonalitet = inpNasjonalitet.value;
    console.log("Du ber om: " + nasjonalitet);
    hentBrukararS2(nasjonalitet);
}

// Hente data frå randomuserme-API
async function hentBrukararS2(nat) { // steg 2
    const url = `/users?nat=${nat}&results=1`;
    console.log("URL så langt: " + url);

    const fetch_response = await fetch(url);
    const json = await fetch_response.json();
    console.log("JSON-resultat: ");
    console.log(json);

    let bilde = document.createElement("img");
    bilde.src = json[0].picture.large;
    document.getElementById("utskrift").innerHTML = ""; // Fjern alt som står i utskrift-diven før du legg til nytt
    document.getElementById("utskrift").appendChild(bilde);
}