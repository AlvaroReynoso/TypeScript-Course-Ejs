let base: number = 10;
let limite: number = 50;
let mult: number = 1;
let resultado: number = 0;

// ---------CON FOR-----------
// for (let i = 1; i <= limite; i++) {

//     console.log(base ,"x", i ,"=", base*i);

// }


//---------CON WHILE------------
while (resultado <= 500 && mult <= limite) {
  resultado = base * mult;
  console.log("el resultado de",base, "*",mult,"=", resultado)
  mult++;
}
// }

//------------CON DO-WHILE-------------
// do {

//     console.log(base,"*",mult,"=",base*mult);
//     mult++;
// }
// while(mult<=limite)
