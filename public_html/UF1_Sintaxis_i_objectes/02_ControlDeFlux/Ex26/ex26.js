//26. Escriure un programa que demani ingressar coordenades (x, y) que representen punts en el pla.
//calcular quants punts s'han ingressat en el primer, segon, tercer i quart quadrant. En començar el
//programa es demana que s'ingressi la quantitat de punts a processar

//Declarem els contadorsde cada quadrant
var q1 = 0
var q2 = 0
var q3 = 0
var q4 = 0

//Demanem quants punts vol introduir l'usuari
var punts=parseInt(prompt("Ingressa quants punts voldras introduir: ", 2))

//Creem un for on el límit es el valor ingressat abans
for (var i=0; i < punts; i++)
{
	//demanem els punts X i Y
	var x = parseInt(prompt("Ingressa una coordenada x: "))
	var y = parseInt(prompt("Ingressa una coordenada y: "))
	
	//Depenent de la posició, el codi decideix en quin quadrant col·locar-lo
	if (x >= 0 && y >=0) 
	{
		q1 += 1
	}
	else if(x >=0 && y < 0)
	{
		q4 +=1
	}
	else if (x < 0 && y >= 0)
	{
		q2 +1
	}
	else
	{
		q3 =1
	}
}
//Imprimeix per pantalla cada quadrant
alert("Coordenades al primer quadrant: " + q1)
alert("Coordenades al segon quadrant: " + q2)
alert("Coordenades al tercer quadrant: " + q3)
alert("Coordenades al quart quadrant: " + q4)