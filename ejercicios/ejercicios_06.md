# Ejercicios usando funciones de orden superior

Resolver los ejercicios usando funciones flecha y métodos de array cuando corresponda.

## Funciones como parámetros

1. Crear una función `operarNumeros(a, b, operacion)` que reciba dos números y una función. Luego crear
   las funciones `suma`, `resta`, `multiplicacion` y `division`, y probarlas usando `operarNumeros`.

2. Modificar la función `division` para que devuelva el texto `"Error, no se puede dividir por cero"` cuando
   el segundo número sea `0`.

3. Crear una función `mostrarResultado(valor, callback)` que reciba un valor y una función. La función debe
   ejecutar el callback pasándole ese valor.

4. Crear una función `aplicarDescuento(precio, descuento)` que reciba un precio y una función que calcule el
   descuento. Probarla con una función que aplique un 10% de descuento.

## `forEach`

1. Usar `forEach` para imprimir cada elemento de un array de números.

2. Usar `forEach` para imprimir cada número junto con su índice.

3. Usar `forEach` para imprimir todos los días de la semana.

4. Usar `forEach` para imprimir la tabla de multiplicar del número `5`.

5. Dado el array `["Hola", "Mundo", "Coder"]`, crear un objeto vacío llamado `inventario` y guardar cada
   palabra usando su índice como clave.

6. Dado un array de números, usar `forEach` para contar cuántos números son mayores a `100`.

## `filter`

1. Dado un array de números, obtener un nuevo array con los números mayores a `100`.

2. Dado un array de números, obtener un nuevo array con los números pares.

3. Dado un array de números positivos y negativos, obtener un nuevo array que tenga solamente los números
   negativos.

4. Dado el siguiente array, obtener los cursos que cuestan `180000` o menos:

   ```js
   const cursos = [
       { nombre: "JavaScript", precio: 180000 },
       { nombre: "React", precio: 160000 },
       { nombre: "Angular", precio: 190000 },
       { nombre: "SQL", precio: 110000 },
       { nombre: "Backend", precio: 360000 },
   ];
   ```

5. Con el mismo array de cursos, obtener los cursos que cuestan más de `180000`.

6. Dado un array de productos con `nombre`, `precio` y `disponible`, obtener solo los productos disponibles.

## `map`

1. Usar `map` para duplicar cada número de un array.

2. Usar `map` para convertir un array de frutas a mayúsculas.

3. Dado un array de cursos, crear un nuevo array que tenga solamente los nombres de los cursos.

4. Dado un array de cursos, crear un nuevo array que tenga solamente los precios.

5. Dado el array `[true, false, false, true]`, crear un nuevo array que diga `"Verdadero"` o `"Falso"` según
   cada valor.

6. Dado un array de productos con `nombre`, `precio` y `disponible`, crear un nuevo array de textos con el
   formato: `"El producto Yerba tiene stock - Precio: $2560"`.

7. Dado un array de precios, crear un nuevo array con un aumento del 20%.

## `reduce`

1. Usar `reduce` para obtener la suma total de un array de números.

2. Usar `reduce` para obtener el producto total de un array de números.

3. Dado un array de precios, usar `reduce` para calcular el total de la compra.

4. Dado un array de cursos, crear un objeto donde cada clave sea el nombre del curso y cada valor sea su precio.

5. Dado el siguiente array de frutas, crear un objeto que cuente cuántas veces aparece cada fruta:

   ```js
   const frutas = [
       "Banana",
       "Banana",
       "Pera",
       "Manzana",
       "Limon",
       "Pera",
       "Manzana",
       "Pera",
   ];
   ```

6. Dado un array de productos, calcular la suma de los precios de todos los productos disponibles.

## `find`

1. Dado un array de números, encontrar el primer número mayor a `50`.

2. Dado un array de productos, encontrar el producto con `id` igual a `3`.

3. Dado un array de productos, encontrar el producto cuyo nombre sea `"Pepsi"`. La búsqueda debe funcionar
   aunque el texto esté escrito en mayúsculas o minúsculas.

4. Dado un array de productos, encontrar el primer producto disponible.

5. Dado un array de cursos, encontrar el curso llamado `"React"`.

## `some`

1. Dado un array de palabras, verificar si al menos una palabra tiene más de `10` caracteres.

2. Dado un array de productos, verificar si existe un producto llamado `"Pepsi"`.

3. Dado un array de productos, verificar si hay al menos un producto disponible.

4. Dado un array de cursos, verificar si existe algún curso con precio mayor a `300000`.

5. Dado un array de números, verificar si existe al menos un número negativo.

## `sort`

1. Ordenar un array de palabras alfabéticamente.

2. Ordenar un array de números de menor a mayor.

3. Ordenar un array de números de mayor a menor.

4. Ordenar un array de cursos por precio de menor a mayor.

