function reverseString(str) {
    const characters = str.split('');
    let start = 0;
    let end = characters.length - 1;

    while (start < end) {
        // Swap characters at start and end positions
        const temp = characters[start];
        characters[start] = characters[end];
        characters[end] = temp;

        start++;
        end--;
    }

    return characters.join('');
}

const string = "Hello, World!";
const string1 = "Hello";
const reversedString = reverseString(string);
const reversedString1 = reverseString(string1);

console.log(reversedString);
console.log(reversedString1);
