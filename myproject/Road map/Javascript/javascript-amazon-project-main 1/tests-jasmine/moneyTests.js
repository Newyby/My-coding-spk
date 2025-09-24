import {formerCurrency} from '../scripts/utils/money.js';


describe('Textsuite: formatCurrency', () => {
  it('convert cent to dollars', () => {
    expect(formerCurrency(2095)).toEqual('20.95');
  });
  
  it('work with 0', () => {
    
    expect(formerCurrency(0)).toEqual('0.00');
  });
  
    it('round up to the nearest cent', () => {
    
    expect(formerCurrency(2000.5)).toEqual('20.01');
  });
  
});