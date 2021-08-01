if (true) {
    console.log(`Hola`);
}

if (false) {
    console.log(`esto no se ejecutara`);
}

function imprimirSiPuedeVotar(edadVotar) {
    if (edadVotar === 18) {
        console.log(`Primera vez que vota. ${edadVotar} años`);
    } else if (edadVotar > 18) {
        console.log(`ya ha votado. ${edadVotar} años`);
    } else {
        console.log(`no puede votar, es menor de edad. ${edadVotar} años`);
    }
    
}

imprimirSiPuedeVotar(18);
imprimirSiPuedeVotar(17);
imprimirSiPuedeVotar(40);

// operador ternario

var numero = 1;
var resultadoNumero = numero === 1 ? "Si es un 1" : "No es un 1";
console.log(resultadoNumero);

const _tijera = "TIJERA";
const _piedra = "PIEDRA";
const _papel = "PAPEL";

function getResultadoPPT(usuario, machine) {
    const tijera = "TIJERA";
    const piedra = "PIEDRA";
    const papel = "PAPEL";

    if (
        typeof usuario === "undefined" || usuario === null ||
        typeof machine === "undefined" || machine === null
    ) {
        return "Entradas Invalidas";
    } else if (usuario === machine) {
        return "Empate";
    } else  if (
        (usuario === tijera && machine === papel) ||
        (usuario === papel && machine === piedra) ||
        (usuario === piedra && machine === tijera)
    ) {
        return "Gana Usuario";
    } else {
        return "Gana Maquina";
    }
}

console.log(getResultadoPPT(null, null)); // Entradas Invalidas
console.log(getResultadoPPT()); // Entradas Invalidas
console.log(getResultadoPPT(_tijera)); // Entradas Invalidas
console.log(getResultadoPPT(_papel, _papel)); // Empate
console.log(getResultadoPPT(_tijera, _papel)); // Gana Usuario
console.log(getResultadoPPT(_piedra, _tijera)); // Gana Usuario
console.log(getResultadoPPT(_papel, _piedra)); // Gana Usuario
console.log(getResultadoPPT(_papel, _tijera)); // Gana Maquina
console.log(getResultadoPPT(_tijera, _piedra)); // Gana Maquina
console.log(getResultadoPPT(_piedra, _papel)); // Gana Maquina
