# Teoría de la clase: objetos, clases y almacenamiento

En esta clase vimos cómo representar información usando **objetos**, cómo crear muchos objetos parecidos
usando **funciones constructoras** o **clases**, y cómo guardar datos en el navegador usando
`localStorage`, `sessionStorage` y `JSON`.

La idea principal es esta: cuando necesitamos guardar varios datos que pertenecen a una misma cosa,
podemos usar un objeto.

Por ejemplo, una persona tiene nombre, apellido, edad y email. En lugar de tener variables sueltas,
podemos guardar todo junto.

```js
const persona = {
    id: 1,
    nombre: "Alejandro",
    apellido: "Errecart",
    edad: 30,
    email: "alejandro@mail.com"
};
```

## Objetos

Un **objeto** es una estructura que nos permite guardar datos relacionados entre sí.

Cada dato dentro de un objeto se guarda con este formato:

```js
propiedad: valor
```

Ejemplo:

```js
const mascota = {
    tipo: "Gato",
    nombre: "Mishi",
    edad: 4,
    color: "Blanco"
};
```

En este caso:

- `tipo` es una propiedad.
- `"Gato"` es el valor de esa propiedad.
- `nombre`, `edad` y `color` también son propiedades.

## Por qué usamos objetos

Si no usamos objetos, podríamos tener muchas variables sueltas:

```js
const nombre = "Mishi";
const edad = 4;
const color = "Blanco";
```

Esto funciona, pero cuando el programa crece se vuelve difícil saber qué datos pertenecen a qué cosa.

Con un objeto queda más ordenado:

```js
const gato = {
    nombre: "Mishi",
    edad: 4,
    color: "Blanco"
};
```

Ahora sabemos que esos datos pertenecen al mismo gato.

## Acceder a propiedades

Para leer una propiedad de un objeto podemos usar la **notación con punto**.

```js
console.log(gato.nombre);
console.log(gato.edad);
```

También podemos usar la **notación con corchetes**.

```js
console.log(gato["nombre"]);
console.log(gato["edad"]);
```

Las dos formas sirven. La más común es usar punto.

La notación con corchetes es útil cuando el nombre de la propiedad viene guardado en una variable.

```js
const propiedad = "color";

console.log(gato[propiedad]);
```

Eso es lo mismo que hacer:

```js
console.log(gato.color);
```

## Modificar propiedades

Podemos cambiar el valor de una propiedad asignándole un valor nuevo.

```js
gato.edad = 5;
gato.color = "Gris";

console.log(gato);
```

También podemos modificar con corchetes.

```js
gato["nombre"] = "Michifus";
```

Después de eso, el objeto queda actualizado.

## Agregar propiedades

Un objeto puede recibir propiedades nuevas después de haber sido creado.

```js
gato.peso = 3.5;

console.log(gato);
```

Ahora el objeto `gato` también tiene una propiedad `peso`.

## Funciones constructoras

Una **función constructora** sirve para crear objetos con la misma estructura.

Por convención, el nombre de una función constructora empieza con mayúscula.

```js
function Persona(id, nombre, apellido, edad, email) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
}
```

La palabra `this` significa "este objeto que estoy creando".

Luego podemos crear personas usando `new`.

```js
const persona1 = new Persona(1, "Sol", "Orbe", 20, "sol@mail.com");
const persona2 = new Persona(2, "Anthony", "Gomez", 25, "anthony@mail.com");

console.log(persona1);
console.log(persona2);
```

Cada vez que usamos `new Persona(...)`, JavaScript crea un objeto nuevo con las propiedades definidas
dentro de la función constructora.

## Constructoras que reciben un objeto

También podemos hacer que una función constructora reciba un objeto completo.

```js
function Persona(persona) {
    this.id = persona.id;
    this.nombre = persona.nombre;
    this.apellido = persona.apellido;
    this.edad = persona.edad;
    this.email = persona.email;
}
```

Después podemos usarla así:

```js
const personaLiteral = {
    id: 3,
    nombre: "Maria Eugenia",
    apellido: "Ortiz",
    edad: 21,
    email: "maru@mail.com"
};

const personaCreada = new Persona(personaLiteral);

console.log(personaCreada);
```

Esta forma es útil cuando ya tenemos los datos agrupados en un objeto.

## Clases

Una **clase** es una forma más moderna y ordenada de crear objetos.

En clase vimos este ejemplo:

```js
class Mascota {
    constructor(tipo, nombre, edad, raza, color, peso) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.color = color;
        this.peso = peso;
    }
}
```

La clase funciona como un molde. No es una mascota concreta, sino una plantilla para crear mascotas.

Para crear una mascota real usamos `new`.

