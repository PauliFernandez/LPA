//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.Ejecutar la función y guardar el resultado en una variable, mostrando el valor dedicha variable en la consola del navegador.

function suma(a, b) {
    return a + b;
  }
  
  // Ejecutar la función y guardar el resultado en una variable
  var resultado = suma(5, 3);
  
  // Mostrar el valor de la variable en la consola del navegador
  console.log(resultado);
  

//b. A la función suma anterior, agregarle una validación para controlar si alguno delos parámetros no es un número, mostrar una alerta aclarando que uno de losparámetros tiene error y retornar el valor NaN como resultado.

function suma(a, b) {
    // Verificar si alguno de los parámetros no es un número
    if (typeof a !== 'number' || typeof b !== 'number') {
      alert('Error: Uno de los parámetros no es un número');
      return NaN;
    }
  
    return a + b;
  }
  
  // Ejecutar la función y guardar el resultado en una variable
  var resultado = suma(5, 3);
  
  // Mostrar el valor de la variable en la consola del navegador
  console.log(resultado);
  
//c. Crear una función validate integer que reciba un número como parámetro ydevuelva verdadero si es un número entero.

function validateInteger(number) {
    // Verificar si el número es un entero
    if (Number.isInteger(number)) {
      return true; // Es un entero
    } else {
      return false; // No es un entero
    }
  }
  

//d. A la función suma del ejercicio 6 b) agregarle una llamada que valide que losnúmeros sean enteros. En caso que haya decimales mostrar un alerta con elerror y retorna el número convertido a entero (redondeado).

function suma(a, b) {
    // Verificar si alguno de los parámetros no es un número
    if (typeof a !== 'number' || typeof b !== 'number') {
      alert('Error: Uno de los parámetros no es un número');
      return NaN;
    }
  
    // Validar si los números son enteros
    if (!Number.isInteger(a)) {
      alert('Error: El primer número no es entero');
      a = Math.round(a); // Convertir a entero redondeando
    }
  
    if (!Number.isInteger(b)) {
      alert('Error: El segundo número no es entero');
      b = Math.round(b); // Convertir a entero redondeando
    }
  
    return a + b;
  }

  // Ejecutar la función y guardar el resultado en una variable
  var resultado = suma(5, 3);
  
  // Mostrar el valor de la variable en la consola del navegador
  console.log(resultado);
  
//e. Convertir la validación del ejercicio 6d) en una función separada y llamarladentro de la función suma probando que todo siga funcionando igual.

function validarNumero(parametro, mensajeError) {
    // Verificar si el parámetro no es un número
    if (typeof parametro !== 'number') {
      alert('Error: ' + mensajeError);
      return NaN;
    }
  
    // Validar si el número es entero
    if (!Number.isInteger(parametro)) {
      alert('Error: ' + mensajeError);
      parametro = Math.round(parametro); // Convertir a entero redondeando
    }
  
    return parametro;
  }
  
  function suma(a, b) {
    a = validarNumero(a, 'El primer número no es un entero');
    b = validarNumero(b, 'El segundo número no es un entero');
  
    return a + b;
  }
  
  // Ejecutar la función y guardar el resultado en una variable
  var resultado = suma(5, 3);
  
  // Mostrar el valor de la variable en la consola del navegador
  console.log(resultado);
  