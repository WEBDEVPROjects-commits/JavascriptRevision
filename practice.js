var age=-10;
// if(age<0){
//     // console.error("Age cannot be negative");
//     location.href="https://www.google.com";
// }
// console.log("Hello");
var isTrue=confirm("Do you want to change the background color?");
var back;
if(isTrue){
    back=prompt("enter the background color");
    document.body.style.backgroundColor=`${back}`;
}
