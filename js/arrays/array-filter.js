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
    const criterioDeBusqueda = eventoDeJS.target.value;
    //Escribir un condicional que no empiece a buscar hasta que al menos se haya colocado 3 caracteres o más.
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

