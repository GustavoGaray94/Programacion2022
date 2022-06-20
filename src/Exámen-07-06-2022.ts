/*Dados estos 5 arreglos que representan las ventas semanales del primer trimestre,
corresspondientes a 5 vendedores de la empresa: Camila, Franco, Sofia, Matias y Agustina,
respectivamente.
vendedor1 [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652]
vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855] 
vendedor3 [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218] 
vendedor4 [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006] 
vendedor5 [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]

Escribir un programa que permita determinar:Para cada vendedor mostrar su nombre y
1- su venta maxima indicando semana y mes de la misma.
2- su venta minima indicando semana y mes de la misma.
3- su promedio semanal de ventas.
4- su promedio mensualde ventas.

Entre todos los vendedores calcular:
5- nombre y monto vendido del mejor vendedor de cada semana.
6- nombre y suma de montos vendidos del mejor vendedor de cada mes
7- nombre y suma de montos vendidos del peor vendedor de cada mes
8- nombre y suma de montos vendidos de peor vendedor del trimestre
Tenga en cuenta que cada valor en los arreglos es la venta de una semana, 
y que cuatro semanas forman un mes
*/

let sellerCamila: number[] = new Array(
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
);
let sellerFranco: number[] = new Array(
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
);
let sellerSofia: number[] = new Array(
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
);

let sellerMatias: number[] = new Array(
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
);
let sellerAgustina: number[] = new Array(
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
);

//1- su venta maxima indicando semana y mes de la misma.
let nameSellers: string = new Array(5);
nameSellers = ["Camila", "Franco", "Sofia", "Matías", "Agustina"];

let meses: string = new Array(3);
meses = ["Enero", "Febrero", "Marzo"];

switch (nameSellers) {
  case "Camila":
    break;
  case "Franco":
    break;
  case "Sofia":
    break;
  case "Matías":
    break;
  case "Agustina":
}

function ventaMax(lista: number, mes: number, posicion: number): void {
  for (let i: number = 0; i < lista; i++) {}
}
function ventaMin() {}

function promedioSemanal() {}

function promedioMensual() {}
