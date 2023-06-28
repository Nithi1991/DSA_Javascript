function printNum(n) {
  if (n === 1) {
    return [1];
  } else {
    let nums = printNum(n - 1);
    nums.push(n);
    return nums;
  }
}
// console.log(printNum(5));

function revArr(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
// console.log(revArr([1, 2, 3, 4, 5]));

function isPalindrome(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
// console.log(isPalindrome([1, 2, 3, 2, 1]));
// console.log(isPalindrome([1, 2, 3, 5, 1]));

function largest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
// console.log(largest([1, 2, 55, 45, 85, 66]));

function oddNum(arr) {
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  return odd;
}
// console.log(oddNum([1, 2, 66, 3, 7]));

function isEven(arr) {
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }
  return even;
}
// console.log(isEven([1, 4, 6, 8]));

function frequency(arr, elem) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      count++;
    }
  }
  return count;
}
// console.log(frequency([1, 2, 2, 3, 1], 2));

function recursiveSum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + recursiveSum(arr.slice(1));
  }
}
// console.log(recursiveSum(1, 2, 3, 4, 5));

function recursiveSumArr(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  } else {
    return arr[index] + recursiveSumArr(arr, index + 1);
  }
}
// console.log(recursiveSumArr(1, 2, 3, 4, 5));

function largestOddNum(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
// console.log(largestOddNum([1, 3, 5, 2, 77, 89]));

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
// console.log(linearSearch([1, 2, 5, 6, 7, 8], 8));

function linearSearchWhile(arr, target) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === target) {
      return i;
    }
    i++;
  }
  return -1;
}
// console.log(linearSearchWhile([1, 2, 5, 6, 7, 8], 8));

function binaarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
// console.log(binaarySearch([1, 3, 3, 4, 5, 6], 3));

function recursiveBinarySeacrh(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}
// console.log(isPalindrome("racecar"));

function productArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productArray(arr.slice(1));
}
// console.log(productArray([1, 2, 3, 4, 5]));

function rangeOfNumbers(start, end) {
  if (end < start) {
    return [];
  } else {
    const num = rangeOfNumbers(start, end - 1);
    num.push(end);
    return num;
  }
}
// console.log(rangeOfNumbers(1, 5));

function countDown(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
// countDown(5)

function recursiveFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// console.log(recursiveFactorial(3));

function recursiveFibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
// console.log(recursiveFibonacci(5));

function reverseString(str) {
  const string = str.split("");
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    const temp = string[start];
    string[start] = string[end];
    string[end] = temp;

    start++;
    end--;
  }
  return string.join("");
}

// console.log(reverseString("hello"));

function sumRange(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumRange(n - 1);
}
// console.log(sumRange(6));

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  print() {
    let curr = this.head;
    let list = "";
    while (curr) {
      list += `${curr.val}->`;
      curr = curr.next;
    }
    console.log(list);
  }
  pop() {
    let pre = this.head;
    let temp = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  shift() {
    let temp = this.head;
    if (!this.head) return undefined;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      temp = temp.next;
      console.log(temp);
    }
    return temp;
  }
  set(index, val) {
    let temp = this.get(index);
    if (temp) {
      temp.val = val;
      return true;
    }
    return false;
  }
  search(val) {
    let curr = this.head;
    while (curr) {
      if (curr.val === val) {
        return true;
      }
    }
    return false;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let pre = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = pre;
      pre = temp;

      temp = next;
    }
    return this;
  }
  insert(index, val) {
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    if (index < 0 || index > this.length) return undefined;
    const newNode = new Node(val);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index > this.length) return undefined;

    let before = this.get(index - 1);
    let temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  delete(val) {
    if (!this.head) return undefined;
    if (this.head.val === val) {
      this.head = this.head.next;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      if (curr.next.val === val) {
        curr.next = curr.next.next;
        return;
      }
      curr = curr.next;
    }
  }

  to_array() {
    let curr = this.head;
    let arr = [];
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }
}

const mylist = new singlyLinkedList();
mylist.push(5);
mylist.push(4);
mylist.push(3);
mylist.push(2);
// mylist.print()
// mylist.pop()
mylist.print();
// mylist.shift()
// mylist.print()
// mylist.unshift(5)
// mylist.print()
mylist.reverse();
mylist.print();
mylist.delete(4);
mylist.print();
