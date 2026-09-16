const korrutaKaks = x => x * 2; // implicit return
const korrutaKaks2 = x => { return x * 2; }; // explicit return, sama tulemus
console.log(korrutaKaks(5), korrutaKaks2(5)); // 10 10

const numbrid = [1, 2, 3];
numbrid.forEach(n => console.log(n * 10)); // callback'i näide