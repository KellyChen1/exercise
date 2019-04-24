/**
|--------------------------------------------------
| example 1
|--------------------------------------------------
*/
// var obj = {}, value = null;

// Object.defineProperty(obj, "num", {
//   get: function () {
//     console.log("get opt")
//     return value
//   },
//   set: function (newValue) {
//     console.log("set opt");
//     value = newValue+1
//   }
// })

// obj.num=1
// console.log(obj.num)

/**
|--------------------------------------------------
| example 2
|--------------------------------------------------
*/
// function Archiver() {
//   var value = null, archive = [];

//   Object.defineProperty(this, "num", {
//     get: function () {
//       console.log("get opt");
//       return value
//     },
//     set: function (value) {
//       console.log("set opt");
//       // value = value
//       archive.push({ val: value })
//     }
//   })

//   this.getArchive =function () {
//     return archive
//   }
// }

// var arc= new Archiver()
// arc.num;
// arc.num=11
// arc.num=15
// console.log(arc.getArchive());
