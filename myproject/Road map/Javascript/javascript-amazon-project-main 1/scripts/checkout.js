import {renderOrderSummary} from './checkout/orderSummary.js';

import {renderPaymentSummary} from './checkout/paymentSummary.js';

import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';


//import '../data/backend-practice//.js';

//import '../data/cart-oop.js';

//import '../data/cart-class.js';

async function loadPage() {
//console.log('load page')
try {
//throw 'error1';
await loadProductsFetch();
const value = await new Promise((resolve, reject) => {
  //throw 'error2'
  loadCart(() => {
    //reject('error3');
    resolve();
  });
})





  // Tab to edit
} catch (error) {
  console.log('unexpected error. Please try again later')  

}


renderOrderSummary();
renderPaymentSummary();

//await is the shortcut of .then
//return 'value2' ;
}


loadPage();



/*.then((value) => {
  
console.log('next step');  
console.log(value);
});







/**1

Promise.all([
  
  loadProductsFetch(),
  **1/
/** this code below uses callback new Promise((resolve) => {
  
  loadProducts(() => {
    resolve('value1');
  });
  
}),  

**/
/**1
 new Promise((resolve) => {
  loadCart(() => {
    resolve();
  });
})
]).then((values) =>{
  console.log(values);

  
  
});
**1/

/**
new Promise((resolve) => {
  
  loadProducts(() => {
  resolve('value1');
});

}).then((value) => {
  
  console.log(value);
return new Promise((resolve) => {
loadCart(() => {
resolve();  
});
});

}).then(() => {
renderOrderSummary();
renderPaymentSummary();
})

**/
/**
loadProducts(() => {
loadCart(() => {
renderOrderSummary();
renderPaymentSummary();  
});
  
});

**/
