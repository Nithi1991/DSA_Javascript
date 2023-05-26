function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
logItems(10)
 // its called n^2 big - O notation