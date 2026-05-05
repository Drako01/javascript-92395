// Unidad 4: Arrays y Objetos

// const miArrayDeNumeros = [1, 24, 83, 45, 145];
// // Indices del Array   [0, 1, 2, 3, 4] -> Son los indices
// console.log(miArrayDeNumeros);
// console.log(typeof miArrayDeNumeros);

// IMPORTANTE -> Los Arrays se definen usando const NUNCA let
// miArrayDeNumeros = 5; // -> Se puede reasignar.
// console.log(miArrayDeNumeros);
// console.log(typeof miArrayDeNumeros);

// Los Arrays tienen sus propios metodos (funciones).

// Agregar un elemento al final de array
// miArrayDeNumeros.push(100);
// miArrayDeNumeros.push(56);
// miArrayDeNumeros.push(65);
// miArrayDeNumeros.push(99);

// console.log(miArrayDeNumeros);

// Eliminar el ultimo elemento del Array
// miArrayDeNumeros.pop(); // -> Saca el ultimo elemento
// miArrayDeNumeros.pop();
// miArrayDeNumeros.pop();
// miArrayDeNumeros.pop();

// console.log(miArrayDeNumeros);


// Metodos destructivos -> Modifican los indices del Array

// miArrayDeNumeros.shift(); // -> Elimina el 1er elemento del Array
// console.log(miArrayDeNumeros);
// miArrayDeNumeros.unshift(10);
// console.log(miArrayDeNumeros);

// console.log(miArrayDeNumeros.indexOf(0)); // En que indice se encuentra el Nro 0? -> Cuando no existe ese elemento me muestra -1
// console.log(miArrayDeNumeros.indexOf(24)); // 1
// console.log(miArrayDeNumeros.indexOf(145)); // 4

// const miArrayDeNumeros = [1, 24, 83, 45, 145];

// console.log(miArrayDeNumeros);

// console.log("La cantidad de elementos de miArrayDeNumeros es: " + miArrayDeNumeros.length);

// // Imprimir o Acceder a cualquier elemento a partir de su indice

// console.log(miArrayDeNumeros[2]); // Utilizando los [] accedemos a un valor del array segun su indice
// console.log(miArrayDeNumeros[5]); // Cuando no existe un valor para ese indice me muestra "undefined"

// for (let i = 0; i < miArrayDeNumeros.length; i++) {
//     console.log("Valor: " + miArrayDeNumeros[i], " para el indice " + i);
// }


// const miArrayDeNumeros = [1, 24, 83, 45, 145];

// console.log(miArrayDeNumeros.join());
// console.log(miArrayDeNumeros.join(" + "));
// console.log(miArrayDeNumeros.join(" | "));
// console.log(miArrayDeNumeros.join(" - "));
// console.log(miArrayDeNumeros.join(" "));

// console.log(miArrayDeNumeros.join(""));
// console.log(miArrayDeNumeros.join("palabra"));

// console.log(miArrayDeNumeros.indexOf(1)); // Retorna el indice del elemento
// console.log(miArrayDeNumeros.includes(1)); // Retorna un boolean si esta o no el elemento


// console.log(miArrayDeNumeros.indexOf(1000)); // -1
// console.log(miArrayDeNumeros.includes(1000)); // false


// const miArrayDePalabras = ["Hola", "Mundo", "Coderhouse"];
// console.log(miArrayDePalabras);
// // for (let i = 0; i < miArrayDePalabras.length; i++) {
// //     console.log("Valor: " + miArrayDePalabras[i], " para el indice " + i);
// // }

// // console.log(miArrayDePalabras.includes("mundo")); // false
// miArrayDePalabras.sort(); // Ordena alfabeticamente -> Cambia los indices (destructivo)
// console.log(miArrayDePalabras);

// miArrayDePalabras.sort().reverse(); // Ordena alfabeticamente pero invertido 
// console.log(miArrayDePalabras);

// -----------------------------------------------------------------