```js
const gatoConClass = new Mascota("Gato", "Mishi", 4, "Gato", "Blanco", 3.5);
const perroConClass = new Mascota("Perro", "Daisy", 5, "Yorky", "Beige", 3.5);

console.log(gatoConClass);
console.log(perroConClass);
```

## Constructor

El `constructor` es un método especial que se ejecuta automáticamente cuando creamos un objeto con
`new`.

```js
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
```

Cuando hacemos esto:

```js
const producto1 = new Producto("Azucar", 1850, 100);
```

JavaScript toma los valores `"Azucar"`, `1850` y `100`, y los guarda dentro del objeto nuevo.

El objeto queda parecido a esto:

```js
{
    nombre: "Azucar",
    precio: 1850,
    cantidad: 100
}
```

## Métodos

Un **método** es una función que vive dentro de un objeto o dentro de una clase.

Los métodos representan acciones. En el ejemplo de la clase, una mascota puede comer o caminar.

```js
class Mascota {
    constructor(tipo, nombre, edad, raza, color, peso) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.color = color;
        this.peso = peso;
    }

    comer() {
        console.log(`Mi ${this.tipo} ${this.nombre} esta comiendo.`);
    }

    caminar() {
        console.log(`Mi ${this.tipo} ${this.nombre} esta caminando.`);
    }
}
```

Para ejecutar un método, usamos el objeto, un punto y el nombre del método.

```js
const gato = new Mascota("Gato", "Mishi", 4, "Gato", "Blanco", 3.5);

gato.comer();
gato.caminar();
```

En este caso, `this.tipo` vale `"Gato"` y `this.nombre` vale `"Mishi"`.

## Memoria y persistencia

Una variable vive en memoria mientras la página está abierta.

```js
let mensaje = "Hola desde Coder";
```

Si recargamos la página, esa variable se pierde. A eso nos referimos cuando decimos que la información
en variables es **volátil**.

Para guardar información aunque se recargue la página, podemos usar almacenamiento del navegador.

## localStorage

`localStorage` permite guardar información en el navegador.

Esa información queda guardada incluso si recargamos la página o cerramos el navegador.

Para guardar usamos `setItem`.

```js
localStorage.setItem("Mensaje", "Hola desde LocalStorage");
```

El primer valor es la **clave**. La clave es el nombre con el que guardamos el dato.

El segundo valor es el **valor** que queremos guardar.

Para leer usamos `getItem`.

```js
const mensajeGuardado = localStorage.getItem("Mensaje");

console.log(mensajeGuardado);
```

Para borrar un dato puntual usamos `removeItem`.

```js
localStorage.removeItem("Mensaje");
```

Para borrar todo el almacenamiento usamos `clear`.

```js
localStorage.clear();
```

Hay que usar `clear` con cuidado porque borra todo lo guardado en `localStorage` para ese sitio.

## sessionStorage

`sessionStorage` se usa de forma muy parecida a `localStorage`.

La diferencia principal es que `sessionStorage` guarda los datos solamente durante la sesión actual
del navegador.

```js
sessionStorage.setItem("Mensaje", "Hola desde SessionStorage");

const mensaje = sessionStorage.getItem("Mensaje");

console.log(mensaje);
```

Si cerramos la pestaña, esos datos pueden perderse.

## Importante: Storage guarda texto

Tanto `localStorage` como `sessionStorage` guardan datos en formato texto.

Si guardamos un número:

```js
localStorage.setItem("Numero", 5);
```

El navegador lo guarda como texto.

Si guardamos un objeto directamente, no se guarda como esperamos.

```js
const perro = new Mascota("Perro", "Daisy", 5, "Yorky", "Beige", 3.5);

localStorage.setItem("Perro", perro);
```

Eso no guarda bien el objeto. Para guardar objetos correctamente necesitamos usar `JSON.stringify`.

## JSON.stringify

`JSON.stringify` convierte un objeto o array en texto.

```js
const perro = new Mascota("Perro", "Daisy", 5, "Yorky", "Beige", 3.5);

const perroConvertido = JSON.stringify(perro);

console.log(perroConvertido);
console.log(typeof perroConvertido);
```

El resultado es un string. Por eso se puede guardar en `localStorage`.

```js
localStorage.setItem("Perro", JSON.stringify(perro));
```

## JSON.parse

`JSON.parse` hace el camino contrario: convierte texto con formato JSON en un objeto o array de
JavaScript.

```js
const perroDesdeStorage = localStorage.getItem("Perro");
const perroParseado = JSON.parse(perroDesdeStorage);

console.log(perroParseado);
console.log(typeof perroParseado);
```

Después de usar `JSON.parse`, podemos acceder a sus propiedades.

```js
console.log(perroParseado.nombre);
console.log(perroParseado.raza);
```

## Función para guardar en localStorage

Cuando una acción se repite, podemos crear una función.

En clase vimos una función para guardar datos:

```js
const guardarEnLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, valor);
};
```

