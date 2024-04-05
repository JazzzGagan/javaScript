const accountId = 1223
let accountEmail = "gagan@gmail.com";
var accountPassword = "1234";
accountCity = "jumla";
let accountState;


//accountId = 2;// not allowed

accountEmail = "test@gmail.com"
accountPassword = "212121"
accountCity = "Kathmandu"

console.log(accountId);

/*
 prefer not use var because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);