const utskrift = document.getElementById("utskrift");
const tastatur = document.getElementById("tastatur");

// Alternativ 1:
function siHei() {
    utskrift.innerHTML += "<li>Hei!</li>";
    console.log("Hei!");
}

siHei();
siHei();

for (let i = 0; i < 10; i++) {
    siHei();
}

// Alternativ 2:
function siHeiTil(navn) {
    utskrift.innerHTML += "<li>Hei, " + navn + "!</li>";
}

siHeiTil("Jo Bjørnar");
siHeiTil("Lars");

// Alternativ 3: (bruken av 'return')
function returnerTilfeldigTall() {
    let random = Math.random();
    return "<li>" + random + "</li>";
    console.log("Denne linja køyrer aldri."); 
}

let tilfeldig = returnerTilfeldigTall();
utskrift.HTML += tilfeldig;

// utskrift.innerText(returnerTilfeldigTall());

// Alternativ 4: (anonyme funksjonar)
document.addEventListener("keydown", function(evt){
    let tast = evt.key;
    tastatur.innerText = tast;
});

// Alternativ 5: (arrow functions)
sayHello = () => {
    utskrift.innerHTML += "<li>Hello!</li>";
};

sayHello();