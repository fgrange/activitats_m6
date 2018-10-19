/*Es ingressen tres notes d'un alumne, si la mitjana és més gran o igual a 7 mostrar el missatge
'Examen Superat'. Tenir en compte que per obtenir la mitjana hem d’operar suma=nota1+nota2+nota3;
i després fer mitjana=suma/3;*/


//Li peegunto a usuari quines són les seves notes
var $nota1 = parseFloat(prompt("Esccriu la nota del primer examen:"));

var $nota2 = parseFloat(prompt("Esccriu la nota del segon examen:"));

var $nota3 = parseFloat(prompt("Esccriu la nota del tercer examen:"));


var $suma = $nota1+$nota2+$nota3;

//calculo la mitjana
var $mitjana = $suma/3;
//li mostro al usuari la seva nota

if ($mitjana>=7){

alert("La nota mitjana del teu mòdul és: "+$mitjana+"\n Examen superat.");
}
else{
    alert("La nota mitjana del teu mòdul és: "+$mitjana+"\n Examen no superat.");
}