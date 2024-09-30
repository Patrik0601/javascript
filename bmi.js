function testTomegSzamolas() {
    let tomeg = 81.2;
    let magassag = 1.78;
    let testTomeg = tomeg / (magassag * magassag);
    document.getElementById('testTomegEredmeny').textContent = "BMI: " + testTomeg.toFixed(2);
}
