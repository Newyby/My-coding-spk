const todo = [{
 id: 1,
 text: 'Lord is good',
 isCompleted: true
  
},
  {
   id: 2,
 text: 'Amen is good',
 isCompleted: true
  
  },
  
  {
    id: 3,
 text: 'what is your name',
 isCompleted: false
   
    
  }
]


todo.forEach(function(todos) {
  //return todo.text;
  console.log(todos.text)
})


const todoText = todo.map(function(todos) {
      return todos.text;
})


console.log(todoText);


const todoisCompleted = todo.filter(function(todos) {
      return todos.isCompleted === true;

}).map(function (todos) {
  return todos.text;
})

console.log( todoisCompleted);


const x = 9;

const colour = x > 10 ? 'red' : 'blue';


switch (colour) {
  case 'red':
  console.log('colour is red')
    break;
    
      case 'blue':
  console.log('colour is blue')
  break;
  
  default:
  console.log('colour is not red or blue')
  break;
    // Tab to edit
}

const addNum = (num1 = 1, num2 = 2) => num1 + num2;

console.log (addNum(5,2));

function person(firstName, lastName, dob){
  this.firstName = firstName 
  this.lastName = lastName
  this.dob = new Date(dob)
  //this.getBirthYear = function(){
  //return this.dob.getFullYear();
  //}
}

  person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
  }
  
  
  //class
  
  class Person {
    constructor(firstName, lastName, dob) {
 this.firstName = firstName
  this.lastName = lastName
  this.dob = new Date(dob)
    }
  getBirthYear(){
  return this.dob.getFullYear();
  }  
    
  }

//instantiate object
const personal = new person('Gbenga', 'Adewole', '07/17/1990')

console.log( personal.dob)

console.log(personal.getBirthYear());

console.log( window)

