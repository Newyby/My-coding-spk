/*const items = document.querySelectorAll('.item');
items.forEach((item) => 
  console.log(item))
  **/
  
const ul = document.querySelector('.items');

//ul.remove()
//ul.lastElementChild.remove();
/*ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText = 'Brad'
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'


const btn = document.querySelector('.btn');

btn.style.background = 'red'

**/

/**const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
 //console.log(e.target.className)
 document.querySelector('#my-form').style.background = '#ccc'
 document.querySelector('body').classList.add('bg-dark');
  
})

**/


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector ('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector ('#users')

myForm.addEventListener('submit',  onSubmit)

function onSubmit(e) {
e.preventDefault();

//console.log(nameInput.value);

if (nameInput.value === '' || emailInput.value === '') {
  msg.classList.add('error')
  msg.innerHTML = 'Please enter all fields'
//alert('enter field')

setTimeout(() => msg.remove(), 3000)
} else {
  //alert('success')
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
  
  userList.appendChild(li)
  
  //clear  field
  
  nameInput.value = '';
  emailInput.value = '';
}

}
