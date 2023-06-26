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
    
}
let myQueue = new  Queue(4)

myQueue.display()