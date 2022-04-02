                                // number -  NaN
                                // parseInt(algo)
// const age = parseInt(prompt('Ingrese su edad'));
// console.log(age);
// const normalPrice = 1000
// let finalPrice;
// //    > =
// if( age >= 18 ) {
//     // Codigo que voy a ejecutar si la edad es mayor o igual que 18 = true 
//     console.info('Usted es mayor de edad, puede ingresar');
// } else if(age >= 12) {
//     console.warn('Para poder ingresar debe tener autorización de su mayor a cargo')
// } else {
//     console.error('No tiene edad permitida para ingresar');
// }

// console.log('después del IF');

// Persona ingrese su edad y que basado en ella pueda obtener el precio final que abonara con su entrada al cine
// valor de entrada al cine es de $1000
// Personas mayor de 55 años tiene un descuento %40
// Personas entre 18 y 55 (54) no tienen descuento
// Personas entre 10 y 18 adolescentes tienen un 20% descuento
// Peronas menores abonan $250 unicamente

//inic
// const valorEntradaCine = 1000;
// const valorEntradaJubilados = valorEntradaCine * 0.6;
// const valorEntradaAdolescente = valorEntradaCine * 0.8;
// const valorDescuento = valorEntradaCine * 0.5;
// const valorEntradaNiños = 250;
// let costoTotalEntradas = 0;

// const cantidadDePersonas = prompt("Ingrese la cantidad de miembros de la familia");
// let iteracion = 1;
// while (iteracion <= cantidadDePersonas){
//     //Código que quiero repetir x cantidad de veces.
//     let edad = prompt("Edad de la persona que ingresa al cine");

//     if(edad > 55) {
//         console.info("El valor de la entrada es $" + valorDescuento);
//         costoTotalEntradas = costoTotalEntradas + valorDescuento;    
//     } else if (edad >= 18 ) {
//         console.info("El valor de la entrada es $" + valorEntradaCine);
//         costoTotalEntradas = costoTotalEntradas + valorEntradaCine;
//     } else if (edad >= 10){
//         console.info("El valor de la entrada es $" + valorEntradaAdolescente);
//         costoTotalEntradas = costoTotalEntradas + valorEntradaAdolescente;
//     } else {
//         console.info ("El valor de la entrada es $" + valorEntradaNiños);
//         costoTotalEntradas = costoTotalEntradas + valorEntradaNiños;
//     }
//     // Esa variable que controla las iteraciones de mi búcle debe si o si debe incrementarse o decrementarse de tal modo que el bucle en algún momento finalice.
//     iteracion = iteracion + 1;
// }

// console.log(`El valor total a abonar es de ${costoTotalEntradas} de contado`)
//fin

// // costoTotalEntradas = costoTotalEntradas + 100; (si le quiero sumar 100 a cualq otra entrada)
// console.log (costoTotalEntradas)
// edad = prompt("Edad de la persona que ingresa al cine")

// if(edad > 55) {
//     console.info("El valor de la entrada es $" + valorDescuento);
//     costoTotalEntradas = costoTotalEntradas + valorDescuento;    
// } else if (edad >= 18 ) {
//     console.info("El valor de la entrada es $" + valorEntradaCine);
//     costoTotalEntradas = costoTotalEntradas + valorEntradaCine;
// } else if (edad >= 10){
//     console.info("El valor de la entrada es $" + valorEntradaAdolescente);
//     costoTotalEntradas = costoTotalEntradas + valorEntradaAdolescente;
// } else {
//     console.info ("El valor de la entrada es $" + valorEntradaNiños);
//     costoTotalEntradas = costoTotalEntradas + valorEntradaNiños;
// }

// console.log(`El valor total a abonar es de ${costoTotalEntradas} de contado`)

// if(edad > 55 || (edad < 18 || edad >= 18)) {
//     console.info("El valor de la entrada es $" + valorDescuento);    
// } else if (edad >= 18 ) {
//     console.info("El valor de la entrada es $" + valorEntradaCine);
// } 
//   else {
//     console.info("El valor de la entrada es $" + valorEntradaNiños);
// }



//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// let number = parseInt(prompt('Ingrese un numero'));
// const isDivisible2 = number % 2;
// const isDivisible3 = number % 3;
// const isDivisible5 = number % 5;
// const isDivisible7 = number % 7;

// if(isDivisible2 == 0 || isDivisible3 == 0 || isDivisible5 == 0 || isDivisible7 == 0) {
//     console.log('El número es divisible');
// } else {
//     console.log('El número no es divisible');
// }


// if(isDivisible2 == 0 || isDivisible2 == 0) { console.log('Es divisible por 2') }
// if(isDivisible3 == 0) { console.log('Es divisible por 3') }
// if(isDivisible5 == 0) { console.log('Es divisible por 5') }
// if(isDivisible7 == 0) { console.log('Es divisible por 7') }

//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)



// //INGRESO EDAD = 5  

//             TRUE (el O evalúa un verdadero)
//         false  o    true   
// if (edad >= 10 || edad < 18) {
//     console.info ("El valor de la entrada es de $" + valorEntradaAdolescente)
// }


const vueltas = prompt("Ingresa número de vueltas");
let i = 0;
while(i < vueltas) {
    i++;
    console.log(`Vuelta número: ${i}`);
}