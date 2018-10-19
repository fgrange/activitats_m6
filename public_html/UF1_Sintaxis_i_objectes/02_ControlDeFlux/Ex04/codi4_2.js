/* S’ingressen tres notes d'un alumne, si la mitjana és més gran o igual a 4 mostrar un missatge
"regular", en cas contrari ha de mostrar "suspès". */


//Li peegunto a usuari quines són les seves notes
var $nota1 = parseFloat(prompt("Esccriu la nota 1:"));

var $nota2 = parseFloat(prompt("Esccriu la nota 2:"));

var $nota3 = parseFloat(prompt("Esccriu la nota 3:"));


var $suma = $nota1+$nota2+$nota3;

//calculo la mitjana
var $mitjana = $suma/3;
//li mostro al usuari la seva nota

if ($mitjana>=4){
    alert("La nota mitjana del teu mòdul és: "+$mitjana+"\n Mitjana regular.");
    }
else{
    alert("La nota mitjana del teu mòdul és: "+$mitjana+"\n Suspès.");
    }