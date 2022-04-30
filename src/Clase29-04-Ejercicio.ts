let num1: number = Number(prompt("Ingrese un número: "));
let num2: number = Number(prompt("Ingrese otro número: "));

let suma = 0;
let inicio = num1;

while (inicio <= num2) {
  suma = suma + inicio;
  inicio++;
}
console.log("La suma de " + num1 + " hasta " + num2 + " es: " + suma);

/*En el caso que queramos introducir los números al revés, uno mayor a menor
hay que cambiar la condicion de while a "(inicio >= num2)" y en vez de que 
el contado sume, reste.
Quedaría de la siguiente manera:*/

/*while (inicio >= num2) {
  suma = suma + inicio;
  inicio--;
}
console.log("La suma de " + num2 + " hasta " + num1 + " es: " + suma);*/
