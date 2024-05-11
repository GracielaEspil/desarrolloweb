/* Ejercicio de codoficación 
Tienes dos alumnos: Pablo y Maria
Notas de Pablo= 14, 8, 16
Notas de Maria= 12, 18, 10
Calcular el promedio de cada uno, además indicar cual es eñ promedio superior, 
e indicar si están aprobados promedio mayor a 13*/
var promedioPablo = (14+8+16)/3;
var promedioMaria = (12+18+10)/3;
console.log(promedioPablo);
console.log(promedioMaria);
if(promedioPablo > promedioMaria){
    console.log('Pablo tiene un promedio mayor');
}else if(promedioMaria > promedioPablo){
    console.log('Maria tiene un promedio mayor');
}else{
    console.log('Pablo y Maria tienen igual promedio');
}

for (var i=1; i<=2;i++){
    if(i===1){
        if(promedioPablo>13){
            console.log('Pablo-APROBADO');
        }else{
            console.log('Pablo-DESAPROBADO');
        }
    
    }else{
        if(promedioMaria>13){
            console.log('Maria-APROBADO');
        }else{
            console.log('Maria-DESAPROBADO');
        }
    }   
}    