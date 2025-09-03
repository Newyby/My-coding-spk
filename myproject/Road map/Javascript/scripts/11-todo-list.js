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
  
  
    const todolist = ['make dinner', 'wash dishes'];
     renderTodoHtml();
 
    function renderTodoHtml(){
    let todoIsHtml = '';
    
    for(let i = 0; i < todolist.length; i++){
    const todo = todolist[i];
    const html = `<p>${todo} <button>Delete</button></p>`
    todoIsHtml += html
    }
    
    console.log(todoIsHtml);
    document.querySelector('.js-todo-list').innerHTML = todoIsHtml
  
    }
  
  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    name = inputElement.value
    // console.log(name);
    todolist.push(name);
    // console.log(todolist);
    
    inputElement.value = ''; // to reset //value inside textbox
renderTodoHtml();

}
  
  