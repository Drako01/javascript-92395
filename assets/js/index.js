// console.log("Hola desde el JS interno");

// Nomenclatura camelCase
/*
var primeraVariable = "Hola"; // Creameos la variable (declaramos) y le asignamos un valor.
primeraVariable = "CoderHouse" // Reasignacion de Variable
primeraVariable = 5
console.log(primeraVariable);

var primeraVariable = "Hola soy Primera Variable con otro valor";
console.log(primeraVariable);
*/
// ES6 -> Se dejo de utilizar var -> let
/*
let primeraVariable = 5;
primeraVariable = "CoderHouse"
console.log(primeraVariable);

let segundaVariable = "Hola soy Primera Variable con otro valor";
console.log(segundaVariable);
*/


// Tipos de datos
// let terceraVariable = "Palabra"; // String
// terceraVariable = 1; // Number
// terceraVariable = true; // Boolean (true o false)
// terceraVariable = 'a'; // Caracter
// terceraVariable = "Varias palabras" // String
// terceraVariable = {
//     objeto: 1
// }; // Objeto
// terceraVariable = [1, 2, 3]; // Array

// // console.log(terceraVariable)

// // Operaciones matematicas

// let numeroA = 120;
// let numeroB = 100;
// console.log(numeroA + numeroB);

// let numeroIngresado = prompt("Ingrese un numero"); // Siempre guarda un String
// console.log("El número ingresado es: " + numeroIngresado);
// alert("El número ingresado es: " + numeroIngresado);

// let confirmacion = confirm("¿Esta seguro que desea cerrar la sesion?"); // Guarda un boolean
// console.log("El usuario decidio: " + confirmacion);

// Simulacion de una calculadora

// Parseo de datos
// let numeroA = parseInt(prompt("Ingrese un numero A"));
// let numeroB = parseInt(prompt("Ingrese un numero B"));

// let resultado = numeroA + numeroB;

// console.log(resultado);

// console.log( typeof numeroA);
// console.log( typeof numeroB);
// console.log( typeof resultado);

// console.log(verdadero);
// console.log(falso);

// Condicionales -> Son los que permiten que nuestro codigo tome decisiones.
// Estructura if
// if(condicion) { // Solo permite ejecutar el bloque si la condicion es true (verdadera)
//     se ejecuta este bloque de codigo -> Todo lo que esta dentro de las {}
// }

// if (verdadero) {
//     console.log("El valor de verdad de verdadero es: " + verdadero);
// }

// if (!falso) { // Negando lo falso se convierte en verdadero.
//     console.log("El valor de verdad de falso es: " + falso);
// }

// let condicion = false;

// if (condicion) {
//     console.log("El valor de verdad de condicion es: (true) " + condicion);
// } else {
//     console.log("El valor de verdad de condicion es: (false) " + condicion);
// }


// let stock = false;

// if (stock) {
//     console.log("Usted puede comprar.!")
// } else {
//     console.error("Error, no hay stock.!")
// }


// let edad = parseInt(prompt("Ingrese su edad (No mienta)"));
// let edadPermitida = 18;

// if (edad === edadPermitida) { // Estricamente igual
//     console.warn("Puede pasar porque tiene 18 años");
// } else if (edad > edadPermitida) {
//     console.log("Puede pasar tranquilo")
// } else {
//     console.error("No puede pasar");
// }

// let input = prompt("Ingrese un numero cualquiera");

// console.log(input);
// console.log(typeof input);

// if (input === "") {
//     console.warn("Usted no ingreso nada")
// } else if (input === null) {
//     console.warn("El usuario cancelo la operacion")
// } else {
//     let numeroIngresado = parseInt(input);
//     if (numeroIngresado > 0) {
//         console.log("Usted ingreso un numero positivo: " + numeroIngresado);
//     } else if (numeroIngresado < 0) {
//         console.log("Usted ingreso un numero negativo: " + numeroIngresado);
//     } else if (numeroIngresado === 0) {
//         console.log("Usted ingreso el numero 0: " + numeroIngresado);
//     } else if (isNaN(numeroIngresado)) {
//         console.warn("El valor ingresado no es un numero")
//     } else {
//         console.error("Error, dato incorrecto");
//     }
// }
// let numeroA = 12;
// let numeroB = "12";

