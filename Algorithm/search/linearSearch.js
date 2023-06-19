// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

function linearSearch(arr, target) {
    let i = 0
    while (i < arr.length) {
        if (arr[i] === target) {
            return i
        }
        i++
    }
    return -1
}
console.log(linearSearch([2, 4, 55, 10], 10));
console.log(linearSearch([2, 10, 33, 6], 5));
console.log(linearSearch([2, 11, 13, 9], 11));