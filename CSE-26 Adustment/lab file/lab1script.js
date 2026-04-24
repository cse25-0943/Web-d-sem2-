function convertTemp() {
    let c = document.getElementById("celsius").value;

    if (c === "") {
        document.getElementById("result").innerHTML = "Please enter a value";
        return;
    }

    let f = (c * 9/5) + 32;

    document.getElementById("result").innerHTML =
        c + " °C = " + f.toFixed(2) + " °F";
}