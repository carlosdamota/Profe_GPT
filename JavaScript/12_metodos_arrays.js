//Metodos Basicos

// .push Añade 1 o mas elemenos al final de un array
let numeros = [1, 2, 3];
numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]

// .pop Elimina el ultimo elemento, retorna el elemento eliminado
let numeros2 = [1, 2, 3];
let ultimo = numeros2.pop();
console.log(numeros2); // [1, 2]
console.log(ultimo);  // 3

// .shift Elimina el ptimer elemento de la array, y retorna el elemento eliminado
let numeros3 = [1, 2, 3];
let primero = numeros3.shift();
console.log(numeros3); // [2, 3]
console.log(primero); // 1

// .unshift Añade 1 o mas elementos al principio de la array
let numeros4 = [1, 2, 3];
numeros4.unshift(0);
console.log(numeros4); // [0, 1, 2, 3]

// METODOS DE ITERACION

// *.forEach* Ejecuta una funcion en cada elemento del array no retorna nada(undefined)

let numeros5 = [1, 2, 3];
numeros.forEach(num => {
    console.log(num); // Imprime 1, luego 2, luego 3
});

/* 
Itera sobre una array, pasa por cada elemento del array
Ejecuta la funcion callBack para cada elemento
No devuleve nungun array simplemnte realiza operaciones en cada elemento 
*/

// Sintaxis
/*
array.forEach(function(elemento, indice, array) {
    // código que se ejecuta para cada elemento
  });
*/  
/* 
elementos: El elemento actual del array que se esta procesando
Indice (opcional): El indice del elemento actual que se esta procesando
array (opcional): El array sobre el que se llamó forEach.
 */
const numeros6 = [1, 2, 3, 4, 5];

numeros6.forEach(function(numero) {
  console.log(numero);
});

const frutas = ['manzana', 'banana', 'cereza'];

frutas.forEach(function(fruta, indice ) {
  console.log(`Fruta en índice ${indice}: ${fruta}`);
});

//Ejemplo
const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 30 },
    { nombre: 'María', edad: 28 }
  ];
  
  personas.forEach(function(persona) {
    console.log(persona.nombre);
  });
  
// .map crea un nuevo array con los resultados de aplicar una funcion a cada elemento del array retorna un nuevo array
/* Se crea una variable numeros 7 que contine una array, otra variable llamada cuadros que contiene una iteracion usando map en cada elemento del array numeros7. Los elementos se añaden a num y el retorno es la multiplicacion de num por si mismo */
let numeros7 = [1, 2, 3];
let cuadrados = numeros7.map(num => num * num);
//o return num * num
console.log(cuadrados); // [1, 4, 9]

/* elemento: El elemento actual del array que se está procesando.
indice (opcional): El índice del elemento actual que se está procesando.
array (opcional): El array sobre el que se llamó map.
return nuevoElemento: Devuelve el nuevo valor que se añadirá al nuevo array. */

//Ejemplos
const numeros8 = [1, 2, 3, 4, 5];

const numerosDuplicados = numeros.map(function(numero) {
  return numero * 2;
});

console.log(numerosDuplicados); // [2, 4, 6, 8, 10]

const personas2 = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 30 },
    { nombre: 'María', edad: 28 }
  ];
  
  const nombres = personas2.map(function(persona) {
    return persona.nombre;
  });
  
  console.log(nombres); // ['Ana', 'Luis', 'María']
  
// .filter Crea un array con todos los elementos que pasen una prueba especificada en una funcion y retorna un nuevo array

let numeros9 = [1, 2, 3, 4, 5];
let pares = numeros9.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]

const numeros10= [1, 2, 3, 4, 5];

const numerosMayoresQueDos = numeros10.filter(function(numero) {
  return numero > 2;
});

console.log(numerosMayoresQueDos); // [3, 4, 5]

// METODOS DE BUSQUEDA

// .find Retorna el primer elemento que pase una prueba especificada en una funcion retorna undefined si no pasan la prueba
let numeros11 = [1, 2, 3, 4, 5];
let encontrado = numeros11.find(num => num > 3);
console.log(encontrado); // 4
if (encontrado > 3) {
  numeros11.push(encontrado)
  numeros11.shift()
}
console.log(numeros11)

// .findIdex retorna el indice del primer elemenot que pase una prueba especifica
let numeros12 = [1, 2, 3, 4, 5];
let indice = numeros12.findIndex(num => num > 3);
console.log(indice); // 3

// .includes determina si un array contiene un elemento especifico retorna true si no false
let numeros13 = [1, 2, 3];
console.log(numeros13.includes(2)); // true
console.log(numeros13.includes(4)); // false

let plato =  ["pollo", "pavo", "espinacas"]
let ingrediente = plato.includes("pavo");
if (plato) {
  plato.push("patata")
}  

// METODOS DE MANIPULACION
// .slice retorna una copia de una arrray en otro array
let numeros14 = [1, 2, 3, 4, 5];
let subArray = numeros14.slice(1, 3);
console.log(subArray); // [2, 3]

// .splice Cambia el contenido de un array eliminando elementos existentes y agregando nuevos, retorna un array de elementos eliminados
let numeros15 = [1, 2, 3, 4, 5];
let eliminados = numeros15.splice(2, 2, 6, 7);
console.log(numeros15); // [1, 2, 6, 7, 5]
console.log(eliminados); // [3, 4]

// EJERCICIOS
// 1-Dado un array de numeros, usa map para crear un nuevo array con los cuadrados de estos
let numeros16 = [1, 2, 3, 4, 5];
let numQua = numeros16.map(num => num * num);
console.log(numQua);  
// 2-Dado un array de numeros usa .filter para crear un nuevo array de nuemros pares
let numeros17 = [1, 2, 3, 4, 5];
let numPar = numeros17.filter(num => num % 2 === 0);
console.log(numPar);

// 3-Usa reduce para obtener la suma de todos los numeros de un array
let numeros18 = [1, 2, 3, 4, 5];
let numRedu = numeros18.reduce((algo, num) => algo * num)
console.log(numRedu);