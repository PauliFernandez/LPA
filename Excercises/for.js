//a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando unbucle for de JavaScript para mostrar una alerta utilizando cada una de laspalabras.

// Crear el array de palabras
var palabras = ["Hola", "Mundo", "JavaScript", "Array", "Bucle"];

// Recorrer el array utilizando un bucle for
for (var i = 0; i < palabras.length; i++) {
  // Mostrar una alerta con cada palabra
  alert(palabras[i]);
}


//b. Al array anterior convertir la primera letra de cada palabra en mayúscula ymostrar una alerta por cada palabra modificada.

// Crear el array de palabras
var palabras = ["Hola", "Mundo", "JavaScript", "Array", "Bucle"];

// Recorrer el array utilizando un bucle for
for (var i = 0; i < palabras.length; i++) {
  // Obtener la primera letra en mayúscula y el resto de la palabra
  var primeraLetra = palabras[i].charAt(0).toUpperCase();
  var restoPalabra = palabras[i].slice(1);

  // Construir la palabra modificada
  var palabraModificada = primeraLetra + restoPalabra;

  // Mostrar una alerta con cada palabra modificada
  alert(palabraModificada);
}

//c. Crear una variable llamada “sentence” que tenga un string vacío, luego al arraydel punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro dela variable sentence. Al final mostrar una única alerta con la cadena completa.

var sentence = ""; // Crear una variable vacía
var palabras = ["Hola", "Mundo", "JavaScript", "Array", "Bucle"]; // Array de palabras
for (var i = 0; i < palabras.length; i++) { // Recorrer el array utilizando un bucle 
  sentence += palabras[i] + " "; // Concatenar cada palabra a la variable sentence
}
alert(sentence); // Mostrar la cadena completa


//d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array conel número de la repetición, es decir que al final de la ejecución del bucle fordebería haber 10 elementos dentro del array, desde el número 0 hasta al número9. Mostrar por la consola del navegador el array final (utilizar console.log)

var array = [];

for (var i = 0; i < 10; i++) {
  array.push(i);
}

console.log(array);
