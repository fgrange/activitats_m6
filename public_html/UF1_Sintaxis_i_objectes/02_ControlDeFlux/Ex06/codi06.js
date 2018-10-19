/* 
 *  Es carreguen per teclat tres nombres diferents. Mostra per pantalla el major d'ells.
 */
var num1 = parseInt(prompt("Introdueix num1 : "));
var num2 = parseInt(prompt("Introdueix num2 : "));
var num3 = parseInt(prompt("Introdueix num3 : "));

if (num1 > num2 ) {
    if (num1 > num3) {
        alert("Numero mes gran es: " + num1);
    } else {
        alert("Numero mes gran es: " + num3);
    }
} else {
    if (num2 > num3) {
        alert("Numero mes gran es: " + num2);
    } else {
        alert("Numero mes gran es: " + num3);
    }
}
    
//if (num1 > num2 && num1 > num3) {
//    alert("Numero mes gran es: " + num1);
//} else {
//    if (num2 > num1 && num2 > num3) {
//        alert("Numero mes gran es: " + num2);
//    } else {
//        alert("Numero mes gran es: " + num3);
//    }
//}

