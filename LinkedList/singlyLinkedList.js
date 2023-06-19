class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class singlyLinkedList {
    constructor() {
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
    pop() {
        if (!this.head) return undefined
        let pre = this.head
        let temp = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
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
    shift() {
        if (!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return temp
    }
    get(index) {
        if (index < 0 || index > this.length) return undefined
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
            console.log(temp);
        }
        return temp
    }
    set(index, val) {
        let temp = this.get(index)
        if (temp) {
            temp.val = val
            return true
        }
        return false
    }

    search(val) {
        let curr = this.head
        while (curr) {
            if (curr.val === val)
                return true

            curr = curr.next
        }
        return false
    }

    insert(index, val) {
        if (index === 0) return this.unshift(val)
        if (index === this.length) return this.push(val)
        if (index < 0 || index > this.length) return undefined
        const newNode = new Node(val)
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }
    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()
        if (index < 0 || index > this.length) return undefined

        const before = this.get(index - 1)
        const temp = before.next

        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }
    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null
        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }
    // removeValue(val) {
    //     let temp = this.head
    //     while (temp.next) {
    //         if (temp.val === val) {
    //             temp.next = temp.next.next
    //         }
    //         return this
    //     }
    // }

    print() {
        if (!this.head) {
            console.log('list is empty');
        } else {
            let curr = this.head
            let list = ''
            while (curr) {
                list += `${curr.val}->`
                curr = curr.next
            }
            console.log(list);
        }
    }
}

const list = new singlyLinkedList(1)
list.push(1)
list.push(2)
list.push(3)
list.push(2)
list.push(4)
list.print()
// list.pop()
// list.pop()
// list.pop()
// list.pop()
// list.print()
list.unshift("hai")
list.print()
// list.shift()
// list.print()
// list.shift()
// list.print()
// list.shift()
// list.print()
// list.shift()
// list.print()
// list.shift()
// list.print()
// list.insert(1, 1)
// list.print()
// list.insert(1, 1)
// list.print()
// list.remove(2)
// list.print()
// list.reverse()
// list.print()
// list.removeValue(2)
// list.print()
// list.search(2)
// list.search(5)

