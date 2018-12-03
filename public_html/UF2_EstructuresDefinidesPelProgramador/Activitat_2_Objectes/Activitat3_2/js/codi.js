var joc = function ()
 {  this.espai = new Array();
    this.puntuacio = 0;
    this.nivell = 0;
    this.llistaObjectesUtilitzats = new Array();
    }

joc.prototype.inicialitzarJoc= function() {
                    espai = new array();
                    for (var x=0;x<25;x++) { espai[x]=[0,0,0,0,0,0,0,0,0,0]; }
                    puntuacio = 0;
                    nivell = 0;
                    llistaObjUtilitzats = new Array();
                    }
                    
joc.prototype.obtenirFilaColumna= function(x, y){ return espai[x][y]; };
joc.prototype.obtenirPuntuacio= function(){  return puntuacio; };
joc.prototype.obtenirNivell= function(){ return nivell; };
joc.prototype.obtenirLlistaObjUtilitzats= function(){ return llistaObjUtilitzats;  };
joc.prototype.obtenirObjEnConcretUtilitzat= function(obj){ return llistaObjUtilitzats[obj]; };
joc.prototype.movimentAuto= function(){ };
joc.prototype.cambiarPosicioJugador= function(){ };
joc.prototype.perdut= function(){ };
joc.prototype.finalitzar= function(){ };
joc.prototype.aumentarPuntuacio= function() { puntuacio++;};
                
    




var arrayX = new Array();

for (var x = 0;x<900000;x++) { arrayX[x]=new joc();  }

