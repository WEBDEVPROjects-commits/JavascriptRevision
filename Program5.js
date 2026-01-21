let arr=[5,6,7,8,9,-1];
(function SumArray(arr){
    let sum=0
        for(let i=0;i< arr.length;i++){
            if(arr[i]<0) break;
            sum=sum+arr[i]
        }
        console.log(sum);
})(arr)  