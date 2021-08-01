const personas = [
    "Maria", "Sergio", "Rosa", "Daniel"
];

function saludarPersona(persona) {
    console.log(`Hola ${persona}`);
}

for (let i = 0; i < personas.length; i++) {
    saludarPersona(personas[i]);
}

for (const persona of personas) {
    saludarPersona(`${persona} usando for of`);
}

while (personas.length > 0) {
    const persona = personas.shift();
    saludarPersona(`${persona} usando while`);
}