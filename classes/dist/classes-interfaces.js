"use strict";
// implements is to implement Interface in class
class Bike {
    // color = "red";
    // using Parameters Properties Shorthand
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
// Abstract Classes with 'abstract' modifier
// Abstract classes are base classes from which other classes may be derived
class Employee {
    // note - With Abstract class, we defined a pattern &
    // methods that must be implemented by a Child Class.
    // Unlike an interface, an abstract class may contain implementation details for its members
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
// They may not be instantiated directly
// Cannot create an instance of an abstract class
// new Employee();
// NOTE - This class requires a method - getPay()
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
const bettey = new FullTimeEmployee("Better", "White", 9500);
console.log(bettey.getPay());
