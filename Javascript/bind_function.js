const person = {
  firstName:"ABC",
  lastName: "XYZ",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"ABC1",
  lastName: "XYZ1",
}

let fullName = person.fullName.bind(member);

//have to explicitly call the binded method
console.log(fullName());

//preserve this
const person1 = {
  firstName:"John",
  lastName: "Doe",
  display: function() {   
   console.log( this.firstName + " " + this.lastName);
  }
}


person1.display();
let display = person1.display.bind(person1);
setTimeout(display, 3000);

//or
setTimeout(display.bind(person1, 3000));
