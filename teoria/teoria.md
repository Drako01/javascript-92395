# Algo de teoría para complementar

## Funciones de orden superior

Una función de orden superior es una función que cumple al menos una de estas condiciones:

- Recibe otra función como argumento.
- Devuelve otra función como resultado.

Este concepto aparece todo el tiempo cuando trabajamos con arrays, porque métodos como `forEach`, `filter`,
`map`, `reduce`, `find`, `some` y `sort` reciben funciones como parámetro.

## Funciones callback

Una callback es una función que se pasa como argumento a otra función para que esa otra función la ejecute
cuando corresponda.

```js
const saludar = (nombre) => {
    console.log(`Hola ${nombre}`);
};

const ejecutar = (callback) => {
    callback("Coder");
};

ejecutar(saludar);
```

En este ejemplo, `saludar` es la callback y `ejecutar` es una función de orden superior.

## Funciones como argumentos

Podemos crear una función general y pasarle distintas operaciones.

```js
const operarNumeros = (a, b, operacion) => operacion(a, b);

const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
const multiplicacion = (x, y) => x * y;
const division = (x, y) => {
    if (y === 0) {
        return "Error, no se puede dividir por cero";
    }

    return x / y;
};

console.log(operarNumeros(5, 10, suma));
console.log(operarNumeros(125, 150, resta));
console.log(operarNumeros(53, 104, multiplicacion));
console.log(operarNumeros(54, 110, division));
console.log(operarNumeros(54, 0, division));
```

La función `operarNumeros` no necesita saber cómo sumar, restar, multiplicar o dividir. Solo recibe la
operación y la ejecuta.

## Funciones que devuelven funciones

Una función también puede crear y devolver otra función.

```js
const crearMultiplicador = (factor) => {
    return (numero) => numero * factor;
};

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(5));
console.log(triplicar(5));
```

`crearMultiplicador` devuelve una función nueva que recuerda el valor de `factor`.

## Arrays

Un array es una lista ordenada de valores. Puede guardar números, strings, booleanos, objetos u otros arrays.

```js
const numeros = [1, 2, 3];
const palabras = ["Hola", "Mundo"];
const booleanos = [true, false, true];
```

Los elementos se acceden por índice. El primer elemento está en la posición `0`.

```js
const cursos = ["JavaScript", "React", "Backend"];

console.log(cursos[0]);
console.log(cursos[1]);
console.log(cursos.length);
```

Aunque un array esté guardado en una constante, sus elementos internos pueden modificarse.

```js
const numeros = [1, 2, 3];

numeros.push(4);

console.log(numeros);
```

Lo que no se puede hacer es reasignar la constante completa.

```js
const numeros = [1, 2, 3];

// Esto daría error:
// numeros = [4, 5, 6];
```

## Arrays de objetos

En JavaScript es muy común trabajar con arrays de objetos. Cada objeto representa una entidad y el array
representa una colección.

```js
const productos = [
    { id: 1, nombre: "Azucar", precio: 1800, disponible: true },
    { id: 2, nombre: "Yerba", precio: 2560, disponible: false },
    { id: 3, nombre: "Coca Cola", precio: 3600, disponible: true },
    { id: 4, nombre: "Pepsi", precio: 3200, disponible: false },
    { id: 5, nombre: "Chocolate", precio: 18000, disponible: true },
];
```

Este tipo de estructura permite filtrar, buscar, transformar y ordenar información de forma clara.

## Métodos de array

Los métodos de array permiten recorrer o procesar arrays sin escribir un `for` manual en cada caso.

La mayoría recibe una callback con esta forma:

```js
array.metodo((elemento, indice, arrayCompleto) => {
    // Codigo a ejecutar
});
```

No siempre usamos los tres parámetros. Muchas veces alcanza con usar solo `elemento`.

## `forEach`

`forEach` ejecuta una función por cada elemento del array. No crea un nuevo array y no está pensado para
devolver un resultado.

