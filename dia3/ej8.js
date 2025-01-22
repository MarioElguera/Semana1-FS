const prompt = require('prompt-sync')();
function calcularAreaCuadrado() {
    const alto = prompt("Alto: ");
    const ancho = prompt("Ancho: ");
    if (alto !== ancho) {
        return;
    }
    const area = alto * ancho;
    return area;
}

const area = calcularAreaCuadrado();
if (area) console.log(`El área del cuadrado es: ${area}`);
else console.log("El alto y el ancho deben ser iguales para un cuadrado.");