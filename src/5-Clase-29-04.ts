let codigo: string = prompt("Ingrese la clave: ");
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
  console.log("Acabo sus intentos, el sistema se ha bloqueado");
}
