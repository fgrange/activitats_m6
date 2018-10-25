function myFunction() {
	var total=0;
	var n=0;
	for (var i=1 ; i<=5 ; i++){
		do{
			var sueldo = parseInt( prompt("Introduce el sueldo del empleado "+
                                i +"(1000€-3000€):") );
		}while(sueldo<1000 || sueldo>3000);

		total=total+sueldo;
                if (sueldo<=2000) { n++;
                }else{return n;}
	}
	alert("Hay "+ n +" empleados que cobran entre 1000€-2000€ y "+
                (5-n) +" que cobran mas de 2000€.");
	alert("En total se gasta en personal: "+ total +"€.");
}