function szamokKIadasa() {
    let szamok = "";
    let oszthatoeHarommal = 0;
    let kihagyas = 1;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            oszthatoeHarommal++;

            if (oszthatoeHarommal === kihagyas) {
                kihagyas++;
                continue;
            }
        }

        szamok += i + ", ";
    }

    szamok = szamok.slice(0, -2);

    document.getElementById('szamok').textContent = "Számok: " + szamok;
}
