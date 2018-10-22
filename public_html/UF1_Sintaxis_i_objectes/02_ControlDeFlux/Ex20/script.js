function myFunction() {
	var n = new Array(5);
	for (var i = 0; i < n.length; i++) {
		n[i] = parseInt( prompt("Introduce el número "+ (i+1) +":") );
	}
        
	var t_par = 0;
	for (var i = 0; i < n.length; i++) {
		if (n[i]%2===0) {
			t_par++;
		}
	}
	alert("Hay "+ t_par +" numeros pares y "+ (n.length-t_par) +" numeros impares.");

}