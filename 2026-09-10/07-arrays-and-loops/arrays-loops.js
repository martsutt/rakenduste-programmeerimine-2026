let nimed = ["Mari", "Jüri", "Kati"];
console.log(nimed[0]); // "Mari"
console.log(nimed.length); // 3

console.log(nimed.includes("Jüri")); // true
nimed.push("Toomas"); // muudab originaali
console.log(nimed);
nimed.pop(); // muudab originaali
console.log(nimed);

for (let i = 0; i < nimed.length; i++) {
    console.log(nimed[i]);
}
for (let nimi of nimed) {
    console.log(nimi);
}

for (let i = 0; i < 10; i++) {
    if (i === 3) break;
    console.log(i);
}