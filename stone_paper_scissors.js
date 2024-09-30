function kiNyert() {
    let player1 = parseInt(document.getElementById('jatekos1').value);
    let player2 = parseInt(document.getElementById('jatekos2').value);

    if (player1 < 1 || player1 > 3 || player2 < 1 || player2 > 3) {
        document.getElementById('nyertes').textContent = "Nem megfelelő adat!";
        return;
    }

    let eredmeny;
    if (player1 === player2) {
        eredmeny = "Döntetlen.";
    } else if (
        (player1 == 1 && player2 == 3) ||
        (player1 == 2 && player2 == 1) || 
        (player1 == 3 && player2 == 2)
    ) {
        eredmeny = "Az első játékos nyert.";
    } else {
        eredmeny = "A második játékos nyert.";
    }

    document.getElementById('nyertes').textContent = eredmeny;
}
