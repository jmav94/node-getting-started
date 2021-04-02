/*
console.log('Testing npm to start the node server')
let a = 10;
b = a
console.log(b);
*/

const _ = require('loadsh')

// Usinf loads (external dependencies) methods

const results = _.join(['a','b','c','d'],'+')
console.log(results)

const users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred', 'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 10, 'active': true }
];

const results1 = _.find(users, function (o) { return o.age < 11; });
console.log(results1)