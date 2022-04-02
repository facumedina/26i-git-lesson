const paisesMundialObjects = [
    {
        name: 'Francia',
        year: 2018
    },
    {
        name: 'Alemania',
        year: 2014
    },
    {
        name: 'España',
        year: 2010
    },
    {
        name: 'Italia',
        year: 2006
    },
    {
        name: 'Brasil',
        year: 2002
    },
    {
        name: 'Francia',
        year: 1998
    },
    {
        name: 'Brasil',
        year: 1994
    },
    {
        name: 'Alemania',
        year: 1990
    },
    {
        name: 'Argentina',
        year: 1986
    },
    {
        name: 'Italia',
        year: 1982
    },
    {
        name: 'Argentina',
        year: 1978
    },
    {
        name: 'Alemania',
        year: 1974
    },
    {
        name: 'Brasil',
        year: 1970
    },
    {
        name: 'Inglaterra',
        year: 1966
    },
    {
        name: 'Brasil',
        year: 1962
    },
    {
        name: 'Brasil',
        year: 1958
    },
    {
        name: 'Alemania',
        year: 1954
    },
    {
        name: 'Uruguay',
        year: 1950
    },
    {
        name: 'Italia',
        year: 1938
    },
    {
        name: 'Italia',
        year: 1934
    },
    {
        name: 'Uruguay',
        year: 1930
    },
]

let precioDolarHoy = 210;

// let paisesMundialBRASIL = paisesMundialObjects.map((pais)=> {
//     return pais; 
// })


//***************************************** */
// const brasil = [];
// paisesMundialObjects.forEach(paisGanador => {
//     if(paisGanador.name === 'Brasil') {
//         brasil.push(paisGanador)
//     }
// }) 
// console.log(brasil)
//traigo todas las veces que brasil salió campeón
//************************************** */

//PARA TRAER EL RESTO DE LOS EQUIPOS MENOS BRASIL
const resto = [];
const restoFilterMethod = paisesMundialObjects.filter(seleccion => {
     if(seleccion.name !== 'Brasil') {
        return true;
    }
    return false;
})

console.log(restoFilterMethod)
// paisesMundialObjects.forEach(paisGanador => {
//     if(paisGanador.name !== 'Brasil') {
//         resto.push(paisGanador)
//     }//para poner diferente es !== 
// // })
// console.log(resto)
//**************************************** */



// console.log(paisesMundialObject)
// brasilCampeonatosGanados = []; 
// paisesMundialObject.forEach((paisGanador, indice) => {
//     // console.log(paisGanador)
//     //Preguntar si el pais que estamos analizando es brasil
//     //Si el pais fue brasil vamos a insertar el año dentro del array brasilCampeonatos
//     if (paisGanador.name === 'Brasil'){
//         console.log('Ingresa al IF');
//         brasilCampeonatosGanados.push(paisGanador.year)
//         console.log(paisGanador.name,indice)
//         paisesMundialObject.splice(indice, 1, 'Brasil Campeón')
//     }
//     document.write(`<div class="card">El pais que ganó el mundial del año
//                     <span> ${paisGanador.year} </span> fue ${paisGanador.name}</div>`)

// });

// // paisesMundialObject.map((element) => {
// //     //console.log(paisganador)
// //     console.log(element)
// //     if (element.name === 'Brasil'){
// //         brasilCampeonatosGanados.push(element.year)
// //         console.log(element.name, elNombreDeIndiceQueYoQuiera)
// //     }

// // }) // lo que tiene map es que me devuelve un array nuevo. Es una forma de recorrer un array.

// //*******************///////////////// */
// // let paisesMayuscula = paisesMundialObject.map (element => {
// //     //console.log(paisGanador)
// //     return element.name.toUpperCase();
// // })
// // console.log(paisesMayuscula)
// //******************** */
// console.log(paisesMundialObject)
// console.log('Brasil ganó el mundial en los siguientes años', brasilCampeonatosGanados)

