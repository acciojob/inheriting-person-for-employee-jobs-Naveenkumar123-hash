// complete this js code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Prototype method for Person
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit Person prototype in Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Prototype method for Employee
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Usage example
const person = new Person("Alice", 25);
person.greet(); 

const employee = new Employee("Bob", 30, "Manager");
employee.greet(); 
employee.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
