//METODOS DE FUNCIONES
// .call() Llama a una funcion con un valor 'this' y argumentos proporcionados individualmente
// Sintaxis: 'func.call(thisARG, arg1, arg2 ...)
function saludar(saludo, signo) {
    console.log(saludo + ", " + this.nombre + signo);
}

let persona = { nombre: "Juan" };

saludar.call(persona, "Hola", "!"); // Hola, Juan!
saludar(persona, "hola", "!")
saludar("hola", "!")

// .apply() Llama a una funcionc con un valor this y argumentos proporcionados como un array
//sintaxis 'func.apply(thisArg, [argsArray])'
function saludar2(saludo, signo) {
    console.log(saludo + ", " + this.nombre + signo);
}

let persona2 = { nombre: "Juan" };

saludar.apply(persona2, ["Hola", "!"]); // Hola, Juan!

// .blind()
/* 
Crea una nueva función que, cuando es llamada, tiene su valor this establecido con el valor proporcionado, con una secuencia dada de argumentos precediendo a cualquier otro argumento que se proporcione cuando se llama a la nueva función.
Sintaxis: func.bind(thisArg, arg1, arg2, ...)
*/
function saludar(saludo, signo) {
    console.log(saludo + ", " + this.nombre + signo);
}

let persona3 = { nombre: "Juan" };

let saludarJuan = saludar.bind(persona3, "Hola", "!");
saludarJuan(); // Hola, Juan!

// .toString() Retorna una cadena de texto representando la definicion de la funcion
// sintaxis: 'func.toString()'
function suma(a, b) {
    return a + b;
}

console.log(suma.toString());
// function suma(a, b) {
//     return a + b;
// }

// .length Propiedad que retorna el nuemro de argumentos esperado por la funcion
// Sintaxis. length
function suma(a, b) {
    return a + b;
}

console.log(suma.length); // 2

