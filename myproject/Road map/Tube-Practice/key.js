"use strict"

let coll = new Map();
coll.set('key', 100);
coll.set(window, 200);
coll.set(5, 300);

console.log(coll.get(window));
console.log( coll.size)
//coll.delete(window)
console.log( coll.size)
//coll.clear()
console.log( coll.size)
console.log(coll.values())
console.log(coll.key())



