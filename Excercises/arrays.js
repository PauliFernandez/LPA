// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar porconsola los meses 5 y 11 (utilizar console.log).

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]);  // Muestra el mes 5 (Mayo)
console.log(meses[10]); // Muestra el mes 11 (Noviembre)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.sort();

console.log(meses);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

let array = [1, 2, 3, 4, 5];

// Agregar elemento al principio del array
array.unshift(0);
console.log(array); // Resultado: [0, 1, 2, 3, 4, 5]

// Agregar elemento al final del array
array.push(6);
console.log(array); // Resultado: [0, 1, 2, 3, 4, 5, 6]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

// Definir un array de ejemplo
let miArray = [1, 2, 3, 4, 5];

// Eliminar el primer elemento utilizando shift()
let primerElemento = miArray.shift();
console.log("Primer elemento eliminado:", primerElemento);
console.log("Array después de shift():", miArray);

// Eliminar el último elemento utilizando pop()
let ultimoElemento = miArray.pop();
console.log("Último elemento eliminado:", ultimoElemento);
console.log("Array después de pop():", miArray);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// e. Invertir el orden del array (utilizar reverse).

const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// f. Unir todos los elementos del array en un único string donde cada mes esteseparado por un guión - (utilizar join).

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

const resultado = meses.join('-');
console.log(resultado);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre(utilizar slice)

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Utilizamos el método slice para crear una copia del array desde Mayo hasta Noviembre
const copiaMeses = meses.slice(4, 11);

console.log(copiaMeses); // ["Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"]
