//Before classes, we used constructor functions to do OOP in JavaScript.

/*function Pen(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}

const pen1 = new Pen("Marker", "Blue", "$3");
console.log(pen1);*/


/* 
Now let's say we want to add a new function to the Pen constructor. 
To do this we need to add the function into the prototype property of Pen.
*/

/*function Pen(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}

const pen1 = new Pen("Marker", "Blue", "$3");

Pen.prototype.showPrice = function(){
    console.log(`Price of ${this.color} ${this.name} is ${this.price}`);
}

pen1.showPrice();

*/


class Pen {
    constructor(name, color, price){
        this.name = name;
        this.color = color; 
        this.price = price;
    }
    
    showPrice(){
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}

const pen1 = new Pen("Marker", "Blue", "$3");
pen1.showPrice();

class Chair {
    constructor(color, seatHeight, recliningAngle, seatSize, isHeightAdjustable, isMovable){
        this.color = color;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;  
        
        this.seatSize = seatSize;
        this.isHeightAdjustable = isHeightAdjustable;
        this.isMovable = isMovable;
    }
    
    adjustableHeight() {};
    adjustAngle(){};
    moveChair(){};    
}

const newChair = new Chair("Blue","25 inch","20 deg",true,false,"3 inch",true,"16 inch",false,false);

//console.log("Chair Prototype", Chair);
//console.log("Chair Object", newChair);


class Person1{
     constructor(fName, lName){
        this.fName = fName;
        this.lName = lName;
    }

    showDetails(){
        console.log(`Student Details: 
        F Name: ${this.fName} L Name: ${this.lName}`)
    }


}

class Student extends Person1{
       constructor(fName, lName, course){
        super(fName, lName);
        this.course = course;
    }

    showDetails(){
        super.showDetails();
        console.log(`Course: ${this.course}`)
    }
}

var object = new Student('ABC','XYZ', 'Angular11');

object.fName = "ABCD";

object.showDetails();

/*console.log(`Student Details: 
        ${object.fName} ${object.lName} ${object.course}
    `)*/