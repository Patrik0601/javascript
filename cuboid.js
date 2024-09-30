function teglatestSzamitas() {

    let hossz = 10.4;
    let szelesseg = 13.5;
    let magassag = 8.2;

    let felulet = 2 * (hossz * szelesseg + szelesseg * magassag + magassag * hossz);

    let terfogat = hossz * szelesseg * magassag;

    document.getElementById('felulet').textContent = "Felület: " + felulet.toFixed(2);
    document.getElementById('terfogat').textContent = "Térfogat: " + terfogat.toFixed(2);
}
