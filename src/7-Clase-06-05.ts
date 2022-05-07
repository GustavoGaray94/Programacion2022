/*let codigo: string = prompt("Ingrese la clave: ");

let intento: number = 0;
let intentorest: number = 2;

for (intento = 0; intento < 2; intento++) {
  if (codigo === "Eureka") {
    console.log("Clave correcta, ingresando al sistema");
    intento = 5;
  } else {
    codigo = prompt(
      "La clave es incorrecta, te quedan " +
        intentorest +
        " intentos, Ingrese la clave nuevamente : "
    );
  }
  intentorest -= 1;
}
if (codigo !== "Eureka") {
  console.log("Clave incorrecta sistema muertooooooo");
}*/

//MULTIPLOS

/*for (let indice: number = 1; indice <= 100; indice++) {
  if (indice % 2 === 0 || indice % 3 === 0) {
    console.log(indice);
  }
}*/

//PAR O IMPAR

/*let numUs: number = Number(prompt("Ingrese un numero"));

while (numUs <= 0) {
  numUs = prompt("Vuelva a ingresar un valor mayor a 0: ");
}
if (numUs % 2 === 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}*/

//TABLA DE MULTIPLICAR

//ENCONTRAR EL MÁXIMO
/*let proseguir: number = 1;
let num: number;
let max: number = -999999;
let min: number = 999999;

while (proseguir !== 0) {
  num = Number(prompt("Ingrese un número: "));
  proseguir = Number(prompt("¿Continuar?:"));
  if (num > max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }
}
console.log("máximo " + max + " minimo " + min);*/

//PROMEDIO, MAXIMO Y MINIMO

/*let proseguir: number = 1;
let num: number;
let max: number = -999999;
let min: number = 999999;
let suma: number = 0;
let contador: number = 0;

while (proseguir !== 0) {
  num = Number(prompt("Ingrese numero: "));
  contador++;
  suma = num + suma;
  proseguir = Number(prompt("¿Continuar?:"));
  if (num > max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }
}

console.log("Maximo: " + max);
console.log("Minimo: " + min);
console.log("Media: " + suma / contador);*/

//CALIFICACIONES
