const shoppingList = ['Bread', 'Cheese', 'Apples'];
console.log(shoppingList[1]);

//or

const shoppingList1 = new Array('Bread', 'Cheese', 'Apples');
console.log(shoppingList);


let myArray = [];
myArray[0] = Date.now;
//myArray[1] = myFunction;

console.log(myArray[0]);

//The Array.isArray() method returns true if an object is an array, false if it is not.
// all following calls return true
Array.isArray([]);
Array.isArray([1]);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);

//The push() method is used to add one or more new elements to the end of an array. 
let newLength = shoppingList.push('Milk');
console.log(newLength);


//Remove (pop) the last element:pop() returns the element it removed:

let removed = shoppingList.pop();
console.log(removed);

//Shift (remove) the first element of the array:The shift() method returns the shifted element:
let shifted = shoppingList.shift();
console.log(shifted);

//unshift() adds new items to the beginning of an array:
shoppingList.unshift('Banana', 'eggs');
console.log(shoppingList);

