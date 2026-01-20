let student=["Harshit","Harsh","GauriSharma","AlexanderTheGreat","hi","hi"];
function addtoHouse(houseName,name){
    let arr=Array.from(document.querySelectorAll(`.${houseName}`))
            for (let i = 0; i < arr.length; i++) {
                if(arr[i].innerHTML===""){
                    arr[i].innerHTML=name; 
                    break;
                }
            }

}
(function sorting(){
    student.forEach((name) => {
        if(name.length<6){
            addtoHouse('Gryf',name)
        }
        else if(name.length<8){
           addtoHouse('Huff',name)
        }
        else if(name.length<12){
           addtoHouse('Raven',name)
        }
        else if(name.length>=12){
           addtoHouse('Slyth',name)
        }
    })
})()