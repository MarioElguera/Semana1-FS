const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingresa un número: "));

if (numero <= 0) {
    console.log("Por favor, ingresa un número mayor que 0.");

} else {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    console.log(`El producto de ${numero} por todos los números anteriores es: ${resultado}`);
}
