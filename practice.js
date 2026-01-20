(function x(){
console.log("hello");
})()//IIFE

let [x,y,...rest]=[1,2,7,4,6,7,7,8,8,8,3];
console.log(rest);

let {a,b,c}={a:"Hello",b:"Hi",c:"Why"}
console.log(a,b,c) 

const arr=[1,2,4]
console.log(arr[0],arr[1],arr[2]);
console.log(...arr);
const obj={...arr};
