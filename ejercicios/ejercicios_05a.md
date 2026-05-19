# Ejercicios muy básicos de objetos

## Objetos literales

1. Crear un objeto llamado `persona` con las propiedades `nombre`, `apellido`, `edad` y `email`.
2. Mostrar en consola el objeto `persona` completo.
3. Mostrar en consola solamente el `nombre` de la persona.
4. Mostrar en consola solamente el `email` de la persona.
5. Cambiar la edad de la persona por otro número.
6. Cambiar el email de la persona usando la notación con punto.
7. Cambiar el apellido de la persona usando la notación con corchetes.
8. Agregar una propiedad nueva llamada `telefono`.
9. Mostrar en consola el objeto actualizado.
10. Crear otro objeto llamado `persona2` con las mismas propiedades, pero con otros datos.

## Funciones constructoras

1. Crear una función constructora llamada `Persona` que reciba `id`, `nombre`, `apellido`, `edad` y `email`.
2. Crear una persona nueva usando `new Persona(...)`.
3. Mostrar en consola la persona creada.
4. Crear dos personas más usando la misma función constructora.
5. Cambiar el email de una de las personas creadas.
6. Cambiar la edad de otra persona creada.
7. Mostrar en consola las tres personas.
8. Crear una función constructora llamada `Producto` que reciba `nombre`, `precio` y `cantidad`.
9. Crear un producto usando `new Producto(...)`.
10. Mostrar en consola el producto creado.

## Clases

1. Crear una clase llamada `Mascota`.
2. Agregar un `constructor` que reciba `tipo`, `nombre`, `edad`, `raza`, `color` y `peso`.
3. Dentro del constructor, guardar cada dato usando `this`.
4. Crear una mascota llamada `gato` usando `new Mascota(...)`.
5. Crear una mascota llamada `perro` usando `new Mascota(...)`.
6. Mostrar en consola las dos mascotas.
7. Cambiar el peso del gato.
8. Cambiar el color del perro.
9. Mostrar en consola el nombre del gato.
10. Mostrar en consola el tipo del perro.

## Métodos

1. Agregar a la clase `Mascota` un método llamado `comer`.
2. El método `comer` debe mostrar en consola un mensaje usando `this.tipo` y `this.nombre`.
3. Agregar a la clase `Mascota` un método llamado `caminar`.
4. El método `caminar` debe mostrar en consola un mensaje usando `this.tipo` y `this.nombre`.
5. Ejecutar el método `comer` del gato.
6. Ejecutar el método `comer` del perro.
7. Ejecutar el método `caminar` del gato.
8. Ejecutar el método `caminar` del perro.
9. Crear otra mascota y ejecutar sus dos métodos.
10. Mostrar en consola el objeto de esa nueva mascota.

## JSON y almacenamiento

1. Crear un objeto llamado `producto` con las propiedades `nombre`, `precio` y `cantidad`.
2. Convertir el objeto `producto` a texto usando `JSON.stringify`.
3. Mostrar en consola el resultado de `JSON.stringify`.
4. Mostrar en consola el tipo de dato del resultado usando `typeof`.
5. Guardar el producto convertido en texto dentro de `localStorage`.
6. Leer el producto desde `localStorage` usando `getItem`.
7. Mostrar en consola el producto leído desde `localStorage`.
8. Convertir el producto leído a objeto usando `JSON.parse`.
9. Mostrar en consola el producto parseado.
10. Mostrar en consola el tipo de dato del producto parseado usando `typeof`.

## Carrito simple

1. Crear un array vacío llamado `carrito`.
2. Crear una clase llamada `Producto` con `nombre`, `precio` y `cantidad`.
3. Crear tres productos usando `new Producto(...)`.
4. Agregar los tres productos al array `carrito` usando `push`.
5. Mostrar en consola el carrito completo.
6. Mostrar en consola el primer producto del carrito.
7. Eliminar el primer producto del carrito usando `splice`.
8. Mostrar en consola el carrito actualizado.
9. Guardar el carrito en `localStorage` usando `JSON.stringify`.
10. Leer el carrito desde `localStorage` y convertirlo nuevamente a array usando `JSON.parse`.

