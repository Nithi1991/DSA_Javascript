//normal method not optimised

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             console.log(arr,arr[j],arr[j+1]);
//             if(arr[j]>arr[j+1]){
//                 const temp = arr[j]
//                 arr[j]= arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr 
   
// }

function bubbleSort(arr){
    for(let i=arr.length-1;i>0;i--){
        for(let j=0;j<i;j++){
            // console.log(arr ,arr[j] ,arr[j+1]);
            if(arr[j]>arr[j+1]){
                const temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
        // console.log("one pass completed");
    }

    return arr
}

// optimising the code more
// function bubbleSort(arr){
//     let noSwaps 
//     for(let i=arr.length-1;i>0;i--){
//         noSwaps= true
//         for(let j=0;j<i;j++){
//             console.log(arr,arr[j],arr[j+1]);
//             if(arr[j]>arr[j+1]){
//                 const temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//                 noSwaps= false
//             }
//         }
//         if(noSwaps) break
//     }
//     return arr
// }

// bubbleSort([25,3,46,19,36])
console.log(bubbleSort([8,1,2,3,4,5,6,7]));