var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data) {
        this._data = data;
        this._next = null;
    }
    Object.defineProperty(LinkedListNode.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (node) {
            this._next = node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedListNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this._start = null;
    }
    Object.defineProperty(LinkedList.prototype, "isEmpty", {
        get: function () {
            return this._start === null;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.get = function (index) {
        if (this.isEmpty) {
            return;
        }
        var currentIndex = 0;
        var currentNode = this._start;
        while (currentNode !== null) {
            if (index === currentIndex) {
                return true;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        return;
    };
    LinkedList.prototype.contains = function (data) {
        if (this.isEmpty) {
            return;
        }
        var currentNode = this._start;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    };
    LinkedList.prototype.push = function (node) {
        if (this.isEmpty) {
            this._start = node;
            return;
        }
        var currentNode = this._start;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    };
    LinkedList.prototype.pop = function () {
        if (this.isEmpty) {
            return;
        }
        var currentNode = this._start;
        var parentNode = null;
        while (currentNode.next !== null) {
            parentNode = currentNode;
            currentNode = currentNode.next;
        }
        parentNode.next = null;
    };
    LinkedList.prototype.unshift = function () {
        if (this.isEmpty) {
            return;
        }
        this._start = this._start.next;
    };
    LinkedList.prototype.log = function () {
        if (this._start === null) {
            return;
        }
        var currentNode = this._start;
        while (currentNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    };
    return LinkedList;
}());
var list = new LinkedList();
list.push(new LinkedListNode("Василий"));
list.push(new LinkedListNode("Шурик"));
list.push(new LinkedListNode("Андруфа"));
console.log(list.contains("asdas"));
// list.log();
// console.log("_____________________________");
// list.pop();
// list.log();
// console.log("_____________________________");
// list.unshift();
//# sourceMappingURL=linkedList.js.map