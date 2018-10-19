/* 
 * S’ingressa per teclat un nombre positiu d'un o dos dígits (1..99) mostra un missatge indicant si s’ha
introduit un nombre i el nombre de digitis que té (un o dos). 
 */

var num = parseInt(prompt("Introdueix un numero del 1 al 99"));

if (!isNaN(num)) {
    if (num > 0 && num < 10) {
        alert("El numero introduit te una xifra i es el numero " + num);
    } else if (num > 9 && num < 100) {
        alert("El numero introduit te dues xifres i es el numero " + num);
    } else {
        alert(num + " -> Aquest numero no pertany al rang");
    }
} else {
    alert("Aixo no es un numero.");
}



