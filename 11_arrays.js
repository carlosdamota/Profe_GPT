//Crear arrays
    //-Con corchetes
let numeros = [1, 2, 3, 4, 5];
let palabras = ["Hola", "Mundo"];

    //-Con constructor
let numeros1 = new Array(1, 2, 3, 4, 5);
let palabras1 = new Array("Hola", "Mundo");

//Acceso a los elementos
let numeros2 = [1, 2, 3, 4, 5];
console.log(numeros2[0]); // Muestra 1
console.log(numeros2[3]); // Muestra 4

//Modificar arrays
let numeros3 = [1, 2, 3, 4, 5];
numeros3[0] = 10;
console.log(numeros3); // Muestra [10, 2, 3, 4, 5]

//propiedades y metodos de los Arrays
    //Longitud .length
let numeros4 = [1, 2, 3, 4, 5];
console.log(numeros4.length); // Muestra 5
    
    //Añadir elemento al final .push
let numeros5 = [1, 2, 3, 4, 5];
numeros.push(6);
console.log(numeros5); // Muestra [1, 2, 3, 4, 5, 6]
    
    //Eliminar ultimo elemento .pop
let numeros6 = [1, 2, 3, 4, 5];
numeros6.pop();
console.log(numeros6); // Muestra [1, 2, 3, 4]

    //Añadir elementos al princiopio .unshift
let numeros7 = [1, 2, 3, 4, 5];
numeros7.unshift(0);
console.log(numeros7); // Muestra [0, 1, 2, 3, 4, 5]

    //Eliminar primer elemento .shift
let numeros8 = [1, 2, 3, 4, 5];
numeros8.shift();
console.log(numeros8); // Muestra [2, 3, 4, 5]

//EJERCICIOS
//Crea una array e imprimela
let ingredientes = ["Patata", "Judias", "Aceite"];
console.log('Los ingredientes para mi plato son , ${ingredientes}'); 

let ejNum = [1, 2, 3, 4, 5];
console.log(ejNum);

//Crea una array con nombres e imprime el primer y el ultimo nombre
let nombres = ["Carlos", "Angela", "Einar"];
console.log(nombres[0]);
console.log(nombres[2]);

let nombres = ["Juan", "Ana", "Luis"];
console.log(nombres[0]); // Muestra "Juan"
console.log(nombres[nombres.length - 1]); // Muestra "Luis"


//Crea un Array del 1 - 5 y cambia el 2 por 10
let ejrcicioNum = [1, 2, 3, 4, 5];
ejrcicioNum[1] = 10;
console.log(ejrcicioNum) // 1, 10, 3, 4 ,5

let numeros = [1, 2, 3, 4, 5];
numeros[1] = 10;
console.log(numeros); // Muestra [1, 10, 3, 4, 5]
