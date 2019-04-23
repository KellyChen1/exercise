// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// function Student(name, age, grade) {
//   Person.apply(this, arguments);
//   this.grade = grade
// }

// let student = new Student("kelly", 21, "一年级")

var MyModule = (function Manager() {
  var modules = {}
  function define(name, deps, impl) {
    for (let i = 0; i < deps.length; i++) {
      deps[i]=modules[deps[i]]
    }
    modules[name] = impl.apply(impl, deps)
  }

  function get(name) {
    return modules[name]
  }

  return {
    define,
    get
  }
})()

MyModule.define("bar",[],function() {
  function hello(who) {
    return "let me introduct" + who
  }
  return {hello}
})

MyModule.define("foo", ["bar"], function(bar) {
  
})