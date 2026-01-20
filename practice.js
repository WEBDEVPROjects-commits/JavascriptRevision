let c="10";
let a=prompt("Please enter your first number");
let b=prompt("Please enter your second number");


if(isNaN(a)||isNaN(b)){
    throw SyntaxError("This is not allowed");
}
let sum=parseInt(a)+parseInt(b)

try{
    console.log("The sum is "+(10/0));
}
catch(error){
    console.log("error hai ");
}
finally{
    console.log("Finally to chalta hi hai")
}