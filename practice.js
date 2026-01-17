console.log("Hello");
var prom1 =new Promise((resolve,reject)=>{
    // var a=Math.random();
    console.log("console log hoon");
    reject("Resolve after hoon");

    console.log("console log 1 hoon");
})

var prom2=new Promise((resolve,reject) => {
  reject("i am rejecting promise 2");
})

var prom3=Promise.any([prom1,prom2])
// var prom3=Promise.allSettled([prom1,prom2])
// var prom3=Promise.race([prom1,prom2])
// var prom3=Promise.all([prom1,prom2])

prom3.then((a)=>{
    console.log(a)
    console.log(typeof(a))
})