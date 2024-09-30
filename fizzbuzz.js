function startFizzBuzz() {
    let eredmeny = "";

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            eredmeny += "fizzbuzz";
        } else if (i % 3 === 0) {
            eredmeny += "fizz";
        } else if (i % 5 === 0) {
            eredmeny += "buzz";
        } else {
            eredmeny += i;
        }

        if (i < 100) {
            eredmeny += ", ";
        }
    }

    document.getElementById('fizzbuzzEredmeny').textContent = eredmeny;
}
