function Foo() {}
let f1=new Foo()
console.log(f1.__proto__ === Foo.prototype)
console.log(Foo.prototype.constructor == Foo);
console.log(f1.constructor===Foo);
