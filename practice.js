// filter for numbers divisible by 10 from a given array.
var arr = [31, 25, 60, 0, 78,80];

// newarr=arr.filter((element)=> (element%10)==0)
// console.log(newarr);
//Create an array of square of given numbers.
newarr= arr.map((e)=>{
    return e*e; 
})
console.log(newarr);
//Use reduce to calculate the factorial of a given number from any array of first n natural numbers.(n being the number whose factorial needs to be calculated.)


var natural=[1,2,3,4,5,6]
var newArray=natural.reduce((acc,curr)=>{
        return curr*acc;
},1)
console.log(newArray)