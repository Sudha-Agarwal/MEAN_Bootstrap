function createQuote(quote, callback){ 
  var myQuote = "Like I always say, " + quote;
  callback(myQuote); // 2
}

// function logQuote(quote){
//   console.log(quote);
// }

//createQuote("eat your vegetables!", logQuote); // 1


 createQuote("eat your vegetables!", quote => console.log(quote));


function serverRequest(query, callback){
  setTimeout(function(){
    var response = query + "full!";
    callback(response);
  },2000);
}

function getResults(results){
  console.log("Response from the server: " + results);
}

//serverRequest("The glass is half ", getResults);

function serverRequest(query, callback){
  setTimeout(function(){
    var response = query + "full!";
    callback(response);
  },2000);
}

serverRequest("The glass is half ", 
result =>  console.log("Response from the server: " + result));


