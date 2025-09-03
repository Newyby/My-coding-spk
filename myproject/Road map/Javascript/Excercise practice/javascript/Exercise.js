function toggled(selector){
  const buttonElement = document.querySelector(selector);
  
  if(!buttonElement.classList.contains('is-toggle')){
  buttonElement.classList.add('is-toggle')
  }else{
  buttonElement.classList.remove('is-toggle')
  }
  
}



/** for active buttin js**/



function toggled(selector) {
  // Remove 'is-toggle' from ALL buttons first
  const allButtons = document.querySelectorAll('.Game');
  allButtons.forEach(button => {
    button.classList.remove('is-toggle');
  });
  
  // Then add 'is-toggle' ONLY to the clicked button
  const buttonElement = document.querySelector(selector);
  buttonElement.classList.add('is-toggle');
}