const prompt = require('prompt-sync')();

function saludar() {
    const nombre = prompt("¿Cuál es tu nombre?");
    console.log(`Hola ${nombre}`);
}

saludar();
