console.log("log");
console.warn("warning");
console.info("info");
console.error("error")

// Definerer ein variabel av typen array med navn
let arrNavn = ["Jo Bjørnar","Jobis","Joe Bee"];
console.table(arrNavn); // "Fin" utskrift i console

// Definerer navn
let navn = "Jo Bjørnar";
console.log(navn);
console.log(navn.length);
// Definerer eit tall
let tall = 4;
console.log(tall);
// Definerer ein konstant PI
const PI = Math.PI;
console.log(PI);
// PI = PI * 2; // Ups!!
console.log(Math.random());

// Konverterer frå binært til titallssytemet:
let binary = "1010";
console.log("parseInt (2) (binary): " + parseInt(binary,2));

// Konverterer frå hex til titallssystemet:
let hex = "a";
console.log("parseInt (16) (hex): " + parseInt(hex,16));

// Hente eit element frå HTML og endre det, teknikk 1:
let overskrift = document.getElementById("overskrift");
overskrift.innerHTML = tall;
// v2, med innerText i staden for (begrensar oss til berre tekst)
document.getElementById("paragraf").innerText = "Test";
// Hente eit element, teknikk 2: den kraftigare querySelectoren.
document.querySelector(".blaa").innerText = "Blå!";

verdi1 = "-5";
verdi2 = "-2";
console.log(verdi1 < verdi2);
console.log(Number(verdi1) < Number(verdi2));

// Konverterer frå innlest verdi (tekstfelt i HTML) til binært
document.getElementById("binaryInn").addEventListener("change",konverter);

function konverter() {
    let innlest = document.getElementById("binaryInn").value;
    console.log("Innlest: " + innlest);
    console.log("Konvertert: " + parseInt(innlest, 2));
}