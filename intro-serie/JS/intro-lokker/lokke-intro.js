console.log("While-løkka:");
let teller = 10;
while (teller > 0) {
    console.log(teller);
    teller = teller - 1;
}

console.log("\nFor-løkka:");
//   start      slutt   hopp
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let arrayNavn = ["Jo Bjørnar","Jo Bjarne","Jobis"];
console.log("Lengden på arrayen: " + arrayNavn.length);
console.log(arrayNavn);
console.table(arrayNavn); // "Finare" utskrift til loggen
console.log(arrayNavn[1]); // Skriv ut indeks nr. 1: "Jo Bjarne"
arrayNavn[1] = "Jobijobijobi"; // Endrar innhaldet i indeks 1, altså blir "Jo Bjarne" gjort om til "Jobijobijobi"
console.table(arrayNavn);

for (let i = 0; i < arrayNavn.length; i++) {
    console.log("Element nr. " + i + " er: " + arrayNavn[i]);
}

for (let navn of arrayNavn) { // Alternativ for-løkke
    console.log(navn);
}

let navn = "Jo Bjørnar Hausnes";
for (let bokstav of navn) { // Viser at ein string òg kan itererast over, akkurat som ein array
    console.log(bokstav);
}