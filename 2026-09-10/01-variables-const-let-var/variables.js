let vanus = 25; //let'i kasutatakse siis, kui väärtust on vaja hiljem muuta
vanus = 26;
// let lubab väärtust hiljem muuta

const nimi = "Markus"; //const'i kasutatakse siis, kui väärtust pole vaja muuta
// nimi = "Mati"; - see annaks vea kuna const väärtust ei saa muuta

// var on vanem (kasutati enne 2015) ja vähem turvaline viis muutujaid defineerida, kuna see lubab muutujaid defineerida globaalselt

if (true) {
    let ilm = "soe";
    var tuju = "hea";
    console.log(ilm); // kuvab ilma
}
// console.log(ilm); - see annaks vea kuna ilm on defineeritud ainult if plokis
console.log(tuju); // kuvab tuju, kuna var defineerib muutuja globaalselt ja ignoreerib block scope'i