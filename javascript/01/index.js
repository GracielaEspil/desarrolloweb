/* Ejercicio Calcular el IMC (índice de masa corporal) de Luis y de Carlos.
 IMC es igual al peso dividido la altura al cuadrado, luego comparar e indicar si el IMC 
 de Carlos es superior al de Luis */
 //Solución
 var pesoLuis = 72;
 var alturaLuis = 1.72;
 var pesoCarlos = 89;
 var alturaCarlos = 1.75;
 var imcLuis, imcCarlos, difIMC, compararImc;

 imcLuis = pesoLuis/(alturaLuis*alturaLuis)
 imcCarlos = pesoCarlos/(alturaCarlos*alturaCarlos)
 difIMC = imcCarlos - imcLuis

 compararImc = imcCarlos >  imcLuis
 console.log("IMC de Luis es: " + imcLuis);
 console.log("IMC de Carlos es: " + imcCarlos);
 console.log("La diferencias de IMC es: " + difIMC);
 console.log("¿Es superior el IMC de Carlos al de Luis: " + compararImc);


 