let precioProducto: number = Number(prompt("Ingrese el precio del prodcuto "));
let porcentajeDescuento: number = 0.1;
let resultado: number = precioProducto * porcentajeDescuento;
let precioFinal: number = precioProducto - resultado;
console.log("Su producto más el descuento es " + precioFinal);
