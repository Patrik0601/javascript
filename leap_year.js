function szokoEvEllenorzes() {
    let ev = document.getElementById('ev').value;

    let teszteles;
    if ((ev % 4 === 0 && ev % 100 !== 0) || (ev % 400 === 0)) {
        teszteles = true;
    } else {
        teszteles = false;
    }

    if (teszteles) {
        document.getElementById('szokoEv-e').textContent = ev + " szökő év.";
    } else {
        document.getElementById('szokoEv-e').textContent = ev + " nem szökő év.";
    }
}
