function validatePassword(Password){
    let hasUpper=false;
    let hasLower=false;
    let hasDigits=false;
    let hasPassLength=false;
    for (index in Password) {
        let code=Password.charCodeAt(index)
         if((code>=65 && code<=90)) hasUpper=true;
         if((code>=97 && code<=122)) hasLower=true;
         if(Password[index]>=0 && Password[index]<=9) hasDigits=true;
         if(Password.length>=8) hasPassLength=true;
    }
    return hasUpper && hasLower && hasDigits && hasPassLength
}

document.querySelector("#Password").addEventListener("input",()=>{
    let Password=document.querySelector("#Password").value
    if(validatePassword(Password)){
            document.querySelector(".Display").innerHTML=`Your password is validated`
    }
    else{
        document.querySelector(".Display").innerHTML='Password must have 8+ char,Uppercase,Lowercase,Digits'
    }
})
