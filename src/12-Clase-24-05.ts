/*let v: number = [5, 6, 9, 8, 6, 3, 1, 7];

for (let i: number = v.length; i >= 0; i--) {
  console.log(v[i]);
}*/

/*• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/

let pedirLongitud: number = Number(prompt("Ingrese el tamaño del nucleo: "));
let tamaño: number[] = new Array(pedirLongitud);

function llenarNucleo() {
  for (let i: number = 0; i < tamaño.length; i++) {
    let pedirNumeros = prompt("Ingrese los números del nucleo: ");

  }
}
function voltearNucleo(){
  for (let largo:number = tamaño -1; 
}


llenarNucleo();
/*Almacene en un arreglo de dimensión N, números (la cantidad es ingresada por el usuario)
Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay */