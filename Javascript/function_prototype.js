function doThing () {}
console.log(doThing.prototype) // {}


//Functional Instantiation
function Person(name, age) {
 let person = {};
 person.name = name;
 person.age = age;
 person.eat = function () {
   console.log(`${this.name} is eating.`)
 }
 person.sleep = function () {
   console.log(`${this.name} is sleeping.`)
 }
 return person;
}
// Invoke Person function to create persons.
const person1 = Person('Mike', 23);
const person2 = Person('Alis', 34);
person1.eat();
person2.sleep();

//Prototypal Instantiation
//every function in JavaScript has a prototype property that references an object.
function Person(name, age) {
  let person = {};
 person.name = name;
 person.age = age;
 person.eat1 = function () {
   console.log(`${this.name} is eating.`)
 }

  return person
}

Person.prototype.eat = function () {
  console.log(`${this.name} is eating.`)
  
}

Person.prototype.sleep = function () {
  console.log(`${this.name} is sleeping.`)
  
}

const person11 = Person('Mike', 23);
const person22 = Person('Alis', 34);


person11.eat1();
person22.sleeep();



//this object is created for us is because we called the 
//constructor function with the new keyword. 
function Person (name, age) {
  // const this = Object.create(Animal.prototype)

  this.name = name
  this.energy = energy

  // return this
}

const perosn111 = new Person('Mike', 23);
const perosn222 = new Person('Alis', 34);


function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.eat = function () {
  console.log(`${this.name} is eating.`)
  
}

Person.prototype.sleep = function () {
  console.log(`${this.name} is sleeping.`)
 
}



const person1111 = new Person('Leo', 7)
const person2222 = new Person('Snoop', 10)