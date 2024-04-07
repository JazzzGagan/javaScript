

function myName(){
    console.log("G");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("N");
}
// myName();

                    //parameters
function addTwoNumbers(numb1, numb2){
    // console.log(numb1 + numb2);
}
addTwoNumbers(1, 2);//arguments


function sumTwoNumbers(number1, number2){
    // console.log(number1 + number2);
}
const result = sumTwoNumbers(2, 4);

// console.log(result);//it prints undefined 



function sumTwoNumbers2(number1, number2){
    let result2 = number1 + number2;
    // console.log("Gagan");
    return result2; //if we add any other after the return it stops working but if we add before the return it will work.
}
const result2 = sumTwoNumbers2(2, 4);
// console.log("result: ", result2);

//// another approach
function sumTwoNumbers3(number1, number2){
    return number1 + number2;
}

function loginUserMessage(username = "hari"/*setting default value*/ ){
    // if(username === undefined){
    //     console.log("please enter a name");
    //     return;
    // }
    if(!username){
        // console.log("please enter a name");
       return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Gagan"));
// console.log(loginUserMessage());



function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200,300, 200, 300));

const user = {
    username: "gagan",
    prices: 199
}
function handleobjects(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleobjects(user);
//we can pass direct object to the function also

handleobjects({
    username: "Gagan",
    prices: 299
})

const myArray = [200, 400, 455, 566];

function returnSecondValue(getArray){
    return getArray[2];
}
// console.log(returnSecondValue(myArray))
console.log(returnSecondValue([400, 200, 455, 345]));