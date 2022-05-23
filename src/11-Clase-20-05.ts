let lista1: number = new Array(5);

function pedirNumero() {
  for (let index = 0; index < 5; index++)
    lista1[index] = Number(prompt("Ingrese los números: "));
}

function mostrarNumero() {
  for (let index = 0; index < 5; index++) {
    console.log(lista1[index]);
  }
}

pedirNumero();
mostrarNumero();
