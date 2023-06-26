class Node{
    constructor(val){
        this.val = val 
        this.next =null
    }
}
class Queue{
    constructor(val) {
        const newNode = new Node(val)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }
    display(){
        let temp =this.first
        while(temp){
            console.log(temp.val)
            temp =temp.next
        }
    }
    enqueue(val){
        const newNode = new Node(val)
        if(this.length === 0){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
}
let myQueue = new  Queue(4)
myQueue.enqueue(5)
myQueue.enqueue(6)
myQueue.enqueue(7)
myQueue.display()