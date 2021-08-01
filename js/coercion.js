/*
    la coercion es la interpretacion de javascript o suposicion de posibles valores que no son iguales y hace operaciones
    ejemplo: var b = 4 * "7" = 28; donde js supone que "7" es un error nuestro y convierte ese string a number (coercion implicita)

    tambien esta el escenario donde yo por metoodos reservados puedo obligar a una variable que pase de un tipo a otro (coercion explicita)
*/

var a = String(20); typeof a; // string, coercion explicita
var b = Number("40"); typeof b; // number, coercion implicita