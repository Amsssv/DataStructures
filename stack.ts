interface IStack {
    _size: number;
    _storage: any;
    push: void | any;
    pop: any;
}

class Stack {
    _size: number;
    _storage: any;

    constructor() {
        this._size = 0;
        this._storage = {}
    }

    push(value: any) {
        let size: number = this._size++;
        this._storage[size] = value;
    }

    get pop() {
        let size: number = this._size - 1;
        let deletedValue: object | any = this._storage[size];

        if(size >= 0) {
            delete this._storage[size];
            this._size--;
            return deletedValue;
        } else {
            console.log('Stack is empty')
        }
    }
}

let stack: IStack = new Stack();

stack.push('process has been started');
stack.push('process in the middle');
stack.push('process in the end');
console.log(stack);
stack.pop;
stack.pop;
stack.pop;
stack.pop;
console.log(stack)
