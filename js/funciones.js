/*
Las funciones tambien reciben parametros, 
hay dos tipos declarativas con function 
al principio y declarativas, que son asignadas a una variable.
Las funciones anonimas son las que se envian como parametro o 
se asignan a una variable.
*/

/*
A las funciones declarativas se les aplica hoisting,
y a la expresión de función, no.
Ya que el hoisting solo se aplica en las palabras reservadas
var y function.

Lo que quiere decir que con las funciones declarativas,
podemos mandar llamar la función antes de que ésta sea declarada,
y con la expresión de función, no, 
tendríamos que declararla primero,
y después mandarla llamar.
*/

// tipos de funciones: declarativas
function miFuncion() {
    return 3;
}

miFuncion();

// tipos de funciones: expresion
const miSegundaFuncion = function(a, b){
    return a + b;
}

console.log(miSegundaFuncion(2, 3));


function saludarPersonas(estudiante){
    console.log(`Hola ${estudiante}`);
}
