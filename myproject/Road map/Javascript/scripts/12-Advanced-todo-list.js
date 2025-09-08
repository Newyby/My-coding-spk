/**  const todolist = [];
  
  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    name = inputElement.value
   // console.log(name);
   todolist.push(name);
  // console.log(todolist);
  
  inputElement.value = ''; // to reset //value inside textbox
  }
  **/
  
  
    const todolist = [{
      name: 'make dinner',
      dueDate: '2022-12-22'
    },{
      name: 'wash dishes',
      dueDate: '2022-12-22'
      }];
     renderTodoHtml();
 
    function renderTodoHtml(){
    let todoIsHtml = '';
    
    todolist.forEach(function(todoObject, index){
    const { name, dueDate } = todoObject
    const html =
      `
    <div>${name}</div>
    <div>${dueDate}</div>
    
    
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    
    `
    todoIsHtml += html; 
      
    });
    
    
    
    document.querySelector('.js-todo-list').innerHTML = todoIsHtml
 //below for event.key   
 document.querySelectorAll('.js-delete-todo-button').forEach((deletebutton, index) => {
   
   deletebutton.addEventListener('click', () => {
    todolist.splice(index, 1)
    renderTodoHtml(); 
   })
 })
    }
    
    document.querySelector('.js-add-todo-button').addEventListener('click', () => {
      addTodo();
    })
  
  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value
    // console.log(name);
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate  = dateInputElement.value;
    todolist.push({
      //name: name,
      //dueDate: duedate. shortcut of //the two above below
      name,
      dueDate
    });
    // console.log(todolist);
    
    inputElement.value = ''; // to reset //value inside textbox
renderTodoHtml();

}