## Más objetos literales

1. Crear un objeto llamado `auto` con las propiedades `marca`, `modelo`, `anio` y `color`.
2. Mostrar en consola la marca del auto.
3. Mostrar en consola el modelo del auto usando notación con corchetes.
4. Cambiar el color del auto.
5. Agregar una propiedad llamada `patente`.
6. Mostrar en consola el objeto `auto` actualizado.
7. Crear un objeto llamado `libro` con `titulo`, `autor`, `paginas` y `leido`.
8. Cambiar la propiedad `leido` de `false` a `true`.
9. Mostrar en consola un mensaje usando el título y el autor del libro.
10. Crear un objeto llamado `pelicula` con `titulo`, `genero`, `duracion` y `aptaTodoPublico`.

## Acceso y modificación de propiedades

1. Crear un objeto llamado `usuario` con `nombre`, `email` y `activo`.
2. Mostrar en consola el valor de `activo`.
3. Cambiar `activo` a `false`.
4. Agregar una propiedad llamada `rol` con el valor `"estudiante"`.
5. Mostrar en consola el valor de `rol`.
6. Crear una variable llamada `propiedad` con el valor `"email"`.
7. Usar la variable `propiedad` para mostrar el email del usuario con corchetes.
8. Cambiar el email del usuario usando la variable `propiedad`.
9. Mostrar en consola el usuario completo.
10. Crear otro usuario con los mismos campos y otros valores.

## Objetos con métodos simples

1. Crear un objeto llamado `calculadora` con las propiedades `numero1` y `numero2`.
2. Agregar un método llamado `sumar` que muestre la suma de los dos números.
3. Agregar un método llamado `restar` que muestre la resta de los dos números.
4. Ejecutar los métodos `sumar` y `restar`.
5. Crear un objeto llamado `producto` con `nombre`, `precio` y `stock`.
6. Agregar un método llamado `mostrarInfo` que muestre el nombre y el precio.
7. Agregar un método llamado `hayStock` que muestre si el stock es mayor que cero.
8. Ejecutar los métodos del producto.
9. Cambiar el stock del producto a `0`.
10. Ejecutar nuevamente el método `hayStock`.

## Constructores con objetos

1. Crear una función constructora llamada `Alumno` que reciba un objeto como parámetro.
2. Guardar en `this` las propiedades `nombre`, `apellido`, `edad` y `curso`.
3. Crear un objeto literal con los datos de un alumno.
4. Crear una instancia usando `new Alumno(objetoAlumno)`.
5. Mostrar en consola la instancia creada.
6. Crear otra instancia pasando directamente el objeto dentro de `new Alumno(...)`.
7. Cambiar el curso de una de las instancias.
8. Mostrar en consola el nombre completo de un alumno.
9. Crear una función constructora llamada `Mascota` que reciba un objeto como parámetro.
10. Crear una mascota usando esa función constructora.

## Clases de productos

1. Crear una clase llamada `Producto`.
2. Agregar un constructor que reciba `nombre`, `precio` y `cantidad`.
3. Crear un producto llamado `azucar`.
4. Crear un producto llamado `yerba`.
5. Crear un producto llamado `chocolate`.
6. Mostrar en consola los tres productos.
7. Agregar un método llamado `mostrarNombre` que muestre el nombre del producto.
8. Agregar un método llamado `mostrarPrecio` que muestre el precio del producto.
9. Ejecutar ambos métodos en uno de los productos.
10. Cambiar la cantidad de uno de los productos.

## Métodos con mensajes

1. Crear una clase llamada `Persona`.
2. El constructor debe recibir `nombre`, `apellido` y `edad`.
3. Agregar un método llamado `saludar` que muestre un saludo con el nombre.
4. Agregar un método llamado `presentarse` que muestre nombre, apellido y edad.
5. Crear dos personas usando `new Persona(...)`.
6. Ejecutar el método `saludar` en las dos personas.
7. Ejecutar el método `presentarse` en las dos personas.
8. Cambiar la edad de una persona.
9. Ejecutar nuevamente `presentarse`.
10. Mostrar en consola las dos personas completas.

