interface BinaryTree {
    _root: BinaryTreeNode | null
}

class BinaryTreeNode {
    _data: number;
    _left: BinaryTreeNode | null;
    _right: BinaryTreeNode | null;

    constructor(data: number) {
        this._data = data;
        this._left = null;
        this._right = null;
    }

    set left(node) {
        this._left = node;
    }

    get left() {
        return this._left;
    }

    set right(node) {
        this._right = node;
    }

    get right() {
        return this._right;
    }

    set data(value) {
        this._data = value;
    }

    get data() {
        return this._data;
    }
}


class BinaryTree {
    root: BinaryTreeNode | null

    constructor() {
        this.root = null;
    }

    add(value: number) {
        let newNode = new BinaryTreeNode(value);

        if (this.root === null) {
            return this.root = newNode;
        } else {
            insertNode(this.root, newNode);
        }

        function insertNode(node, newNode) {
            if (node.data > newNode.data) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }
    }

    remove(value: number) {
        this.root = removeValue(this.root, value);

        function findMinNode(node: BinaryTreeNode) {
            return node.left === null? node : findMinNode(node.left)
        }

        function removeValue(node, value): BinaryTreeNode {
            if (node === null) {
                return null
            } else if (value < node.data) {
                node.left = removeValue(node.left, value);
                return node
            } else if (value > node.data) {
                node.right = removeValue(node.right, value);
                return node
            } else {
                if (node.right === null && node.left === null) {
                    node = null;
                    return node;
                }
                if (node.left === null) {
                    node = node.right;
                    return node;
                } else if (node.right === null) {
                    node = node.left;
                    return node;
                }

                let minNode = findMinNode(node.right);
                node.data = minNode.data;

                node.right = removeValue(node.right, minNode.data);
                return node;
            }
        }
    }
}


const tree: BinaryTree = new BinaryTree();
tree.add(55);
tree.add(50);
tree.add(60);
tree.add(52);
tree.add(58);
tree.add(48);
tree.add(62);
tree.remove(60);
console.log(tree);
