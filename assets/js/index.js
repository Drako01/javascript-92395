// // Objetos
// const persona1 = {
//     id: 1,
//     nombre: "Alejandro",
//     apellido: "Errecart",
//     edad: 30,
//     email: "alejandro@mail.com"
// }

// // console.log(persona1);

// const persona2 = {
//     id: 2,
//     nombre: "Sol",
//     apellido: "Orbe",
//     edad: 20,
//     email:"sol@mail.com"
// }

// // console.log(persona2);

// const persona3 = { // Creada como objeto
//     id: 3,
//     nombre: "Maria Eugenia",
//     apellido: "Ortiz",
//     edad: 21,
//     email: "maru@mail.com"
// }

// console.log(persona3);


// // Creamos una funcion constructora
// function Persona(persona) { // Pasamos el objeto literal
//     this.id = persona.id,
//     this.nombre = persona.nombre,
//     this.apellido = persona.apellido,
//     this.edad = persona.edad,
//     this.email = persona.email
// }

// const personaLiteral1 = new Persona(persona3); // La creamos con la funcion Persona

// console.log(personaLiteral1);

// const personaLiteral2 = new Persona( // Paso el objeto completo
//     {
//         id: 4,
//         nombre:"Anthony",
//         apellido: "Gomez",
//         edad: 25,
//         email: "anthony@mail.com"
//     }
// );

// console.log(personaLiteral2);
// const personaLiteral3 = new Persona(persona1);

// console.log(personaLiteral3);

// Funcion constructora
// function Persona(id, nombre, apellido, edad, email) { // Paso cada atributo del objeto como parametro
//         this.id = id,
//         this.nombre = nombre,
//         this.apellido = apellido,
//         this.edad = edad,
//         this.email = email
// }

// // Genramos una persona a partir de una instancia del constructor
// const persona = new Persona(5, "Franco", "Galluzzo", 30, "franco@mail.com"); 
// console.log(persona);

// // Accedemos a los atributos del objeto y reasignamos sus nuevos valores
// persona.email = "nuevoemaildefranco@mail.com";
// persona.edad = 28;
// persona.edad = 38;

// persona['email'] = "otroemaildefranco@mail.com";
// console.log(persona);


/// Creamos un Gato
// function Gato(nombre, edad, raza, color, peso) {
//     this.nombre = nombre,
//     this.edad = edad,
//     this.raza = raza,
//     this.color = color,
//     this.peso = peso
// }

// // Creamos un Perro
// function Perro(nombre, edad, raza, color, peso){
//     this.nombre = nombre,
//     this.edad = edad,
//     this.raza = raza,
//     this.color = color,
//     this.peso = peso
// }

// const gato = new Gato("Mishi", 4, "Gato", "Blanco", 3.5);
// console.log(gato);
// const perro = new Perro("Daisy", 5, "Yorky", "Beige", 3.5);
// console.log(perro);


// La clase permite manejar atributos y metodos
class Mascota {

    // Atributos -> Que caracteristicas tiene la mascota? (Adjetivos)
    constructor(tipo, nombre, edad, raza, color, peso) {
        this.tipo = tipo,
            this.nombre = nombre,
            this.edad = edad,
            this.raza = raza,
            this.color = color,
            this.peso = peso
    }

    // Metodos -> Que puede hacer una mascota? (Verbos)

    comer() {
        console.log(`Mi ${this.tipo} ${this.nombre} esta comiendo.!`)
    }

    caminar() {
        console.log(`Mi ${this.tipo} ${this.nombre} esta caminando.!`)
    }

}


// Una variable se genera y se le asigna un valor pero es Volatil 
// (significa que solo persiste en Memoria)
const gatoConClass = new Mascota("Gato", "Mishi", 4, "Gato", "Blanco", 3.5);
// console.log(gatoConClass);

const perroConClass = new Mascota("Perro", "Daisy", 5, "Yorky", "Beige", 3.5);
// console.log(perroConClass);

// gatoConClass.comer();
// perroConClass.comer();
// gatoConClass.caminar();
// perroConClass.caminar();


// --------------------------------------------------------

// Persistencia -> Almacenamiento
let mensaje1 = "Hola desde Coder";
let mensaje2 = "Hola desde LocalStorage";

// Guardamos informacion en Formato String
localStorage.setItem("Mensaje", mensaje2);
localStorage.setItem("Numero", 5);
localStorage.setItem("Boolean", true);
localStorage.setItem("Numero", 152);

localStorage.setItem("Perro", perroConClass);
console.log(typeof perroConClass);
console.log(perroConClass);
console.log(typeof JSON.stringify(perroConClass)); // String
console.log(JSON.stringify(perroConClass)); // String


localStorage.setItem("Perro", JSON.stringify(perroConClass));
sessionStorage.setItem("Perro", JSON.stringify(perroConClass));

const perritoLS = localStorage.getItem("Perro");

console.log(perritoLS);
console.log(typeof perritoLS);

// Parsearlo a formato Objeto
const perritoParseadoLS = JSON.parse(localStorage.getItem("Perro"));
console.log(perritoParseadoLS);

console.log(typeof perritoParseadoLS);

localStorage.removeItem("Numero");
localStorage.removeItem("Boolean");
localStorage.removeItem("Mensaje");

// localStorage.clear();

const guardarEnLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, valor);
}

guardarEnLocalStorage("Clave", "Valor");

guardarEnLocalStorage(gatoConClass.tipo, JSON.stringify(gatoConClass));

localStorage.clear();


let carrito = [];

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre,
            this.precio = precio,
            this.cantidad = cantidad
    }
}

const eliminarProductosPorIndice = (indice) => {
    if (indice >= 0 && indice < carrito.length) {
        const eliminado = carrito.splice(indice, 1);
        guardarEnLocalStorage("carrito", JSON.stringify(carrito));
        console.log(`El Producto ${eliminado[0].nombre} fue eliminado!`);
    } else {
        console.error("Indice fuera de rango");
    }
}

const producto1 = new Producto("Azucar", 1850, 100);
const producto2 = new Producto("Yerba", 2650, 120);
const producto3 = new Producto("Chocolate", 22500, 60);

carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);

console.log(carrito);

eliminarProductosPorIndice(0);
// eliminarProductosPorIndice(1);
// eliminarProductosPorIndice(0);


guardarEnLocalStorage("carrito", JSON.stringify(carrito));