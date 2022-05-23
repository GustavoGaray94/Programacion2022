/*Sumar los elementos de cada una de las posiciones de dos arreglos y 
 * guardar el resultado en otro arreglo

El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario


Ejemplo:
v1 =        1, 3, 7, 9, 9, 5 
v2 =        6, 9, 2, 5, 9, 4
vSuma =    7, 12, 9, 14, 18, 9 */

let lista1: number = new Array(6);
let lista2: number = new Array(6);
let sumaLista: number = new Array(6);

function pedirNumero() {
  for (let index = 0; index < 6; index++) {
    lista1[index] = Number(prompt("Ingrese numeros de la lista 1: "));
    lista2[index] = Number(prompt("Ingrese numeros de la lista 2: "));
  }
}

function sumarListas() {
  for (let index = 0; index < 6; index++) {
    sumaLista[index] = lista1[index] + lista2[index];
    console.log(sumaLista[index]);
  }
}

pedirNumero();
sumarListas();
