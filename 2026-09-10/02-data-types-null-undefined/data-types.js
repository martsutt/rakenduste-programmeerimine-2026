let loom = "koer"; // string
let vanus = 7; // number
let onElus = true; // boolean
let lemmikloom = { nimi: "Mati", vanus: 7, loom: "koer", onElus: true }; // object
let lemmikloomad = ["Mati", "Kati", "Vati"]; // array

console.log(typeof loom); // tagastab "string"
console.log(typeof vanus); // tagastab "number"
console.log(typeof onElus); // tagastab "boolean"
console.log(typeof lemmikloom); // tagastab "object"

let x; // see on undefined, kuna väärtust pole määratud
let y = null; // see on null, kuna väärtus on teadlikult määratud nulliks

console.log(x) // tagastab undefined
console.log(y) // tagastab null

// "5" on string, 5 on number
let stringNumber = "5"; // string
let numberNumber = 5; // number
console.log(stringNumber + 1); // tagastab "51" - liidetakse kokku (string)
console.log(numberNumber + 1); // tagastab 6 - liidetakse kokku (number)
console.log(stringNumber === numberNumber); // tagastab false, kuna tegu erineva tüübiga

console.log(typeof null); // tagastab "object" - see on lihtsalt JS-i vana viga, mida ei parandatud
console.log(typeof []); // tagastab "object" - kuna array on ka objekt

console.log(Array.isArray(lemmikloomad)); // tagastab true, kuna lemmikloomad on array
console.log(Array.isArray(loom)); // tagastab false, kuna loom on string