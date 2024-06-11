//OBJETOS EN JAVASCRIPT
//Creacion de objetos
// La forma mas comun de crear objetos es usando la notación de llaves {}
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, me llamo " + this.nombre);
    }
};

//Tambien podemos usar un metodo constructor 'Object'
let persona2 = new Object();
persona2.nombre = "Juan";
persona2.edad = 30;
persona2.saludar = function() {
    console.log("Hola, me llamo " + this.nombre);
};

//Propiedades y metodos de los objetos
/* Las propiedades de un objeto son características o atributos que describen el estado o las características de ese objeto. En programación orientada a objetos, las propiedades se utilizan para almacenar datos relacionados con el objeto. A continuación te explico con un ejemplo en JavaScript: */

// Se pueden acceder a las propiedades de un objeto utilizando la notaccion de corchetes

// Definición de un objeto coche con sus propiedades
const coche = {
    marca: "Toyota", // esto son las propiedades del coche
    modelo: "Corolla",
    año: 2021
  };
  
  // Accediendo a las propiedades del objeto
  console.log(coche.marca); // "Toyota"
  console.log(coche.modelo); // "Corolla"
  console.log(coche.año); // 2021
  
// Como se usan las propiedades
 
/*
1.- Acceder a las Propiedades: Puedes acceder a una propiedad del objeto utilizando el punto (.) seguido del nombre de la propiedad.
2.- Modificar las Propiedades: También puedes cambiar el valor de una propiedad asignándole un nuevo valor.
*/
// Modificar una propiedad del objeto
coche.año = 2022;
console.log(coche.año); // 2022

//Eliminar propiedad
delete persona.ciudad;


/*
Los métodos son funciones asociadas a un objeto. En programación orientada a objetos, los métodos permiten que los objetos realicen acciones o comportamientos. Los métodos pueden acceder y modificar las propiedades del objeto, y pueden recibir parámetros para realizar tareas específicas.
*/

// Definición de un objeto coche con propiedades y métodos
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021,
    
    // Método para arrancar el coche
    arrancar: function() {
      console.log("El coche ha arrancado.");
    },
    
    // Método para detener el coche
    detener: function() {
      console.log("El coche se ha detenido.");
    }
  };
  
  // Usando los métodos del objeto
  coche.arrancar(); // "El coche ha arrancado."
  coche.detener();  // "El coche se ha detenido."
  
  /*
  Propiedades: marca, modelo, año (almacenan información sobre el coche).
Métodos: arrancar, detener (realizan acciones relacionadas con el coche).
   */

// Iterar entre las propiedades de un objeto
// for...in  es una manera directa de iterar sobre las propiedades enumerables de un objeto
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021
  };
  
  for (let propiedad in coche) {
    console.log(`${propiedad}: ${coche[propiedad]}`);
  }
  
  // Salida:
  // marca: Toyota
  // modelo: Corolla
  // año: 2021

// Object.keys() Devuelve un array de las propiedades enumerables propias del objeto. Puedes usar este array con forEach u otro tipo de bucle
const propiedades = Object.keys(coche);

propiedades.forEach(propiedad => {
  console.log(`${propiedad}: ${coche[propiedad]}`);
});

// Salida:
// marca: Toyota
// modelo: Corolla
// año: 2021

// Object.entries() devuelve un array de pares [clave, valor] de las propiedades enumerables propias del objeto.
Object.entries(coche).forEach(([propiedad, valor]) => {
    console.log(`${propiedad}: ${valor}`);
  });
  
  // Salida:
  // marca: Toyota
  // modelo: Corolla
  // año: 2021
  
//Métodos utiles para Objetos
  // Object.keys() Retorna un array con las claves (propiedades) del objeto.
  let propiedades = Object.keys(persona);
  console.log(propiedades); // ["nombre", "edad", "apellido"]

  //Object.values() Retorna un array con los valores de las propiedades del objeto.
  let valores = Object.values(persona);
   console.log(valores); // ["Carlos", 31, "Pérez"]
   
   // Object.entries() Retorna un array de arrays, cada uno con la clave y el valor de las propiedades del objeto.
   let entradas = Object.entries(persona);
    console.log(entradas); // [["nombre", "Carlos"], ["edad", 31], ["apellido", "Pérez"]]

    // Object.assign() Copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino.
    let destino = {};
    let fuente = { a: 1, b: 2 };
    Object.assign(destino, fuente);
    console.log(destino); // { a: 1, b: 2 }

//Ejercicios 

    let estudiante = {
        nombre: "Ana",
        edad: 20,
        curso: "Matemáticas"
    };
    estudiante.curso = "Física";
    estudiante.notaFinal = 95;
    console.log(estudiante);
    

    estudiante.describir = function() {
        console.log(`Estudiante: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}, Nota Final: ${this.notaFinal}`);
    };
    estudiante.describir();
    
    for (let propiedad in estudiante) {
        console.log(`${propiedad}: ${estudiante[propiedad]}`);
    }
    