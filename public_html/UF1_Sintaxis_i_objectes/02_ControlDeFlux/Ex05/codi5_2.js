/* S’ingressa per teclat un nombre positiu d'un o dos dígits (1..99) mostra un missatge indicant si s’ha
introduit un nombre i el nombre de digitis que té (un o dos). */


var $digit = prompt("Escriu un nombre de un o dos digits: ");



if (($digit.length<2) && ($digit.length>0)){
    alert("El teu nombre és: "+$digit);
    alert("El teu nombre té 1 digit.");
}
else if (($digit.length<3) && ($digit.length>1)){
    alert("El teu nombre és: "+$digit);
    alert("El teu nombre té 2 digits.");
}
else{
    alert("El teu nombre té més de 2 digits.");
}
