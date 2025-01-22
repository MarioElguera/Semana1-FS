const prompt = require('prompt-sync')();
const numero = prompt("Ingrese un número: ");
const exponente = prompt("Ingrese el exponente: ");

function calcular(numero, exponente) {
    const resultado = Math.pow(numero, exponente);
    return resultado;
}

const res = calcular(numero, exponente);
if (res) console.log(`El resultado: ${res}`);
else console.log("Debe ingresar ambos numeros para completar a operación");