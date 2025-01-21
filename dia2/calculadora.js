// Requerir el módulo prompt-sync
const prompt = require('prompt-sync')();

const mostrarMenu = () => {
    console.log("Elige una opción:");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
};
mostrarMenu();

let opcion = prompt("¿Qué operación deseas realizar? (1/2/3/4): ");

if (['1', '2', '3', '4'].includes(opcion)) {
    let numero1 = parseFloat(prompt("Ingresa el primer número: "));
    let numero2 = parseFloat(prompt("Ingresa el segundo número: "));

    let resultado;

    if (!numero1 || !numero2) {
        console.log(`Es necesario ingresar/digitar ambos numeros para poder realizar la operacion`);
    } else {
        switch (opcion) {
            case '1':
                resultado = numero1 + numero2;
                console.log(`El resultado de la suma es: ${resultado}`);
                break;
            case '2':
                resultado = numero1 - numero2;
                console.log(`El resultado de la resta es: ${resultado}`);
                break;
            case '3':
                resultado = numero1 * numero2;
                console.log(`El resultado de la multiplicación es: ${resultado}`);
                break;
            case '4':
                if (numero2 === 0) {
                    console.log("No se puede dividir entre cero.");
                } else {
                    resultado = numero1 / numero2;
                    console.log(`El resultado de la división es: ${resultado}`);
                }
                break;
            default:
                console.log("Opción no válida");
        }
    }

} else {
    console.log("Opción no válida");
}
