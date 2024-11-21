// 7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
// max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
// trabajar así:
// let maxValue = max( 5, 2, 6);
// console.log( maxValue ); // 6 

function max(a:number,b:number,c:number){

    if(a>b && a>c){
        console.log("El numero",a,"es mayor que",b,"y",c);
    }
    else if(b>a && b>c){
        console.log("El numero",b,"es mayor que",a,"y",c);
    }
    else{
        console.log("El numero",c,"es mayor que",a,"y",b);
    }
    if(a==b || b==c || a==c){
        throw new Error("Alguno de los numeros proporcionados son iguales");
    }
}
max(8,7,6);