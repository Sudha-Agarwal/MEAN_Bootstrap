//object constructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
myFather.nationality = "English";

myFather.name = function() {
  return this.firstName + " " + this.lastName;
};
//console.log(myFather);
//console.log(myMother);

//will not work
Person.name = function() {
  return this.firstName + " " + this.lastName
};

//will work
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName
};

const arr = [1,2,3]
console.log(arr)
console.log(Object.getPrototypeOf(arr))