Sirve para acciones como:

- Mostrar datos por consola.
- Modificar una estructura externa.
- Ejecutar una acción por cada elemento.

```js
const numeros = [1, 2, 3, -52, 99];

numeros.forEach((num) => {
    console.log(`Imprimiendo el numero: ${num}`);
});
```

También podemos usar el índice.

```js
const numeros = [1, 2, 3];

numeros.forEach((num, index) => {
    console.log(`Numero: ${num}, indice: ${index}`);
});
```

`forEach` puede recibir el array completo como tercer parámetro.

```js
const numeros = [1, 2, 3];

numeros.forEach((num, index, array) => {
    array[index] = num * 3;
});

console.log(numeros);
```

Aunque esto funciona, cuando queremos transformar todos los elementos suele ser más claro usar `map`.

## Crear objetos con `forEach`

Podemos recorrer un array y guardar información en un objeto.

```js
const palabras = ["Hola", "Mundo", "Coder"];
const inventario = {};

palabras.forEach((palabra, indice) => {
    inventario[indice] = palabra;
});

console.log(inventario);
```

Resultado:

```js
{
    0: "Hola",
    1: "Mundo",
    2: "Coder",
}
```

## `filter`

`filter` crea un nuevo array con los elementos que cumplen una condición.

La callback debe devolver:

- `true` si el elemento debe quedar en el nuevo array.
- `false` si el elemento debe quedar afuera.

```js
const numeros = [1, 2, 3, -52, 99, 234, -234, 2643];

const mayoresACien = numeros.filter((num) => num > 100);

console.log(mayoresACien);
```

Ejemplo con objetos:

```js
const cursos = [
    { nombre: "JavaScript", precio: 180000 },
    { nombre: "React", precio: 160000 },
    { nombre: "Angular", precio: 190000 },
    { nombre: "SQL", precio: 110000 },
    { nombre: "Backend", precio: 360000 },
];

const cursosEconomicos = cursos.filter((curso) => curso.precio <= 180000);
const cursosCaros = cursos.filter((curso) => curso.precio > 180000);

console.log(cursosEconomicos);
console.log(cursosCaros);
```

`filter` no modifica el array original.

## `map`

`map` crea un nuevo array transformando cada elemento del array original.

Se usa cuando queremos obtener otro array con la misma cantidad de elementos, pero con otra forma o valor.

```js
const numeros = [1, 2, 53, -900, 5, 2];

const dobles = numeros.map((num) => num * 2);

console.log(dobles);
```

Ejemplo con strings:

```js
const frutas = ["Banana", "Pera", "Manzana", "Limon"];

const frutasConMayusculas = frutas.map((fruta) => fruta.toUpperCase());

console.log(frutasConMayusculas);
```

Ejemplo con objetos:

```js
const cursos = [
    { nombre: "JavaScript", precio: 180000 },
    { nombre: "React", precio: 160000 },
    { nombre: "Angular", precio: 190000 },
    { nombre: "SQL", precio: 110000 },
    { nombre: "Backend", precio: 360000 },
];

const nombresDeCursos = cursos.map((curso) => curso.nombre);
const preciosDeCursos = cursos.map((curso) => curso.precio);

console.log(nombresDeCursos);
console.log(preciosDeCursos);
```

## `map` con condiciones

Dentro de `map` podemos usar `if` o un operador ternario para devolver distintos valores.

```js
const booleanos = [true, false, false, true, true];

const booleanosToText = booleanos.map((valor) => {
    if (valor) {
        return "Verdadero";
    }

    return "Falso";
});

console.log(booleanosToText);
```

La misma idea usando operador ternario:

```js
const booleanos = [true, false, false, true, true];

const booleanosToText = booleanos.map((valor) => (valor ? "Verdadero" : "Falso"));

console.log(booleanosToText);
```

Ejemplo con productos:

