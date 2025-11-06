/**"use strict"

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
console.log(coll.keys())
for(let v of coll.keys()){
console.log( v)
}


**/

/**
const map = new Map()

map.set("a", [1])
map.set("b", 2)
map.set("c", 3)
//map.set("a", 15)

map.get("a").push(17, 18)
console.log(map.get("a"))

**/

//Data structure 
/**
class Node{
  constructor(val){
    this.val = val;
    this.right =  null;
    this.left = null;
  }
}

**/
/**
// one method of stack

const deptFirstValue = (root) => {
  //const stack = [root] for the //testing
  if(root === null) return []
  const stack = []

  while(stack.length > 0){
    const current = stack.pop()
    console.log(current.val)
    result.push(current.val)

if(current.right)stack.push(current.right)

if(current.left)stack.push(current.left)


  }
  return result
}
one method of stack
  * */
/** testing
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b ;
a.right = c;
b.left = d;
b.right = e;
c.left = f;


deptFirstValue(a);
**/

/**
const place = new Map()
place.set("cat", "meow")
place.set("dog", "bark")
place.set("Lion", "roar")


//console.log(place.get("cat"))
for(const [key, value] of place){
//console.log(`${key} can ${value}`);
}

const mySet = new Set()
mySet.add("1")
mySet.add("food")
mySet.add("Nice")
//mySet.get("okay")

console.log(mySet.has("1"))

for(const item of mySet.values()){
console.log( item)
}

**/
/**
// recursive stack
const deptFirstValue = (root) => {
    if (root === null) return []
 const leftValue = deptFirstValue(root.left);// b,d,e
  const rightValue = deptFirstValue(root.right); // c,f
  return [root.val, ...leftValue, ...rightValue]

}

const peeps = ['ola', 'kunle', 'yomi', 'lade'];
const newPeeps = ['alvin', ...peeps, 'brian'];
console.log(newPeeps);

**/


const breathFirstValue = (root) => {
    if (root === null) return []
    
    const value = []
    const que = []
    
    while(que.length > 0){
    const current = que.shift()
    value.push(current.val)
    
if(current.left !== null) que.push(current.left);
if(current.right !== null) que.push(current.right);

    }
    return value;
}

const treeIncudes = (root, target) => {
  const queue = [root];
  if(root === null) return false;
  while(queue.length > 0){
   const current = queue.shift()
   console.log(current.val)
if(current.val === true)return true;
if(current.left) queue.push(current.left);
if(current.right) queue.push(current.right);

  }
return false;
}

// recursive method
const treeIncudes = (root, target) => {
  if(root === null) return false;
if(root.val === target) return true
return treeIncudes(root.left,target) || treeIncudes(root.right,target)

}

//tree sum using numbers

const treeSum = (root, target) => {
  if (root === null) return 0;
  // 3 + 11 + 14
  return root.val + treeSum(root.left) + treeSum(root.right)
  
}

//breath method

const treeSum = (root) => {
  const queue = [root];
  if (root === null) return 0;
  let totalSum = 0;

  while (queue.length > 0) {
    const current = queue.shift()
    totalSum += current.val
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
    
  }
  return  totalSum ;
}


//bredth method
const treeMinVal = (root) => {
  let smallest = Infinity;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop()
  if(current.val < smallest) smallest = current.val
    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
    
  }
  return  smallest ;
}


//depth method
const treeMinVal = (root) => {
  let smallest = Infinity;
  const queue = [root];
  
  while (stack.length > 0) {
    const current = queue.shift()
    if (current.val < smallest) smallest = current.val
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
    
  }
  return smallest;
}

// recursive method 
const treeMinValue = (root) => {
  if (root === null) return Infinity;
const leftMin = treeMinValue(root.left);
const rightMin = treeMinValue(root.right);

  return Math.min(root.val, leftMin, rightMin)
  
}


const maxPathSum = (root) => {
  if(root === null) return -Infinity 
  if (root.left === null && root.right === null) return root.val;

const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right))
  
}



