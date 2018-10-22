/* 
22. Desenvolupar un programa que sol·liciti la càrrega de 10 números i imprimeixi la suma del últims 5
valors ingressats.
 */

//Declarem les variables 
var numeros = [];
var suma = 1;



//i les demanem amb un for, alhora que les analitzem
for(var i = 0; i < 10; i++){
    parseInt(numeros[i] = prompt("Introduiex numero " + (i+1) + ":"));
    if(i>4) suma = numeros[i];
}

alert("La suma dels 5 ultims es: " + suma);