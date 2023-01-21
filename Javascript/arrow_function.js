//example 1
const addTwoNum1 = (num) => {return num + 2;};

//example 2
const addTwoNum2 = (num) => num + 2;

//example 3
const addTwoNum3 = num => {num + 2};
 
//example 4
const addTwoNum4 = a => {
 const newValue = a + 2;
 return newValue;
};

function timesTwo(params) {  
    return params * 2
}

var timesTwo1 = params =>  params*2; 


 //Once the curly braces are present, you always need to write return as well.
var timesTwo1 = params => {
    return params*2; 
}
console.log(timesTwo(4));  // 8

console.log(timesTwo1(4));

//implicit return
var noParams = () => console.log('hi');

var noParams1 = _ => console.log('hello');

noParams();

//Main benefit: No binding of ‘this’

//without arrow
const person = {
    name:"ABC",

    test(){

        console.log(this.name);
        //var self = this;

        setTimeout(function(){
            console.log(this.name);
            console.log(this);
             //console.log(self.name);

        },1000);
       
    }
}

//person.test();

//with arrow

const person1 = {
     name:"ABC",
    test(){
        setTimeout(() => console.log(this.name)
        ,1000);
       
    }
}

person1.test();