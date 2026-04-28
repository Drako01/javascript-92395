// Clase 03

// Funciones

// Diferencia entre let y const -> const no puede ser reasinar un valor, en cambio let si permite reasignaciones.

// const numeroA = 1;
// const numeroB = 2;

// const resultado = numeroA + numeroB;

// console.log("Felicitaciones, el resultado es: " + resultado);


// const numeroC = 10;
// const numeroD = 26;

// const resultado1 = numeroC + numeroD;

// console.log("Felicitaciones, el resultado es: " + resultado1);


// const numeroE = 105;
// const numeroF = 246;

// const resultado2 = numeroE + numeroF;

// console.log("Felicitaciones, el resultado es: " + resultado2);

// KISS -> Keep is simple stupid

// Declarar una funcion que haga eso mismo pero mas simple:
// Declaro variable global resultado
// let resultado = 0;

// function sumarDosNumerosProporcionadosPorElUsuario() {
//     // Declaro variables locales
//     const numeroA = parseFloat(prompt("Ingrese un numero A"));
//     const numeroB = parseFloat(prompt("Ingrese un numero B"));
//     // Resigno el valor de la variable resultado de 0 -> numeroA + numeroB
//     resultado = numeroA + numeroB;
//     // const resultado = numeroA + numeroB;
//     console.log("Felicitaciones, el resultado es: " + resultado);
// }

// // Invocamos a la funcion
// sumarDosNumerosProporcionadosPorElUsuario();
// console.log("Felicitaciones, el resultado de la funcion es: " + resultado);

// alert("Vamos de nuevo");
// sumarDosNumerosProporcionadosPorElUsuario();
// console.log("Felicitaciones, el resultado de la funcion es: " + resultado);

// --------------------------------------
// Declaro variable global resultado
// let resultado = 0;
// const numeroA = parseFloat(prompt("Ingrese un numero A"));
// const numeroB = parseFloat(prompt("Ingrese un numero B"));

// function sumarDosNumerosProporcionadosPorElUsuario() {
//     resultado = numeroA + numeroB;
//     console.log("Felicitaciones, el resultado es: " + resultado);
// }
// function restarDosNumerosProporcionadosPorElUsuario() {
//     resultado = numeroA - numeroB;
//     console.log("Felicitaciones, el resultado es: " + resultado);
// }
// function multiplicarDosNumerosProporcionadosPorElUsuario() {
//     resultado = numeroA * numeroB;
//     console.log("Felicitaciones, el resultado es: " + resultado);
// }
// function dividirDosNumerosProporcionadosPorElUsuario() {
//     resultado = numeroA / numeroB;
//     if(numeroB !== 0){
//         console.log("Felicitaciones, el resultado es: " + resultado);
//     } else {
//         console.error("Error, No se puede dividir por Cero");
//     }
// }
// sumarDosNumerosProporcionadosPorElUsuario();
// restarDosNumerosProporcionadosPorElUsuario();
// multiplicarDosNumerosProporcionadosPorElUsuario();
// dividirDosNumerosProporcionadosPorElUsuario();
// sumarDosNumerosProporcionadosPorElUsuario();
// sumarDosNumerosProporcionadosPorElUsuario();
// sumarDosNumerosProporcionadosPorElUsuario();
// sumarDosNumerosProporcionadosPorElUsuario();
// sumarDosNumerosProporcionadosPorElUsuario();


// Funciones usando Parametros

// Declaro variable global resultado
// let resultado = 0;
// const numeroA = parseFloat(prompt("Ingrese un numero A"));
// const numeroB = parseFloat(prompt("Ingrese un numero B"));

// function sumar(a, b) {
//     resultado = a + b;
//     console.log("Felicitaciones, el resultado es: " + resultado);
// }
// function restar(a, b) {
//     resultado = a - b;
//     console.log("Felicitaciones, el resultado es: " + resultado);
// }
// function multiplicar(a, b) {
//     resultado = a * b;
//     console.log("Felicitaciones, el resultado es: " + resultado);
// }
// function dividir(a, b) {
//     resultado = a / b;
//     if (b !== 0) {
//         console.log("Felicitaciones, el resultado es: " + resultado);
//     } else {
//         console.error("Error, No se puede dividir por Cero");
//     }
// }

