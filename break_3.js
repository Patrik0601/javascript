function betuveValtas() {
    let szoveg = document.getElementById('szoveg').value;

    let betuk = "";

    for (let i = 0; i < szoveg.length; i++) {
        let betukSzama = szoveg[i];

        if (/^[a-zA-Z\s.,?!]$/.test(betukSzama)) {
            betuk += betukSzama + " ";
        } else {
            break;
        }
    }

    if (betuk === "") {
        document.getElementById('betuk').textContent = "Nem megfelelő adatot adott meg.";
    } else {
        document.getElementById('betuk').textContent = "Betük: " + betuk;
    }
}
