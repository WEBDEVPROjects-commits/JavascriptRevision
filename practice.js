//Given 5 boxes,assign a random color and a background Color to each box using DOM concepts
function getRandomNumber(min,max){
   return  Math.floor((Math.random()*(max-min+1)+min))
}
function getRandomColor(){
    var x=`0123456789ABCDEF`
    var newarr=[]
    for(var i=0;i<6;i++){
        newarr.push(x[getRandomNumber(0,15)]);
    }
    var hex=newarr.join("");
    return hex;
}
document.querySelectorAll(".box").forEach((e)=>{
    e.style.color=`#${getRandomColor()}`;
    e.style.backgroundColor=`#${getRandomColor()}`;
})