let alfabet = "0123456789abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.-_!? ";
let alfabetLengde = alfabet.length;
console.log("Alfabetlengde: " + alfabetLengde);
    
let krypteringsnokkel = 0; // "Forskyvningen", krypteringsnøkkelen, eksempelvis skal 'a' bli 'c'. 0 gjer at 'a' blir 'a', 1 gjer at 'a' blir 'b' osv
let karakter = "";

// Krypteringsfunksjonen, som får inn bokstaven ein skal kryptere, 
// samt krypteringsnøkkelen. Returnerer den nye bokstaven.
function krypterBokstav(bokstavInn, krypteringsnokkelInn){
    posisjon = alfabet.indexOf(bokstavInn);
    posisjonNy = (posisjon + krypteringsnokkelInn);
    //console.log("posisjonNy før if: " + posisjonNy);
    if(posisjonNy >= alfabetLengde){
        posisjonNy = posisjonNy - alfabetLengde;
        //console.log("if køyrer i krypterBokstav... posisjonNy:" + posisjonNy);
    }
    console.log("krypterBokstav fekk inn bokstavInn:" + bokstavInn + ", krypteringsnokkelInn:" + krypteringsnokkelInn + ", posisjon:" + posisjon + ", posisjonNy:" + posisjonNy + " - og returnerer: " + alfabet[posisjonNy]);
    return alfabet[posisjonNy];
}


// Test av kryptering, utan at brukar må skrive inn:
console.log(krypterBokstav("a",1));