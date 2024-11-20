import { addTwoNumbers,
    divideTwoNumbers,
    substractTwoNumbers,
    timesTwoNumbers } from '../helpers/math-helpers';  // se importan funciones de otros archivos

export function greet(name:string = "Juan") { //Valor por defecto en el parametro es Juan si no es enviado
  console.log("Hola "+ name);
}

let firstName= "Alvaro"
greet(firstName);


let num1:number= 30;
let num2:number= 15;


let total1:number=addTwoNumbers(num1,num2);
let total2:number=substractTwoNumbers(num1,num2);
let total3:number=divideTwoNumbers(num1,num2);
let total4:number=timesTwoNumbers(num1,num2);


console.log("La suma  es:",total1);
console.log("La resta es:",total2);
console.log("La division es:",total3);
console.log("La multiplicacion es:",total4);