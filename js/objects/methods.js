const movie1 = {
    name: 'The Lord of thge Rings',
    year: 2001,
    gen: ['Action', 'Adventure'],
    description: 'El Señor de los Anillos (título original en inglés: The Lord of the Rings) es una novela de fantasía épica escrita por el filólogo y escritor británico J. R. R. Tolkien.',
    resume: function() {
        return `This movie ${this.name} whas released in ${this.year}`
    },
    calculatAge: function() {
        const currentYear = new Date().getFullYear();
        const diff = currentYear - this.year;
        return `La película ${this.name} tiene ${diff} años de antigüedad`;
    }
}


// console.log(movie1.resume())
// //con movie1.resume solo veo el resumen en la consola.
// console.log(movie1.calculatAge())

const movie2 = {
    name: 'The Matrix',
    year: 1999,
    ['gen-2']: ['Action', 'Sci-Fi'],
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    rating: 'R',

    resume: function() {
        return `This movie ${this.name} was released in ${this.year} and it is a ${this.gen}`
    },
    calculateAge: function() {
        const currentYear = new Date().getFullYear();
        const diff = currentYear - this.year;
        return `La pelicula ${this.name} tiene ${diff} años de antigüedad`;
    }    
}

const movies = [ movie1, movie2 ]
//***DEVUELVEN UN ARRAY */
//Obtener todos los VALORES de las propiedades del objeto
const objectValues = Object.values(movie2)
//OBtener todas las KEY (propiedades) del objeto.
const objectKeys = Object.keys(movie2)

const objectEntries = Object.entries(movie2)

// console.log(objectKeys);

// console.log(objectValues.find(value => value.includes('The')))
//El find me va a devolver el unico valor que se encuentra con el valor del objeto (the). 
//const objectKeys = object.keys(movie2) y le hago un console.log(objectKeys) = me devuelve el valor de las propiedades que tiene.
//object.kyes me da un array de strings con el valor de las propiedades. (name, year, descripcion, etc).
//objectEntries me devuelve un array con pequeños array de 

//**** */
//Recorrer el array de entradas (entries)
// Y que realicen un console.log con el siguiente texto:
//Propiedad: propiedad - valor: valor
objectKeys.forEach(elemento => {
    // console.log(movie2[elemento])
    // console.log(`Propiedad: ${elemento} - Valor: ${movie2[elemento]}`)
})

const myCustomObject =Object.assign(movie2, movie1, {active:true})
//Crear un objeto
const myObject = Object.create({})
const obj2 = {}
myObject.name = 'Antes de freezar'
console.log(myObject)
//freezar el objeto para que no se puedan modificar sus propiedades
Object.freeze(myObject)

myObject.name = 'freezado'
console.log(myObject)
//checkear si tiene una propiedad en específico
console.log(movie2.hasOwnProperty('actors'))