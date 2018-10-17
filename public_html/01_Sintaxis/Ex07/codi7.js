/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * 7. Heu de crear un script que demani a l'usuari un dividend i un divisor. Si el divisor és 0 s'ha d'avisar a
l'usuari mitjançant un alert que la divisió no es pot fer i si és diferent a 0 s'ha de mostrar mitjançant un
alert el resultat de la divisió. Heu d'utilitzar l'operador condicional per fer aquest script.
 */
var num1 = prompt("Introdueix un dividend");    //entrada del valor del divident
var num2 = prompt("Introdueix un divisor"); //entrada del valor del divisor

if (parseInt(num2) === 0) { //es comprova que el divisor no sigui un 0
    alert("La divisió no es pot realitzar, prova a introduir un valor diferent a 0 en el divisor");
}
else{
    alert("Resultat de "+num1+"/"+num2+"= "+(parseInt(num1)/(parseInt(num2)))); //càlcul de la divisió
}