//Write a program to print the marks of a student in an object using for in loop

const stud={
    harry:98,
    rohan:70,
    akash:7
}
 var names=Object.keys(stud);
for(var i=0;i< names.length;i++){
   console.log(stud[names[i]]);
}

//print try again until the user enters the correct number
// var Cornumber=1;
// var Usernumber;
// while(1){
//     Usernumber=Number(prompt("Please enter your guessed number"));
//     switch(Usernumber){
//         case Cornumber:
//             console.log("Your guess is correct!");
//             break;
//         default:
//             console.log("Try again!");
//     }
//     if(Usernumber===Cornumber){
//         break;
//     }
// }
//Write a function to find mean of 5 numbers
var a=10;
var b=32;
var c=41;
var d=68;
var e=83;
function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}
var mean2=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}   
console.log(mean(a,b,c,d,e));
console.log(mean2(a,b,c,d,e));