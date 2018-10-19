/* 
 *  Confeccionar un programa que permeti carregar un nombre enter positiu de fins a tres xifres i mostri
un missatge indicant si té 1, 2, o 3 xifres.
 */
var num = prompt("Introdueix un numero: ", "");

if (isNaN(num)){
    alert ("ERROR.");
} else if (num.toString().length == 1 || num.toString().length == 2 || num.toString().length == 3 || !(num.toString().lenght) > 3){
    alert ("Longitud: " + num.toString().length);
} else {
    alert ("Numero de mes de 3 xifres.");
}

