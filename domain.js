// const promise1 = new Promise((resolve, reject) => {
//     resolve('success')
// })
// promise1.then((Response) => {
//     console.log(Response);
// }).catch((err) => {
//     console.log(err);
// })


// const data = async () => {
//     try {
//         const Response = await promise1
//     } catch (error) {
//         console.log(error);
//     }
// }
// data()

function checkEven(num) {
    return new Promise((resolve, reject) => {
        if (n % 2 === 0) {
            resolve('even')
        } else {
            reject('odd')
        }
    })
}
checkEven.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})

