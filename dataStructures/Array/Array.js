
// function numbersR(n) {
//     if (n === 1) {
//         return [1]
//     } else {
//         let numbers = numbersR(n - 1)
//         numbers.push(n)
//         return numbers
//     }
// }
// console.log(numbersR(5));

function printNum(n) {
    if (n === 1) {
        return [1]
    } else {
        let nums = printNum(n - 1)
        nums.push(n)
        return nums
    }
}
// console.log((printNum(6)));


function revArr(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        const temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr
}
// console.log(revArr([1, 2, 3, 4, 5]));


function isPalindrome(arr) {
    const size = arr.length
    for (let i = 0; i < size / 2; i++) {
        if (arr[i] !== arr[size - 1 - i])
            return false
    }
    return true

}

// console.log(isPalindrome([1, 2, 3, 2, 1]));
// console.log(isPalindrome([1, 2, 3, 3, 1]));


function largest(arr) {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

// console.log(largest([15, 2, 88, 540, 65]));


function oddNum(arr) {
    let odd = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd.push(arr[i])
        }
    }
    return odd

}
// console.log(oddNum([11, 56, 33, 7, 10, 12]));

function evenNum(arr) {
    let even = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        }
    }
    return even

}
// console.log(evenNum([10, 56, 33, 7, 10, 12]));

function frequency(arr, elem) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            count++
        }
    }
    return count
}
// console.log(frequency([1, 2, 2, 2, 5, 4, 5], 5));



function recursiveSumArr(arr) {
    if (arr.length === 0) {
        return 0
    } else {
        return arr[0] + recursiveSumArr(arr.slice(1))
    }

}
console.log(recursiveSumArr([1, 2, 3, 4, 5, 6]));

function recursiveSum(arr, index = 0) {
    if (index === arr.length) {
        return 0
    } else {
        return arr[index] + recursiveSum(arr, index + 1)
    }
}
// console.log(recursiveSum([1, 2, 3, 4, 5, 6]));


function largestOddNum(arr) {
    let largest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

// console.log(largestOddNum([1, 11, 15, 119, 23]));









