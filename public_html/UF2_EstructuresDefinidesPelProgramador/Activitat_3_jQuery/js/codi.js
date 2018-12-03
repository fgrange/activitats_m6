$(document).ready(function(){
    //Actividad 3 Ejercicio 1
    //Obtenemos tanto el boton como el textarea
    $("#boton1").click(function(){
        //Mostramos mediante un alert el contenido del textarea
        alert($("#ejer1").val().toUpperCase());
        $("#ejer1").val(this.textContent.toLowerCase());
    });

    //Actividad 3 Ejercicio 2
    //Obtenemos el id del textarea para que al pasar el raton por 
    //encima el contenido se muestre en mayúculas
    $("#ejer2").mouseenter(function(){
        var contenido = $("#ejer2").val().toUpperCase();
        $("#ejer2").val(contenido);
    });

    //Actividad 3 Ejercicio 3
    //Obtenemos el id del textarea para que cuando dejemos de pasar 
    //por encima el contenido se muestre en minusculas
    $("#ejer3").mouseleave(function(){
        var contenido2 = $("#ejer3").val().toLowerCase();
        $("#ejer3").val(contenido2);
    });

    //Actividad 3 Ejercicio 4
    //Cuando escribamos en el primer input tendra que aparecer
    //"escriu bé el nom d'usuari" en color azul.
    //Cuando se abandone ese campo ese mensaje tiene que desaparecer
    //El segundo input tiene que hacer lo mismo que el anterior pero
    //con el siguiente mensaje "escriu bé la paraula pas"
    
    //Ocultamos el primer mensaje
    $("#mensaje1").hide();
    //Cuando escribimos en el primer formulario mostramos el mensaje
    //en color azul
    $("#user").keypress(function(){
        console.log("entras");
        $("#mensaje1").show().css("color", "blue");
    });

    //Ocultamos el segundo mensaje
    $("#mensaje2").hide();
    //Cuando el foco lo tiene el formulario del password, eliminamos el foco
    //al formulario del usuario y ocultamos el primer mensaje y cuando escribimos
    //en el segundo formulario mostramos el segundo mensaje en color rojo
    $("#pass").focus(function(){
        $("#user").blur();
        $("#mensaje1").hide();
        
    });
    
    $("#pass").keypress(function(){
      $("#mensaje2").show().css("color", "red");
      });
    //Eliminamos el foco del segundo formulario y oculamos el segundo mensaje
    //cuando clicamos fuera de ese formulario
    $("#pass").blur(function(){
        $("#mensaje2").hide();
    });

    //Actividad 3 Ejercicio 5
    //Al pulsar el boton se creara una tabla con la siguiente estructura
    // 1_1   1_2
    // 2_1   2_2
    //.....
    $("#crearTabla").click(function(){
        //Obtenemos el valor de los textarea para crear la tabla
        var linea = $("#recuadro1").val();
        var columna = $("#recuadro2").val();
        const numero1 = 7;
        const numero2 = 200;
        var tabla = " ";
        if(linea >=numero1 && linea <=numero2 && columna >= numero1 && columna <= numero2){
            for(var i = 1; i<= linea; i++){
                $("#tabla").append("<tr>");
                for(var j = 1; j <= columna; j++){
                    $("#tabla").append("<td>" + i + "_" + j + "</td>");
                }
                $("#tabla").append("</tr>");
            }
        }
    });
    $("#esborrar").click(function(){
        $("#tabla").empty();
    })
});