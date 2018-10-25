function myFunction() {
	var lista1 = [2.5, 5, 8, 10];
	var lista2 = [6, 7.6, 2];
	var t1 = sumarArray(lista1);
        
        t1=0;
        for (i=0 ; i<= lista1.length ; i++){
            t1 = t1+lista1[i];
        }
        
        t2=0;
        for (i=0 ; i<= lista2.length ; i++){
            t2 = t2+lista2[i];
        }
        
	if (t1 > t2) {
		alert("La lista 1 tiene un total mayor que la lista 2.");	
	} else if (t1 < t2) {
		alert("La lista 2 tiene un total mayor que la lista 1.");
	} else {
		alert("Las 2 listas tienen un valor total equivalente.");
	}
}