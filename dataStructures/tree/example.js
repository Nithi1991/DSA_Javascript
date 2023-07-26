class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Insert and other methods are the same as provided earlier
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
    DFSPreOrder() {
        let results = []
        function traverse(currentNode) {
            results.push(currentNode.val)
            if (currentNode.left) traverse(currentNode.left)
            if (currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return results
    }
    DFSPostOrder() {
        let results = []
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left)
            if (currentNode.right) traverse(currentNode.right)
            results.push(currentNode.val)
        }
        traverse(this.root)
        return results
    }
    DFSInOrder() {
        let results = []
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left)
            results.push(currentNode.val)
            if (currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return results
    }
    mirror() {
        this.root = this.mirrorTree(this.root);
    }

    mirrorTree(node) {
        if (node === null) return null;

        // Swap the left and right subtrees recursively
        const temp = node.left;
        node.left = this.mirrorTree(node.right);
        node.right = this.mirrorTree(temp);

        return node;
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

let myTree = new BST();
myTree.insert(8);
myTree.insert(3);
myTree.insert(10);
myTree.insert(1);
myTree.insert(6);
myTree.insert(14);
myTree.insert(4);
myTree.insert(7);
myTree.insert(13);

console.log("Original Tree:");
myTree.display();

myTree.mirror();

console.log("Mirrored Tree:");
myTree.display();
