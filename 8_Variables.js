// Usando var
var nombre = "Juan;" // forma antigua

// Usando let
let edad = 25; // tienen un ambito de bloque y no pueden ser redeclaradas

// Usando const
const pais = "España"; //Tambien tienen un ambito de bloque no es modificable. Si es un array o un objeto si pueden ser modifocado

// Ejemplos de ámbito de bloque
if (true) {
    var varVariable = "Disponible fuera del bloque";
    let letVariable = "Disponible sólo dentro del bloque";
    const constVariable = "Disponible sólo dentro del bloque";
}

console.log(varVariable); // Funciona
// console.log(letVariable); // Error: letVariable no está definida
// console.log(constVariable); // Error: constVariable no está definida