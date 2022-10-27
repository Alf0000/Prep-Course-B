// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acum_ = 0;
    for (var i = 1; i <= 10; i++) acum_= acum_ + i;
    return acum_;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var array_ = [];

  for(numero_ of array){
    if (numero_%2===0){
      array_.push(numero_);
    }
  }
 return array_;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:

  var array_ = [];
  for(numero_ of array){
    array_.push(numero_**2);
  }
return array_;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:

  var num_ = 0;
  for(numero_ of array){
    num_ = num_ + numero_;
  }
return num_;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:

  //String numCadena= Integer. toString(numEntero)
  var cadena_ = num.toString();
  return cadena_.length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
