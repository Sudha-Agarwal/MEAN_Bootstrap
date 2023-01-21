function sum(a=5, b=7)  
{  
    return a+b;  
}  
console.log(" Sum of the numbers is : " + sum());   // there is no argument  
console.log(" Sum of the number is : " + sum(3));   // it has one argument  
console.log(" Sum is : " + sum(7,3));   // have both argument  

function myFunction(x, y = 2) {
  return x * y;
}
console.log( myFunction(4));