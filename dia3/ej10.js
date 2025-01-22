const prompt = require('prompt-sync')();
const radio = prompt("Ingrese el radio del círculo: ");

function calcularAreaCirculo(radio) {
    const area = Math.PI * Math.pow(radio, 2);
    return area;
}

const area = calcularAreaCirculo(radio);
if (area) console.log(`El área del círculo es: ${area}`);
else console.log("Debe ingresar el area del circulo.");
