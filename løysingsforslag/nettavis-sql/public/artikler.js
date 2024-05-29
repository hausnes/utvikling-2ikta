let ut = document.querySelector("#nyhetsartikler");

async function skrivData() {
    let response = await fetch("/artikler");
    //console.log(response);
    let data = await response.json();
    console.log(data);
    
    let utskrift = "";
    for (let row of data) {
        utskrift += "<h1>" + row.tittel + "</h1>";
        utskrift += "<p>" + row.tekst + "</p>";
    }
    ut.innerHTML = utskrift;
}

skrivData();