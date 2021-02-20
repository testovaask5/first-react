class SuperClass {
    constructor(arg1, arg2, arg3) {
        this.arg1 = arg1
        this.arg2 = arg2
        this.arg3 = arg3
    }

    capitalize(...args) {
        console.log(args);
        return this.greatings().concat(args.join('')).toUpperCase()
    }
}

// Constructor
function SomeClass(arg1, arg2, arg3) {
    this.arg1 = arg1
    this.arg2 = arg2
    this.arg3 = arg3
}

SomeClass.prototype.greatings = function() {
    return `${this.arg1} ${this.arg2} ${this.arg3}`
}

console.log(SomeClass.prototype);

SomeClass.prototype.__proto__ = SuperClass.prototype

// const ClassInstance = new SomeClass('Hello', 'dear', 'John') 

// class SomeClass extends SuperClass {
//     constructor(...args) {
//         super(...args)
        
//         this.greatings2 = function () {
//             return `${this.arg1} ${this.arg2} ${this.arg3}`
//         }
//         // this.greatings2 = this.greatings2.bind(this)
//     }

//     greatings() {
//         return `${this.arg1} ${this.arg2} ${this.arg3}`
//     }    
// }

const ClassInstance = new SomeClass('Hello', 'dear', 'John') 
// this = {arg1, arg2, arg3, greatings2, __proto__: SomeClass.prototype}
const ClassInstance2 = new SomeClass('Hello', 'dear', 'Mary')
const ClassInstance3 = new SomeClass('Hello', 'dear', 'James')
console.log(ClassInstance.__proto__ === ClassInstance2.__proto__);
console.log(ClassInstance);
console.log(ClassInstance2.greatings());
// console.log(ClassInstance3.capitalize());

function reverse(callback = () => 'reverse', context, ...args) {   
    // callback.apply(context, [arg1, arg2]) == callback.bind(context)(arg1, arg2) 
    // context.callback = callback
    return callback(...args).split('').reverse().join('')
    // return callback.apply(context, args).split('').reverse().join('')
}

function bind(func, context) {
    return (...args) => {
        return func.apply(context, args)
    }
}

// console.log(reverse(ClassInstance.greatings2, ClassInstance2));
// console.log(reverse(ClassInstance.capitalize.bind(ClassInstance)));
console.log(reverse(bind(ClassInstance.capitalize, ClassInstance), '!', '!', '!', '?'));
// console.log(reverse(ClassInstance.capitalize, ClassInstance, '!', '!', '!', '?'));
