// Bucle For

// for: Se usa cuando sabes cuántas veces quieres repetir un bloque de código. Ideal para iterar sobre arrays o cuando el número de iteraciones está definido.

for (let i = 0; i < 5; i ++) {
    console.log("Numero " + i);
}


// Bucle while

// while: Se usa cuando no sabes cuántas veces necesitas repetir un bloque de código y la condición para continuar la iteración depende de algo que cambia dentro del bucle.

 // Bucle do while

 let i = 0;
 while (i < 5) {
    console.log("Numero " + i);
    i++;
 }

 // do...while: Similar al while, pero la condición se evalúa después de ejecutar el bloque de código. Esto asegura que el bloque de código se ejecute al menos una vez.

 let j = 0;
 do{
    console.log("Numero " + j);
    j++;
 } while (j < 5);

 // Ejercicios

// Crea un bucle for que imprima los números del 1 al 100.
for (let i = 1; i < 101; i++) {
   console.log(i)
}
// Usa un bucle while para imprimir los números del 1 al 50.

let cont = 1;
while (cont >= 50) {
   console.log(cont);
   cont++;
}
// Crea un bucle do...while que imprima los números del 10 al 1 en orden descendente.

let contB = 10;
do{
   console.log(contB);
   contB--;
} while (contB > 0);