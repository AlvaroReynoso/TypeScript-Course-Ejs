/* 
Realizar un programa que muestre la nota
del alumno como: A, B, C, D, F
donde:
A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/

export let nota: number = 95;
let gradeLetter: string;

if ( nota >= 95 ) {
    gradeLetter = 'A+';
} else if ( nota >= 90 ) {
    gradeLetter = 'A';
} else if ( nota >= 80 ) {
    gradeLetter = 'B';
} else if ( nota >= 70 ) {
    gradeLetter = 'C';
} else if ( nota >= 60 ) {
    gradeLetter = 'D';
} else {
    gradeLetter = 'F';
}

console.log('La nota del alumno es:', gradeLetter )

// Tambien podemos usar console.log en cada una de los if's

