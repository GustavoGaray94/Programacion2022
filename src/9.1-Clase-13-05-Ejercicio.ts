/*Implemente un método llamado cantidadDeDivisores 
que reciba un número entero y devuelva la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, 
por lo que la respuesta debería ser 5 

Re-utilice el método esMultiplo implementado para el ejercicio anterior */

function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

function cantidadDeDivisores(numero: number): number {
  let multiplo: number = 0;
  for (let divisor: number = 0; divisor <= numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      multiplo++;
    }
  }
  return multiplo;
}

let n: number = Number(prompt("Ingrese el número: "));

console.log("La cantidad de multiplos es: " + cantidadDeDivisores(n));