// Objetos

/**
 * Formato del Objeto
 * 
 * const nombre = {
 *      clave: valor,
 *      clave: valor,
 *      clave: valor,
 * * }
 */

// const producto = {
//     id: 1,
//     nombre: "Azucar",
//     precio: 1200,
//     stock: 20
// }

// // console.log(producto);
// // console.log(typeof producto);

// const productos = [
//     {
//         id: 1,
//         nombre: "Azucar",
//         precio: 1200,
//         stock: 20
//     },
//     {
//         id: 2,
//         nombre: "Yerba",
//         precio: 1950,
//         stock: 15
//     },
//     {
//         id: 3,
//         nombre: "Coca Cola",
//         precio: 3200,
//         stock: 25
//     },
//     {
//         id: 4,
//         nombre: "Harina",
//         precio: 1200,
//         stock: 120
//     }
// ]

// console.log(productos);
// console.log(productos.length);
// console.log(typeof productos);



// console.log(productos[0]);
// console.log(productos[1].id);
// console.log(productos[1].nombre);
// console.log(productos[1].precio);
// console.log(productos[1].stock);

// productos.push(
//     {
//         id: 5,
//         nombre: "Chocolate",
//         precio: 9800,
//         stock: 10
//     }
// )
// console.log(productos);
// console.log(productos.length);

// const productoImportado = {
//     id: 6,
//     nombre: "Chocolate Importado",
//     precio: 12900,
//     stock: 50,
//     origen: "Italia",
//     codigo: "CODE123A"
// };
// productos.push(productoImportado);
// productos.push("productoImportado"); // --> Se agrega como string


// console.log(productos);
// console.log(productos.length);

// productos.push({
//     id: 6,
//     nombre: "Chocolate Suizo",
//     precio: 18900,
//     stock: 150,
//     origen: "Suecia",
//     codigo: "CODE456A",
//     sabor: "Amargo"
// })

// console.log(productos);
// console.log(productos.length);


// const carrito = []; // Se define como array vacio

// carrito.push(productos);

// carrito.push(productos[0]);
// carrito.push(productos[1]);
// carrito.push(productos[4]);

// carrito.push(productos[2],productos[3],productos[5]);
// console.log(carrito);


// Clases --> Siempre empieza en mayuscula

class Producto {

    constructor(id, nombre, precio, stock, origen, codigo, sabor) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.origen = origen;
        this.codigo = codigo;
        this.sabor = sabor
    }

    // Metodos
    sumarIVA() {
        this.precio = parseFloat((this.precio * 1.21).toFixed(2));
    }
};

const productosUsandoClases = [];

// Utilizamos la clase Producto haciendo una instancia para poder usar su Constructor
const primerProductoUsandoClase = new Producto(1, "Azucar", 1500.15, 20, "Argentina", "COD123A");


productosUsandoClases.push(primerProductoUsandoClase);
productosUsandoClases.push(new Producto(2, "Yerba", 1800.55, 60, "Argentina", "YER1123")); // Si no agrego la propiedad lo muestra como undefined
productosUsandoClases.push(new Producto(3, "Harina", 1350.50, 160, "Argentina", "HAR1123"));
productosUsandoClases.push(new Producto(4, "Chocolate", 18500.99, 20, "Italia", "CHO1123", "Dulce"));

// for (let i = 0; i < productosUsandoClases.length; i++) {
//     console.log(productosUsandoClases[i])
// }

// productosUsandoClases.sumarIVA();
// console.log(productosUsandoClases);

// for (const producto of productosUsandoClases) {
//     producto.sumarIVA();
//     console.log(`El producto con ID: ${producto.id} es: ${producto.nombre}. - 
// El Precio de ${producto.nombre}
// es $${producto.precio}.- y existen en Stock: ${producto.stock} Und,
// Origen: ${producto.origen}
// Codigo: ${producto.codigo}
// `);
// }

console.table(productosUsandoClases);