const prompt = require('prompt-sync')();

function verificarParImpar() {
    const numero = prompt("Ingresa un número: ");

    if (numero % 2 === 0) {
        console.log(`${numero} es un número par.`);

    } else {
        console.log(`${numero} es un número impar.`);
    }
}

verificarParImpar();
