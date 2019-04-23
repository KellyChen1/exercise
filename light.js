function light(t) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, t)
  })
}

function loop() {
  light(1000).then(() => {
    console.log("yellow");
    return light(1000)
  }).then(() => {
    console.log("green");
    return light(1000)
  }).then(() => {
    console.log("red");
    loop()
  })
}

loop()


