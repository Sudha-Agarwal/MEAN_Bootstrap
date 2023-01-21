/*const user = (function() {
  let name = 'anonymous';
  return {
    getName: () => name,
    setName: newName => name = newName
  };
})();
console.log(user.getName()) // anonymous
user.setName('Amy');
console.log(user.getName()); // Amy


function counter(){
    let counter1 = 0;
    return{
        increment: () =>{
            counter1 ++;
            return counter1;
        },
        decrement: function(){
             counter1 --;
            return counter1;

        }   
    };
}

//console.log(counter1);
const counterVar = counter();

console.log(counterVar.increment());
console.log(counterVar.decrement());

*/
const counter_add = (function(){
    var counter = 0;

    return () => {
        counter++;
        return counter;
    }
})();

console.log(counter_add());
console.log(counter_add());
console.log(counter_add());

//counter with IIFE

//bank with privacy
const manageBankAccount = function(initialBalance) {
    let accountBalance = initialBalance;
    
    return {
        getBalance: function() { return accountBalance; },
        deposit: function(amount) { accountBalance += amount; },
        withdraw: function(amount) {
            if (amount > accountBalance) {
                return 'You cannot draw that much!';
            }

            accountBalance -= amount;
        }
    };
}

const accountManager = manageBankAccount(0);

accountManager.deposit(1000);
accountManager.withdraw(500);
accountManager.getBalance(); // 500