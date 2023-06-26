class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(val) {
    const newNode = new Node(val);
    this.top = newNode;
    this.length = 1;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  display() {
    let current = this.top;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const myStack = new Stack(4);
myStack.push(5);
myStack.push(6);
myStack.push(7);
myStack.display();
console.log("next stack");
myStack.pop();
myStack.display();
