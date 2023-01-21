//function() constructor

var body = "return Math.PI * radius * radius";
var circle = new Function("radius", body);

console.log(circle(5));          // => 78.5398..


//function constructor
const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
