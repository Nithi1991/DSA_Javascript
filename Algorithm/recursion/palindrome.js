function isPalindrome(word) {
    if (word.length <= 1) {
        return true
    }
    if (word[0] !== word[word.length - 1]) {
        return false
    }


    return isPalindrome(word.slice(1, -1))
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("race"));
console.log(isPalindrome(""));