//• Heu de fer que tot el codi Javascript es trobi en un arxiu extern anomenat el codi.js i el script
//segueixi funcionant de la mateixa manera. Afegir a la pàgina HTML un missatge d'avís per als
//navegadors que no tinguin activat el suport de Javascript
//• Afegiu una constant que sigui CANVI amb valor 5760,5.
//• Afegir alguns comentaris que expliquin el funcionament del codi.
//• Afegir una “finestra/missatge (funció javascript)” per introduïr valors en bitcoins (prompt).
//• Feu una operació que faci la conversió a euros i guardeu el resultat a una variable anomenada
//euros.
//• Mostreu el resultat de l'operació en dues lineas, la primera amb el valor introduirt indicant
//bitcoins i un altre línea el valor en euros (per tal que el format sigui correcte feu servir els
//caracters d'escape)

//Faig una alerta mostrant què fa el codi
alert("Aixó és un conversor de monedes");
//declaro una constant de quants euros son un bitcoin
const CANVI = 5760.5;

/*Aquest codi mostra una alerta i declara una constant*/

var bitcoins = prompt("Introdueix els bitcoins", "Bitcoins");

var euros = bitcoins*CANVI;

alert("Els euros son: "+euros+"\n Els bitcoins son: "+bitcoins);