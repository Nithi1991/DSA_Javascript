class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let temp = this.root
        while (true) {
            if (newNode.val === temp) return undefined
            if (newNode.val < temp.val) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }
    BFS() {
        let currentNode = this.root
        let queue = []
        let results = []
        queue.push(currentNode)
        while (queue.length) {
            currentNode = queue.shift()
            results.push(currentNode.val)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        return results
    }
    DFSPreOder(){
        let results = []
        function traverse(currentNode){
            results.push(currentNode.val)
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return results
    }
    DFSPostOrder(){
        let results=[]
        function traverse(currentNode){
            if(currentNode.left)traverse(currentNode.left)
            if(currentNode.right)traverse(currentNode.right)
            results.push(currentNode.val)
        }
        traverse(this.root)
        return results
    }
    DFSInOrder(){
        let results=[]
        function traverse(currentNode){
            if(currentNode.left)traverse(currentNode.left)
            results.push(currentNode.val)
            if(currentNode.right)traverse(currentNode.right)
        }
        traverse(this.root)
        return results
    }

 
}
let mytree = new BST()
mytree.insert(52)
mytree.insert(25)
mytree.insert(66)
mytree.insert(19)
mytree.insert(27)
mytree.insert(60)
mytree.insert(69)


