// 6- Realice un algoritmo, que permita la impresión en consola de la siguiente tabla:
let numbersY: number = 1;
for (let i = 1; i <= 5; i++) {

  let espacio = "";
  for (let j = 1; j <= 5; j++) {
    
    espacio += " " + i * j;
  }
  console.log(espacio);
}
