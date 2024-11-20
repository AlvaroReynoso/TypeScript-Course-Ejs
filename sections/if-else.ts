let isTired: boolean = false;
let grade: number = 39;
isTired = true;

if (isTired) {
  console.log("tome cafe");
} else if (isTired == false) {
  console.log("no tome cafe");
}

if (grade >= 60) {
  console.log("El alumno aprueba la clase")
} 
    else if (grade < 60 && grade >= 40) 
    {
  console.log("El alumno regularizo la clase")
    }
   else 
   {
  console.log("El alumno no aprobo la clase");
}
