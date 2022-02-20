console.log('Condicionales switch');
let signo = prompt('Ingrese su signo del Zodíaco');
signo = signo.toLocaleLowerCase();

switch(signo) {
    case 'aries':
        console.log('Su fecha de nacimiento es en Abril')
        break;
    case 'tauro':
        console.log('Su fecha de nacimiento es en Mayo')
        break
    case 'geminis':
        console.log('Su fecha de nacimiento es en Junio')
        break
    case 'cancer':
        console.log('Su fecha de nacimiento es en Julio')
        break
    case 'leo':
        console.log('Su fecha de nacimiento es en Agosto')
        break
    case 'virgo':
        console.log('Su fecha de nacimiento es en Septiembre')
        break
    default:
        console.log('Signo incorrecto')
}