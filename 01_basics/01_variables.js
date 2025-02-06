const accountId = 144553
let accountEmail = "sanjay@google.com"
var accountPassword = "12345"
accountCity = "Hyderabad"
let accountState;

// accountId = 2 // not allowed

accountEmail = "san@e.com"
accountPassword = "12342"
accountCity = "Bengaluru"

/* 
Prefer not to use var
because of issue in block scope and functional scope.
*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
