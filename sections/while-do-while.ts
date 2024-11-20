export
// let gasTank:number=11;

// while(gasTank<25){
//     console.log("El tanke no esta lleno, tiene: ",gasTank ," litros.");
//     gasTank+=1; 
//     // gasTank++1; otra forma de incrementar
// }

// console.log("El tanke se lleno y tiene: ", gasTank ," litros."); 

let papas: boolean= true
let lleno :number= 50
do{
    console.log("comiendo papas");
    console.log("lleno al:",lleno, "%");
    
    if(lleno===100){
        papas=false;
    }
    else{
        lleno+=5;
    }

} while(papas)

console.log("No como mas porque estoy al: ",lleno," %")

