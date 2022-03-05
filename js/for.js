// Traemos de una base de datos (Baúl donde guardamos datos): Paises de latinoamerica
// (const paisesLatam = [
//     'Argentina',
//     'Bolivia',
//     'Brasil',
//     'Chile',
//     'Colombia',
//     'Ecuador',
//     'Guyana',
//     'Guyana Francesa',
//     'Paraguay',
//     'Perú',
//     'Surinam',
//     'Uruguay',
//     'Venezuela'
// ];)

//******** */

//console.log(paisesLatam[5]) me va a mostrar sólo el nombre en la consola  de ecuador porq arranca del 0.
// (console.log(paisesLatam.length)
// //Si pongo console.log(paiseslatam.length) me muestra la longitud de ese arrays.
// for(let i = 0; i < 13; i++) {
//     //for(let i= 0; i < paiseslatam.length ; i++) el for se adapta xq evalua la cantidad de elementos y ve cuantas vueltas tiene que dar.
//     //1 i=0
//     //2 i=1
//     //3 i=2
//     //4 i=3
//     //5 i=4
//     //6 i=5
//     const paisActual = paisesLatam[i];
//     console.log(`Pais actual ${i}: ${paisActual}`);
//     //Ejecutar acciones de acuerdo a cada pais 
// })

//************** */

// ESTO ES IGUAL A LO DE ARRIBA PERO DE DIFERENTE MANERA
// console.log(paisesLatam.length)
// let i = 0;
// while(i < paisesLatam.length) {
//     //esto se lee "Mientras i sea menor que paiseslatam"
//     const paisActual = paisesLatam[i];
//     console.log('paisActual ' + paisActual);
//     i++;
// }


//***************** */
const paisesQueHanGanadoUnMundial = [
    'Francia',
    'Alemania',
    'España',
    'Brasil',
    'Italia',
    'Francia',
    'Brasil',
    'Alemania',
    'Argentina',
    'Italia',
    'Argentina',
    'Alemania',
    'Brasil',
    'Inglaterra',
    'Brasil',
    'Brasil',
    'Alemania',
    'Uruguay',
    'Italia',
    'Italia',
    'Uruguay',
]


let BrasilCampeón = 0;
let ArgentinaCampeón = 0;
let FranciaCampeón = 0;
let AlemaniaCampeón = 0;
for(let i= 0; i < paisesQueHanGanadoUnMundial.length; i++){
    
    if(paisesQueHanGanadoUnMundial[i] == 'Argentina'){

        ArgentinaCampeón = ArgentinaCampeón + 1;

    } else if(paisesQueHanGanadoUnMundial[i] == 'Brasil'){

        BrasilCampeón = BrasilCampeón + 1;

    } else if(paisesQueHanGanadoUnMundial[i] == 'Alemania'){

        AlemaniaCampeón = AlemaniaCampeón + 1;

    } else if(paisesQueHanGanadoUnMundial[i] == 'Francia'){

        FranciaCampeón = FranciaCampeón + 1;
    }

//   //*** ES LO MISMO PONER ELSE IF O switch CASE ***
    
//     // switch (paisesQueHanGanadoUnMundial[i]) {
//     //     case 'Argentina':
//     //         ArgentinaCampeón = ArgentinaCampeón + 1;
//     //         break;
//     //     case 'Brasil':
//     //         brasilCampeón = brasilCampeón + 1;
//     //         break;
//     //     case 'Alemania':
//     //         AlemaniaCampeón = AlemaniaCampeón + 1;
//     //         break;
//     //     case 'Francia':
//     //         FranciaCampeón = FranciaCampeón + 1;
//     //         break;

//     // }
}

console.log('Brasil ganó el mundial: ' + BrasilCampeón + ' veces.')
console.log('Argentina ganó el mundial: ' + ArgentinaCampeón + ' veces.')
console.log('Francia ganó el mundial: ' + FranciaCampeón + ' veces.')
console.log('Alemania ganó el mundial: ' + AlemaniaCampeón + ' veces.')

//brasil, alemania, francia, argentina

//Recorrer el listado
//con el condicional preguntan si el pais

// let franciaCampeónDelMundo = 0;
// let brasilCampeónDelMundo = 0;


// console.log('Brasil gano el mundial ' + brasilCampeónDelMundo)

