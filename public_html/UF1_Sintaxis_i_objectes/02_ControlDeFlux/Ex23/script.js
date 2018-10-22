/* 
23. Desenvolupar un programa que mostri la taula de multiplicar del 5 (del 5 al 50).
 */

//Declarem les variables 
var cinc = 5;
var taula = "";

//i amb un for fem tota la taula del cinc, copiantla dins dun string
for(var i = 1; i < 11; i++){
    taula += "5 x " + i + " = " + (cinc*i) + "\n";
}

alert(taula);