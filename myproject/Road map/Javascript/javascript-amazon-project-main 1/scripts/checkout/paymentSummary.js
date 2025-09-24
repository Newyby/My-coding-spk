import {cart} from '../../data/cart.js';

import {getProduct} from '../../data/products.js';

import {getDeliveryOption} from '../../data/deliveryOptions.js';

import {formerCurrency} from '../utils/money.js';


export function renderPaymentSummary(){
 let productPriceCents = 0; 
 let shippingPriceCents = 0;

 
cart.forEach((cartItem) => {
const product = getProduct(cartItem.productId);
productPriceCents += product.priceCents * cartItem.quantity; 
 const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
 console.log('Cart item;', cartItem)
 console.log('Delivery option found:', deliveryOption)
 shippingPriceCents += deliveryOption.priceCents 
 
 
  
});

const totalBeforPriceCents = productPriceCents + shippingPriceCents;

const taxCents = totalBeforPriceCents * 0.1;

const totalCents = totalBeforPriceCents + taxCents;

const paymentSummaryHtml = `              <div class="payment-summary.         -title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formerCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">
            $${formerCurrency(shippingPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
            $${formerCurrency(totalBeforPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
            $${formerCurrency(taxCents)}
            </div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
            $${formerCurrency(totalCents)}
            </div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
          
          `
document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHtml;
}