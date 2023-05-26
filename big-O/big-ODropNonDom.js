function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
    for (let k = 0; k < n; k++) {
        console.log(k);
    }
}
logItems(5)

// this can be considered as O(n^2 + n)
// but n2  is the dominant and so we drop  so its considered as n2