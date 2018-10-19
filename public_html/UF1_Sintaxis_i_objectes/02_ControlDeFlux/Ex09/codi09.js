 /* 
 *  D'un postulant a una feina, que va realitzar un test de capacitació, es va obtenir la següent
informació: nom del postulant, quantitat total de preguntes que se li van realitzar i quantitat de
preguntes que va contestar correctament. Es demana fer un programa que llegeixi les dades del
postulant i informe del seu nivell segons el percentatge de respostes correctes que ha obtingut, i sabent
que:
• Nivell superior: Percentatge >= 90%.
• Nivell mitjà: percentatge >= 75% i <90%.
• Nivell regular: Percentatge >= 50% i <75%.
• Fora de nivell: Percentatge < 50%
 */
var nom = prompt("Introdueix el nom : ", "");
var numPre = parseInt(prompt("Numero de preguntes totals : ", ""));
var CPre = parseInt(prompt("Preguntes correctes : ", ""));

var gran = (numPre - (numPre * 0.1));
var medio = (numPre - (numPre * 0.25));
var bajo = (numPre / 2);


if (CPre >= gran ){
    alert (nom + " Nivell Superior.");
} else if (CPre >= medio){
    alert (nom + " Nivell Mitja.");
} else if (CPre >= bajo){
    alert (nom + " Nivell regular.");    
} else {
    alert (nom + " Fora de nivell.");
}







