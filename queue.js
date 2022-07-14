"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        this._head = 0;
        this._tail = 0;
        this.storage = {};
    }
    Queue.prototype.enqueue = function (value) {
        var index = this._head++;
        this.storage[index] = value;
    };
    Object.defineProperty(Queue.prototype, "dequeue", {
        get: function () {
            var index = this._tail;
            var deletedValue = this.storage[index];
            if (this._tail >= 0) {
                delete this.storage[index];
                this._tail++;
                return deletedValue;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "size", {
        get: function () {
            return this._head - this._tail;
        },
        enumerable: false,
        configurable: true
    });
    return Queue;
}());
var queue = new Queue();
queue.enqueue('process has been started');
queue.enqueue('process in the middle');
queue.enqueue('process in the end');
console.log(queue);
queue.dequeue;
queue.dequeue;
console.log(queue);
console.log(queue.size);
//# sourceMappingURL=queue.js.map