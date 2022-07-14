"use strict";
var Stack = /** @class */ (function () {
    function Stack() {
        this._size = 0;
        this._storage = {};
    }
    Stack.prototype.push = function (value) {
        var size = this._size++;
        this._storage[size] = value;
    };
    Object.defineProperty(Stack.prototype, "pop", {
        get: function () {
            var size = this._size - 1;
            var deletedValue = this._storage[size];
            if (size >= 0) {
                delete this._storage[size];
                this._size--;
                return deletedValue;
            }
            else {
                console.log('Stack is empty');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Stack;
}());
var stack = new Stack();
stack.push('process has been started');
stack.push('process in the middle');
stack.push('process in the end');
console.log(stack);
stack.pop;
stack.pop;
stack.pop;
stack.pop;
console.log(stack);
//# sourceMappingURL=Stack.js.map