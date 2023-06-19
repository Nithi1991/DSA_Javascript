function remove(arr, pos) {
    for (let i = pos; i < arr.length-1; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    return arr
}

let arr = [1, 2, 3, 4, 5]
let pos = 3
console.log(remove(arr, pos));