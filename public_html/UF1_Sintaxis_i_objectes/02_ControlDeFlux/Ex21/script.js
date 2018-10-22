/* 
21. Confeccionar un programa que llegeixi 3 parells de dades, cada parell de
dades correspon a la mida de la base i l'altura d'un triangle. El programa ha de
calcular:
a) De cada triangle la mesura de la seva base, la seva altura i la seva 
superfície.
b) La quantitat de triangles amb superfície major a 12.
 */

//Declarem les variables 
var Alsades = [];
var Amplades = [];
var Superficie = [];
var majors12 = 0;


//i les demanem amb un for, alhora que les analitzem
for(var i=0;i<3;i++){
    parseFloat(Alsades[i] = prompt("Introduiex alsada triangle " + (i+1) + ":"));
    parseFloat(Amplades[i] = prompt("Introduiex amplada triangle " + (i+1) + ":"));
    
    //Calculem la superficie
    Superficie[i] = (Alsades[i]*Amplades[i])/2;
    
    //Si es major que 12 afegim un al comptador
    if(Superficie[i] > 12) majors12++;
}

//Les mostrem per pantalla amb un alert
alert("Triangle 1"+
        "\n    Alsada = " + Alsades[0] +
        "\n    Amplada = " + Amplades[0] +
        "\n    Superficie = " + Superficie[0] +
      "\nTriangle 2"+
        "\n    Alsada = " + Alsades[1] +
        "\n    Amplada = " + Amplades[1] +
        "\n    Superficie = " + Superficie[1] +
      "\nTriangle 3"+
        "\n    Alsada = " + Alsades[2] +
        "\n    Amplada = " + Amplades[2] +
        "\n    Superficie = " + Superficie[2] +
        "\nTriangle amb area major de 12: " + majors12);