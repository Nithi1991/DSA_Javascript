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

    insert(val) {
        const newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.val === temp.val) return undefined;
            if (newNode.val < temp.val) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    isBST() {
        return this.checkBST(this.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }

    checkBST(node, min, max) {
        if (node === null) return true;
        if (node.val <= min || node.val >= max) return false;
        return (
            this.checkBST(node.left, min, node.val) && this.checkBST(node.right, node.val, max)
        );
    }
}

// Test case 1: BST
let bstTree = new BST();
bstTree.insert(5);
bstTree.insert(3);
bstTree.insert(7);
bstTree.insert(2);
bstTree.insert(4);
bstTree.insert(6);
bstTree.insert(8);

console.log("Test case 1: Is it a BST?", bstTree.isBST()); // Output: true

// Test case 2: Non-BST
let nonBSTTree = new BST();
nonBSTTree.root = new Node(5);
nonBSTTree.root.left = new Node(7);
nonBSTTree.root.right = new Node(3);

console.log("Test case 2: Is it a BST?", nonBSTTree.isBST()); // Output: false
