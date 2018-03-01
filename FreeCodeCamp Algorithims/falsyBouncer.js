/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()
*/

//function removeFalsy()

//function bouncer(arr) {
  
  //return arr;
//}

//bouncer([7, "ate", "", false, 9]);

function sum() {
	var val = 0;
	for (i = 0; i < arguments.length; i++) {
		val += arguments[i];
 	}
    return val;
 }

console.log(sum(1,2,3,4,5,6));

function product() {
	var newVal = 0;
	for (i = 0; i < arguments.length; i++) {
		newVal *= arguments[i];
	}
	return newVal
}

console.log(product(2,2,2));


