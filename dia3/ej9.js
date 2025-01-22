const prompt = require('prompt-sync')();
function calcularAreaTrianguloRecto() {
    const alto = prompt("Alto: ");
    const ancho = prompt("Ancho: ");
    const area = (alto * ancho) / 2;
    return area;
}

const area = calcularAreaTrianguloRecto();
if (area) console.log(`El área del cuadrado es: ${area}`);
else console.log("El alto y el ancho deben ser iguales para un cuadrado.");
