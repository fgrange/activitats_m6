//Faig una alerta mostrant què fa el codi
alert("Aixó és un conversor de monedes");
//declaro una constant de quants euros son un bitcoin
const CANVI = 5760.5;

/*Aquest codi mostra una alerta i declara una constant*/

var bitcoins = prompt("Introdueix els bitcoins", "Bitcoins");

var euros = bitcoins*CANVI;

alert("Els euros son: "+euros+"\n Els bitcoins son: "+bitcoins);