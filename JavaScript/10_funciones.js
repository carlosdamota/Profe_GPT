// FUNCIONES TRADICIONALES
// Las funciones se definen usando la palabra clave function seguida de un nombre y parametros
function saludar(nombre) {
    console.log("Hola, " + nombre);
}

// Para llamar a la funcion es nombre de la funcion y el parametro 
saludar("Carlos"); //Hola, carlos

//FUNCIONES ANÓNIMAS
// Estas no tienen nombre y se asignan a una variable
let saludar = function(nombre) {
    console.log("Hola, " + nombre);
};

//Esta se llama usando la variable, ya que no tiene nombre la funcion
saludar("Mundo") //Hola, Mundo

//FUNCIONES FLECHA
// Son una forma mas concisa de usar las funciones anonimas se usa la sintaxis =>
let saludar = (nombre) => {
    console.log("Hola, " + nombre);
};

saludar("Mundo");

//La sintaxis básica de una función flecha es:
(param1, param2, paramN) => { /* cuerpo de la función */ }

//Si solo hay un parámetro, los paréntesis pueden omitirse:
param => { /* cuerpo de la función */ }

//Si el cuerpo de la función tiene solo una expresión, las llaves y la palabra clave return pueden omitirse:

(param1, param2) => expresión

//Funcion tradicional
function sumar(a, b) {
    return a + b;
}

//Funcion Flecha
let sumar = (a,b) => a + b;

let numeros = [1, 2, 3, 4, 5];

// Usando función tradicional
let cuadrados = numeros.map(function(n) {
    return n * n;
});

// Usando función flecha
let cuadradosFlecha = numeros.map(n => n * n);

console.log(cuadradosFlecha); // [1, 4, 9, 16, 25]

//Una de las diferencias clave entre las funciones tradicionales y las funciones flecha es que las funciones flecha no tienen su propio this. En su lugar, las funciones flecha capturan el valor de this del contexto de ejecución en el que se crean.

function Persona() {
    this.edad = 0;

    setInterval(function() {
        this.edad++;
        console.log(this.edad);
    }, 1000);
}

let p = new Persona(); // Esto no funcionará como se espera porque `this` no se refiere a la instancia de Persona

// Solución con una función flecha
function PersonaFlecha() {
    this.edad = 0;

    setInterval(() => {
        this.edad++;
        console.log(this.edad);
    }, 1000);
}

let pf = new PersonaFlecha(); // Esto funcionará porque la función flecha captura `this` del contexto de PersonaFlecha

//Ejercicios
//1. Convierte la siguiente funcion en una funcion flecha
let a = 2;
let b = 1;
function resta (a, b) {
    return a - b
}

// let resta = (a, b) => {return a - b}; No es necesario ni las llamves ni el return
let resta = (a, b) => a - b;

//2. Imprimir numeros del 1 al 10
function imprimirNumeros() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

}
// Suma 2 numeros
function suma (a, b) {
    return a + b;
}

//Comprobar si un numero es par
function esPar (a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }    
}

//Funciones como Objetos de Primera Clase
// En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden ser asignadas a variables, pasadas como argumentos a otras funciones y devueltas por otras funciones.

//funciones como parametros
function operacionMatematica(a, b, operacion) {
    return operacion(a, b);
}

let suma = function(a, b) {
    return a + b;
};

let resultado = operacionMatematica(5, 3, suma); // Usa la función suma como argumento
console.log(resultado); // Muestra 8

//Funciones que devuleven funciones
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

let multiplicarPorDos = crearMultiplicador(2);
console.log(multiplicarPorDos(5)); // Muestra 10
