const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingresa un número: "));

function tablaMultiplicar(number) {

    for (let i = 1; i <= 9; i++) {
        let x = number * i;
        console.log("- " + `${number} x ${i} = ${x}`)
    }
}

tablaMultiplicar(numero);