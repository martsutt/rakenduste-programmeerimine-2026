// Stringe saab luua kolme erineva sümboliga: '', "", ja ``
let a = 'tere';
let b = "tere";
let c = `tere`;

let maantee = " Pärnu maantee ";
console.log(maantee.length); // tagastab 15 - sümbolite kogus koos tühikutega
console.log(maantee.trim()); // "Pärnu maantee" - tühikud eest ja tagant eemaldatud
console.log(maantee.toLowerCase()); // "  pärnu maantee  " - muudab kõik tähed väikesteks tähtedeks
console.log(maantee.includes("Pärnu")); // true - tagastab true, kuna sõna "Pärnu" on stringis olemas

// Väärtuste sisestamine stringi ${} abil (see töötab ainult backtickidega (`))
let majaNumber = 65;
let puhasAadress = maantee.trim();
let aadress = `Aadress: ${puhasAadress} ${majaNumber}`;
console.log(aadress); // "Aadress: Pärnu maantee 65"