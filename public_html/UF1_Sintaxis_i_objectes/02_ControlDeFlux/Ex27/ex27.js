
var contNeg = 0
var contPos = 0
var contMult = 0
var contTotal = 0
for (var i=0; i<10; i++)
{
    var num = parseInt(prompt("Ingressa un numero","2"))
	if (num >= 0)
	{
		contPos +=1
	}
	else
	{
		contNeg +=1
	}
	if (num % 15 == 0)
	{
		contMult +=1
	}
		contTotal += num
}
alert("Positius: "+ contPos)
alert("Negatius: "+ contNeg)
alert("Multiples de 15: "+ contMult)
alert("Suma total: "+ contTotal)