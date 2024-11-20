class Car {
  brand: string;
  doors: number;
  fuelTank: number;
  isRunning: boolean;
  type: string;
  createdAt: number;


  constructor() {
    this.brand = "No brand";
    this.doors = 0;
    this.fuelTank = 100;
    this.isRunning = false;
    this.type = "No type";
    this.createdAt = 12351612;
  }

  turnOn(){
    if(this.isRunning){
        console.log("El carro estaba encendido ya");
        return;         // con return corto el metodo y no se ejecuta lo siguiente
    }
    if(this.fuelTank<=0){
      console.log("El carro no puede encernderse porque no tiene nafta");
      return;
    }   
    this.isRunning=true
    console.log("El carro esta encendido")
    

    }
  };
let myMazda= new Car();

console.log(myMazda);

myMazda.turnOn();

console.log(myMazda);
