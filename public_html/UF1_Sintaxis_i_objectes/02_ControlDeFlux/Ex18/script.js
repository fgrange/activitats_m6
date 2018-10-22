function myFunction() {
	var out ="";
	for (var i=10; i<=1500 ; i=i+10) {
		out= out+i+"<br>";
	}
	document.getElementById("resultado").innerHTML = out;
}