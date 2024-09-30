function maradekMasodpercekKiszamitas() {
    let jelenlegiOra = 14;
    let jelenlegiPerc = 34;
    let jelenlegiMasodperc = 42;

    let egyNapHanyMasodperc = 24 * 60 * 60;

    let eLteltMasodpercek = (jelenlegiOra * 60 * 60) + (jelenlegiPerc * 60) + jelenlegiMasodperc;

    let maradekMasodpercek = egyNapHanyMasodperc - eLteltMasodpercek;

    document.getElementById('maradekMasodpercek').textContent = "Maradék másodpercek:  " + maradekMasodpercek;
}
