class Player {
  // public means that it is accessible from any class instances
  // property types - public by default
  // public first: string;
  // same as above
  // last: string;

  // class field properties
  // #score = 0;  using js syntax which runs in compile time
  // note - same as above but cleaner & readable syntax which runs in run time
  // private _score = 0;

  // NOTE - By making this protected, we can access outside of this class expect only in Child Classes
  protected _score = 0;

  // ReadOnly modifier is unique to TS only
  // this can't be change or reassigned but public by default
  readonly id = 1;

  // constructor(first: string, last: string) {
  //   this.first = first;
  //   this.last = last;
  // }

  // note - Parameter Properties Shorthand for doing above
  // short cut which defines Property Types & Initialization at the same time
  constructor(public first: string, public last: string) {}

  // private access modifier ensures that properties & methods are accessible only in this class
  private secretMethod(): void {
    console.log("secret method");
  }

  // getter method - to define a getter method to get the property value
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  // setter method -  to define a setter method to set the property value
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
}

// NOTE - Protected Modifier comes into play when working with Inheritance
class SuperPlayer extends Player {
  public isAdmin: boolean = true;

  maxScore() {
    this._score = 9999999999;
  }
}

const rupak = new Player("Rupak", "lama");
console.log(rupak);

// Property 'score' is private and only accessible within class 'Player'
// rupak._score = 1;
// rupak.secretMethod();

rupak.fullName;

rupak.fullName = "Ryan L";