La usamos así:

```js
guardarEnLocalStorage("Clave", "Valor");
```

Si queremos guardar un objeto, primero lo convertimos a texto.

```js
const gato = new Mascota("Gato", "Mishi", 4, "Gato", "Blanco", 3.5);

guardarEnLocalStorage("Gato", JSON.stringify(gato));
```

## Arrays de objetos

También podemos guardar muchos objetos dentro de un array.

En clase vimos un carrito:

```js
let carrito = [];
```

Después creamos una clase `Producto`.

```js
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
```

Creamos productos:

```js
const producto1 = new Producto("Azucar", 1850, 100);
const producto2 = new Producto("Yerba", 2650, 120);
const producto3 = new Producto("Chocolate", 22500, 60);
```

Y los agregamos al carrito con `push`.

```js
carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);

console.log(carrito);
```

El array `carrito` contiene objetos.

## Eliminar productos por índice

Un índice es la posición de un elemento dentro de un array.

Los arrays empiezan en la posición `0`.

```js
const frutas = ["Manzana", "Pera", "Naranja"];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
```

En clase vimos una función para eliminar productos por índice.

```js
const eliminarProductosPorIndice = (indice) => {
    if (indice >= 0 && indice < carrito.length) {
        const eliminado = carrito.splice(indice, 1);

        guardarEnLocalStorage("carrito", JSON.stringify(carrito));

        console.log(`El Producto ${eliminado[0].nombre} fue eliminado!`);
    } else {
        console.error("Indice fuera de rango");
    }
};
```

Esta función hace varias cosas:

1. Recibe un índice.
2. Revisa si el índice existe dentro del carrito.
3. Si existe, elimina un producto usando `splice`.
4. Guarda el carrito actualizado en `localStorage`.
5. Muestra un mensaje con el producto eliminado.
6. Si el índice no existe, muestra un error.

## Qué hace splice

`splice` permite eliminar elementos de un array.

```js
carrito.splice(0, 1);
```

Eso significa:

- Empezar en la posición `0`.
- Eliminar `1` elemento.

Ejemplo:

```js
const nombres = ["Ana", "Luis", "Sofia"];

nombres.splice(0, 1);

console.log(nombres);
```

Después de ejecutar ese código, queda:

```js
["Luis", "Sofia"]
```

## Guardar un carrito

Como el carrito es un array de objetos, no lo podemos guardar directamente.

Primero lo convertimos a texto con `JSON.stringify`.

```js
guardarEnLocalStorage("carrito", JSON.stringify(carrito));
```

Para recuperarlo:

```js
const carritoGuardado = localStorage.getItem("carrito");
const carritoParseado = JSON.parse(carritoGuardado);

console.log(carritoParseado);
```

## Resumen rápido

- Un objeto agrupa datos relacionados.
- Una propiedad es un dato dentro de un objeto.
- Podemos acceder a propiedades con punto o con corchetes.
- `this` hace referencia al objeto que se está creando o usando.
- Una función constructora permite crear muchos objetos parecidos.
- Una clase es un molde moderno para crear objetos.
- Un método es una acción que puede ejecutar un objeto.
- `localStorage` guarda datos en el navegador de forma persistente.
- `sessionStorage` guarda datos durante la sesión actual.
- Storage guarda texto, no objetos reales.
- `JSON.stringify` convierte objetos o arrays en texto.
- `JSON.parse` convierte texto JSON nuevamente en objeto o array.
- Un carrito puede representarse como un array de productos.

## Ejemplo integrador

Este ejemplo une varios temas vistos en clase.

```js
let carrito = [];

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    mostrarInfo() {
        console.log(`${this.nombre} cuesta $${this.precio}`);
    }
}

const producto1 = new Producto("Azucar", 1850, 100);
const producto2 = new Producto("Yerba", 2650, 120);

carrito.push(producto1);
carrito.push(producto2);

producto1.mostrarInfo();

localStorage.setItem("carrito", JSON.stringify(carrito));

const carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));

console.log(carritoRecuperado);
```

En este ejemplo:

1. Creamos un array llamado `carrito`.
2. Creamos una clase llamada `Producto`.
3. Instanciamos productos con `new`.
4. Agregamos productos al carrito con `push`.
5. Ejecutamos un método.
6. Guardamos el carrito en `localStorage`.
7. Recuperamos el carrito usando `JSON.parse`.

## Consejo para practicar

Cuando estén aprendiendo objetos, conviene pensar en cosas de la vida real.

Por ejemplo:

- Una persona tiene nombre, edad y email.
- Una mascota tiene tipo, nombre, raza y peso.
- Un producto tiene nombre, precio y cantidad.
- Un carrito tiene muchos productos.

Después de identificar qué datos tiene cada cosa, podemos representarla con objetos en JavaScript.
