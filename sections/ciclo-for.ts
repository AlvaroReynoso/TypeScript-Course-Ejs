export
let limite =21

for(let i=1;i<=limite;i+=2){

    if(i===5){
        console.log("Hola soy el numero: ",i); //ignoro sentencias siguientes dentro del for
        continue;
    }
    console.log("El numero es : ",i);
    if(i===17){
        console.log("El ultimo numero es: ",i);
        break;
    }
}
console.log("Fin del programa");
