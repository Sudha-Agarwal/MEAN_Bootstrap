var greeter = "hey hi";
//var greeter = "hey hi"; //redclaration is allowed
    
    function newFunction() {
        //console.log("method called");
        var greeter = "hello";
    }

    newFunction();

    //console.log(greeter);

    var greeter1 = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter1 = "say Hello instead"; 
    }
    
    //console.log(greeter1) // "say Hello instead"


    let greeting2 = "say Hi";
   let times2 = 4;
   //let greeting2 = "hi again"; redeclaration is not allowed

   if (times2 > 3) {
        //let hello = "say Hello instead";
        let greeting2 = "say Hello instead"; //redclaration is allowed in different scope
        //console.log(greeting2);// "say Hello instead"
    }
   console.log(greeting2) // hello is not defined

  
  //variable hoisting
   console.log(x);
    //var x; //allowed
    //let x; //not allowed

     const greeting4 = "say Hi";
    //greeting4 = "say Hello instead";// error: Assignment to constant variable. 

    const greeting5 = "say Hi";
    //const greeting5 = "say Hello instead" // error: Identifier 'greeting' has already been declared


    function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

console.log(myFunction(2,3));

let y = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

console.log(y);

let times1 = 5;

if(times1 > 3){
    var greeter = "hey hi";
    greeter="changed";
    let hello = "hey hi Again";
    console.log(hello);
}



console.log(greeter);