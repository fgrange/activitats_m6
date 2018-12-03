var crearJoc = function ()
 {  var espai = new Array();
    var puntuacio = 0;
    
    var llistaObjectesUtilitzats = new Array();
    
    var joc = {  nivell : 0,
                 inicialitzarJoc: function() {
                    espai = new array();
                    for (var x=0;x<25;x++) { espai[x]=[0,0,0,0,0,0,0,0,0,0]; }
                    puntuacio = 0;
                    nivell = 0;
                    llistaObjUtilitzats = new Array();
                    },
                obtenirFilaColumna: function(x, y){
                    return espai[x][y];
                    },
                obtenirPuntuacio: function(){  
                                            //alert(puntuacio);
                                           return puntuacio; },
                obtenirNivell: function(){ alert(nivell);
                                           return nivell; },
                obtenirLlistaObjUtilitzats: function(){ return llistaObjUtilitzats;  },
                obtenirObjEnConcretUtilitzat: function(obj){ return llistaObjUtilitzats[obj]; },
                movimentAuto: function(){ },
                cambiarPosicioJugador: function(){ },
                perdut: function(){ },
                finalitzar: function(){ },
                aumentarPuntuacio : function() { puntuacio++;}
                }
    return joc;

};
//Inicializamos el juego

var arrayX = new Array();
console.log(window.performance.memory);


var j = crearJoc();
console.log(j);
console.log(j.obtenirPuntuacio());
//console.log(j.obtenirNivell());
j.aumentarPuntuacio();
console.log(j.obtenirPuntuacio());
for (var x = 0;x<900000;x++) { arrayX[x]=crearJoc(); 
//console.log(window.performance.memory);
    
}
console.log(window.performance.memory);
