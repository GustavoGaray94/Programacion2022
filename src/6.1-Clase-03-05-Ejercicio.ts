/*Una empresa desea premiar a sus empleados con un aumento de sueldo.
 Este aumento se ajusta a la siguiente tabla:
 Sueldo Actual  Sueldo con Aumento
0 - 15.000 $                    20%
15.001 - 20.000  $          10%
20.001 - 25.000  $           5%
Más de 25.000 $       No hay aumento */

let sueldo: number = Number(prompt("Igrese su sueldo ideal: "));

let aumento = 0;

if (sueldo > 0 && sueldo <= 15000) {
  aumento = sueldo * 1.2;
  console.log("Su sueldo recibe un aumento del 20% y es de $" + aumento);
} else if (sueldo >= 15001 && sueldo <= 20000) {
  aumento = sueldo * 1.1;
  console.log("Su sueldo recibe un aumento del 10% y es de $$" + aumento);
} else if (sueldo >= 20001 && sueldo <= 25000) {
  aumento = sueldo * 1.05;
  console.log("Su sueldo recibe un aumento del 5% y es de $$$" + aumento);
} else {
  console.log("No hay aumentos para su sueldo");
}
