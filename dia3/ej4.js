const prompt = require('prompt-sync')();

function saludar(nombre) {
    console.log(`Hola ${nombre}, funcion como parámetro`);
}

function procesarEntradaUsuario(funcionSaludar) {
    const nombre = prompt("¿Cuál es tu nombre?");
    funcionSaludar(nombre);
}

procesarEntradaUsuario(saludar);
