const paisesGanadoresDeMundiales = [
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
];

const listaDePaisesHTML = document.getElementById('listado');
console.log(paisesGanadoresDeMundiales);

/************ */
{/* <li><span class="pais">País:</span>Algun pais <span>Año:</span>0001</li> */}
/******************* */


function listarPaises(arrayAPintar){

    listaDePaisesHTML.innerHTML = '';

    arrayAPintar.forEach(function(country){
        //Combinación de += mantiene el valor anterior (izquierda) y le añade el valor de la derecha sumando ambos
        //o se puede escribir listaDePaisesHTML.innerHTML = listaDePaisesHTML.innerHTML + `<li>${country.name}</li>`
        listaDePaisesHTML.innerHTML += `<li>
                                            <div class="row">
                                                <div class="col-3">                
                                                    <span class="pais">País:</span>${country.name}
                                                </div>
                                                <div class="col-6">    
                                                    <span>Año:</span>${country.year}
                                                </div>
                                            </div>    
                                        </li>`
        console.log(country)
    });
}
//Llamamos la función cuando se carga el script para pintar inicialmente todos los paises
listarPaises(paisesGanadoresDeMundiales)





function buscarPais(eventoDeJS) {
    const criterioDeBusqueda = eventoDeJS.target.value.toLocaleLowerCase();
    //Escribir un condicional que no empiece a buscar hasta que al menos se haya colocado 3 caracteres o más.
    if(criterioDeBusqueda.length < 2) return listarPaises(paisesGanadoresDeMundiales)
    //**Opción 2
    //if(criterioDeBusqueda.length < 3) return;
    //**Opción 1 */
    if(criterioDeBusqueda.length >= 2) {
      const paisesFiltrados = paisesGanadoresDeMundiales.filter(pais => {
        // if(pais.name.toLowerCase() === criterioDeBusqueda.toLowerCase()) {
        //     return true
        // }
        // return false
        const nombrePais = pais.name.toLocaleLowerCase();
        //El Método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false.
        return nombrePais.includes(criterioDeBusqueda)

        })

        console.log(paisesFiltrados);
        listarPaises(paisesFiltrados)
    }
    
}


const arrayFindMethod = function() {
    const findedCountry = paisesGanadoresDeMundiales.find(paisGanador => {
        if(paisGanador.name.length === 'Brasil') {
            return true
        };

    });

    console.log('findedCountry', findedCountry)


}

arrayFindMethod()


const arrayFindedIndex = function() {
    const findedIndex = paisesGanadoresDeMundiales.findIndex((paisGanador) => {
        if(paisGanador.name === 'Brasil') {
            return true
        };
    });
    console.log('findedIndex', findedIndex);
    paisesGanadoresDeMundiales.splice(findedIndex, 1);
}

arrayFindedIndex();
console.log(paisesGanadoresDeMundiales)


function arrayReduceMethod() {
    //**
    //Guardo el valor acumulado por reduce
    //Valor acumulado: Es el valor que retorna en cada iteracion con reduce.
    //ValorActualPais: Elemento (del array) que estoy iterando en cada vuelta.
    paisesGanadoresDeMundiales.reduce((valorAcumulado, valorActualPais) => {
        valorAcumulado = valorAcumulado + valorActualPais.year;
        console.log(sumatoriaAñosPaises)
        return sumatoriaAñosPaises;
    }, 0) //El cero es a partir de que valor arranca el valor acumulado.
}



// function saludar(nombre, sexo) {
//     let letra = 'a';
//     if(sexo === 'M'){
//         letra = 'o'
//     }
//     console.log(`Bienvenid${letra} ${nombre} a nuestro sitio`)
// }

// function recorrerArray() {
//     paisesGanadoresDeMundiales.forEach(function(pais) { console.log(pais)})
// }

// function calcularPrecioEnPesos(dolar, valorDolar) {
//     const precioPesos = dolar * valorDolarEnPesos
//     console.log(precioPesos)
// }

// saludar('Daniel', 'M');
// saludar('Cristian', 'M');
// saludar('Walter', 'M');
// saludar('Diego', 'M');
// saludar('Adriana', 'F');

const productosAComprar = [
    {
        _id: "6222946ac5bf78b8417b3391",
        name: "Shampoo Tio Nacho",
        price: 1350,
        stock: true,
        category_id: "GENERAL",
        iva: "21",
        createdAt: "2022-03-04T22:36:26.654Z",
        quantity: 2
    },
    {
        _id: "622294f41b34c843c786edb3",
        name: "Shampoo Pantene",
        description: "",
        price: 640,
        stock: true,
        category_id: "GENERAL",
        cod: "0001",
        iva: "21",
        createdAt: "2022-03-04T22:38:44.978Z",
        quantity: 3
    },
    {
        _id: "621d131baaebd8905d22aa13",
        name: "Papel Higienico",
        description: "Papel de 50 metros de largo",
        price: 120,
        stock: true,
        category_id: "PERFUMERIA",
        cod: "1",
        iva: "21",
        quantity: 5,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ff32d89438db87d035240",
        name: "Fideos Spagetti",
        description: "",
        price: 160,
        stock: true,
        category_id: "PERFUMERIA",
        cod: "0001",
        iva: "21",
        quantity: 2,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ff2d87fb9f142a6a99c0c",
        name: "Desodorante Rexona",
        price: 250,
        stock: true,
        category_id: "GENERAL",
        iva: "21",
        quantity: 7,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ff2f989438db87d03523e",
        name: "Desodorante Old Space",
        description: "",
        price: 240,
        stock: true,
        category_id: "PERFUMERIA",
        cod: "0001",
        iva: "21",
        quantity: 1,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ffd393bce13940e00437a",
        name: "Desodorante Genérico GOLD PRO",
        price: 150,
        stock: true,
        category_id: "GENERAL",
        iva: "21",
        quantity: 10,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ffcff3bce13940e004370",
        name: "Desodorante Genérico",
        price: 1650,
        stock: true,
        category_id: "GENERAL",
        iva: "21",
        quantity: 3,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ff2e37fb9f142a6a99c0e",
        name: "Desodorante Dove",
        price: 410,
        stock: true,
        category_id: "GENERAL",
        iva: "21",
        quantity: 5,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ff2d07fb9f142a6a99c0a",
        name: "Desodorante Axe",
        price: 580,
        stock: true,
        category_id: "GENERAL",
        iva: "21",
        quantity: 5,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "62210360cc0513245f5e657c",
        name: "Arroz",
        description: "",
        price: 200,
        stock: true,
        category_id: "GENERAL",
        cod: "0001",
        iva: "21",
        createdAt: "2022-03-03T18:05:20.193Z",
        quantity: 4
    }
]

