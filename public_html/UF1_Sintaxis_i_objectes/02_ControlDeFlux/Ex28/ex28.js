var sumaMati = 0
var sumaTarda = 0
var sumaNit = 0

for (i=0; i <5; i++)
{
	var edat = parseInt(prompt("Introdueix una edat del torn de mati ("+(i+1)+" de 5):"))
	sumaMati += edat
}
for (i=0; i <6; i++)
{
	var edat = parseInt(prompt("Introdueix una edat del torn de tarda ("+(i+1)+" de 6):"))
	sumaTarda += edat
}

for (i=0; i <11; i++)
{
	var edat = parseInt(prompt("Introdueix una edat del torn de nit ("+(i+1)+" de 11):"))
	sumaNit += edat
}
var mitjanaMati = sumaMati / 5
var mitjanaTarda= sumaTarda/ 6
var mitjanaNit = sumaNit / 11

alert("Mitjana mati: "+mitjanaMati)
alert("Mitjana tarda:  "+mitjanaTarda)
alert("Mitjana nit: "+mitjanaNit)

if (mitjanaMati > mitjanaTarda)
{
	if (mitjanaMati > mitjanaNit)
	{
		alert("Els alumnes del torn de mati son mes grans")
	}
	else
	{
		alert("Els alumnes del torn de nit son mes grans")
	}
}
else
{
	if (mitjanaTarda > mitjanaNit)
	{
		alert("Els alumnes del torn de tarda son mes grans")
	}
	else
	{
		alert("Els alumnes del torn de nit son mes grans")
	}
}
