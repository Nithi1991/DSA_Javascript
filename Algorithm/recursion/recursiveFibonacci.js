// function recursiveFibonacci(n) {
//     if (n < 2) {
//         return n
//     }
//     return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
// }

// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(6));

// function fib(n) {
//     let arr = [0, 1]
//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i - 2] + arr[i - 1])
//     }
//     return arr[n]
// }

// console.log(fib(6));

function recursiveFibonacci(n) {
    if (n <= 1) {
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(4));
console.log(recursiveFibonacci(5));
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(7));