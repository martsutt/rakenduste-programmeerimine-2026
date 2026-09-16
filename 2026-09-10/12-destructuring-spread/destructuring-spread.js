const kasutaja = { nimi: "Mari", vanus: 25 };
const { nimi, vanus } = kasutaja;
console.log(nimi, vanus);

const arvud = [1, 2, 3];
const [esimene, teine] = arvud;
console.log(esimene, teine);

const uusArvud = [...arvud, 4];
console.log(uusArvud); // [1,2,3,4]
console.log(arvud); // [1,2,3] - originaal ei muutunud

const uuendatudKasutaja = { ...kasutaja, vanus: 26 };
console.log(uuendatudKasutaja); // vanus muutus, nimi jäi samaks
console.log(kasutaja); // originaal jäi muutmata

// const objekti muudetakse - const kaitseb ainult muutujat ennast, mitte selle sisu
const obj = { a: 1 };
obj.a = 2; // lubatud
console.log(obj);

// spread teeb ainult "shallow" ehk pindmise koopia - sisemised objektid jagavad ikka sama viidet
const original = { sisu: { x: 1 } };
const koopia = { ...original };
koopia.sisu.x = 99;
console.log(original.sisu.x); // 99 - muutus ka originaalis, kuna sisemine objekt on jagatud