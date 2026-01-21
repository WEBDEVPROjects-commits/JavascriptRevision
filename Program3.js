let org="harshit";
const reverseString=(org)=>{
    let newString="";
    for(index in org){
        newString=newString+org[org.length-1-index];
    }
    return newString
}
const AppendToOriginal=()=>{
    org=org+reverseString(org) 
}   
AppendToOriginal()
console.log(org)
