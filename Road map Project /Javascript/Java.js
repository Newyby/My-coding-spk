/**

 const todolist = JSON.parse(localStorage.getItem('todolist')) || [];
  
  let currenttask = '';
const write =   document.querySelector('.input1')

  let searchText = '';
  const search =
    document.querySelector('.search-input');
  const ul = document.querySelector('ul');


  //const todolist = [];

  function rendertodolist(){
   const write = 
   document.querySelector('.input1');
   const write1 = write.value;
   
   
  if(write1 === ''){
  return  
  }
  
  if(currenttask === ''){
  
todolist.push({name: write1})
}else{
todolist[currenttask].name = write1;
currenttask = '';
}
//console.log(JSON.stringify(todolist))
saveToStorage();

renderHtml();


write.value = '';    
  }
  
 
  function renderHtml(){
    //console.log('render running')
    
    let html = '';
    
    todolist.forEach((item, index) => {
  if(item.name.toLowerCase().includes(searchText.toLowerCase())){
  html += `
  <li>${item.name}</li>
    <button onclick="deletebutton(${index})">Delete</button>
    <button onclick="
    editTask(${index})
    "class="js-edit">
    Edit</button>

`
   //console.log(JSON.stringify(item))
  }
    });
  document.querySelector('ul').innerHTML = html;

  }
  
 
  

  
  

  
  
  function deletebutton(index){
    todolist.splice(index, 1);
    renderHtml();
    saveToStorage();
  }
  

  function editTask(index){
  currenttask = index;
  const selecteditem = todolist[index];
  
  
write.value = selecteditem.name;
  
  if(write === ''){
    return 
  }
    selecteditem.name
  
  }
  
  function saveToStorage(){
  localStorage.setItem('todolist', JSON.stringify(todolist));
  }
  
  renderHtml();
  
  document.querySelector('.add-btn').addEventListener('click', () => {
  rendertodolist();
});
  
  

search.addEventListener('input',() => {
    searchText = search.value
    renderHtml();
    console.log(searchText)

  });
  
  
  **/
  
  
  
   
class TodoApp {
  
  constructor() {
    
    // STATE
    this.todolist =
      JSON.parse(localStorage.getItem('todolist')) || [];
    
    this.currenttask = null;
    
    this.searchText = '';
    
    // DOM ELEMENTS
    this.write =
      document.querySelector('.input1');
    
    this.search =
      document.querySelector('.search-input');
    
    this.ul =
      document.querySelector('ul');
    
    this.addButton =
      document.querySelector('.add-btn');
    
    // INITIAL RENDER
    this.renderHtml();
    
    // EVENTS
    this.addButton.addEventListener('click', () => {
      this.rendertodolist();
    });
    
    this.search.addEventListener('input', () => {
      
      this.searchText = this.search.value;
      
      this.renderHtml();
      
      console.log(this.searchText);
      
    });
    
    this.ul.addEventListener('click', (e) => {
      
      const index = e.target.dataset.index;
      
      if (
        e.target.classList.contains('js-delete')
      ) {
        
        this.deletebutton(index);
        
      }
      
      if (
        e.target.classList.contains('js-edit')
      ) {
        
        this.editTask(index);
        
      }
      
    });
    
  }
  
  // ADD / EDIT TASK
  rendertodolist() {
    
    const write1 =
      this.write.value.trim();
    
    if (!write1) {
      return;
    }
    
    if (this.currenttask === null) {
      
      this.todolist.push({
        name: write1
      });
      
    } else {
      
      this.todolist[this.currenttask].name =
        write1;
      
      this.currenttask = null;
      
    }
    
    this.saveToStorage();
    
    this.renderHtml();
    
    this.write.value = '';
    
  }
  
  // RENDER UI
  renderHtml() {
    
    let html = '';
    
    this.todolist.forEach((item, index) => {
      
      if (
        item.name.toLowerCase()
        .includes(this.searchText.toLowerCase())
      ) {
        
        html += `
          <li>
            ${item.name}

            <button
              class="js-delete"
              data-index="${index}">
              Delete
            </button>

            <button
              class="js-edit"
              data-index="${index}">
              Edit
            </button>
          </li>
        `;
      }
      
    });
    
    this.ul.innerHTML = html;
    
  }
  
  // DELETE TASK
  deletebutton(index) {
    
    this.todolist.splice(index, 1);
    
    this.renderHtml();
    
    this.saveToStorage();
    
  }
  
  // EDIT TASK
  editTask(index) {
    
    this.currenttask = index;
    
    const selecteditem =
      this.todolist[index];
    
    this.write.value =
      selecteditem.name;
    
  }
  
  // SAVE DATA
  saveToStorage() {
    
    localStorage.setItem(
      'todolist',
      JSON.stringify(this.todolist)
    );
    
  }
  
}

// CREATE APP
const app = new TodoApp();
   //app.rendertodolist()
   
   
   /** revised versions of procedural **/
   
   
   
   
   
   
   
   
   /**
   
    const todolist = JSON.parse(localStorage.getItem('todolist')) || [];
  
  let currenttask = null;
const write =   document.querySelector('.input1')

  let searchText = '';
  const search =
    document.querySelector('.search-input');
  const ul = document.querySelector('ul');


  //const todolist = [];

  function rendertodolist(){

   const write1 = write.value.trim()
   
   
  if(!write1){
  return  
  }
  
  if(currenttask === null){
  
todolist.push({name: write1})
}else{
todolist[currenttask].name = write1;
currenttask = null;
}
//console.log(JSON.stringify(todolist))
saveToStorage();

renderHtml();


write.value = '';    
  }
  

  
  function renderHtml() {
  let html = '';

todolist.forEach((item, index) => {
      
      if (
        item.name.toLowerCase()
        .includes(searchText.toLowerCase())
      ) {
    html += `
      <li>
        ${item.name}
        <button class="js-delete" data-index="${index}">Delete</button>
        <button class="js-edit" data-index="${index}">Edit</button>
      </li>
    `;
      }
  });

  ul.innerHTML = html;
}
  
  
  
  function deletebutton(index){
    todolist.splice(index, 1);
    renderHtml();
    saveToStorage();
  }
  

  function editTask(index){
  currenttask = index;
  const selecteditem = todolist[index];
  
  
write.value = selecteditem.name;
  
}
  
  function saveToStorage(){
  localStorage.setItem('todolist', JSON.stringify(todolist));
  }
  
  renderHtml();
  
  document.querySelector('.add-btn').addEventListener('click', () => {
  rendertodolist();
});
  
  

search.addEventListener('input',() => {
    searchText = search.value
    renderHtml();
    console.log(searchText)

  });
  
  ul.addEventListener('click', (e) => {
  const index = e.target.dataset.index;
  
  if (e.target.classList.contains('js-delete')) {
    deletebutton(index);
  }
  
  if (e.target.classList.contains('js-edit')) {
    editTask(index);
  }
});
  
  **/