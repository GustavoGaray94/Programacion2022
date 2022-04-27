/*Desarrolle un algoritmo que diga el precio de una compra 
La compra se compone del precio del producto y la cantidad
Si el cliente gasta más de $1000 debemos aplicarle un descuento del 10%*/

/*let producto: number = Number(prompt("Ingrese el precio del producto $"));

let cantidad: number = Number(
  prompt("Ingrese cuantos productos está comprando ")
);

let resultado: number = producto * cantidad;

let descuento: number = 0;

if (resultado > 1000) {
  descuento = resultado - resultado * 0.1;
  console.log(
    "El total de su compra es $ " +
      resultado +
      " y con el descuento del 10% por superar $1000 es: " +
      descuento
  );
} else {
  console.log("El total de su compra es $ " + resultado);
}*/

/*Desarrolle un algoritmo que, de acuerdo a la altura de una persona, decida
si puede entrar a un juego en un parque de diversiones.
Para poder subirse a la montaña rusa la persona debe medir 1.30 mts. o más*/

let altura: number = Number(
  prompt("Ingrese su altura (no olvide agregar un ' . ' punto): ")
);

console.log("Su altura ingresada es " + altura + " mts.");

if (altura >= 1.3) {
  console.log("Puede entrar al juego, !DIVIERTASE¡");
} else {
  console.log(
    "Dado que su altura no cumple los requisitos por su seguridad no puede entrar, disculpe las molestias"
  );
}
