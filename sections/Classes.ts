//Saber que todas las clases, propiedades y metodos son publicas, se puede usar fuera de las mismas 
export class Car {
  brand: string;
  static className : string="Automovil";    // static: solo puede llamarse junto a la clase Car en este caso, no se puede llamar sola
  doors: number;
  fuelTank: number;
  isRunning: boolean;
  readonly type: string;                    // readonly: no se puede modificar ,solo mostrar y leer
  private readonly createdAt: number=2141;       // privado: no se puede llamar fuera de la clase

  constructor(brand:string, type:string, doors:number) {
    this.brand = brand;
    this.doors = doors;
    this.fuelTank = 0;
    this.isRunning = false;         
    this.type = type;
    this.createdAt = 12351612;              // Solo en el constructor voy a poder cambiar valores "readonly" ,despues ya no
  }

   turnOn() {
    if (this.isRunning) {
      console.log("El carro estaba encendido ya");
      return; // con return corto el metodo y no se ejecuta lo siguiente
    }
    if (this.fuelTank <= 0) {
      console.log("El carro no puede encernderse porque no tiene nafta");
      return;
    }
    this.isRunning = true;
    console.log("El carro esta encendido");
  }

  fillTank(gas: number) {
    let newFuelTank = this.fuelTank + gas;
    if (newFuelTank >= 100) {
      this.fuelTank = 100;
      console.log("No se puede agregar mas de 100% del tanque")
      return;
    } else {
      this.fuelTank = newFuelTank;
    }
 

    if (newFuelTank == 100 && gas > 0) {
      console.log("No se puede llenar mas ,esta completo");
      return;
    }
    if (this.fuelTank == 50 && gas == 20) {
      this.fuelTank = 70;
      return;
    }
    if (this.fuelTank == 90 && gas == 50) {
      this.fuelTank = 100;
      return;
    }

    if (gas <= 0) {
      throw new Error("ERROR NO SE PUEDE NUMEROS NEGATIVOS")
    }
  }
}
let myMazda = new Car("Peugeot","308",5);
let peugeot1= new Car ("Peugeot","207",4)
// let myMazda.type="207";                    // me va a dar error porque esta en readonly ,no se puede cambiar el valor de "type"
console.log(myMazda);
myMazda.fillTank(20);

myMazda.turnOn();
console.log(myMazda);
myMazda.fillTank(81);
console.log(myMazda)

console.log(Car.className);   // llamo a static, que es global,solo puede llamarse de donde pertenece : Car
console.log(peugeot1);
myMazda.fillTank(-4);