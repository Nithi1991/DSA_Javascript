function productArray(arr) {
    if (arr.length === 0) {
        return 0
    }

    return arr[0] * productArray(arr.slice(1))
}
console.log(productArray[2, 3, 4, 5]);