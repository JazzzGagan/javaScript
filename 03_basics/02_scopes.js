//problem of var declaration
var c = 300

let a = 300;
if(true){
let a = 10;
// console.log("Inner:", a);
const b = 20;
var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "gagan";

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "gagan"
    if(username === "gagan"){
        const website = "youtube";
        // console.log(username + website);
    }
    // console.log(website)
   
}
// console.log(username)


//++++++++++++++++++++ intresting +++++++++


console.log(addOne(5))
function addOne(num){
    return num + 1;
}


//expression
addTwo(2);
const addTwo = function(num){
    return num + 2;
}
