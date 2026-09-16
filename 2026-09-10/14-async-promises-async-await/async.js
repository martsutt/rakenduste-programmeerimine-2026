function oota(ms) {
    return new Promise(resolve => setTimeout(() => resolve("valmis"), ms));
}

async function käivita() {
    console.log("alustasin");
    const tulemus = await oota(1000);
    console.log(tulemus); // "valmis" - ilmub 1 sekundi pärast
}
käivita();