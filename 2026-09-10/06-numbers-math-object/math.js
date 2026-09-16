console.log(Math.round(4.6)); // 5 - round ümardab lähima täisarvuni
console.log(Math.floor(4.6)); // 4 - floor ümardab alati alla
console.log(Math.ceil(4.3)); // 5 - ceil ümardab alati üles

console.log(Math.min(3, 7, 1)); // 1 (kõige väiksem väärtus)
console.log(Math.max(3, 7, 1)); // 7 (kõige suurem väärtus)

console.log(Math.random()); // juhuslik number vahemikus 0-1 (aga 1 välja arvatud)

// Juhuslik täisarv vahemikus 1 kuni 6
let täisarv = Math.floor(Math.random() * 6) + 1;
console.log(täisarv);