## Arrays de objetos básicos

1. Crear un array llamado `personas` con tres objetos literales.
2. Cada persona debe tener `nombre`, `edad` y `email`.
3. Mostrar en consola el array completo.
4. Mostrar en consola la primera persona del array.
5. Mostrar en consola el nombre de la segunda persona.
6. Agregar una cuarta persona usando `push`.
7. Mostrar en consola el largo del array.
8. Cambiar el email de la tercera persona.
9. Eliminar la primera persona usando `shift`.
10. Mostrar en consola el array actualizado.

## Carrito con más operaciones

1. Crear un carrito vacío.
2. Crear tres productos con `nombre`, `precio` y `cantidad`.
3. Agregar los productos al carrito.
4. Mostrar en consola cuántos productos hay en el carrito.
5. Cambiar la cantidad del segundo producto.
6. Eliminar el último producto usando `pop`.
7. Agregar un producto nuevo usando `push`.
8. Mostrar en consola el nombre de cada producto usando un `for`.
9. Guardar el carrito en `localStorage`.
10. Leer el carrito desde `localStorage` y mostrarlo en consola.

## JSON práctica extra

1. Crear un objeto llamado `usuario` con `nombre`, `email` y `edad`.
2. Convertir el usuario a texto usando `JSON.stringify`.
3. Guardar el texto en una variable llamada `usuarioTexto`.
4. Mostrar en consola `usuarioTexto`.
5. Convertir `usuarioTexto` nuevamente a objeto usando `JSON.parse`.
6. Guardar el resultado en una variable llamada `usuarioObjeto`.
7. Mostrar en consola `usuarioObjeto`.
8. Cambiar la edad de `usuarioObjeto`.
9. Guardar `usuarioObjeto` en `localStorage`.
10. Eliminar ese dato de `localStorage` usando `removeItem`.

## SessionStorage

1. Crear un objeto llamado `preferencias` con `tema`, `idioma` y `notificaciones`.
2. Convertir el objeto a texto usando `JSON.stringify`.
3. Guardar el objeto convertido en `sessionStorage`.
4. Leer el dato desde `sessionStorage`.
5. Mostrar en consola el dato leído.
6. Convertir el dato leído a objeto usando `JSON.parse`.
7. Mostrar en consola el tema guardado.
8. Cambiar el idioma del objeto parseado.
9. Guardar nuevamente el objeto actualizado en `sessionStorage`.
10. Borrar el dato usando `removeItem`.

## Funciones para guardar datos

1. Crear una función llamada `guardarEnLocalStorage` que reciba `clave` y `valor`.
2. Dentro de la función, guardar el valor en `localStorage` usando `setItem`.
3. Ejecutar la función guardando un mensaje simple.
4. Crear un objeto llamado `mascota`.
5. Convertir la mascota a texto usando `JSON.stringify`.
6. Guardar la mascota usando la función `guardarEnLocalStorage`.
7. Leer la mascota desde `localStorage`.
8. Convertir la mascota leída a objeto usando `JSON.parse`.
9. Mostrar en consola el nombre de la mascota.
10. Borrar la mascota guardada.

## Mini práctica integradora

1. Crear una clase llamada `Tarea` con `titulo`, `descripcion` y `completada`.
2. Crear tres tareas usando `new Tarea(...)`.
3. Guardar las tareas en un array llamado `listaDeTareas`.
4. Mostrar en consola la lista completa.
5. Cambiar la propiedad `completada` de la primera tarea a `true`.
6. Mostrar en consola solamente las tareas pendientes.
7. Convertir `listaDeTareas` a texto usando `JSON.stringify`.
8. Guardar la lista en `localStorage`.
9. Leer la lista desde `localStorage`.
10. Convertir la lista leída a array usando `JSON.parse`.

---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)
