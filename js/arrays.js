const frutas = ['Manzana','Platano','Cereza', 'Fresa'];

console.log('Frutas', frutas);
console.log('Frutas.length', frutas.length);
console.log('Frutas[2]:', frutas[2]);
console.log('Frutas[0]:', frutas[0]);
console.log('Frutas[3]:', frutas[3]);
console.log('Frutas[1]:', frutas[1]);

frutas.push('Uvas');
console.log('Frutas[4]:', frutas[4]);
const ultimo = frutas.pop('uvas');
console.log('Frutas', frutas);
const nuevaLongitud = frutas.unshift('Granadina');
console.log('Frutas', frutas);
frutas.shift();
console.log('Frutas', frutas);
console.log("frutas.indexOf('Cereza')", frutas.indexOf('Cereza'));
