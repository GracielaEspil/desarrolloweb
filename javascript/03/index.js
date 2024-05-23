/* Calcular tiempo en años que falta para la jubilación, sabiendo que nos jubilamos a
los 65 años de edad */

function calculoTiempoJub(anioNac, nombre) {
    return anioNac + 65 - 2024;
}

var anio1 = calculoTiempoJub(1967)
var nombre1 = 'Graciela'
var anio2 = calculoTiempoJub(1990)
var nombre2 = 'Luis'
var anio3 = calculoTiempoJub(1984)
var nombre3 = 'Carlos'
var anio4 = calculoTiempoJub(1962)
var nombre4 = 'Mónica'



console.log ('Los años que faltan para jubilarte son: ', anio1 + ' años a ' + nombre1 );
console.log ('Los años que faltan para jubilarte son: ', anio2 + ' años a ' + nombre2 );
console.log ('Los años que faltan para jubilarte son: ', anio3 + ' años a ' + nombre3);
console.log ('Los años que faltan para jubilarte son: ', anio4 + ' años a ' + nombre4);


// Cómo fue resuelto por el curso

function calcularEdad(yearNacimiento){
    return 2024 - yearNacimiento;
}


function calcularTiempoDeJubilacion(yearNacimiento, nombre){
    var edad = calcularEdad(yearNacimiento);
    var yearJubilacion = 65 - edad;
    console.log ('A ', nombre + ' le faltan ' + yearJubilacion + ' años para su jubilación');
}

calcularTiempoDeJubilacion(1963, 'Gustavo')