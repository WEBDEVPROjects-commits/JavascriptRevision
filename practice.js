//Strings
var a='Harshit';
var b='bhatt';
console.log("hey i am "+a);
console.log("Hey i am",a);
console.log(a.trim());
console.log(a.replace("sh","oh"));
console.log(a.concat(b+ "yes"));
console.log(a.includes("ti"));
//extract amount of the string "Please give me rs 1000"
var amount="Please give me rs 1000"
console.log(amount.slice(18));
//try to change fourth character of the string
console.log(amount.replace(amount.charAt(3),'x'))