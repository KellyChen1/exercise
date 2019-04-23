const s1 = Symbol()
const s2 = Symbol("foo")

/* 不在意属性名时，要求唯一值，则可以用symbol */
console.log(Symbol() === Symbol());   //false