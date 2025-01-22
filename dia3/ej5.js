const prompt = require('prompt-sync')();

function contieneS() {
    const texto = prompt("Ingresa un texto: ");

    if (texto.includes('s') || texto.includes('S')) {
        console.log("El texto contiene la letra 's'.");
    } else {
        console.log("El texto no contiene la letra 's'.");
    }
}

contieneS();