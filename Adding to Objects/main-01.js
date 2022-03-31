/*
Instructions
Given the function getProduct, 
- Return an object with the following {key: value} properties
- id:productId
- serialNumber: 'WD579000'
- manufacturer: 'Apple'
- price: 1500
*/


function getProduct(productId) 
//write your code here
{
  let prod = 
  {
    id: productId,
    serialNumber: "WD579000",
    manufacturer: "Apple",
    price: 1500
  };  
    return prod;
}
//open your browser console to check the results
console.log('getProduct result: ' + JSON.stringify(getProduct(1)));

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = getProduct;
}
