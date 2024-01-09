/* class Car {
    license: number;
    constructor(num:number = 100){
        this.license = num;
    }
    
}
let ob = new Car();
console.log(new Car());
*/ 
/*
//-----------------inheritance------------------
class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
*/
/*

//-------------------encapsulation------------------
class Car {
    private name:string;
    licence: string;

    public setName(theName:string){
        this.name = theName;
    }
    public getName() {
        return this.name;
    }
}

let car = new Car();
car.setName("BMw");
console.log(car.getName());


*/

//-----------------abstraction----------------

abstract class Vehicle {
    private name: string;
  
    setName(theName: string): void {
      this.name = theName;
    }
  
    getName(): string {
      return this.name;
    }
  
    abstract getLicense(): string;
  }
  
  class Car extends Vehicle {
    private license: string;
  
    constructor(license: string) {
      super();
      this.license = license;
    }
  
    getLicense(): string {
      return this.license;
    }
  }
  const car = new Car("abc12");
  car.setName("BMW");
  console.log(`Car Name: ${car.getName()}`);
  console.log(`Car License: ${car.getLicense()}`);
  