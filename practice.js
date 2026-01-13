// Keep adding numbers to array until 0 is added to the array
var arr = [31, 25, 60, 0, 78];
var element,isTrue;
while (1) {
    isTrue = confirm("Do you wish to add an element to arr?");
    if (isTrue) {
        element = prompt("Please enter the element you wish to add to the array");
        if(element==0){
            break;
        }
        arr.push(element);
    }
    else {
        console.log("Thanks for using this application");
        break;
    }
}
console.log('The new array is :' + arr)