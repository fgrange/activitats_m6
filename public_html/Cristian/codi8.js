/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var hores = 
        prompt("Introdueix un nombre d'hores");

var cont = 0;

do{
    switch(hores){
        case (hores>24): 
        case (hores == 24):alert("yea");cont++; hores = hores - 24; alert("BP"); 
            break;
        case (hores<24): hores = 24-hores;
    }
}while(hores>24);
    

alert("Dies: " + cont);

