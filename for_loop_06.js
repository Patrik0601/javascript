function faktorialisSzamolo() {
    let szam = parseInt(document.getElementById('szam').value);

    if (szam < 0 || szam != NaN) {
        document.getElementById('faktorialisEredmeny').textContent = "Kérlek adj meg egy 0 nagyobb vagy eggyenlő számot.";
        return;
    }

    let faktorialis = 1;

    for (let i = 1; i <= szam; i++) {
        faktorialis *= i;
    }

    document.getElementById('faktorialisEredmeny').textContent = szam + " faktoriása " + faktorialis + ".";
}
