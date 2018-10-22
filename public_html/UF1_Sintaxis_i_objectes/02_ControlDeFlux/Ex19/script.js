function myFunction() {
	var lista1 = [2.5, 5, 8, 10];
	var lista2 = [6, 7.6, 2];
	var t1 = sumarArray(lista1);
	var t2 = sumarArray(lista2);
	if (t1 > t2) {
		alert("La lista 1 tiene un total mayor que la lista 2.");	
	} else if (t1 < t2) {
		alert("La lista 2 tiene un total mayor que la lista 1.");
	} else {
		alert("Las 2 listas tienen un valor total equivalente.");
	}
}
function sumarArray(lista) {
	var sum = 0;
	lista.forEach(
		function addNumber(value) { sum += value; }
	);
	return sum;
}