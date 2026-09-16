let kasutaja = { nimi: "Mari", vanus: 25 };
console.log(kasutaja.nimi);
console.log(kasutaja["vanus"]);

kasutaja.linn = "Tallinn";
kasutaja.vanus = 26;
console.log(kasutaja);

let profiil = { nimi: "Jüri", aadress: { linn: "Tartu" } };
console.log(profiil.aadress.linn);
console.log(profiil.telefon); // undefined

console.log(profiil.kontakt?.email); // undefined, ei anna viga
console.log(profiil.kontakt?.email ?? "Email puudub");

let arv = 0;
console.log(arv || "vaikeväärtus"); // "vaikeväärtus"
console.log(arv ?? "vaikeväärtus"); // 0