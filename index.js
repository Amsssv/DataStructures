class List {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    addItem(value) {
        if (this.next !== null) {
            let next = this.next;
            next.addItem(value);
        } else {
            this.next = new List(value);
        }
        this.count++
    }

    count = 1

    // get count() {
    //     let i = 1;
    //     countDepth(this.next)
    //     function countDepth(arg) {
    //         if (arg !== null) {
    //             i++;
    //             countDepth(arg.next)
    //         }
    //     }
    //     return i;
    // }

    remove(value) {
        if (this.value !== value) {
            this.next.remove(value);
            if (this.remove === true) {
                console.log("true")
            }
        } else {
            return true
        }

        this.count--;
    }
}

let a = new List('blablabla');

a.addItem(5);
a.addItem(['banana', 'cucumber']);
a.addItem('Hello world')

a.remove(['banana', 'cucumber'])

console.log(a);