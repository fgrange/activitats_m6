/* 
24. Confeccionar un programa que permeti ingressar un valor de l'1 al 10 i ens mostri la taula de
multiplicar del mateix (els primers 12 termes).
Exemple: Si ingrés 3 ha d'aparèixer en pantalla els valors 3, 6, 9, fins al 36. 
*/

//Declarem les variables 
var numero = parseInt(prompt("Introdueix un numero"));
var taula = "";

//i les demanem amb un for, alhora que les analitzem
for(var i = 1; i < 13; i++){
    taula += numero + " x " + i + " = " + (numero*i) + "\n";
}

alert(taula);