class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class singlyLinkedList {
    constructor() {
        // const newNode = new Node(val)
        // this.head = newNode
        // this.tail = this.head
        // this.length = 1
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this

    }

    print() {
        if (!this.head) {
            console.log('list is empty');
        } else {
            let curr = this.head
            let list = ''
            while (curr) {
                list += `${curr.val} ->`
                curr = curr.next
            }
            console.log(list);
        }
    }
    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    getSize() {
        return this.length
    }
    isEmpty() {
        if (this.length === 0) {
            console.log("list is empty")
        } else {
            console.log('list is not empty');
        }
    }
    to_array() {
        let curr = this.head
        let arr = []
        while (curr) {
            arr.push(curr.val)
            curr = curr.next
        }
        return arr
    }
    to_string() {
        let curr = this.head
        let str = ""
        while (curr) {
            str += curr.val + " "
            curr = curr.next
        }
        return str
    }

    // recursiveReverse(head) {
    //     if (head === null || head.next === null) {
    //         return head
    //     }
    //     const reverseredHead = recursiveReverse(head.next)

    //     head.next.next = head
    //     head.next = null
    //     return reverseredHead
    // }

    matchValue(val) {
        let ind = -1
        let temp = this.head
        while (temp) {
            ind++
            if (temp.val === val) {
                return ind
            }
            temp = temp.next
        }
        return -1
    }
}

const mylist = new singlyLinkedList()
mylist.unshift(5)
mylist.push(50)
mylist.push("hello")
mylist.push(55)
mylist.print()

// mylist.recursiveReverse()
// mylist.print()
// console.log('list size is', mylist.getSize());
// console.log(mylist.matchValue(55));
// console.log(mylist.to_array());
// console.log(mylist.to_string());
