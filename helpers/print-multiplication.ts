export function multiplicationTable(num:number,limit:number=10){

    if (limit<=0)
    {
        throw new Error("El limite tiene que ser mayor a 1");
    }

    for(let i=1;i<=limit;i++){

        console.log(num ," * ",i,"=",num*i)
    }

};