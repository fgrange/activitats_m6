/* 
 *  S’ingressa per teclat un valor sencer, mostrar un missatge que indiqui si el número és positiu, zero o
negatiu.
 */

var num = parseInt(prompt("Introdueix un numero : ", ""));

// alert ("El numero introduit es: " + Math.sign(num));

if (num > 0) {
    alert("Numero Positiu.");
} else if (num == 0) {
    alert("Zero");
} else {
    alert("Negatiu.");
}
// 
// Si x es NaN, el resultado es NaN.
    // Si x es -0, el resultado es -0.
    // Si x es +0, el resultado es +0.
    // Si x es negativo y no -0, el resultado es -1.
    // Si x es positivo y no +0, el resultado es +1.
 

