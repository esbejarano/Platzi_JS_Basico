const articulos = [
    {nombre: "Cascos", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Celular", costo: 320},
    {nombre: "Pc", costo: 100000},
    {nombre: "Audifonos", costo: 30000},
    {nombre: "Teclado", costo: 40000},
    {nombre: "Bicicleta", costo: 40000},
];

const articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 10000;
});

const nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre;
});

const encuentraArticulo = articulos.find(function (articulo){
    return articulo.nombre === "Pc";
});

articulos.forEach(function(articulo){
    console.log(`${articulo.nombre} - ${articulo.costo}`);
});

const articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 10000;
});


console.log(`Hay articulos baratos? ${articulosBaratos}`);