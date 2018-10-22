function myFunction() {
	var out ="";
	for (var i=1; i<=20 ; i++) {
		out= out+(i*5)+"<br>";
	}
	document.getElementById("resultado").innerHTML = out;
}