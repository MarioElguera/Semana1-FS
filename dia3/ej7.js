const prompt = require('prompt-sync')();

function elevarMismo() {
    const numero = prompt("Ingresa un número: ");

    if (numero) {
        const resultado = Math.pow(numero, numero)
        console.log(numero + " elevado al cuadrado es: ", resultado)
    }
}

elevarMismo();
