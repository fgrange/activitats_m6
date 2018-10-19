/*  Sol·licitar que s'ingressi dues vegades una clau. Mostra un missatge indicant si són iguals o diferents*/

var $clau1 = parseInt(prompt("Ingresa una clau"));
var $clau2 = parseInt(prompt("Ingresa una altra clau"));

if ($clau1 == $clau2){
    alert("Són iguals");
}
else{
    alert("Són diferents");
}