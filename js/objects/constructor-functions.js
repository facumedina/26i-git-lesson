function Movie(nombre, año, genero, des, actores, rating) {
    this.name = nombre,
    this.year = año,
    this.gen = genero || 'Hola';
    this.description = des,
    this.actors = actores || [];
    this.calculateAge = () => {
        const currentYear = new Date().getFullYear();
        const diff = currentYear - this.year;
        return `La pelicula ${this.name} tiene ${diff} años de antigüedad`;
    }

}

const movie = new Movie('Harry Potter', 2020);
console.log(movie)

const movie2 = new Movie('The Lords', 2001, 'Action', 'Description', ['Frodo', 'Sam'])
console.log(movie2)

// const movie1 = {
//     name: 'The Lord of thge Rings',
//     year: 2001,
//     gen: ['Action', 'Adventure'],
//     description: 'El Señor de los Anillos (título original en inglés: The Lord of the Rings) es una novela de fantasía épica escrita por el filólogo y escritor británico J. R. R. Tolkien.',
//     resume: function() {
//         return `This movie ${this.name} whas released in ${this.year}`
//     },
//     calculatAge: function() {
//         const currentYear = new Date().getFullYear();
//         const diff = currentYear - this.year;
//         return `La película ${this.name} tiene ${diff} años de antigüedad`;
//     }
// }


// console.log(movie1.resume())
// //con movie1.resume solo veo el resumen en la consola.
// console.log(movie1.calculatAge())

// const movie2 = {
//     name: 'The Matrix',
//     year: 1999,
//     ['gen-2']: ['Action', 'Sci-Fi'],
//     description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
//     actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
//     rating: 'R',

//     resume: function() {
//         return `This movie ${this.name} was released in ${this.year} and it is a ${this.gen}`
//     },
//     calculateAge: function() {
//         const currentYear = new Date().getFullYear();
//         const diff = currentYear - this.year;
//         return `La pelicula ${this.name} tiene ${diff} años de antigüedad`;
//     }    
// }

