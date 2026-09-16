function liida(a, b) {
    return a + b;
}
console.log(liida(2, 3)); // 5

function tervita(nimi = "Külaline") {
    return `Tere, ${nimi}!`;
}
console.log(tervita()); // "Tere, Külaline!"
console.log(tervita("Mari")); // "Tere, Mari!"

function prindiJaTagasta(x) {
    console.log(x); // prindib konsooli, aga ei tagasta midagi
    return x * 2; // see tagastatakse funktsiooni kutsujale
}
console.log(prindiJaTagasta(5)); // prindib 5, siis 10

function tyhi() { }
console.log(tyhi()); // undefined - kui return puudub, tagastatakse undefined