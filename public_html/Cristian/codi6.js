/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const NUM = 12;   //variable amb el nombre del que volem saber la taula de multiplicar
var resultat = "";  //variable que emmagatzemarà els diferents resultats de les multiplicacions
for (var i = 0; i <= 10; i++) {    //bucle que iterarà 10 vegades
    resultat += i + " * " + NUM + " =" + (parseInt(NUM)*parseInt(i)) + "\n";    //càlcul de la multiplicació per a cada valor de la i
}
alert(resultat);    //mostrem per pantalla elresultat