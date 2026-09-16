const tooted = [
    { nimi: "Laud", hind: 50 },
    { nimi: "Tool", hind: 20 },
    { nimi: "Diivan", hind: 300 }
];

const hinnad = tooted.map(t => t.hind);
console.log(hinnad); // (50, 20, 300)

const odavad = tooted.filter(t => t.hind < 100);
console.log(odavad);

const leitud = tooted.find(t => t.nimi === "Tool");
console.log(leitud);

const puudub = tooted.find(t => t.nimi === "Voodi");
console.log(puudub); // undefined - juhul kui midagi ei leita