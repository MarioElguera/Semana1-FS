//Ejercicio 1
console.log("Mario Alberto Elguera Chahuara");

//Ejercicio 2
const number = 100 * 100;
console.log("Resultado => ", number);

//Ejercicio 3
const randomNumber = Math.random() * 100;
console.log("Resultado => ", parseInt(randomNumber));

//Ejercicio 4
console.log("\n");
let lado = 5;
for (let i = 0; i < lado; i++) {
    let fila = "";
    for (let j = 0; j < lado; j++) {
        fila += "* ";
    }
    console.log(fila);
}
console.log("\n");

//Ejercicio 5
console.log("\n");

for (let i = 0; i < 5; i++) {
    let fila = "";
    for (let j = 0; j < 5; j++) {
        fila += "* ";
    }
    console.log(fila);
}
console.log("\n");

//Ejercicio 6 - Cuadrado hueco de 5x5
function cuadradoHueco(size) {
    let resultado = '';
    for (let i = 0; i < size; i++) {
        if (i === 0 || i === size - 1) {
            resultado += '* '.repeat(size) + '\n';
        } else {
            resultado += '* ' + '  '.repeat(size - 2) + '*\n';
        }
    }
    console.log(resultado);
}

//Ejercicio 7 - Triángulo recto justificado a la izquierda
function trianguloIzquierda(size) {
    let resultado = '';
    for (let i = 1; i <= size; i++) {
        resultado += '* '.repeat(i) + '\n';
    }
    console.log(resultado);
}

//Ejercicio 8 - Triángulo recto justificado a la derecha
function trianguloDerecha(size) {
    let resultado = '';
    for (let i = 1; i <= size; i++) {
        resultado += ' '.repeat((size - i) * 2) + '* '.repeat(i) + '\n';
    }
    console.log(resultado);
}

// Llamada a las funciones
const size = 5;
console.log('Cuadrado Hueco:');
cuadradoHueco(size);
console.log('Triángulo Justificado a la Izquierda:');
trianguloIzquierda(size);
console.log('Triángulo Justificado a la Derecha:');
trianguloDerecha(size);

