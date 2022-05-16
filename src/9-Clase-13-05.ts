/*function dibujarLinea(number: number): string {
  let linea: string = "";
  for (let indice: number = 0; indice < number; indice++) {
    linea = linea + "-";
  }
  return linea;
}

for (let indice: number = 0; indice <= 10; indice++) {
  console.log(dibujarLinea(indice));
}*/

/*Realice un programa que devuelva el área del 
triángulo usando los siguientes pares de base-altura:
(1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14)
Implemente un método llamado calcularAreaTriangulo 
que reciba dos números por parámetro 
(uno llamado base y otro altura)
(base*altura)/2 */

/*function calculaAreaTriangulo(base: number, altura: number) {
  return (base * altura) / 2;
}

let base: number = 1;
let altura: number = 2;
for (let i: number = 1; i <= 7; i++) {
  console.log(calculaAreaTriangulo(base, altura));
  base += 1;
  altura += 2;
}*/

function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

let numero1: number = Number(prompt("ingrese numero 1 "));
let numero2: number = Number(prompt("ingrese numero 2 "));
let multiplo: boolean = esMultiplo(numero1, numero2);

if (multiplo === true) {
  console.log("es multiplo");
} else {
  console.log("no es multiplo");
}
