/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * 
 * 8. Heu de crear un script que li demani a l'usuari un nombre d'hores i calculi les setmanes i hores que
representen. Mostreu el resultat mitjançant un alert
 */
var hores = prompt("Introdueix un nombre d'hores");
		alert("Setmanes" + parseInt(hores/168) + "\nDies: " + (7*((hores/168)-parseInt(hores/168))));

