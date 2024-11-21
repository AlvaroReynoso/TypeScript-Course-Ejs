// 4- Dado el siguiente arreglo:
// let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

export let numbers = [1, 6, 8, 4, 2, 7, 15, 3, 5];
let mayor:number=0;

for(let i=0; i<numbers.length;i++){
    if(numbers[i]>numbers[i+1]){
    mayor=numbers[i];
    }
}

console.log("El numero mayor es: ",mayor);