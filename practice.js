async function getdata(){
    
    return new Promise((resolve,reject) => {
        resolve(1);
        setTimeout(()=>{
            console.log("Hello");
        },0)
    })

}
async function main(){
    var data=await getdata();
    console.log(data);
}
main()