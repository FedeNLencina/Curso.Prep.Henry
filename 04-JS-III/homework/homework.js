// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  var primerElemento= array[0];
  return primerElemento;
  // Devuelve el primer elemento de un array
  // Tu código:
}

function devolverUltimoElemento(array) {
  var ultimoElemento=array[array.length -1];
  return ultimoElemento;
  // Devuelve el último elemento de un array
  // Tu código:
}

function obtenerLargoDelArray(array) {
  var longitud = array.length;
  return longitud;
  // Devuelve el largo de un array
  // Tu código:
}

function incrementarPorUno(array) {
  for(var i = 0; i< array.length; i++){
    array[i]= array[i] + 1;
  }
  return array;
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}

function dePalabrasAFrase(palabras) {
  var frase = "";
  for (var i = 0; i< palabras.length; i++){
      if (i!=palabras.length-1){
        frase= frase + palabras[i] +" ";
      }else{
        frase = frase + palabras[i];
      }
  }
  return frase;
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}

function arrayContiene(array, elemento) {
  for (var i = 0; i<array.length;i++){
      if(array[i]==elemento){
        return true;
      }
  }
  return false;
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}

function agregarNumeros(numeros) {
  var suma = 0;
  for (var i = 0; i<numeros.length;i++){
    suma= suma + numeros[i];
  }
  return suma;
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}

function promedioResultadosTest(resultadosTest) {
  var suma = 0;
  var cont = 0;
  for (var i = 0; i<resultadosTest.length;i++){
      suma= suma + resultadosTest[i];
      cont = cont +1;
  }
  var promedio = suma/cont;
  return promedio;
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}

function numeroMasGrande(numeros) {
  var masGrande= 0;
  for (var i = 0; i<numeros.length;i++){
    if(numeros[i]>masGrande){
      masGrande = numeros[i];
    }
  }
  return masGrande;
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}

function multiplicarArgumentos() {
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
