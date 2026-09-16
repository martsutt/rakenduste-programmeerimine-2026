// Võrdlusoperaatorid: ===, !==, >, <, >=, <=
console.log(5 === 5); // true
console.log(5 !== 3); // true
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 3); // false

console.log("5" == 5); // true - teisendab tüübid enne võrdlust
console.log("5" === 5); // false - kontrollib nii väärtust kui tüüpi, seega on kindlam

// Operaatorid && = ja, || = või, ! = ei
console.log(true && false); // false - mõlemad peavad olema true
console.log(true || false); // true - piisab, kui üks on true
console.log(!true); // false - pöörab väärtuse vastupidiseks

// Truthy ja falsy väärtused: "", 0, null, ja undefined
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("tekst")); // true

let vanus = 20;
if (vanus < 13) {
    console.log("Tatikas");
} else if (vanus < 18) {
    console.log("Teismeline");
} else {
    console.log("Täiskasvanu");
}

// Tingimuslik operaator: tingimus ? A (true puhul) : B (false puhul)
let onSisseLogitud = true;
let sõnum = onSisseLogitud ? "Tere!" : "Palun logi sisse.";
console.log(sõnum); // "Tere!"