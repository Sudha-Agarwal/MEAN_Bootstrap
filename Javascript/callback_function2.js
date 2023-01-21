//without callback
/*function first(){
    setTimeout( function(){
    console.log(1);     
  }, 1000 );

}

function second(){
  console.log(2);
}

first();
second();*/

//with callback
function first(callback){
  // Simulate a code delay
  setTimeout( function(){
    console.log(1);
     callback()
  }, 1000 );
}

function second(){
  console.log(2);
}
first(second);
//or
first(()=>console.log(2));

