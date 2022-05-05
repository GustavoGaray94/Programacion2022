/*Desarrollar un algoritmo que dado un número, ingresado por el usuario 
determine si el número es par o impar y le informe al usuario
En el caso de ser 0 (cero) el algoritmo deberá  informarlo 
con switch*/

let num: number = Number(prompt("Ingrese un número: "));

switch (num % 2 === 0) {
  case true:
    if (num === 0) {
      console.log("El número es 0");
    }
    console.log("El número es par");
    break;
  case false:
    console.log("El número es impar");
    break;
}

/*Desarrolle un algoritmo que dados tres números +
determine cuál es el mayor de los tres
con else if*/

let num1, num2, num3: number;

num1 = 2;
num2 = 5;
num3 = 9;

if (num1 && num2 && num3 > 0) {
}
