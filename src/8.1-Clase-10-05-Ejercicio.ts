let num1: number = Number(prompt("Ingrese un número "));
let num2: number = Number(prompt("Ingrese otro número "));
let opcion: number = Number(
  prompt(
    "Ingrese la opción deseada: 1 para sumar, 2 para restar, 3 para multiplicar y 4 para dividir"
  )
);

function dibujarLinea() {
  let guion: string = "-";
  for (let cont = 0; cont <= 30; cont++) {
    guion = guion + "-";
  }
  console.log(guion);
}
switch (opcion) {
  case 1:
    dibujarLinea();
    console.log("El resultado de la suma es: " + (num1 + num2));
    dibujarLinea();
    break;
  case 2:
    dibujarLinea();
    console.log("El resultado de la resta es: " + (num1 - num2));
    dibujarLinea();
    break;
  case 3:
    dibujarLinea();
    console.log("El resultado de la multipiclación es: " + num1 * num2);
    dibujarLinea();
    break;
  case 4:
    dibujarLinea();
    console.log("El resultado de la multipiclación es: " + num1 / num2);
    dibujarLinea();
  default:
    dibujarLinea();
    console.log();
    dibujarLinea();
}
