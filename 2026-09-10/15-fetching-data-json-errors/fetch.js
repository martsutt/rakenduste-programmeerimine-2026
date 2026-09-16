async function tooKasutaja() {
    try {
        const vastus = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!vastus.ok) {
            throw new Error(`HTTP viga: ${vastus.status}`);
        }
        const andmed = await vastus.json();
        console.log(andmed);
    } catch (viga) {
        console.log("Midagi läks valesti:", viga.message);
    }
}
tooKasutaja();