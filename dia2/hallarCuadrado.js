const prompt = require('prompt-sync')();
let numero = parseFloat(prompt("Ingresa un número: "));
let cuadrado = numero * numero;
console.log(`El cuadrado de ${numero} es ${cuadrado}`);