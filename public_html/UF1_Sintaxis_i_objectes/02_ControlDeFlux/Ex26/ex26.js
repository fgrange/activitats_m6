//26. Escriure un programa que demani ingressar coordenades (x, y) que representen punts en el pla.
//calcular quants punts s'han ingressat en el primer, segon, tercer i quart quadrant. En començar el
//programa es demana que s'ingressi la quantitat de punts a processar

var q1 = 0
var q2 = 0
var q3 = 0
var q4 = 0

var punts=parseInt(prompt("Ingressa quants punts voldras introduir: ", 2))

for (var i=0; i < punts; i++)
{
	var x = parseInt(prompt("Ingressa una coordenada x: "))
	var y = parseInt(prompt("Ingressa una coordenada y: "))
	
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

alert("Coordenades al primer quadrant: " + q1)
alert("Coordenades al segon quadrant: " + q2)
alert("Coordenades al tercer quadrant: " + q3)
alert("Coordenades al quart quadrant: " + q4)