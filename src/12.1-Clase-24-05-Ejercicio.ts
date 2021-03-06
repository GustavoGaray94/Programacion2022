/*Desarrolle un algoritmo que permita cargar alumnos y sus notas en los
tres trimestres
Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno 
(ingresado por el usuario)
Luego de resolverlo, pensar en aprovechar métodos y discutir como representar la información */

//segun el "cont" que va a representar cuantos alumnos a promediar
function ingresarNombre(): void {
  for (let i: number = 0; i < cont; i++) {
    alumnos[i] = prompt("Ingrese el Nombre del Alumno: ");
  }
}

//multiplicamos el "cont" para así sacar la 3 notas por alumno ingresado
function ingresarNotas(): void {
  for (let i: number = 0; i < cont * 3; i++) {
    notas[i] = Number(prompt("Ingrese el Nota del Alumno: "));
  }
}

function promedio() {
  let c: number = 0;
  let promedio: number = 0;

  //notas[c] y el agregado(++) para ir pasando por los indices
  for (let i: number = 0; i < cont; i++) {
    promedio = (notas[c] + notas[c++] + notas[c++]) / 3;
    console.log("El promedio del alumno", alumnos[i], " es: ", promedio);
    c++;
  }
}

let cont: number = Number(prompt("Cantidad de Alumnos: "));
let alumnos: string[] = new Array(cont);
let notas: number[] = new Array(3);

ingresarNombre();
ingresarNotas();
promedio();