```js
const productos = [
    { id: 1, nombre: "Azucar", precio: 1800, disponible: true },
    { id: 2, nombre: "Yerba", precio: 2560, disponible: false },
    { id: 3, nombre: "Coca Cola", precio: 3600, disponible: true },
    { id: 4, nombre: "Pepsi", precio: 3200, disponible: false },
    { id: 5, nombre: "Chocolate", precio: 18000, disponible: true },
];

const stock = productos.map((producto) => {
    const disponibilidad = producto.disponible ? "Tiene stock" : "No tiene stock";

    return `El producto ${producto.nombre} ${disponibilidad} - Precio: $${producto.precio}`;
});

console.log(stock);
```

## `reduce`

`reduce` reduce un array a un único resultado.

Ese resultado puede ser:

- Un número.
- Un string.
- Un objeto.
- Un array.
- Cualquier otro valor que necesitemos construir.

La estructura general es:

```js
const resultado = array.reduce((acumulador, elementoActual) => {
    return nuevoAcumulador;
}, valorInicial);
```

El acumulador guarda el resultado parcial. El valor inicial define cómo empieza ese acumulador.

## `reduce` para sumar números

```js
const numeros = [1, 2, 3, -52, 990, 234, 5];

const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(suma);
```

Paso a paso:

| Vuelta | Acumulador | Número actual | Resultado |
| ------ | ---------- | ------------- | --------- |
| 1      | 0          | 1             | 1         |
| 2      | 1          | 2             | 3         |
| 3      | 3          | 3             | 6         |
| 4      | 6          | -52           | -46       |

## `reduce` para crear objetos

También podemos usar `reduce` para transformar un array en un objeto.

```js
const cursos = [
    { nombre: "JavaScript", precio: 180000 },
    { nombre: "React", precio: 160000 },
    { nombre: "Angular", precio: 190000 },
    { nombre: "SQL", precio: 110000 },
    { nombre: "Backend", precio: 360000 },
];

const cursosObjeto = cursos.reduce((acc, curso) => {
    acc[curso.nombre] = curso.precio;

    return acc;
}, {});

console.log(cursosObjeto);
```

Resultado:

```js
{
    JavaScript: 180000,
    React: 160000,
    Angular: 190000,
    SQL: 110000,
    Backend: 360000,
}
```

## `reduce` para contar repeticiones

```js
const frutas = [
    "Banana",
    "Banana",
    "Banana",
    "Pera",
    "Manzana",
    "Limon",
    "Pera",
    "Manzana",
    "Limon",
    "Pera",
];

const frutasObjeto = frutas.reduce((acc, fruta) => {
    acc[fruta] = (acc[fruta] || 0) + 1;

    return acc;
}, {});

console.log(frutasObjeto);
```

La expresión `(acc[fruta] || 0) + 1` significa:

- Si la fruta ya existe en el objeto, toma su valor actual y suma `1`.
- Si todavía no existe, usa `0` y suma `1`.

## `find`

`find` devuelve el primer elemento que cumple una condición.

Si no encuentra ninguno, devuelve `undefined`.

```js
const productos = [
    { id: 1, nombre: "Azucar", precio: 1800, disponible: true },
    { id: 2, nombre: "Yerba", precio: 2560, disponible: false },
    { id: 3, nombre: "Coca Cola", precio: 3600, disponible: true },
    { id: 4, nombre: "Pepsi", precio: 3200, disponible: false },
    { id: 5, nombre: "Chocolate", precio: 18000, disponible: true },
];

const productoBuscado = productos.find((prod) => prod.id === 3);

console.log(productoBuscado);
```

Buscar por nombre:

```js
const productoBuscadoPorNombre = productos.find((prod) => prod.nombre.toLowerCase() === "pepsi");

console.log(productoBuscadoPorNombre);
```

Buscar el primer producto disponible:

