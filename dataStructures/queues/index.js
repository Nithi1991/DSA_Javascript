class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor(val) {
    const newNode = new Node(val);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--
    return temp

  }

  display() {
    let temp = this.first;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

const myQueue = new Queue(4);
myQueue.enqueue(5)
myQueue.enqueue(6)
myQueue.enqueue(7)
myQueue.enqueue(8)
myQueue.display();
console.log('next queue');
console.log(myQueue.dequeue());
myQueue.display();