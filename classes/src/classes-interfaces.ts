interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

// implements is to implement Interface in class
class Bike implements Colorful {
  // color = "red";

  // using Parameters Properties Shorthand
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike("red");

const jacket1 = new Jacket("Prada", "black");

// Abstract Classes with 'abstract' modifier
// Abstract classes are base classes from which other classes may be derived
abstract class Employee {
  // note - With Abstract class, we defined a pattern &
  // methods that must be implemented by a Child Class.
  // Unlike an interface, an abstract class may contain implementation details for its members
  constructor(public first: string, public last: string) {}

  // defining methods that must exists in Sub Classes
  // note - this does not exists on this class but must exists in classes that extends this class
  // NOTE - It's kind a like an interface to define methods in Sub Classes
  abstract getPay(): number;
}

// They may not be instantiated directly
// Cannot create an instance of an abstract class
// new Employee();

// NOTE - This class requires a method - getPay()
class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }

  getPay(): number {
    return this.salary;
  }
}

const bettey = new FullTimeEmployee("Better", "White", 9500);
console.log(bettey.getPay());
