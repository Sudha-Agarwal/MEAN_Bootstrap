//function statement
function statement(item){
    console.log("Function statement: " + item);
}

//function expression
var expression = function(item){
     console.log("Function statement: " + item);
}

console.log(expression);

//iife
var iife = function(){
    return "Immediately invoked Functional Expression"
}();

console.log(iife);

(function(value){
    var greet  = 'Hello ';
    console.log(greet + value);
})('IIFE');

(() => console.log("IIFE with arrow function")
)();

let sum  = ((a,b)=>  a + b)(10,20);
console.log("Sum is: " + sum);

(function(){
    var counter;

    function sum(a,b){
        return a + b;
    }
    console.log(sum(10,20)); // 30
})();

(function(){
    var counter;

    (a,b) => a + b;    
    console.log(((a,b) => a + b)(10,20)); // 30
})();

//iife to achieve data privacy

/*Because JavaScript's var scopes variables to their containing function, 
any variables declared within the IIFE cannot be accessed by the outside world.
*/

(function () {
    //var foo = "bar";

    // Outputs: "bar"
   // console.log(foo);
})();

// ReferenceError: foo is not defined
//console.log(foo);

function withoutIIFE(){
    var times=3;
    var foo;
    if(times>=3){
     foo = "bar";

    // Outputs: "bar"
    //console.log(foo);
    }
}
withoutIIFE();
//console.log(foo);