5. Ordenar un array de productos por nombre alfabéticamente.

6. Crear una copia de un array de números y ordenar la copia de menor a mayor, sin modificar el array original.

## Integradores

1. Crear un array de productos con las propiedades `id`, `nombre`, `precio` y `disponible`. Luego resolver:

   - Obtener solo los productos disponibles.
   - Crear un array con los nombres de todos los productos.
   - Calcular el total de precios de todos los productos.
   - Encontrar el producto con `id` igual a `4`.
   - Verificar si existe algún producto llamado `"Chocolate"`.
   - Ordenar los productos por precio de menor a mayor.

2. Crear un array de cursos con `nombre` y `precio`. Luego resolver:

   - Obtener los cursos económicos, con precio menor o igual a `180000`.
   - Obtener un array con los nombres de los cursos.
   - Calcular el total de precios de todos los cursos.
   - Crear un objeto donde cada curso sea una clave y su precio sea el valor.
   - Encontrar el curso `"JavaScript"`.

3. Expresar el siguiente script en una sola línea de código usando `reduce`:

   ```js
   let total = 0;

   for (let i = 1; i <= 10; i++) {
       total += i;
   }

   console.log(total);
   ```

## Práctica extra

Estos ejercicios son para seguir practicando con el mismo nivel de dificultad de la clase.

### Más práctica con funciones como parámetros

1. Crear una función `ejecutarOperacion(numero1, numero2, callback)` y usarla para sumar dos números.

2. Usar la misma función `ejecutarOperacion` para multiplicar dos números.

3. Crear una función `mostrarMensaje(mensaje, callback)` que reciba un texto y una función. El callback debe
   mostrar el mensaje en consola.

4. Crear una función `procesarPrecio(precio, callback)` y pasarle una función que devuelva el precio con IVA.

5. Crear una función `procesarNombre(nombre, callback)` y pasarle una función que convierta el nombre a
   mayúsculas.

### Más práctica con arrays simples

1. Crear un array con cinco números y mostrar su largo usando `.length`.

2. Crear un array de palabras, agregar dos palabras nuevas con `push` y mostrar el array completo.

3. Crear un array de nombres y mostrar el primer nombre.

4. Crear un array de cursos y mostrar el último curso usando el índice correspondiente.

5. Crear un array de números y cambiar el primer valor por otro número.

6. Crear un array de frutas y ordenarlo alfabéticamente usando `sort`.

### Más práctica con `forEach`

1. Dado un array de nombres, imprimir un saludo para cada nombre.

2. Dado un array de precios, imprimir cada precio con el texto `"Precio: $"`.

3. Dado un array de cursos, imprimir cada curso junto con su posición.

4. Dado un array de números, imprimir solamente el doble de cada número.

5. Dado un array de productos, imprimir el nombre de cada producto.

6. Dado un array de productos, imprimir un mensaje distinto si el producto está disponible o no.

7. Dado un array de booleanos, imprimir `"Si"` cuando el valor sea `true` y `"No"` cuando sea `false`.

8. Dado un array de números, usar `forEach` para sumar todos los valores en una variable externa.

9. Dado un array de palabras, crear un objeto donde cada clave sea la palabra y cada valor sea su largo.

10. Dado un array de productos, contar cuántos productos tienen precio mayor a `3000`.

### Más práctica con `filter`

1. Dado un array de números, obtener solamente los números menores a `0`.

2. Dado un array de números, obtener solamente los números iguales a `100`.

3. Dado un array de palabras, obtener solamente las palabras que tengan más de `5` letras.

4. Dado un array de palabras, obtener solamente las palabras que empiecen con la letra `"M"`.

5. Dado un array de cursos, obtener solamente los cursos que no sean `"JavaScript"`.

6. Dado un array de productos, obtener solamente los productos con precio menor a `5000`.

7. Dado un array de productos, obtener solamente los productos que no estén disponibles.

8. Dado un array de productos, obtener solamente los productos cuyo nombre tenga más de `5` caracteres.

9. Dado un array de cursos, obtener solamente los cursos cuyo precio esté entre `150000` y `200000`.

10. Dado un array de números, obtener solamente los números distintos de `0`.

### Más práctica con `map`

1. Dado un array de números, crear un nuevo array con cada número multiplicado por `3`.

2. Dado un array de números, crear un nuevo array con cada número convertido a texto.

3. Dado un array de palabras, crear un nuevo array con el texto `"Curso: "` delante de cada palabra.

4. Dado un array de nombres, crear un nuevo array con todos los nombres en minúsculas.

5. Dado un array de precios, crear un nuevo array con todos los precios con un descuento del 10%.

6. Dado un array de productos, crear un nuevo array con solamente los nombres en mayúsculas.

7. Dado un array de productos, crear un nuevo array de objetos con `nombre` y `precioFinal`.

