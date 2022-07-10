var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode(data) {
        this._data = data;
        this._left = null;
        this._right = null;
    }
    Object.defineProperty(BinaryTreeNode.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (node) {
            this._left = node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinaryTreeNode.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (node) {
            this._right = node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinaryTreeNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    return BinaryTreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.add = function (value) {
        var newNode = new BinaryTreeNode(value);
        if (this.root === null) {
            return this.root = newNode;
        }
        else {
            insertNode(this.root, newNode);
        }
        function insertNode(node, newNode) {
            if (node.data > newNode.data) {
                if (node.left === null) {
                    node.left = newNode;
                }
                else {
                    insertNode(node.left, newNode);
                }
            }
            else {
                if (node.right === null) {
                    node.right = newNode;
                }
                else {
                    insertNode(node.right, newNode);
                }
            }
        }
    };
    BinaryTree.prototype.remove = function (value) {
        this.root = removeValue(this.root, value);
        function findMinNode(node) {
            return node.left === null ? node : findMinNode(node.left);
        }
        function removeValue(node, value) {
            if (node === null) {
                return null;
            }
            else if (value < node.data) {
                node.left = removeValue(node.left, value);
                return node;
            }
            else if (value > node.data) {
                node.right = removeValue(node.right, value);
                return node;
            }
            else {
                if (node.right === null && node.left === null) {
                    node = null;
                    return node;
                }
                if (node.left === null) {
                    node = node.right;
                    return node;
                }
                else if (node.right === null) {
                    node = node.left;
                    return node;
                }
                var minNode = findMinNode(node.right);
                node.data = minNode.data;
                node.right = removeValue(node.right, minNode.data);
                return node;
            }
        }
    };
    return BinaryTree;
}());
var tree = new BinaryTree();
tree.add(55);
tree.add(50);
tree.add(60);
tree.add(52);
tree.add(58);
tree.add(48);
tree.add(62);
tree.remove(60);
console.log(tree);
//# sourceMappingURL=binaryTree.js.map