```js
const productoDisponible = productos.find((prod) => prod.disponible === true);

console.log(productoDisponible);
```

También se puede escribir de forma más corta:

```js
const productoDisponible = productos.find((prod) => prod.disponible);

console.log(productoDisponible);
```

## `some`

`some` verifica si al menos un elemento cumple una condición.

Devuelve un booleano:

- `true` si encuentra al menos un elemento que cumple.
- `false` si no encuentra ninguno.

```js
const productos = [
    { id: 1, nombre: "Azucar", precio: 1800, disponible: true },
    { id: 2, nombre: "Yerba", precio: 2560, disponible: false },
    { id: 3, nombre: "Coca Cola", precio: 3600, disponible: true },
    { id: 4, nombre: "Pepsi", precio: 3200, disponible: false },
    { id: 5, nombre: "Chocolate", precio: 18000, disponible: true },
];

const existePepsi = productos.some((prod) => prod.nombre.toLowerCase() === "pepsi");

console.log(existePepsi);
```

Verificar disponibilidad:

```js
const hayDisponibilidad = productos.some((prod) => prod.disponible);

console.log(hayDisponibilidad);
```

`some` es útil cuando solo nos importa saber si existe al menos una coincidencia, no cuál es.

## Diferencia entre `find` y `some`

Aunque se parecen, no devuelven lo mismo.

| Método | Qué devuelve | Cuándo usarlo |
| ------ | ------------ | ------------- |
| `find` | El primer elemento encontrado o `undefined` | Cuando necesitás el dato completo |
| `some` | `true` o `false` | Cuando solo necesitás saber si existe |

Ejemplo:

```js
const producto = productos.find((prod) => prod.nombre === "Pepsi");
const existeProducto = productos.some((prod) => prod.nombre === "Pepsi");

console.log(producto);
console.log(existeProducto);
```

## `sort`

`sort` ordena los elementos de un array.

Importante: `sort` modifica el array original.

```js
const frutas = ["Banana", "Pera", "Manzana", "Limon"];

frutas.sort();

console.log(frutas);
```

Con strings, el orden por defecto suele ser suficiente para ordenar alfabéticamente.

## `sort` con números

Por defecto, `sort` convierte los valores a texto antes de compararlos. Por eso puede dar resultados
inesperados con números.

```js
const numeros = [40, 1, 5, 200];

numeros.sort();

console.log(numeros);
```

Resultado:

```js
[1, 200, 40, 5]
```

Para ordenar números correctamente, usamos una función de comparación.

```js
const numeros = [40, 1, 5, 200];

numeros.sort((a, b) => a - b);

console.log(numeros);
```

`(a, b) => a - b` ordena de menor a mayor.

```js
const numeros = [40, 1, 5, 200];

numeros.sort((a, b) => b - a);

console.log(numeros);
```

`(a, b) => b - a` ordena de mayor a menor.

## Cómo funciona la comparación de `sort`

La función de comparación recibe dos valores: `a` y `b`.

- Si retorna un número negativo, `a` queda antes que `b`.
- Si retorna `0`, el orden entre `a` y `b` no cambia.
- Si retorna un número positivo, `b` queda antes que `a`.

Ejemplo:

```js
const ordenAscendente = (a, b) => a - b;

console.log(ordenAscendente(40, 1));
```

Como `40 - 1` da `39`, el resultado es positivo. Entonces `1` queda antes que `40`.

## `sort` con objetos

Para ordenar objetos, comparamos una propiedad.

```js
const cursos = [
    { nombre: "JavaScript", precio: 180000 },
    { nombre: "React", precio: 160000 },
    { nombre: "Angular", precio: 190000 },
    { nombre: "SQL", precio: 110000 },
    { nombre: "Backend", precio: 360000 },
];

cursos.sort((a, b) => a.precio - b.precio);

console.log(cursos);
```

Ordenar por nombre:

