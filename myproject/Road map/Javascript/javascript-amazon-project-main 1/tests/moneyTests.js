import {formerCurrency} from '../scripts/utils/money.js';

console.log('TextSuite: formerCurrency');





console.log('Convert cents to dollars');
if(formerCurrency(2095) === '20.95'){
  console.log('passed')
}else{
console.log('failed')
};
console.log('work with zero');


if (formerCurrency(0) === '0.00') {
  console.log('passed')
} else {
  console.log('failed')
};


console.log('round up to nearest zero');

if (formerCurrency(2000.5) === '20.01') {
  console.log('passed')
} else {
  console.log('failed')
};



if (formerCurrency(2000.4) === '20.00') {
  console.log('passed')
} else {
  console.log('failed')
};