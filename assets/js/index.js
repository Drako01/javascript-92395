// Clase 06

// Funciones de Orden Superior

// function operarNumeros(a, b, operacion) {
//     return operacion(a, b);
// }

// const operarNumeros = (a, b, operacion) => operacion(a, b);

// // Definamos operaciones
// const suma = (x, y) => x + y;
// const resta = (x, y) => x - y;
// const multiplicacion = (x, y) => x * y;
// const division = (x, y) => {
//     if(y === 0){
//         return "Error, no se puede dividir por Cero!"
//     }
//     return x / y;
// };

// console.log(operarNumeros(5, 10, suma));
// console.log(operarNumeros(125, 150, resta));
// console.log(operarNumeros(53, 104, multiplicacion));
// console.log(operarNumeros(54, 110, division));
// console.log(operarNumeros(54, 0, division));


// Arrays

// const myArray = [1, 2, 3]; 
// console.log(typeof myArray)

// // myArray = 4; 

// myArray.push(4);
// console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray[1]);

// console.log(myArray.length); // Gallina Tiene Huevo


// const arrayString = ["Hola", "Mundo"];

// arrayString.push("Coder");
// arrayString.push("JavaScript");

// console.log(arrayString);
// console.log(arrayString.sort());


// const myArray = [1, 2, 3, -52, 99, 234, -234, 2643, 0, 100, 1, 100, 65, -98, -900, 5, 2];
// console.log(myArray);

// myArray.forEach((num) => {
//     console.log("Imprimiendo el número: " + num);
// })

// myArray.forEach((num, index) => {
//     console.log(`Imprimiendo el número: ${num} con su indice ${index}`);
// })

// Obtenemos un nuevo Array que cumple con una condicion dada.
// myArray.forEach((num, index, array) => {
//     array[index] = num * 3;
// })

// console.log(myArray);


// const arrayString = ["Hola", "Mundo", "Coder"];

// console.log(arrayString);


// const inventario = {} // Creamos un Objeto vacio

// // console.log(inventario['id'] = 5656)

// arrayString.forEach((palabra, indice) => {
//     inventario[indice] = palabra
// })

// console.log(inventario)

// Filter

// const cursos = [
//     { nombre: "JavaScript", precio: 180000 },
//     { nombre: "React", precio: 160000 },
//     { nombre: "Angular", precio: 190000 },
//     { nombre: "SQL", precio: 110000 },
//     { nombre: "Backend", precio: 360000 }
// ];

// console.log(cursos);

// // Como usar filter:

// const cursosEconomicos = cursos.filter((curso) => curso.precio <= 180000);
// console.log(cursosEconomicos);

// const cursosCaros = cursos.filter((curso) => curso.precio > 180000);
// console.log(cursosCaros);


// const myArray = [1, 2, 3, -52, 99, 234, -234, 2643, 0, 100, 1, 100, 65, -98, -900, 5, 2];
// console.log(myArray);

// const myArrayFiltrado = myArray.filter((num) => num > 100);
// console.log(myArrayFiltrado);


// Map

// const frutas = ["Banana", "Pera", "Manzana", "Limon"];
// console.log(frutas);
// const frutasConMayusculas = frutas.map((fruta) => fruta.toUpperCase());
// console.log(frutasConMayusculas);

// const myArray = [1, 2, 53, -900, 5, 2];

// const myArrayDobles = myArray.map((num) => num * 2);

// console.log(myArrayDobles);


// const cursos = [
//     { nombre: "JavaScript", precio: 180000 },
//     { nombre: "React", precio: 160000 },
//     { nombre: "Angular", precio: 190000 },
//     { nombre: "SQL", precio: 110000 },
//     { nombre: "Backend", precio: 360000 }
// ];

// console.log(cursos);

// const arrayNombreDeCursos = cursos.map((curso) => curso.nombre);

// console.log(arrayNombreDeCursos);

// const arrayPreciosDeCursos = cursos.map((curso) => curso.precio);
// console.log(arrayPreciosDeCursos);

// const booleanos = [true, false, false, true, true, true, false, true];
// console.log(booleanos);

// const booleanosToText = booleanos.map((valor) => {
//     if(valor){
//         return "✅ Verdadero"
//     } else {
//         return "❌ Falso"
//     }
// })

// const booleanosToText = booleanos.map((valor) => {
//     if (valor) {
//         return "✅ Verdadero"
//     }
//     return "❌ Falso";
// });

// console.log(booleanosToText);


// const productos = [
//     {id: 1, nombre: "Azucar", precio: 1800, disponible: true},
//     {id: 2, nombre: "Yerba", precio: 2560, disponible: false},
//     {id: 3, nombre: "Coca Cola", precio: 3600, disponible: true},
//     {id: 4, nombre: "Pepsi", precio: 3200, disponible: false},
//     {id: 5, nombre: "Chocolate", precio: 18000, disponible: true},
// ];

// const stock = productos.map((producto) => {
//     let disponibilidad = "";
//     if(producto.disponible){
//         disponibilidad = "Tiene Stock"
//     } else {
//         disponibilidad = "No tiene Stock"
//     }

//     return `El Producto ${producto.nombre} ${disponibilidad} - Precio: $${producto.precio}.-`
// });

// console.log(stock);

// Reduce
// const myArray = [1, 2, 3, -52, 990, 234, 5, -98, -900, 5, 2];

// const sumaDeTodosLosNumerosDeMyArray = myArray.reduce((acumulador, numero) => acumulador + numero, 0);

// console.log(sumaDeTodosLosNumerosDeMyArray);


// const cursos = [
//     { nombre: "JavaScript", precio: 180000 },
//     { nombre: "React", precio: 160000 },
//     { nombre: "Angular", precio: 190000 },
//     { nombre: "SQL", precio: 110000 },
//     { nombre: "Backend", precio: 360000 }
// ];

// const cursoObjeto = cursos.reduce((acc, curso) => {
//     acc[curso.nombre] = curso.precio
//     return acc
// }, {});

// console.log(cursoObjeto);


// const frutas = ["Banana", "Banana", "Banana", "Pera", "Manzana", "Limon", "Kiwi", "Mandarina", "Pera", "Manzana", "Limon", "Pera"];

// const frutasObjeto = frutas.reduce((acc, fruta) => {
//     acc[fruta] = (acc[fruta] || 0) + 1
//     return acc
// }, {})

// console.log(frutasObjeto);

// Find
const productos = [
    {id: 1, nombre: "Azucar", precio: 1800, disponible: true},
    {id: 2, nombre: "Yerba", precio: 2560, disponible: false},
    {id: 3, nombre: "Coca Cola", precio: 3600, disponible: true},
    {id: 4, nombre: "Pepsi", precio: 3200, disponible: false},
    {id: 5, nombre: "Chocolate", precio: 18000, disponible: true},
];

const productoBuscado = productos.find((prod) => prod.id === 3);
console.log(productoBuscado);

const productoBuscadoPorNombre = productos.find((prod) => prod.nombre.toLowerCase() === "pepsi");
console.log(productoBuscadoPorNombre);

const productoBuscadoPorDisponibilidad = productos.find((prod) => prod.disponible === true);
console.log(productoBuscadoPorDisponibilidad);


// Some
const hayDisponibilidad = productos.some((prod) => prod.nombre.toLowerCase() === "pepsi");
console.log(hayDisponibilidad);