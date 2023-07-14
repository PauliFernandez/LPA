// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo eltexto en mayúscula (utilizar toUpperCase).

let miTexto = "ejemplo de texto";
miTexto = miTexto.toUpperCase();

console.log(miTexto);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los primeros 5 caracteres guardando el resultado en una nuevavariable (utilizar substring).
// Crear una variable de tipo string con al menos 10 caracteres
var originalString = "abcdefghijklmno";

// Generar un nuevo string con los primeros 5 caracteres utilizando substring
var nuevoString = originalString.substring(0, 5);

// Imprimir los resultados
console.log("Original: " + originalString);
console.log("Nuevo: " + nuevoString);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring).

// Crear la variable de tipo string con al menos 10 caracteres
var miString = "EjemploStringConMasDe10Caracteres";

// Generar un nuevo string con los últimos 3 caracteres utilizando substring
var ultimosTresCaracteres = miString.substring(miString.length - 3);

// Imprimir el resultado
console.log(ultimosTresCaracteres);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con la primera letra en mayúscula y las demás en minúscula. Guardar elresultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase yel operador +).

// Crear una variable con al menos 10 caracteres
var originalString = "ejemplostring";

// Obtener la primera letra en mayúscula y el resto en minúscula
var primeraLetraMayuscula = originalString.substring(0, 1).toUpperCase();
var restoEnMinuscula = originalString.substring(1).toLowerCase();

// Unir la primera letra en mayúscula con el resto en minúscula
var nuevoString = primeraLetraMayuscula + restoEnMinuscula;

// Imprimir el resultado
console.log(nuevoString);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio enblanco. Encontrar la posición del primer espacio en blanco y guardarla en unavariable (utilizar indexOf).

// Crear la variable de tipo string
var miCadena = "Hola mundo ";

// Encontrar la posición del primer espacio en blanco
var posicionEspacio = miCadena.indexOf(" ");

// Imprimir la posición del primer espacio en blanco
console.log("La posición del primer espacio en blanco es: " + posicionEspacio);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres yalgún espacio entre medio). Utilizar los métodos de los ejercicios anteriores paragenerar un nuevo string que tenga la primera letra de ambas palabras enmayúscula y las demás letras en minúscula (utilizar indexOf, substring,toUpperCase, toLowerCase y el operador +).

// Crear una variable con al menos dos palabras largas
var frase = "elefante ESPACIOrinoceronte";

// Encontrar el índice del espacio
var indiceEspacio = frase.indexOf(" ");

// Obtener la primera palabra
var primeraPalabra = frase.substring(0, indiceEspacio);
// Obtener la segunda palabra
var segundaPalabra = frase.substring(indiceEspacio + 1);

// Convertir la primera letra de ambas palabras a mayúscula y las demás letras a minúscula
var nuevaFrase = primeraPalabra.charAt(0).toUpperCase() + primeraPalabra.slice(1).toLowerCase() + " " +
                segundaPalabra.charAt(0).toUpperCase() + segundaPalabra.slice(1).toLowerCase();

// Imprimir el resultado
console.log(nuevaFrase);
