function jegySzamolas() {
    let pszam = document.getElementById('pontszam').value;

    let grade;
    if (pszam >= 85 && pszam <= 100) {
        jegy = 'A';
    } else if (pszam >= 70 && pszam < 85) {
        jegy = 'B';
    } else if (pszam >= 55 && pszam < 70) {
        jegy = 'C';
    } else if (pszam >= 40 && pszam < 55) {
        jegy = 'D';
    } else if (pszam >= 0 && pszam < 40) {
        jegy = 'F';
    } else {
        jegy = 'Nem megfelelő adat. Kérek egy számot(0-100)';
    }

    document.getElementById('jegy').textContent = "A jegyed: " + jegy;
}
