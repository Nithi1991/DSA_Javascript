class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}
class Stack{
    constructor(val){
        const newNode = new Node(val)
        this.top = newNode
        this.length = 1
    }
}

let myStack = new Stack(11)