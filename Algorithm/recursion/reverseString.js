function reverseString(str) {
    if (str === "") {
        return ""
    } else
        return str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1));

    // else return reverseString(str.substr(1)) + str.charAt(0)
}


console.log(reverseString("hello"));