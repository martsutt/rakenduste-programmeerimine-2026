// Aritmeetilised operaatorid +, -, *, /, %, ja **
console.log(5 + 2); // 7
console.log(5 - 2); // 3
console.log(5 * 2); // 10
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1 - jääk jagamisel
console.log(5 ** 2); // 25 - astendamine

// += ja ++
let arv = 5;
arv += 3; // sama, mis arv = arv + 3
console.log(arv); // 8
arv++; // sama, mis arv = arv + 1 (liidetakse 1 juurde)
console.log(arv); // 9

console.log(Number("5")); // 5 (number)
console.log(String(5)); // "5" (string)

console.log("5" + 2); // "52" - pannakse numbrid visuaalselt kokku (string)
console.log(Number("5") + 2); // 7 - liidetakse kokku (number)

// NaN tähendab "Not a Number" ja see tekib siis, kui üritatakse teha arvutust, mis pole võimalik.
console.log("tekst" * 2); // NaN - "Not a Number", tulemus pole arvutatav