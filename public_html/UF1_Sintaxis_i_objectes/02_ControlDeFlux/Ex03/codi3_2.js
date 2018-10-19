/*Realitzar un programa que llegeixi per teclat dos nombres, si el primer és major al segon calcular (i
mostrar) la seva suma i diferència, en cas contrari calcular (i mostrar) el producte i la divisió del primer
respecte al segon. */

var $nombre1 = parseInt(prompt("Ingresa un nombre"));
var $nombre2 = parseInt(prompt("Ingresa un altre nombre"));

if ($nombre1 > $nombre2){
    
    alert("SUMA: "+($nombre1+$nombre2));
    alert("RESTA: "+($nombre1-$nombre2));
}
else{
    alert("MULTIPLICACIÓ: "+$nombre1*$nombre2);
    alert("DIVISIÓ: "+$nombre1/$nombre2)
}