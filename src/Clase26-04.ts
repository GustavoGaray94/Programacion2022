//accion
//accion
//accion

//Estructura de seleccion
//if (condicion) {
//<isntrucciones>
//} else {
//<instrucciones>
//}

//let numero1: number = 5;
//console.log(numero1);
//numero1 = 10;
//console.log(numero1);

//if (numero1 % 2 === 0) {
//  console.log("Es par");
//} else {
//  console.log("Es impar");
//}

/*let velocidad: number = Number(prompt("Ingrese la velocidad de su automovil "));

console.log(velocidad);

if (velocidad >= 20) {
  console.log("Debido a su velocidad debe ir por el camino izquierdo");
} else {
  console.log("Debido a su velidad deber ir por el camino derecho");
}*/

// Uso de &&

console.log("Si quieres escapar necesitas los números correctos ");

let number1: number = Number(prompt("Ingrese un número "));
console.log(number1);

let number2: number = Number(prompt("Ingrese otro número "));
console.log(number2);

if (number1 % 2 === 0 && number2 % 2 === 1) {
  console.log("la puerta se abre ");
} else {
  console.log("quedas encerrado ");
}

//uso de ||

let dado: number = Number(prompt("El el número de tu dado es "));
console.log(dado);

if (dado === 5 || dado === 3) {
  console.log("Ganaste el ronda de dados ");
} else {
  console.log("Te quedas sin intentos, pierdes tu dinero");
}

//uso de !
let edad: number = Number(prompt("Ingrese su edad para poder acceder"));

if (!(edad < 21)) {
  console.log("Podes acceder a la pagina ");
} else {
  console.log("El sitio se cerrara por seguridad ");
}