// if( numeroA == numeroB) { // Comparacion basica
//     console.log("El numeroA es: " + numeroA + " , el numeroB es: " + numeroB
//         + ", entonces Ambos son el numero 12"
//     );
//     console.log("El tipo de dato de numeroA es: " + typeof numeroA);
//     console.log("El tipo de dato de numeroB es: " + typeof numeroB);
// } else {
//     console.warn("Ojo, no son iguales!");
// }

// if( numeroA === numeroB) { // Comparacion estricta
//     console.log("El numeroA es: " + numeroA + " , el numeroB es: " + numeroB
//         + ", entonces Ambos son el numero 12"
//     );
//     console.log("El tipo de dato de numeroA es: " + typeof numeroA);
//     console.log("El tipo de dato de numeroB es: " + typeof numeroB);
// } else {
//     console.warn("Ojo, no son iguales!");
// }

// let numeroA = 1;
// let numeroB = 10;

// let numeroIngresado = parseInt(prompt("Ingrese un nuemro"));

// if (numeroIngresado > numeroA && numeroIngresado < numeroB) {
//     console.log("El numero ingresado esta entre los numeros A y B");
// } else {
//     console.warn("Usted ingreso el numero: " + numeroIngresado + ", no cumple con la condicion");
// }

// --------------------------------------------------------------------------------

// let variable = "Hola";

// Ciclos por condicion

// let nombreDelUsuario = prompt("Ingrese su nombre");

// if (nombreDelUsuario === '') {
//     console.error("Usted no ingreso nada")
// } else if (!isNaN(nombreDelUsuario)) {
//     console.error("Usted ingreso un numero")
// } else {
//     console.log("El nombre del Usuario es: " + nombreDelUsuario);
// }

// Mientras que no ingreses tu nombre te lo voy a volver a pedir
// while(nombreDelUsuario === '' || !isNaN(nombreDelUsuario)) {
//     alert("Ingrese un nombre valido");
//     nombreDelUsuario = prompt("Ingrese su nombre");
// }

// console.log("El nombre del Usuario es: " + nombreDelUsuario);

// let nombreDelUsuario;
// let validacion;

// do {
//     nombreDelUsuario = prompt("Ingrese su nombre");
//     validacion = nombreDelUsuario === '' || !isNaN(nombreDelUsuario) // Termina siendo un booleano
//     if (validacion) {
//         alert("Ingrese un nombre valido");
//     }

// } while (validacion);

// console.log("El nombre del Usuario es: " + nombreDelUsuario);

/**
 * while(true){
 *      console.log("Mensaje de ciclo infinito")
 * }
 */

// Ciclo por conteo

// for(let i = 0; i < 10; i++) {
//     if(i === 0) {
//         console.log("Un mensaje que se esta ejecutando " + (i + 1) + " vez...");
//     } else {
//         console.log("Un mensaje que se esta ejecutando " + (i + 1) + " veces...");
//     }
// } 


// let texto = "Hola Coders";
// // console.log(texto.length); // Me premite contar en este caso, la cantidad de letras

// for (let i = 0; i < texto.length; i++) { // Se ejecuta tantas veces como caracteres haya en texto
//     console.log(texto);
// }

// Pedir al usuario que ingrese su mes de nacimiento, nosotros le damos su signo zodiacal

let mes; // Number
let condition; // Boolean

do {
    mes = parseInt(prompt("Ingrese su mes de nacimiento (1-12)"));
    condition = isNaN(mes) || mes > 12 || mes < 1
    if (condition) {
        alert("Por favor, Ingrese un numero del 1 al 12")
    }
} while (condition);

// console.log(mes);

switch (mes) {
    case 1:
        console.log("Tu signo es Capricornio o Acuario");
        break;
    case 2:
        console.log("Tu signo es Acuario o Pisis");
        break;
    case 3:
        console.log("Tu signo es Pisis o Aries");
        break;
    case 4:
        console.log("Tu signo es Aries o Tauro");
        break;
    case 5:
        console.log("Tu signo es Tauro o Geminis");
        break;
    case 6:
        console.log("Tu signo es Geminis o Cancer");
        break;
    case 7:
        console.log("Tu signo es Cancer o Leo");
        break;
    case 8:
        console.log("Tu signo es Leo o Virgo");
        break;
    case 9:
        console.log("Tu signo es Virgo o Libra");
        break;
    case 10:
        console.log("Tu signo es Libra o Escorpio");
        break;
    case 11:
        console.log("Tu signo es Escorpio o Sagitario");
        break;
    case 12:
        console.log("Tu signo es Sagitario o Capricornio");
        break;
    default:
        console.error("Numero invalido")
}