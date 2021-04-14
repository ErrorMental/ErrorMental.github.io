"use Strict";

var edad = document.getElementById("forma"),
var sexo = document.getElementById("salida"),
var dia = document.getElementById("sexo");

forma.addEventListener("submit", cotizar, false);

function cotizar(){
    
    var camisaverde= forma["camisaverde"].checked,
    dia = forma["dia"].value,
    edad=forma["edad"].value,
    cotizacion=1000;

    if (camisaverde) {
        cotizacion = cotizacion - 100;
    }
    switch (dia) {
        case "Viernes":
            cotizacion = cotizacion - 50;
            break;
        case "Domingo":
            cotizacion = cotizacion - 100;
    }
    switch (edad) {
        case "ADULTO":
      
            cotizacion = cotizacion - 100;
           
            break;
        case "JOVEN":
                cotizacion = cotizacion -50;
     }
     for (var i = 0, total = sexos.length; i < total; i++) {
        var sexo = sexos[i];
        if (sexo.checked && sexo.value === "femenino"){
            cotizacion = cotizacion -100;
        }
     } 
     salida.innerHTML = cotizacion;     
}


