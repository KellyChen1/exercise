

/**
|--------------------------------------------------
| 实现一
|--------------------------------------------------
*/
// var salesOffices = {}
// salesOffices.clientList = []  //订阅的回调函数
// salesOffices.listen = function (key, fn) {
//   if (!this.clientList[key]) {
//     this.clientList[key] = []
//   }
//   this.clientList[key].push(fn)  //添加订阅
// }
// salesOffices.trigger = function () {
//   var key = Array.prototype.shift.call(arguments)
//   var fns = this.clientList[key];
//   if (!fns || fns.length === 0) {
//     return false;
//   }
//   for (let i = 0; i < fns.length; i++) {
//     fn = fns[i]
//     fn.apply(this, arguments)
//   }
// }
/**
|--------------------------------------------------
| 触发一
|--------------------------------------------------
*/
// salesOffices.listen( 'squareMeter88', function( price ){ // 小明订阅88 平方米房子的消息
//   console.log( '价格= ' + price ); // 输出： 2000000
// });

// salesOffices.listen( 'squareMeter110', function( price ){ // 小红订阅110 平方米房子的消息
//   console.log( '价格= ' + price ); // 输出： 3000000
// });

// salesOffices.trigger( 'squareMeter88', 2000000 ); // 发布88 平方米房子的价格
// salesOffices.trigger( 'squareMeter110', 3000000 ); // 发布110 平方米房子的价格

/**
|--------------------------------------------------
| 实现二: 放在一个单独对象里
|--------------------------------------------------
*/
// var event = {
//   clientList: [],
//   listen: function (key, fn) {
//     if (!this.clientList[key]) {
//       this.clientList[key] = []
//     }
//     this.clientList[key].push(fn)  //添加订阅
//   },
//   trigger: function () {
//     var key = Array.prototype.shift.call(arguments)
//     var fns = this.clientList[key];
//     if (!fns || fns.length === 0) {
//       return false;
//     }
//     for (let i = 0; i < fns.length; i++) {
//       fn = fns[i]
//       fn.apply(this, arguments)
//     }
//   },
//   remove: function (key, fn) {
//     var fns = this.clientList[key]
//     if (!fns) {
//       return false
//     }
//     if (!fn) {
//       fns && (fns.length = 0)
//     } else {
//       for (var i = fns.length - 1; i >= 0; i--) {//遍历,删除订阅者的回调函数
//         var _fn = fns[i]
//         if (_fn === fn) {
//           fns.splice(i, 1)
//         }
//       }
//     }
//   }
// }
// //动态安装发布-订阅功能
// var installEvent = function (obj) {
//   for (var i in event) {
//     obj[i] = event[i]
//   }
// }

/**
|--------------------------------------------------
| 触发二
|--------------------------------------------------
*/
// var salesOffices = {}
// installEvent(salesOffices)
// salesOffices.listen('squareMeter88', fn1=function (price) { // 小明订阅88 平方米房子的消息
//   console.log('价格= ' + price); // 输出： 2000000
// });

// salesOffices.listen('squareMeter110', fn2=function (price) { // 小红订阅110 平方米房子的消息
//   console.log('价格= ' + price); // 输出： 3000000
// });
// salesOffices.remove( 'squareMeter88', fn1 ); // 删除小明的订阅
// salesOffices.trigger('squareMeter88', 2000000); // 发布88 平方米房子的价格
// salesOffices.trigger('squareMeter110', 3000000); // 发布110 平方米房子的价格

/**
|--------------------------------------------------
| 实现三
|--------------------------------------------------
*/
var Event = (function () {
  var clientList = {}, listen, trigger, remove;
  listen = function (key, fn) {
    if (!clientList[key]) {
      clientList[key] = []
    }
    clientList[key].push(fn)  //添加订阅
  };
  trigger = function () {
    var key = Array.prototype.shift.call(arguments)
    var fns = clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    for (let i = 0; i < fns.length; i++) {
      fn = fns[i]
      fn.apply(this, arguments)
    }
  };
  remove = function (key, fn) {
    var fns = clientList[key]
    if (!fns) {
      return false
    }
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (var i = fns.length - 1; i >= 0; i--) {//遍历,删除订阅者的回调函数
        var _fn = fns[i]
        if (_fn === fn) {
          fns.splice(i, 1)
        }
      }
    }
  }

  return {
    listen: listen,
    trigger: trigger,
    remove: remove
  }
})()

/**
|--------------------------------------------------
| 触发三
|--------------------------------------------------
*/
Event.listen( 'squareMeter88', function( price ){ // 小红订阅消息
  console.log( '价格= ' + price ); // 输出：'价格=2000000'
});

Event.trigger( 'squareMeter88', 2000000 ); // 售楼处发布消息