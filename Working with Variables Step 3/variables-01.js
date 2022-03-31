/*Instructions
 - Greet your friend by printing a message to the console.
*/
//your code here
var name= "Fernanda"
///////////////
function greetings() {
  //also your code here
  ///////////////
  return greetings + name;
console.log('How are you doing,'+ name +'?');
}

//leave this line unchanged to console log the results
console.log('results: ', greetings());

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = greetings;
}
