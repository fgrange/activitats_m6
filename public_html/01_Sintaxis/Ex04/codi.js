//4. Heu de crear un script que faci operacions entre dues dades i mostri el resultat per pantalla
//mitjançant un alert per cada operació: cal que compari dos booleans, que sumi dos sencers, que
//multipliqui dos reals, i que compari dos caràcters. Les dades les ha d'introduir l'usuari. Cal posar
//comentaris al codi.

//Demano les dades
var a = prompt("Introdueix un 'true' o un 'false'");
var b = prompt("Introdueix un 'true' on un 'false'");
var c = parseInt(prompt("Introdueix un sencer"))
var d = parseInt(prompt("Introdueix un sencer"))
var e = prompt("Introdueix un nombre real")
var f = prompt("Introdueix un nombre real")
var g = prompt("Introdueix un caràcter")
var h = prompt("Introdueix un caràcter")
//Depenent de si a i b són iguals o diferents faig un alert o altre.
if(a==b){
    alert("a i b són iguals!");
}else{
    alert("a i b són diferents");
}
//faig la suma dels nombres sencers.
var n = c+d;
//Faig l'alert amb la suma dels nombres
alert("La suma de "+c+" i "+d+" és: "+n);
alert("La multiplicació de "+e+" i "+f+" es igual a: "+(e*f));
//Comprovo si els caràcters són o no iguals perquè mostri un alert o altre.
if(g==h){
    alert("El caracter "+g+" es igual al caracter "+h);
}else{
    alert("El caracter "+g+" NO es igual al caracter "+h);
}