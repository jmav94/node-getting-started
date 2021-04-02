const hw = require ('./hello-world')
const ho = require ('./hello-object')

hw('I am learning node')

console.log(ho.count)
ho.hello('Juan')
ho.bye()
console.log(ho.person)
