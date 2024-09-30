function betuk() {
    let szo = document.getElementById('szo').value;

    let eredmeny = "";

    for (let i = 0; i < szo.length; i++) {
        eredmeny += szo[i] + "<br>";
    }

    document.getElementById('betukEredmeny').innerHTML = eredmeny;
}
