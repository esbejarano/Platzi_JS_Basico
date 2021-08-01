/*
el hoisting es cuando la variable se esta usando 
sin haberse declarado antes, 
el compiler lo que hace es declarar la variable como undefined
para luegoo usarla.
*/
const miNombre = 'Erick';

function hey() {
    console.log(`hola ${miNombre}`);
}

console.log('miNombre', miNombre);
hey();