let arr = [1, 2, 4, 5, 6, 7, 7, 8, 8, 8, 9, 9, 9, 9, 9, 9];
let result=[...arr];
(function double() {
    for (let i = 0; i < arr.length; i++) {
        if (i!==arr.length-1 && (arr[i] === arr[i + 1])) {
            continue;
        }
        result[i] = arr[i] * 2
    }
})()
console.log(result); 