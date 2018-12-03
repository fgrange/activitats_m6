//Creació de l'objecte
var juego = {
    //Atributs
    espai: [    [0,0,0,0,0,0,0,0,0,0],
                [],
                [],
                //...,
                []
            ],      
    //Segun el arma utilizada se sumaran los puntos
    puntuacio: 0,
    nivell: 0,
    llistaObjUtilitzats: [],
    
    
    //Inicialitzem el joc
    inicialitzarJoc: function(){
        this.espai = new array();
        for (var x=0;x<25;x++) { this.espai[x]=[0,0,0,0,0,0,0,0,0,0]; }
        this.puntuacio = 0;
        this.nivell = 0;
        this.llistaObjUtilitzats = new Array();
        //return juego.espai;
        
    },

    obtenirFilaColumna: function(x, y){
        return this.espai[x][y];
        //Obtenemos el div donde ira el juego
        
    },

    obtenirPuntuacio: function(){
        return this.puntuacio;
    },

    obtenirNivell: function(){
        return this.nivell;
    },

    obtenirLlistaObjUtilitzats: function(){
        return this.llistaObjUtilitzats;
    },

    obtenirObjEnConcretUtilitzat: function(obj){
        return this.llistaObjUtilitzats[obj];
    },
    movimentAuto: function(){

    },
    
    cambiarPosicioJugador: function(){

    },
    perdut: function(){

    },
    finalitzar: function(){

    }

};
//Inicializamos el juego
document.write(juego.inicialitzarJoc())
document.write(juego.obtenirFilaColumna())
