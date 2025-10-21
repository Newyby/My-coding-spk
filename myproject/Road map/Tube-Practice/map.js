


/**let a = 6
let b = '7'
//b = parseInt(b, 10)
b = Number(b, 10) 

//or let c = a + b

let c = a + b
console.log(c)
console.log(typeof String(6))


const user = ppdcqa

user.isAdmin = true;

console.log( user.name)
console.log(user)

//let key = prompt('what do you do', 'name')
//alert(user[key])




function makeOver(name, age){
return {
  //name: name,
  name,
  age: age
} 
}

let users = makeOver('john',  30)
//alert(users.name)


const fruit = {
  name: 'mango',
  price: 2
}

let basket = fruit
alert(basket.name);

for(let plate in basket)
alert ('name' in basket)





const user = {
  name: 'john',
  surname: 'smith'
}

user.name = 'peter'
//alert(user.name)
delete user.name
alert(user.name)


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyMenu(menu) {
  for(let key in menu){
  if (typeof menu[key] === 'number') {
  menu[key] *= 2;
  }
}

}

multiplyMenu(menu);
console.log(menu)



let users = {name: "Ola"}
let permission1 = {canEdit: true}
let permission2 = {canWrite: true}
Object.assign(users, permission1, permission2)
console.log( users.name)
console.log( users.canEdit)
console.log( users.canWrite)


let user = {
  // ...
};

// first, declare
function sayHi() {
  alert("Hello!");
}

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello



let ola = {}

function sayHe() {
  console.log ('hello')
}

ola.sayHe = sayHe
ola.sayHe();


let ope = {
name: 'lol'
}

ope.said = function yop() {
  console.log('oliwa')
  console.log( ope.name)

}
ope.said();



let calculator = {
a: 6,
b: 5,

sum(){
//return this.a + this.b
console.log(this.a + this.b)

},
mul(){
  return this.a * this.b
  


}
}

calculator.sum();
console.log(calculator.mul());



let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  }
};

//console.log(ladder.up().up().down().up().showStep());
ladder.up()
ladder.up()
ladder.showStep()



console.log( ladder)


let calculator = {
  sum() {
    return this.a + this.b;
  },
  
  mul() {
    return this.a * this.b;
  },
  
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
console.log(typeof calculator.a)
//alert(calculator.sum());
//alert(calculator.mul());


function  Calculator() {
  this.sum = function () {
    return this.a + this.b;
}
this.mul = function () {
  return this.a * this.b;

}
  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
}

let calculator = new Calculator()
calculator.read();
console.log(typeof calculator.a)



function Ladder() {
this.step = 0,
  this.up = function(){
    this.step++;
    return this;
  },
  this.down = function() {
    this.step--;
    return this;
  },
  this.showStep = function() {
    alert(this.step);
    return this;
  }
};

let ladder = new Ladder()
//console.log(ladder.up().up().down().up().showStep());
ladder.up()
ladder.up()
ladder.showStep()

let clone = Object.assign({}, ladder)

console.log(clone)

console.log( ladder)



let users = {
name: 'kayode',
value: 2000,

toString(){
  return this.name;
},

valueOf(){
  return this.value;
}
}

console.log( users.name)
console.log( `olaide: ${+users}`)

**/