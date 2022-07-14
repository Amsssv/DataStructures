type Payload = unknown;

class LinkedListNode {
    _data: Payload;
    _next: LinkedListNode | null;

    constructor(data: Payload) {
        this._data = data;
        this._next = null;
    }

    set next(node) {
        this._next = node;
    }

    get next() {
        return this._next;
    }

    get data() {
        return this._data;
    }
}

class LinkedList {
    _start: LinkedListNode | null;

    constructor() {
        this._start = null;
    }

    get isEmpty() {
        return this._start === null;
    }

    get(index: number) {
        if (this.isEmpty) {
            return;
        }

        let currentIndex = 0;

        let currentNode = this._start;
        while (currentNode !== null) {
            if (index === currentIndex) {
                return true;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }

        return;
    }
    contains(data: Payload) {
        if (this.isEmpty) {
            return;
        }

        let currentNode = this._start;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }

    push(value: any) {

        let newNode = new LinkedListNode(value)

        if (this.isEmpty) {
            this._start = newNode;
            return;
        }

        let currentNode = this._start;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    pop() {
        if (this.isEmpty) {
            return;
        }

        let currentNode = this._start;
        let parentNode = null;

        while (currentNode.next !== null) {
            parentNode = currentNode;
            currentNode = currentNode.next;
        }

        parentNode.next = null;
    }

    unshift() {
        if (this.isEmpty) {
            return;
        }

        this._start = this._start.next;
    }

    log() {
        if (this._start === null) {
            return;
        }

        let currentNode = this._start;
        while (currentNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

const list = new LinkedList();
list.push("Василий");
list.push("Шурик");
list.push("Андруфа");
console.log(list.contains("asdas"));
list.log();
// console.log("_____________________________");
// list.pop();
// list.log();
// console.log("_____________________________");
// list.unshift();