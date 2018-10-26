function calcularMitjana(a, b, c) {
    return (a + b + c) / 3;
}

var a = parseFloat(prompt("Introdueix nombre a: ", 0));
var b = parseFloat(prompt("Introdueix nombre b: ", 0));
var c = parseFloat(prompt("Introdueix nombre c: ", 0));
alert("Mitjana: " + calcularMitjana(a, b, c));