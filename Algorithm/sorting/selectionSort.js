function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(i!=min){
            const temp = arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }
    return arr
}

console.log(selectionSort([24,56,74,26,4]));