/*You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the 
same value as these arguments.*/

function destroyer(arr) {
 	// create array from arguments
 	var newArray = Array.from(arguments);
 	// iterate through first array
 	for (var i = 0; i < newArray[0].length; i++){
 		//iterate through second array
 		for (var j = 1; j < newArray.length; j++){
 			// check if subarray contents match with host, if so then delete
 			if (newArray[0][i] === newArray[j]) {
 				delete newArray[0][i];
 			}
 		}
 	}
 	// return all non false characters of new array
  return newArray[0].filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

