class Queue{
    _head: number;
    _tail: number;
    storage: object | any;

    constructor() {
        this._head = 0;
        this._tail = 0;
        this.storage = {};
    }

    enqueue(value: any) {
        let index: number = this._head++
        this.storage[index] = value;
    }

    get dequeue() {
        let index: number = this._tail;
        let deletedValue: any = this.storage[index];
        
        if(this._tail >= 0) {
            delete this.storage[index];
            this._tail++;
            return deletedValue;
        }
    }

    get size() {
        return this._head - this._tail;
    }
}

let queue = new Queue();

queue.enqueue('process has been started');
queue.enqueue('process in the middle');
queue.enqueue('process in the end');
console.log(queue);
queue.dequeue;
queue.dequeue;
console.log(queue)
console.log(queue.size)