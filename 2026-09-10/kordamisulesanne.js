const users = [
    { id: 1, name: "Mari", age: 22, active: true },
    { id: 2, name: "Jüri", age: 17, active: false },
    { id: 3, name: "Kati", age: 31, active: true },
    { id: 4, name: "Martin", age: 19, active: false },
    { id: 5, name: "Laura", age: 26, active: true }
];

// 3.1 Kõikide kasutajate nimed
users.forEach(user => console.log(user.name));

// 3.2 Aktiivsed kasutajad
const aktiivsed = users.filter(user => user.active);
console.log(aktiivsed);

// 3.3 Vähemalt 18-aastased kasutajad
const täiskasvanud = users.filter(user => user.age >= 18);
console.log(täiskasvanud);

// 3.4 Ainult nimede massiiv
const nimed = users.map(user => user.name);
console.log(nimed);

// 3.5 Kasutaja, kelle id on 3
const kasutajaId3 = users.find(user => user.id === 3);
console.log(kasutajaId3);

// 3.6 getUserStatus funktsioon
function getUserStatus(user) {
    if (user.active) {
        return "Aktiivne";
    } else {
        return "Mitteaktiivne";
    }
}
console.log(getUserStatus(users[0])); // "Aktiivne"

// 3.7 getGreeting - arrow function + template literal
const getGreeting = (user) => `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`;
console.log(getGreeting(users[0])); // "Tere, Mari! Sa oled 22 aastat vana."

// 3.8 Destructuring
const { name, age } = users[0];
console.log(name, age); // "Mari" 22

// 3.9 Spread süntaks - uue kasutaja lisamine
const uusKasutaja = { id: 6, name: "Karl", age: 24, active: true };
const uuendatudUsers = [...users, uusKasutaja];
console.log(uuendatudUsers.length); // 6
console.log(users.length);          // 5 - originaal ei muutunud

// 3.10
users[0].address = { city: "Tallinn" };

console.log(users[0].address?.city); // "Tallinn"
console.log(users[1].address?.city ?? "Linn puudub"); // "Linn puudub" - Jüril pole addressi

// 3.11 forEach - iga kasutaja nimi ja staatus
users.forEach(user => {
    console.log(`${user.name} – ${getUserStatus(user)}`);
});

// 3.12 Sorteerimine vanuse järgi
const sorteeritud = [...users].sort((a, b) => a.age - b.age);
console.log(sorteeritud);