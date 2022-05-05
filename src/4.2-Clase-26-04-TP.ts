let puestoCarrera: number = Number(
  prompt("Ingrese que puesto llego el corredor ")
);

if (puestoCarrera === 1) {
  console.log("El corredor recibe la medalla de Oro");
} else {
  if (puestoCarrera === 2) {
    console.log("El corredor recibe la medalla de Plata");
  } else {
    if (puestoCarrera === 3) {
      console.log("El corredor recibe la medalla de Bronce");
    } else {
      console.log("El corredor recibe la medalla de participación");
    }
  }
}
