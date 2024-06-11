/*
¡Claro! Aquí tienes un ejercicio de práctica que abarca varios conceptos fundamentales de JavaScript, incluyendo objetos.

## Ejercicio: Gestión de una Biblioteca

### Descripción
Vas a crear un pequeño sistema para gestionar una biblioteca. Deberás usar objetos para representar libros y la biblioteca, y métodos para manipular estos objetos.

### Requisitos

1. **Crea una clase `Libro`** con las siguientes propiedades:
   - `titulo` (string)
   - `autor` (string)
   - `anioPublicacion` (number)
   - `genero` (string)

2. **Añade métodos a la clase `Libro`**:
   - `getDescripcion()`: Devuelve una descripción del libro en formato de cadena.

3. **Crea una clase `Biblioteca`** con las siguientes propiedades:
   - `nombre` (string)
   - `libros` (array de objetos `Libro`)

4. **Añade métodos a la clase `Biblioteca`**:
   - `agregarLibro(libro)`: Añade un libro a la biblioteca.
   - `eliminarLibro(titulo)`: Elimina un libro de la biblioteca por su título.
   - `buscarLibro(titulo)`: Busca un libro por su título y devuelve el objeto `Libro`.
   - `listarLibros()`: Devuelve una lista de descripciones de todos los libros en la biblioteca.

### Guía Paso a Paso

1. **Definir la clase `Libro`**:
   - Define las propiedades en el constructor.
   - Implementa el método `getDescripcion()`.

2. **Definir la clase `Biblioteca`**:
   - Define las propiedades en el constructor.
   - Implementa el método `agregarLibro(libro)` para añadir un libro al array `libros`.
   - Implementa el método `eliminarLibro(titulo)` para buscar y eliminar un libro por su título.
   - Implementa el método `buscarLibro(titulo)` para buscar y devolver un libro por su título.
   - Implementa el método `listarLibros()` para listar las descripciones de todos los libros en la biblioteca.

### Pseudocódigo

1. **Clase `Libro`**:
   ```plaintext
   clase Libro:
       constructor(titulo, autor, anioPublicacion, genero):
           inicializar propiedades

       método getDescripcion():
           devolver descripción como cadena
   ```

2. **Clase `Biblioteca`**:
   ```plaintext
   clase Biblioteca:
       constructor(nombre):
           inicializar nombre
           inicializar array de libros vacío

       método agregarLibro(libro):
           añadir libro al array de libros

       método eliminarLibro(titulo):
           buscar libro por título y eliminarlo del array de libros

       método buscarLibro(titulo):
           buscar libro por título y devolverlo

       método listarLibros():
           devolver lista de descripciones de todos los libros
   ```

### Implementación

Intenta implementar el código siguiendo los pasos de la guía y pseudocódigo. Aquí hay algunos puntos para considerar mientras completas el ejercicio:

- Usa el método `find` para buscar libros en el array.
- Usa el método `filter` para eliminar libros.
- Asegúrate de manejar los casos en los que el libro no se encuentra.

Cuando termines, prueba tu implementación creando instancias de `Libro` y `Biblioteca` y llamando a los métodos para asegurarte de que todo funciona correctamente.

**Siguientes pasos sugeridos:**
1. **a.** Prueba tu implementación con varios libros y verifica que todos los métodos funcionen correctamente.
2. **b.** Añade métodos adicionales, como buscar libros por autor o género, para extender la funcionalidad de la biblioteca.

¡Buena suerte!
*/

const libro = {
    titulo: '',
    autor: '',
    añoPublicacion: 0,
    genero: ''
};



