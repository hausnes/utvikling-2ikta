/*
    Bruk av knapp
*/

let farge = "";
let arrayFargar = ["red","blue","green","yellow","pink"];

const knappSkiftFarge = document.getElementById("knappSkiftFarge");

knappSkiftFarge.addEventListener("click", skiftFarge);

function skiftFarge() {
    console.log("Skiftar farge...");
    farge = arrayFargar[Math.floor(Math.random() * arrayFargar.length-1)];
    document.body.style.backgroundColor = farge;
}

/* 
    Bruk av tastatur
*/
const tastatur = document.getElementById("tastatur");

document.addEventListener("keydown", function(evt){
    let tast = evt.key;
    tastatur.innerText = tast;
});

/*
    Bruk av "mouseover" og "mouseout"
*/
const bilete = document.querySelector("img");

bilete.addEventListener("mousemove", zoomInn);


function zoomInn(e) { // Zoomar inn på biletet når muspeikaren er over
    bilete.style.scale = "1.2";
}

bilete.addEventListener("mouseout", function() {
    bilete.style.scale = "1"; // Zoomar ut igjen når muspeikaren "forlet" biletet
});