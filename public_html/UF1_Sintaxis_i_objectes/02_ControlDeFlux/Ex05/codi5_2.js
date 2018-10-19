/* S’ingressa per teclat un nombre positiu d'un o dos dígits (1..99) mostra un missatge indicant si s’ha
introduit un nombre i el nombre de digitis que té (un o dos). */


var $digit = parseInt(prompt("Escriu un nombre de un o dos digits: "));



if ($digit<10){
    alert("El teu nombre és: "+$digit);
    alert("El teu nombre té 1 digit.");
}
else if ($digit<100){
    alert("El teu nombre és: "+$digit);
    alert("El teu nombre té 2 digits.");
}
else{
    alert("El teu nombre té més de 2 digits.");
}
