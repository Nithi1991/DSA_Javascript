function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(i, j, k);
            }
        }
    }
}
logItems(10)
// this should be considered as n*n*n ie n^3 but still its called n2 big - O notation