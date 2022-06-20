function cargaprod(cant: number): void {
  for (let ind: number = 0; ind < cant; ind++) {
    listaProducto[ind] = prompt("ingrese el producto a comprar:");
    precioUnitario[ind] = Number(prompt("ingrese el precio :"));
    ticket[ind] = Number(prompt("ingrese la cantidad:"));
    precioTotal[ind] = precioUnitario[ind] * ticket[ind];
  }
}

function totalCompra(): number {
  let total: number = 0;
  for (let ind: number = 0; ind < cantProd; ind++) {
    total = total + precioTotal[ind];
  }
  return total;
}

function mostrarListado(): void {
  console.log("EL LISTADO DE PRODUCTOS Y SU RESPECTIVO TOTAL ES :");
  for (let ind: number = 0; ind < cantProd; ind++) {
    console.log(
      "Producto : ",
      listaProducto[ind],
      " precio: ",
      precioUnitario[ind],
      " Cantidad : ",
      ticket[ind],
      " Precio final del Producto: ",
      precioTotal[ind]
    );
  }
  console.log("el total de la compra es : ", totalCompra());
}

function participar(): void {
  if (totalCompra() > 3000) {
    console.log("Participa de un auto 0KM ");
  } else if (totalCompra() > 2000) {
    console.log("Participa por una moto 0KM ");
  } else if (totalCompra() > 1000) {
    console.log("Participa por una Tv Led");
  } else {
    console.log("Gracias por Su Compra ");
  }
}

let cantProd: number = Number(
  prompt("ingrese la cantidad de productos comprados: ")
);

let listaProducto: string[] = new Array(cantProd);
let precioUnitario: number[] = new Array(cantProd);
let ticket: number[] = new Array(cantProd);
let precioTotal: number[] = new Array(cantProd);

cargaprod(cantProd);
mostrarListado();
participar();
