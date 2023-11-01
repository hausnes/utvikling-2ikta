console.log("kode.js, i public-mappen");

const inpNasjonalitet = document.querySelector("#inpNasjonalitet");
inpNasjonalitet.addEventListener("change", hentBrukararS1);

function hentBrukararS1() {
    let nasjonalitet = inpNasjonalitet.value;
    console.log("Du ber om: " + nasjonalitet);
    hentBrukararS2(nasjonalitet);
}

// Hente data frå randomuserme-API
async function hentBrukararS2(nat) {
    const url = `/users?nat=${nat}&results=1`;
    console.log("URL så langt: " + url);

    const fetch_response = await fetch(url);
    const json = await fetch_response.json();
    console.log("JSON-resultat: ");
    console.log(json);

    let bilde = document.createElement("img");
    bilde.src = json[0].picture.large;
    document.getElementById("utskrift").appendChild(bilde);
}