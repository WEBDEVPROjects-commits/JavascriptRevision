async function getdata(){
    
    return new Promise((resolve,reject) => {
        resolve(1);
        setTimeout(()=>{
            console.log("Hello");
        },0)
    })

}
async function main(){
    let api =await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data= await api.json();
    console.log(data)
}
main()