// add at the beginning also called unshift

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }
    prepend(value) {//unshift
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
    }


    insert(value, index) {
        if (index < 0 || index > this.size) {
            return false
        }
        if (index === 0) { return this.prepend(value) }

        else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }

    }
    print() {
        if (this.isEmpty()) {
            console.log('list is empty');
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }

}
const list = new LinkedList()
// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.prepend(10)
// list.prepend(20)
// list.print()
// list.prepend(30)
// list.print()
// list.print()
// list.append(10)
// list.append(20)
// list.print()
// list.append(30)
// list.print()
list.insert(10, 0)
list.insert(20, 1)
list.insert(30, 2)
list.insert(40, 3)
list.insert(50, 4)
list.print()