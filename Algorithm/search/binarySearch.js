function binaarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex / 2))
        if (target === arr[middleIndex]) {
            return middleIndex
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }

    }
    return -1
}

console.log(binaarySearch([2, 4, 5, 10], 10));
console.log(binaarySearch([2, 10, 13, 16], 5));
console.log(binaarySearch([2, 11, 13, 19], 11));