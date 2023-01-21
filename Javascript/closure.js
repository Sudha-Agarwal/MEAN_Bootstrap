for (var index = 1; index <= 3; index++) {
    setTimeout(function () {
        //console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}


for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            //console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
}

for (let index = 1; index <= 3; index++) {
    setTimeout(function () {
        //console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}

const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

// console.log(add());
// console.log(add());
// console.log(add());

function counter(){
    let counter = 0;
    return function add(){
        counter ++;
        return counter;
    }
}

const add1 = counter();
// console.log(add1());
// console.log(add1());
// console.log(add1());


function index1(){
   
for (var index=1; index <= 3; index++) {    
        setTimeout(function (i_local) {
            return function(){
            console.log('after ' + i_local + ' second(s):' + i_local);
        }
        }(index), index * 1000);
   
}
}

index1();