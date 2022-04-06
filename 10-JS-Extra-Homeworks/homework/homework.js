// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  //for(let clave in objeto){
    //matriz.push('["' + clave + '", ' + objeto[clave] + ']');
  //}
array = Object.entries(objeto);
return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 var array = Array.from(string);
 const conjunto = new Set(array);
 const unicos = [... conjunto];

 var sum = 0;
 var objeto = {};
 
 for(var i=0; i<unicos.length;i++){
    for(var j=0; j<array.length;j++){
      if(unicos[i] === array[j]){
        sum = sum +1;
      }
    }
    objeto[unicos[i]] = sum;
    sum = 0;
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may = '';
  var min = '';
  for(var i=0; i<s.length;i++){
    if(s.charAt(i) === s.charAt(i).toUpperCase()){
      may = may + s.charAt(i);
    }else{
      min = min + s.charAt(i);
    }
  }
  return may + min;


}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split(' ');
  var palabra = '';
  var inv = '';
  var arinv = [];
  var strinv = '';
  
  for(var i=0; i<array.length;i++){
    palabra = array[i];
    for(var j=palabra.length-1;j>=0;j--){
      inv = inv + palabra.charAt(j);
    }
    arinv.push(inv);
    inv = '';
  }
  strinv = arinv.join(' ');
  return strinv;

  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str ='';
  var inv = '';
  str = numero.toString();
  for(var i=str.length-1; i>=0; i--){
    inv = inv + str.charAt(i);
  }
  if(str === inv){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var str = '';
  for(var i=0; i<cadena.length; i++){
    if(cadena.charAt(i) !== 'a' && cadena.charAt(i) !== 'b' && cadena.charAt(i) !== 'c'){
      str = str + cadena.charAt(i);
    }
  }
  return str;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var array = [];
  var final = [];
  for(var i=0; i<arr.length;i++){
    var objeto = {};
    objeto.palabra = arr[i];
    objeto.longitud = arr[i].length;
    array.push(objeto);
  }
  var ordenado = [];
  ordenado = array.sort(function(a,b){return a.longitud - b.longitud;});
  
  for(var i=0; i<ordenado.length;i++){
   final[i] = ordenado[i].palabra;
  }
  return final;

  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var newarreglo = [];
  for(var i=0; i<arreglo1.length;i++){
    for(var j=0; j<arreglo2.length;j++){
      if(arreglo1[i] === arreglo2[j]){
        newarreglo.push(arreglo1[i]);
      }
    }
  }
  return newarreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

