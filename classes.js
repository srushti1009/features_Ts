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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//-----------------abstraction----------------
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.setName = function (theName) {
        this.name = theName;
    };
    Vehicle.prototype.getName = function () {
        return this.name;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(license) {
        var _this = _super.call(this) || this;
        _this.license = license;
        return _this;
    }
    Car.prototype.getLicense = function () {
        return this.license;
    };
    return Car;
}(Vehicle));
var car = new Car("abc12");
car.setName("BMW");
console.log("Car Name: ".concat(car.getName()));
console.log("Car License: ".concat(car.getLicense()));
