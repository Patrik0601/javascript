function osztokKiirasa() {
    let eredmeny= "";

    let szamok = 10;

    while (szamok <= 30) {
        eredmeny += szamok + ": ";
        
        let osztok = [];

        let i = 2;
        while (i <= szamok) {
            if (szamok % i === 0) {
                osztok.push(i);
            }
            i++;
        }

        eredmeny += osztok.join(", ") + ",\n";

        szamok++;
    }

    document.getElementById('osztok').textContent = eredmeny;
}