// // Al momento de invocarlas, se le pasan los parametros.
// sumar(numeroA, numeroB);
// restar(numeroA, numeroB);
// multiplicar(numeroA, numeroB);
// dividir(numeroA, numeroB);

// ---------------------------

// Intentamos hacer una calculadora

// let continuar = "si"; // Inicializamos para entrar al while

// while (continuar.toLowerCase() !== "no") {

//     const numeroA = parseFloat(prompt("Ingrese un numero A"));
//     const numeroB = parseFloat(prompt("Ingrese un numero B"));
//     const operacion = prompt("Ingrese la operacion.!");

//     function calcular(a, b, op) {
//         const mjeError = "Error, en la operacion.!";

//         let resultado = 0;

//         switch (op) {
//             case "+":
//                 resultado = a + b;
//                 console.log("Felicitaciones, el resultado es: " + resultado);
//                 break;
//             case "-":
//                 resultado = a - b;
//                 console.log("Felicitaciones, el resultado es: " + resultado);
//                 break;
//             case "*":
//                 resultado = a * b;
//                 console.log("Felicitaciones, el resultado es: " + resultado);
//                 break;
//             case "/":
//                 if (b !== 0) {
//                     console.log("Felicitaciones, el resultado es: " + resultado);
//                 } else {
//                     console.error(mjeError);
//                 }
//                 break;
//             default:
//                 console.error("Error, Ingrese una operacion valida.!")
//         }
//     }

//     calcular(numeroA, numeroB, operacion);

//     continuar = prompt("¿Desea continuar? (Si/No)");
// }

// console.log("Gracias por usar la Calculadora.!!");


/// Funciones anonimas.!!

// const saludar = function (nombre) { // Siempre guardarlas en const
//     return "Hola, " + nombre + ", ¿Como estas?"; // Retorne un String 
// }

// console.log(saludar("Alejandro"));

// // saludar = "Hola";
// // console.log(saludar);

// const sumar = function (a, b) {
//     return a + b; // Evitamos declarar una nueva variable llamada resultado;
// }

// console.log(sumar(5, 6));
// console.log(saludar("Sol"));
// console.log(saludar("Gustavo"));


// Funcion Flecha -> Incorporada a partir ES9
/**
 * Las funciones flecha tienen un return implicito solo
 * cuando no son complejas o solo se pasa un parametro
 */
//Ejemplos:
// const saludar = (nombre) => "Hola " + nombre;
// console.log(saludar("Alejandro"));

// const sumarOConcatenar = (valorA, valorB) => valorA + valorB;

// console.log(sumarOConcatenar("Alejandro", " Daniel"));
// console.log(sumarOConcatenar(10, 55));


// Creamos la calculadora con funcion flecha
// const numeroA = parseFloat(prompt("Ingrese un numero A"));
// const numeroB = parseFloat(prompt("Ingrese un numero B"));
// const operacion = prompt("Ingrese la operacion.!");

// const calcular = (a, b, op) => {
//     switch (op) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             if (b === 0) {
//                 return "Error, No se puede dividir por cero";
//             } else {
//                 return a / b;
//             }
//         default:
//             return "Error, operacion no valida";
//     }
// }
// console.log(calcular(numeroA, numeroB, operacion));


// Hacemos la misma calculadora de funcion flecha, pero usando un do while

const calcular = (a, b, op) => {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Error, No se puede dividir por cero";
            } else {
                return a / b;
            }
        default:
            return "Error, operacion no valida";
    }
}

let continuar;

do {
    const validar = (mensaje) => {
        let numero
        do {
            numero = parseFloat(prompt(mensaje));
            if (isNaN(numero)) {
                alert("Por favor, ingrese un numero valido")
            }
        } while (isNaN(numero));
        return numero;
    }
    // Usamos la funcion validar
    const numeroA = validar("Ingrese un numero A");
    const numeroB = validar("Ingrese un numero B");
    const operacion = prompt("Ingrese la operacion.!");

    alert(calcular(numeroA, numeroB, operacion));

    // Validamos lo que ingresa el usuario
    do {
        continuar = prompt("¿Desea continuar? (Si/No)").toLowerCase();
        if (continuar !== "si" && continuar !== "no") {
            alert("Por favor, ingrese 'Si' o 'No'");
        }
    } while (continuar !== "si" && continuar !== "no")

} while (continuar === "si")

alert("Gracias por usar la calculadora!");