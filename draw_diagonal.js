function negyzetRajzolas() {

    let meret = parseInt(document.getElementById('meret').value);

    if (isNaN(meret) || meret <= 0) {
        document.getElementById('negyzet').textContent = "Kérlek adj meg egy pozitív számot.";
        return;
    }

    let negyzet = '';

    for (let sor = 0; sor < meret; sor++) {
        for (let oszlop = 0; oszlop < meret; oszlop++) {

            if (sor === oszlop || sor + oszlop === meret - 1) {
                negyzet += '* ';
            } else {
                negyzet += '- ';
            }
        }
        negyzet += '\n';
    }

    document.getElementById('negyzet').textContent = negyzet;
}
