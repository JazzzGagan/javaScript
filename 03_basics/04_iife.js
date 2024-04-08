//Immediately Invoked Function Expression(IIFE)

(function coffee(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();


//we use iife also to not polluted from the global scope variable that is already declared


( () => {
    console.log(`DB CONNTECTED TWO`);
}) ();

( (name) => {
    //unnamed IIFE
    console.log(`DB CONNTECTED TWO ${name}`);
}) ("gagan")