```js
const productos = [
    { id: 1, nombre: "Azucar", precio: 1800, disponible: true },
    { id: 2, nombre: "Yerba", precio: 2560, disponible: false },
    { id: 3, nombre: "Coca Cola", precio: 3600, disponible: true },
];

productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log(productos);
```

`localeCompare` compara textos y sirve para ordenar strings de forma más clara.

## Ordenar sin modificar el original

Como `sort` modifica el array original, podemos crear una copia antes de ordenar.

```js
const numeros = [40, 1, 5, 200];

const numerosOrdenados = [...numeros].sort((a, b) => a - b);

console.log(numeros);
console.log(numerosOrdenados);
```

El operador spread `...` copia los elementos del array dentro de un array nuevo.

## Encadenar métodos

Los métodos que devuelven arrays, como `filter` y `map`, se pueden encadenar.

```js
const productos = [
    { id: 1, nombre: "Azucar", precio: 1800, disponible: true },
    { id: 2, nombre: "Yerba", precio: 2560, disponible: false },
    { id: 3, nombre: "Coca Cola", precio: 3600, disponible: true },
    { id: 4, nombre: "Pepsi", precio: 3200, disponible: false },
    { id: 5, nombre: "Chocolate", precio: 18000, disponible: true },
];

const nombresDisponibles = productos
    .filter((producto) => producto.disponible)
    .map((producto) => producto.nombre);

console.log(nombresDisponibles);
```

Este código primero filtra los productos disponibles y después obtiene sus nombres.

## Cuándo usar cada método

| Método | Devuelve | Uso principal | Modifica el original |
| ------ | -------- | ------------- | -------------------- |
| `forEach` | `undefined` | Ejecutar una acción por cada elemento | No directamente |
| `filter` | Un nuevo array | Quedarse con algunos elementos | No |
| `map` | Un nuevo array | Transformar cada elemento | No |
| `reduce` | Un valor acumulado | Calcular o construir un resultado final | No |
| `find` | Un elemento o `undefined` | Buscar el primer elemento que cumple | No |
| `some` | Un booleano | Saber si existe al menos una coincidencia | No |
| `sort` | El mismo array ordenado | Ordenar elementos | Sí |

## Reglas prácticas

- Usá `forEach` cuando querés hacer algo por cada elemento y no necesitás crear un resultado nuevo.
- Usá `filter` cuando querés obtener una parte del array.
- Usá `map` cuando querés transformar todos los elementos.
- Usá `reduce` cuando querés calcular un único resultado o construir un objeto.
- Usá `find` cuando querés obtener el primer elemento que cumple una condición.
- Usá `some` cuando solo querés saber si algo existe.
- Usá `sort` cuando querés ordenar, recordando que modifica el array original.

## Ejemplo integrador

```js
const productos = [
    { id: 1, nombre: "Azucar", precio: 1800, disponible: true },
    { id: 2, nombre: "Yerba", precio: 2560, disponible: false },
    { id: 3, nombre: "Coca Cola", precio: 3600, disponible: true },
    { id: 4, nombre: "Pepsi", precio: 3200, disponible: false },
    { id: 5, nombre: "Chocolate", precio: 18000, disponible: true },
];

const productosDisponibles = productos.filter((producto) => producto.disponible);
const nombres = productos.map((producto) => producto.nombre);
const total = productos.reduce((acc, producto) => acc + producto.precio, 0);
const pepsi = productos.find((producto) => producto.nombre.toLowerCase() === "pepsi");
const hayChocolate = productos.some((producto) => producto.nombre.toLowerCase() === "chocolate");
const ordenadosPorPrecio = [...productos].sort((a, b) => a.precio - b.precio);

console.log(productosDisponibles);
console.log(nombres);
console.log(total);
console.log(pepsi);
console.log(hayChocolate);
console.log(ordenadosPorPrecio);
```

## Autor

[Alejandro Di Stefano](https://github.com/Drako01)
