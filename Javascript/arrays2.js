const months = ['January', 'February', 'March', 'April'];


//without for each
for(let i = 0; i < months.length; i++) {
  console.log(months[i]);
}
months.forEach(function(month) {
  console.log(month);
});

//with arrow function
months.forEach(month => console.log(month));

//The Array.map Method
//The map method executes a provided function once for every element 
//in the array and it returns a new transformed array.

const transformedArray = months.map(function (month) {
  return month.toUpperCase();
});

console.log(transformedArray);


const transformedArray1 = months.map(month => month.toUpperCase());
console.log(transformedArray1);

//The filter method returns a new array with 
//all the elements that satisfy the provided test condition.

/*The filter method takes a callback function as the first argument and 
executes the callback function for every element of the array. 
Each array element value is passed as the first parameter to the callback function.*/