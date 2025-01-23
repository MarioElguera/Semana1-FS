var colors = require('colors');


//Ejercicio 1
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(colors.green("Ejercicio 1 => ", ...array));

//Ejercicio 2
console.log(colors.red.underline("Ejercicio 2 => ", array.findIndex(x => x === 3 || 6)));

//Ejercicio 3
console.log(colors.inverse("Ejercicio 3 => ", array[3], "y ", array[6]));

//Ejercicio 4
console.log(colors.rainbow("Ejercicio 4 => ", array.length));

//Ejercicio 5
array.push(11);
console.log(colors.trap("Ejercicio 5 => ", array[array.length - 1]));

//Ejercicio 6
array.splice(5, 6);
console.log("Ejercicio 6 => ", array);


//Ejercicio 7
const index = array.findIndex((el) => el === 4);
console.log("Ejercicio 7 => ", index);

//Ejercicio 8
const reversedItems = array.toReversed();
console.log("Ejercicio 8 => ", reversedItems);

//Ejercicio 9
const arrayString = array.join(' ,');
console.log("Ejercicio 9 => ", arrayString);

//Ejercicio 10
const array10 = array.toString().split(",");
console.log("Ejercicio 10 => ", array10);

//Ejercicio 11
console.log("Ejercicio 11");

array.forEach((num, index) => {
    console.log("\n Numero: ", num, " - Index: ", index);
});

//Ejercicio 12
console.log("Ejercicio 12 => ", array.map(num => num + '&'));

//Ejercicio 13
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element === 12);
console.log("Ejercicio 13 => ", found);

//Ejercicio 14
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log("Ejercicio 14 => ", result);

//Ejercicio 15
const alumno = ['Timmy', 'Garcia', 'Diseño Web'];
const [nombre, apellido, curso] = alumno;
console.log("Ejercicio 15 => ", "nombre: ", nombre, "apellido: ", apellido, "curso: ", curso);

//Ejercicio 16
const numbers = [1, 2, 3];
console.log("Ejercicio 16 => ", ...numbers);

//Ejercicio 18
console.error('console.error()');
console.warn('console.warn()');
require('console-success');
console.success('All test successfully completed'); // log text

//Ejercicio 19
console.error('Ejercicio 19 => ');
const _ = require('lodash');
const array19 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result19 = _.chunk(array, 3);
console.log(result19);  // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const obj = { a: 1, b: { c: 2 } };
const newObj = _.cloneDeep(obj);
newObj.b.c = 3;
console.log(obj.b.c);  // 2
console.log(newObj.b.c);  // 3

