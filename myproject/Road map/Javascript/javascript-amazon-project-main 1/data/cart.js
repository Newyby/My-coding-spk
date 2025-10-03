export let cart;

loadFromStorage();
export function loadFromStorage() {
cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
 cart = [{ 
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
  deliveryOptionId: '1'
}, {
  
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1,
  deliveryOptionId: '2'
}];
}

}


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
  //convert cart to string
}
export function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }
  saveToStorage();
//console.log('Cart after adding:', //cart); 
}




export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((cartItem) => {
      if(cartItem.productId != productId){
  newCart.push(cartItem);
  }
    
  });
cart = newCart
saveToStorage();
}




export function calculateCartQuantity() {
   let cartQuantity = 0;
   cart.forEach((cartItem) => {
     cartQuantity += cartItem.quantity;
   });
return cartQuantity;

  
}



export function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  
  return cartQuantity;
  
}
 
export function updateDeliveryOption(productId, deliveryOptionId) {
     let matchingItem;
  cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
        });
        matchingItem.deliveryOptionId = deliveryOptionId;
        saveToStorage();
 }
 
 
 export let products = [];
export function loadCart(fun){
const xhr =  new XMLHttpRequest();
xhr.addEventListener('load', () => {
  
  console.log(xhr.response)
/**
 we dont need the code below again since we are proceeding to backend 
 products =JSON.parse(xhr.response).map(
(productDetails)  => {
  if(productDetails.type === 'clothing'){
  return new Clothing (productDetails);
  }
  return new Product(productDetails)
}
);
**/
//console.log('load Products');

fun();
});
xhr.open('GET', 'http://supersimplebackend.dev/cart')
xhr.send();
}


