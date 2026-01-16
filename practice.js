var x=5;
var Interval=setInterval(()=>{
    document.querySelector(".Stopwatch").innerHTML=x; 
    x=x-1;
},1000);
setTimeout(()=>{
    clearInterval(Interval);

},6000)
setTimeout(()=>{
    alert("time's Up")
},8000)