8. Dado un array de cursos, crear un nuevo array de textos con el formato `"JavaScript cuesta $180000"`.

9. Dado un array de booleanos, crear un nuevo array con `"Disponible"` o `"No disponible"`.

10. Dado un array de números, crear un nuevo array con objetos que tengan la propiedad `valor`.

### Más práctica con `reduce`

1. Dado un array de números, obtener la suma total empezando desde `0`.

2. Dado un array de números, obtener la suma total empezando desde `100`.

3. Dado un array de precios, obtener el total y guardarlo en una variable llamada `total`.

4. Dado un array de productos, calcular el total de todos los precios.

5. Dado un array de productos, calcular el total de precios solo de los productos disponibles.

6. Dado un array de cursos, crear un objeto donde la clave sea el nombre y el valor sea el objeto completo.

7. Dado un array de palabras, crear un objeto que guarde cuántas letras tiene cada palabra.

8. Dado un array de números, contar cuántos números son positivos usando `reduce`.

9. Dado un array de productos, crear un array nuevo con los nombres usando `reduce`.

10. Dado un array de cursos, sumar todos los precios y calcular el promedio.

### Más práctica con `find`

1. Dado un array de números, encontrar el primer número negativo.

2. Dado un array de números, encontrar el primer número igual a `100`.

3. Dado un array de palabras, encontrar la primera palabra que tenga más de `7` letras.

4. Dado un array de productos, encontrar el producto llamado `"Yerba"`.

5. Dado un array de productos, encontrar el producto con precio mayor a `10000`.

6. Dado un array de productos, encontrar el primer producto que no esté disponible.

7. Dado un array de cursos, encontrar el primer curso que cueste menos de `150000`.

8. Dado un array de cursos, encontrar el curso con precio igual a `360000`.

9. Dado un array de productos, encontrar el producto cuyo nombre sea `"coca cola"` usando `toLowerCase`.

10. Dado un array de booleanos, encontrar el primer valor `false`.

### Más práctica con `some`

1. Dado un array de números, verificar si existe algún número mayor a `1000`.

2. Dado un array de números, verificar si existe algún número igual a `0`.

3. Dado un array de palabras, verificar si existe alguna palabra que empiece con `"C"`.

4. Dado un array de palabras, verificar si existe alguna palabra con menos de `4` letras.

5. Dado un array de productos, verificar si existe algún producto con precio mayor a `10000`.

6. Dado un array de productos, verificar si existe algún producto sin stock.

7. Dado un array de cursos, verificar si existe un curso llamado `"Backend"`.

8. Dado un array de cursos, verificar si existe algún curso con precio menor a `100000`.

9. Dado un array de booleanos, verificar si existe al menos un valor `true`.

10. Dado un array de booleanos, verificar si existe al menos un valor `false`.

### Más práctica con `sort`

1. Ordenar un array de números de menor a mayor y mostrarlo por consola.

2. Ordenar un array de números de mayor a menor y mostrarlo por consola.

3. Ordenar un array de palabras alfabéticamente.

4. Ordenar un array de palabras alfabéticamente sin modificar el array original.

5. Ordenar un array de productos por precio de mayor a menor.

6. Ordenar un array de productos por `id` de menor a mayor.

7. Ordenar un array de cursos por precio de mayor a menor.

8. Ordenar un array de cursos por nombre usando `localeCompare`.

9. Crear una copia de un array de productos y ordenar la copia por nombre.

10. Crear una copia de un array de números y ordenar la copia de mayor a menor.

### Integradores extra

1. Crear un array de productos y resolver:

   - Mostrar el nombre de cada producto con `forEach`.
   - Obtener los productos disponibles con `filter`.
   - Crear un array de nombres con `map`.
   - Calcular el total de precios con `reduce`.
   - Buscar el producto `"Pepsi"` con `find`.
   - Verificar si existe algún producto caro con `some`.
   - Ordenar una copia por precio con `sort`.

2. Crear un array de cursos y resolver:

   - Mostrar cada curso con su precio.
   - Obtener los cursos que cuestan menos de `200000`.
   - Crear un array con los nombres de los cursos.
   - Calcular el promedio de precios.
   - Buscar el curso `"SQL"`.
   - Verificar si existe algún curso de más de `300000`.
   - Ordenar una copia por nombre.

3. Crear un array de frutas repetidas y resolver:

   - Mostrar cada fruta.
   - Obtener las frutas que tengan más de `5` letras.
   - Crear un array con todas las frutas en mayúsculas.
   - Contar cuántas veces aparece cada fruta usando `reduce`.
   - Buscar la primera fruta que empiece con `"P"`.
   - Verificar si existe la fruta `"Kiwi"`.
   - Ordenar una copia alfabéticamente.

## Autor

[Alejandro Di Stefano](https://github.com/Drako01)
