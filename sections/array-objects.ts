export interface Person{
age:number,
colorPelo:string,
isActive:boolean
name:string,
};

let alvaro:Person = {
  age: 26,
  colorPelo: "Negro",
  isActive:false,
  name: "Alvaro"
};
let juana:Person = {
  age: 23,
  colorPelo: "Marron",
  isActive:true,
  name: "Juana"
};
let roberto = {
  age: 31,
  colorPelo: "Rubio",
  isActive:false,
  name: "Roberto",
};

let people:Person[] = [alvaro,juana,roberto];
// console.log(people);

for(let i=0;i<people.length;i++){
    let person= people[i]
    console.log(person.name+" "+person.age, person.isActive);
};