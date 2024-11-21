// 9- Crear una función que reciba un arreglo como argumento, la función debe de retornar un
// nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
// Ejemplo:
// Tip: Para determinar si un string empieza con una letra
// let hero = ‘Spiderman';
// hero.startsWith(’S’); // true
// Si se tiene un arreglo vació, por ejemplo:
// let newHeroes = [];
// Se puede insertar en el arreglo así:
// newHeroes.push('Hulk');

let heroes:string[] = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']
function heroesThatStartsWith(array:string[],letter:string){
let arrayFilter:string[]=[];

for(let name of array)   //otra forma de for, solo de JS
{
    
    if(name.startsWith(letter)){
        arrayFilter.push(name)
    }

    
}
console.log(arrayFilter)
}


let herosWithLetterS=heroesThatStartsWith( heroes, 'h'.toUpperCase() );


// let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
// let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
// console.log( herosWithLetterS ); // She Hulk, Spiderman