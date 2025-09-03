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
    
    for(let i = 0; i < todolist.length; i++){
    //const todo = todolist[i];

    const todoObject = todolist[i];
    //const name = todoObject.name
    //const duedate = todoObject//.duedate.... shortcut of //above
    const {name, dueDate} = todoObject
    const html = 
    `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todolist.splice(${i}, 1)
    renderTodoHtml();
    " class="delete-todo-button">Delete</button>
    
    `
    todoIsHtml += html
    }
    
    
    document.querySelector('.js-todo-list').innerHTML = todoIsHtml
  
    }
  
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