//Obntener el valor final de la compra.
//Iterar todos los productos que el cliente lleva
//De alguna forma acumular ese valor que va a estar dado por el precio * la cantidad
//Calcular el valor total a abonar sumando el iva (21) al subtotal de la compra.

function calcularTotalCompra() {
    const totalCompra = productosAComprar.reduce((valorAcumulado, valorActualProducto) => {
        let sumaTotalCompra = valorAcumulado;
        sumaTotalCompra = valorAcumulado + (valorActualProducto.price * valorActualProducto.quantity);
        return sumaTotalCompra
    },0)
    return totalCompra;
}

console.log(calcularTotalCompra());

/////////ES LO MISMO QUE DECIR**//////
// function calcularTotalCompra() {
//     return productosAComprar.reduce((valorAcumulado, valorActualProducto) => valorAcumulado + (valorActualProducto.price * valorActualProducto.quantity), 0);
// }

// console.log(calcularTotalCompra())
//******************** */

//2 CONSIGNA
// Al calcular el valor total, deben tener en cuenta el iva
//CONDICIÓN para los articulos de categoria "GENERAL" apliquen el iva del 21%  y los articulos de categoria de "PERFUMERIA" se le va agregar un valor de iva del 10.5%

function calcularTotalCompra() {
    const totalCompra = productosAComprar.reduce((valorAcumulado, valorActualProducto) => {
        let subtotal = valorAcumulado;
        if(valorActualProducto.category_id === 'GENERAL') {
            subtotal = valorActualProducto.price * valorActualProducto.quantity * 1.21;
            return subtotal
        }
        if(valorActualProducto.category_id === 'PERFUMERIA') {
            subtotal = valorActualProducto.price * valorActualProducto.quantity * 1.105;
            return subtotal
        }
    }, 0);
    return totalCompra;
}


function calcularTotalCompraConIVA(){
    const generalIVA = 0.21;
    const perfumeriaIVA = 0.105;
    const totalCompra = productosAComprar.reduce((valorAcumulado, productoActual) => {
        let sumaTotalCompra = valorAcumulado;
        switch(productoActual.category_id){
            case "GENERAL":
                sumaTotalCompra = valorAcumulado + (productoActual.price * productoActual.quantity) + (productoActual.price * productoActual.quantity * generalIVA);
                break;

            case "PERFUMERIA":
                sumaTotalCompra = valorAcumulado + (productoActual.price * productoActual.quantity) + (productoActual.price * productoActual.quantity * generalIVA);
                break;
        }
        return sumaTotalCompra;
    },0)
    return totalCompra;
} 

console.log(calcularTotalCompra());
console.log(calcularTotalCompraConIVA());

const frutas = [
    "Aceituna",
    "Anana",
    "Melón",
    "bananas",
    "frutillas",
    "guindas",
    "manzanas",
    "naranjas"
];

frutas.sort((a, b) => {
    if(a.toLowerCase() > b.toLowerCase()){
        return 1 //a - b  //segundo - primero
    }
    if(a.toLowerCase() < b.toLowerCase()) {
        return -1
    }
    return 0;
})
console.log('Frutas', frutas)

const numeros = [6,1,67,8,10,22,14,100010]
const primerElemento = numeros.shift();
console.log('primerElemento', primerElemento)

const ultimoElemento = numeros.pop();
console.log('ultimoElemento', ultimoElemento)

console.log(numeros)
//****Opción 2 */
//return a.localeCompare(b)
//console.log a.localeCompare(b)

//sort ordena recibe dos valores a, b.
// const numeros = [6,1,67,8,10,22,14,100010]
// numeros.sort((a, b) => {
//     console.log(a, b);
//     return a - b
// })

// console.log('Números', numeros)

paisesGanadoresDeMundiales.push({name: 'francia', year: 2030})
//ordenar el array de pasises pero por nombre de a-z
paisesGanadoresDeMundiales.sort((pais1, pais2) => {
    if(pais1.name.toLowerCase() > pais2.name.toLowerCase()){ //a - b
        return 1
    }
    if(pais1.name.toLowerCase() < pais2.name.toLowerCase()){
        return -1
    }
    return 0;
})

console.log('paisesGanadoresDeMundiales', paisesGanadoresDeMundiales)


//filtren aquellos apuses cuyo asño de victoria sea multiplo de 6
let multiplosDe6Filtrados = paisesGanadoresDeMundiales.filter(pais => {
    console.log(pais.year % 6)
    if(pais.year % 6 === 0){
        return true
    }
    return false
})
console.log(multiplosDe6Filtrados)