/* 
 *  Confeccionar un programa que permeti carregar un nombre enter positiu de fins a tres xifres i mostri
un missatge indicant si té 1, 2, o 3 xifres.
 */
var num = parseInt (prompt("Introdueix un numero: "));

if (isNaN(num)){
    alert ("ERROR.");
} else if (num > 0 || num <= 9){
    alert ("Longitud igual a 1.");
} else if (num <= 99){
    alert ("Longitud igual a 2.");
} else {
    alert ("Longitud igual a 3.");
}

