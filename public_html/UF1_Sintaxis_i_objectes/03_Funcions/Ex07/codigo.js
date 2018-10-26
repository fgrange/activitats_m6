function calcularMitjana(a, b, c, d, e) {
    return a + b + c + d + e;
}

var a = parseFloat(prompt("Introdueix nombre a: ", 0));
var b = parseFloat(prompt("Introdueix nombre b: ", 0));
var c = parseFloat(prompt("Introdueix nombre c: ", 0));
var d = parseFloat(prompt("Introdueix nombre d: ", 0));
var e = parseFloat(prompt("Introdueix nombre e: ", 0));
alert("Mitjana: " + calcularMitjana(a, b, c, d, e));