/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/** 6. Heu de crear un script que mostri la taula de multiplicar del 12 mitjançant un alert. Cal que definiu
una variable constant que contingui el 12 pel qual multipliquem. No oblideu de posar els comentaris al
codi
**/
var num = 12;   //variable amb el nombre del que volem saber la taula de multiplicar
var resultat = "";  //variable que emmagatzemarà els diferents resultats de les multiplicacions
for (var i = 0; i <= 10; i++) {    //bucle que iterarà 10 vegades
    resultat += i + " * " + num + " =" + (parseInt(num)*parseInt(i)) + "\n";    //càlcul de la multiplicació per a cada valor de la i
}
alert(resultat);    //mostrem per pantalla elresultat