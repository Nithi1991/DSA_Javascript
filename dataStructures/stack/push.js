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
    push(val){
        const newNode = new Node(val)
        if(this.length===0){
            this.top= newNode
        }else{
            newNode.next=this.top
            this.top = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(this.length===0) return undefined
        let temp = this.top
        this.top = this.top.next
        temp.next = null

        this.length--
        return temp

    }
    display() {
        let current = this.top;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

let myStack = new Stack(11)
myStack.push(3)
myStack.push(13)
myStack.display() 
console.log('next stack');
myStack.pop()
myStack.pop()
myStack.display() 