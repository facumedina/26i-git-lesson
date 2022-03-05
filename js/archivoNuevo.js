// Persona que ingrese su edad y que basada en ella pueda obtener el precio final que abonara con su entrada al cine
//valor de entrada al cine es de $1000
//Personas mayores de 55 años tienen un descuento del 40%
//Personas entre 18 y 55 (54) no tienen descuento
//Personas entre 10 y 18 adolescentes tienen un 20 % de decuento
//Personas menores abonan $250 unicamente


const valorEntradaCine = 1000;
const valorEntradaJubilados = valorEntradaCine * 0.6;
const valorEntradaAdolescente = valorEntradaCine * 0.8;
const valorDescuento = valorEntradaCine * 0.5;
const valorEntradaNiños = 250;
let costoTotalEntradas = 0;
const cantidadDePersonas = prompt("Ingrese la cantidad de miembros de la familia");

    //1er parámetro(valor): inicializar contador
    //2do parámetro (valor): condición
    //3er parámetro (valor): incrementador/decrementador 
for(let i = 1; i <= cantidadDePersonas; i++) {
// for(let iteración = 1; iteración <= cantidadDePersonas; iteración++) {}
//todo lo que se va a ejecutar dentro del búcle siempre que se cumpla la condición..
// con el ++ se suma de a una unidad
    //do{
    const edad = prompt("Edad de la persona que ingresa al cine");
    //}while(edad)
    if(edad > 55) {
        console.info("El valor de la entrada es $" + valorDescuento);
        costoTotalEntradas = costoTotalEntradas + valorDescuento;    
    } else if (edad >= 18 ) {
        console.info("El valor de la entrada es $" + valorEntradaCine);
        costoTotalEntradas = costoTotalEntradas + valorEntradaCine;
    } else if (edad >= 10){
        console.info("El valor de la entrada es $" + valorEntradaAdolescente);
        costoTotalEntradas = costoTotalEntradas + valorEntradaAdolescente;
    } else {
        console.info ("El valor de la entrada es $" + valorEntradaNiños);
        costoTotalEntradas = costoTotalEntradas + valorEntradaNiños;
    }


}
console.log(`El valor total a abonar es de ${costoTotalEntradas} de contado`)






