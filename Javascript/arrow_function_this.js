// ES5
var obj = {
  id: 42,
  counter: function counter() {
      
    setTimeout(function() {
      console.log(this.id);
    }.bind(this),1000)
  }
};

// In the ES5 example, .bind(this) is required to help pass the this context 
// into the function. Otherwise, by default this would be undefined.

obj.counter();

// ES6
var obj1 = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};
obj1.counter();