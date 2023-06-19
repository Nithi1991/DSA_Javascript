class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtIndex(value, index) {
        if (index < 0) {
            throw new Error("Invalid index");
        }

        const newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode !== null && currentIndex < index - 1) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        if (currentNode === null) {
            throw new Error("Invalid index");
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }
    print() {
        let curr = this.head
        let list = ''
        while (curr) {
            list += `${curr.val}->`
            curr = curr.next
        }
        console.log(list);
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.insertAtIndex(5, 0); // Insert 5 at index 0
linkedList.insertAtIndex(10, 1); // Insert 10 at index 1
linkedList.insertAtIndex(15, 1); // Insert 15 at index 1
linkedList.print()
