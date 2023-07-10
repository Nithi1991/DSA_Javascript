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
    BFS(){
        let currentNode = this.root
        let queue =[]
        let results = []
        queue.push(currentNode)
        while(queue.length){
            currentNode=queue.shift()
            results.push(currentNode.val)
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
        return results
    }

    display() {
        this.inOrderTraversal(this.root);
    }

    inOrderTraversal(node) {
        if (node === null) return;
        this.inOrderTraversal(node.left);
        console.log(node.val);
        this.inOrderTraversal(node.right);
    }
}
let mytree = new BST()
mytree.insert(2)
mytree.insert(5)
mytree.insert(6)
mytree.insert(19)
mytree.insert(20)
mytree.insert(12)
mytree.display()

