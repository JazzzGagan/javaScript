// for

for (let i = 0; i < 10; i++ ) {
    const element = i;
    if(element == 5){
        // console.log("The number five ");
    }
    // console.log(element);
    
}
// console.log(element);


for (let i = 1; i < 10; i++) {
    // console.log(`Table of ${i}`);
    for(let j = 1; j <= 10; j++ ){
        // console.log(`Inner loop Value ${j} and inner loop ${i}`);
        //console.log(`${i} * ${j} = ${i * j}`);
    }
    
}

// let row = 5;
// for(let i = 1; i <= row; i++){
//     let rowOutput = "";
//     for(j = 1; j <= i; j++){
//         const value = i * j
//         rowOutput += value + " ";
        
//     }
//     console.log(rowOutput);
// }

let myArray = ["flash", "batman", "superman", "mercuryman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break and continue
// for (let index = 0; index <=20; index++) {
//     if(index == 5){
//         console.log(`Number Five is Detected`);
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }
for (let index = 0; index <=20; index++) {
    if(index == 5){
        console.log(`Number Five is Detected`);
        continue;
    }
    console.log(`value of i is ${index}`);
}
