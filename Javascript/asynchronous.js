//without callback
/*const getTodo = function(){
    setTimeout(function() {
        return { text: 'Complete Code Example' }
    }, 2000)
}
const todo = getTodo()
console.log(todo.text)*/

//with callback
/*const getTodo = function(callback) {
    setTimeout(function(){
       callback ({ text: 'Complete Code Example' })
    }, 2000)
}

function taskDone(todo){
   
    console.log(todo.text)
}
getTodo(taskDone);
*/


//with arrow function
const getTodo = callback => {
    setTimeout(() => {
       callback ({ text: 'Complete Code Example' })
    }, 2000)
}
getTodo(todo => {
    console.log(todo.text)
})